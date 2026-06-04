import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getDynamicPages, saveDynamicPages, pageKeyFromSlug, type DynamicPage } from "@/lib/dynamicPages";
import { savePageLayout } from "@/lib/pageLayout";
import { randomUUID } from "crypto";

export async function GET() {
  const pages = await getDynamicPages();
  return NextResponse.json(pages);
}

export async function POST(req: NextRequest) {
  const authErr = await requireAdmin(); if (authErr) return authErr;

  const { title, slug, addedToNav, navParent, initialSections } = await req.json();

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
  const sectionTypes: string[] = Array.isArray(initialSections) && initialSections.length > 0
    ? initialSections
    : ["text-block"];
  await savePageLayout(pageKey, {
    sections: sectionTypes.map((type, i) => ({ id: `${pageKey}:${type}:${i + 1}`, type })),
  });

  return NextResponse.json({ ok: true, page });
}

export async function DELETE(req: NextRequest) {
  const authErr = await requireAdmin(); if (authErr) return authErr;

  const { slug } = await req.json();
  const pages = await getDynamicPages();
  await saveDynamicPages(pages.filter((p) => p.slug !== slug));
  return NextResponse.json({ ok: true });
}
