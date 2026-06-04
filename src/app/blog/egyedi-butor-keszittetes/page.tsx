import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van? – Enzo Design",
  description: "Útmutató egyedi bútor rendeléséhez: hogyan kommunikáld az ötleted, mire figyelj a méretezésnél, anyagválasztásnál és a gyártási folyamatnál.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:egyedi-butor-keszittetes" defaultTypes={["banner", "text-block", "contact"]} />;
}
