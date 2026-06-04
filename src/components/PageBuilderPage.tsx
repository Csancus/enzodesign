import { getAdminStatus } from "@/lib/auth";
import { getPageLayout, savePageLayout } from "@/lib/pageLayout";
import SectionRenderer from "@/components/sections/SectionRenderer";
import SectionAdminOverlay from "@/components/admin/SectionAdminOverlay";

function seedSections(pageId: string, types: string[]) {
  const counts: Record<string, number> = {};
  return types.map((type) => {
    counts[type] = (counts[type] ?? 0) + 1;
    return { id: `${pageId}:${type}:${counts[type]}`, type };
  });
}

export default async function PageBuilderPage({
  pageId,
  defaultTypes = ["text-block"],
}: {
  pageId: string;
  defaultTypes?: string[];
}) {
  const [layout, isAdmin] = await Promise.all([
    getPageLayout(pageId),
    getAdminStatus(),
  ]);

  let { sections } = layout;
  if (sections.length === 0) {
    sections = seedSections(pageId, defaultTypes);
    await savePageLayout(pageId, { sections });
  }

  return (
    <>
      {sections.map((section, i) =>
        isAdmin ? (
          <SectionAdminOverlay
            key={section.id}
            pageId={pageId}
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
