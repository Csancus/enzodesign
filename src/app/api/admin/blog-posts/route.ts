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

type SectionEntry = { id: string; type: string };

function buildSections(
  pageKey: string,
  coverImage: string | undefined,
  articleImages: string[],
): { sections: SectionEntry[]; imageSections: { id: string; type: string; image: string }[] } {
  const sections: SectionEntry[] = [];
  const imageSections: { id: string; type: string; image: string }[] = [];
  let n = 0;

  // Hero title section
  n++; sections.push({ id: `${pageKey}:hero-light:${n}`, type: "hero-light" });

  // Cover image as banner
  if (coverImage) {
    n++;
    const id = `${pageKey}:banner:${n}`;
    sections.push({ id, type: "banner" });
    imageSections.push({ id, type: "banner", image: coverImage });
  }

  // First text block
  n++; sections.push({ id: `${pageKey}:text-block:${n}`, type: "text-block" });

  // Article images: alternate image-text / text-image, each followed by a text block
  articleImages.forEach((img, idx) => {
    const type = idx % 2 === 0 ? "image-text" : "text-image";
    n++;
    const id = `${pageKey}:${type}:${n}`;
    sections.push({ id, type });
    imageSections.push({ id, type, image: img });
    n++; sections.push({ id: `${pageKey}:text-block:${n}`, type: "text-block" });
  });

  // Contact
  n++; sections.push({ id: `${pageKey}:contact:${n}`, type: "contact" });

  return { sections, imageSections };
}

export async function POST(req: NextRequest) {
  const authErr = await requireAdmin();
  if (authErr) return authErr;

  const { title, slug, excerpt, category, readTime, coverImage, articleImages = [] } = await req.json();
  const fullSlug = `/blog/${slug}`;

  const pages = await getDynamicPages();
  if (pages.find((p) => p.slug === fullSlug)) {
    return NextResponse.json({ error: "Ez az URL már foglalt." }, { status: 409 });
  }
  pages.push({ id: randomUUID(), title, slug: fullSlug, addedToNav: false, navParent: null, createdAt: Date.now() });
  await saveDynamicPages(pages);

  const pageKey = pageKeyFromSlug(fullSlug);
  const { sections, imageSections } = buildSections(pageKey, coverImage || undefined, articleImages);

  await savePageLayout(pageKey, { sections });

  // Pre-seed image sections so they immediately show the uploaded images
  await Promise.all(
    imageSections.map(({ id, type, image }) => {
      if (type === "banner") {
        return setModuleConfig(id, { image, alt: title, height: "400" });
      }
      // image-text or text-image
      const imagePosition = type === "image-text" ? "left" : "right";
      return setModuleConfig(id, { image, imagePosition, title: "", body: "Ide írj szöveget..." });
    })
  );

  // Store blog post metadata for the listing page
  const stored = await getModuleConfig("blog:dynamic-posts");
  const existing = (stored.posts as BlogPostMeta[]) ?? [];
  existing.unshift({
    slug,
    title,
    excerpt: excerpt || "",
    category: category || "",
    readTime: readTime || "3 perc",
    image: coverImage || articleImages[0] || "/images/chesterfield-w1.webp",
    createdAt: Date.now(),
  });
  await setModuleConfig("blog:dynamic-posts", { posts: existing });

  return NextResponse.json({ ok: true, slug: fullSlug });
}
