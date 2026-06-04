import { NextRequest, NextResponse } from "next/server";
import { getAdminStatus } from "@/lib/auth";
import { getDynamicPages, saveDynamicPages, pageKeyFromSlug, type DynamicPage } from "@/lib/dynamicPages";
import { savePageLayout } from "@/lib/pageLayout";
import { randomUUID } from "crypto";

export async function GET() {
  const pages = await getDynamicPages();
  return NextResponse.json(pages);
}

export async function POST(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, slug, addedToNav, navParent } = await req.json();

  const page: DynamicPage = {
    id: randomUUID(),
    title,
    slug,
    addedToNav: !!addedToNav,
    navParent: navParent || null,
    createdAt: Date.now(),
  };

  const pages = await getDynamicPages();
  pages.push(page);
  await saveDynamicPages(pages);

  const pageKey = pageKeyFromSlug(slug);
  await savePageLayout(pageKey, {
    sections: [{ id: `${pageKey}:text-block:1`, type: "text-block" }],
  });

  return NextResponse.json({ ok: true, page });
}

export async function DELETE(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await req.json();
  const pages = await getDynamicPages();
  await saveDynamicPages(pages.filter((p) => p.slug !== slug));
  return NextResponse.json({ ok: true });
}
