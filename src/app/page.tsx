import type { Metadata } from "next";
import { getAdminStatus } from "@/lib/auth";

export const metadata: Metadata = {
  title: { absolute: "Egyedi kanapé, fotel, ülőgarnitúra a gyártótól | Enzo Design" },
  description: "Kárpitozott bútor gyártó Nagykanizsán: kanapé, fotel, ülőgarnitúra, Chesterfield egyedi méretben. Árajánlat 2 napon belül, 3+10 év garancia, országos házhozszállítás.",
  alternates: { canonical: "https://www.enzodesign.hu" },
  openGraph: {
    title: "Egyedi kanapé, fotel, ülőgarnitúra a gyártótól | Enzo Design",
    description: "Kárpitozott bútor gyártó Nagykanizsán: kanapé, fotel, ülőgarnitúra, Chesterfield egyedi méretben. Árajánlat 2 napon belül, 3+10 év garancia, országos házhozszállítás.",
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
            <SectionRenderer type={section.type} id={section.id} isAdmin={isAdmin} pageId="home" />
          </SectionAdminOverlay>
        ) : (
          <SectionRenderer key={section.id} type={section.type} id={section.id} isAdmin={false} pageId="home" />
        )
      )}
    </>
  );
}
