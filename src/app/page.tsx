import { getAdminStatus } from "@/lib/auth";
import { getPageLayout } from "@/lib/pageLayout";
import SectionRenderer from "@/components/sections/SectionRenderer";
import SectionAdminOverlay from "@/components/admin/SectionAdminOverlay";

export default async function HomePage() {
  const [layout, isAdmin] = await Promise.all([
    getPageLayout("home"),
    getAdminStatus(),
  ]);

  const sections = layout.sections;

  return (
    <>
      {sections.map((section, i) =>
        isAdmin ? (
          <SectionAdminOverlay
            key={section.id}
            pageId="home"
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
