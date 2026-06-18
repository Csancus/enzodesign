import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDynamicPages, pageKeyFromSlug } from "@/lib/dynamicPages";
import { getPageLayout } from "@/lib/pageLayout";
import { getAdminStatus } from "@/lib/auth";
import SectionRenderer from "@/components/sections/SectionRenderer";
import SectionAdminOverlay from "@/components/admin/SectionAdminOverlay";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug: slugParts } = await params;
  const slug = "/" + (slugParts ?? []).join("/");
  const pages = await getDynamicPages();
  const page = pages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.title,
    alternates: { canonical: `https://enzodesign.hu${page.slug}` },
    openGraph: {
      title: page.title,
      url: `https://enzodesign.hu${page.slug}`,
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug: slugParts } = await params;
  const slug = "/" + (slugParts ?? []).join("/");

  const [pages, isAdmin] = await Promise.all([getDynamicPages(), getAdminStatus()]);
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const pageKey = pageKeyFromSlug(page.slug);
  const layout = await getPageLayout(pageKey);
  const sections = layout.sections;

  return (
    <>
      {sections.map((section, i) =>
        isAdmin ? (
          <SectionAdminOverlay
            key={section.id}
            pageId={pageKey}
            sectionId={section.id}
            sectionIndex={i}
            totalSections={sections.length}
          >
            <SectionRenderer type={section.type} id={section.id} isAdmin={isAdmin} />
          </SectionAdminOverlay>
        ) : (
          <SectionRenderer key={section.id} type={section.type} id={section.id} isAdmin={false} />
        )
      )}
    </>
  );
}
