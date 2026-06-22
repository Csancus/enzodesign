import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getModuleConfig, setModuleConfig } from "@/lib/moduleStore";
import { getDynamicPages, saveDynamicPages, pageKeyFromSlug } from "@/lib/dynamicPages";
import { savePageLayout } from "@/lib/pageLayout";
import { randomUUID } from "crypto";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  createdAt: number;
};

const DEFAULT_SECTIONS = ["hero-light", "text-block", "contact"];

export async function POST(req: NextRequest) {
  const authErr = await requireAdmin();
  if (authErr) return authErr;

  const { title, slug, excerpt, category, readTime, image } = await req.json();
  const fullSlug = `/blog/${slug}`;

  // Save as dynamic page so the catch-all route can serve it
  const pages = await getDynamicPages();
  if (pages.find((p) => p.slug === fullSlug)) {
    return NextResponse.json({ error: "Ez az URL már foglalt." }, { status: 409 });
  }
  pages.push({ id: randomUUID(), title, slug: fullSlug, addedToNav: false, navParent: null, createdAt: Date.now() });
  await saveDynamicPages(pages);

  const pageKey = pageKeyFromSlug(fullSlug);
  await savePageLayout(pageKey, {
    sections: DEFAULT_SECTIONS.map((type, i) => ({ id: `${pageKey}:${type}:${i + 1}`, type })),
  });

  // Store blog post metadata for the blog listing page
  const stored = await getModuleConfig("blog:dynamic-posts");
  const existing = (stored.posts as BlogPostMeta[]) ?? [];
  existing.unshift({ slug, title, excerpt: excerpt || "", category: category || "", readTime: readTime || "3 perc", image: image || "/images/chesterfield-w1.webp", createdAt: Date.now() });
  await setModuleConfig("blog:dynamic-posts", { posts: existing });

  return NextResponse.json({ ok: true, slug: fullSlug });
}
