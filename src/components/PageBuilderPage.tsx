import { getAdminStatus } from "@/lib/auth";
import { getPageLayout, savePageLayout } from "@/lib/pageLayout";
import { setModuleConfig } from "@/lib/moduleStore";
import SectionRenderer from "@/components/sections/SectionRenderer";
import SectionAdminOverlay from "@/components/admin/SectionAdminOverlay";

export type DefaultSection = {
  type: string;
  id?: string;
  config?: Record<string, unknown>;
};

function buildSections(pageId: string, defaults: DefaultSection[]) {
  const counts: Record<string, number> = {};
  return defaults.map((s) => {
    counts[s.type] = (counts[s.type] ?? 0) + 1;
    return {
      id: s.id ?? `${pageId}:${s.type}:${counts[s.type]}`,
      type: s.type,
      _config: s.config,
    };
  });
}

export default async function PageBuilderPage({
  pageId,
  defaultSections = [{ type: "text-block" }],
}: {
  pageId: string;
  defaultSections?: DefaultSection[];
}) {
  const [layout, isAdmin] = await Promise.all([
    getPageLayout(pageId),
    getAdminStatus(),
  ]);

  let sections = layout.sections;

  if (sections.length === 0) {
    const built = buildSections(pageId, defaultSections);
    sections = built.map(({ id, type }) => ({ id, type }));
    await savePageLayout(pageId, { sections });
    await Promise.all(
      built
        .filter((s) => s._config && Object.keys(s._config).length > 0)
        .map((s) => setModuleConfig(s.id, s._config!))
    );
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
