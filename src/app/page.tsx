import type { Metadata } from "next";
import { getAdminStatus } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Egyedi kárpitozott bútorok – Enzo Design",
  description: "Bútorbolt Nagykanizsán – egyedi bútor gyártótól: kanapé, fotel, Chesterfield. Online rendelés, 2 nap alatt árajánlat, 3+10 év garancia. Enzo Design.",
  alternates: { canonical: "https://www.enzodesign.hu" },
  openGraph: {
    title: "Egyedi kárpitozott bútorok – Enzo Design",
    description: "Bútorbolt Nagykanizsán – egyedi bútor gyártótól: kanapé, fotel, Chesterfield. Online rendelés, 2 nap alatt árajánlat, 3+10 év garancia. Enzo Design.",
    url: "https://www.enzodesign.hu",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800, alt: "Enzo Design kanapék és fotelek" }],
  },
};
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
