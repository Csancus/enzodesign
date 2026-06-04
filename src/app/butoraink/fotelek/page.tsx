import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Fotelek – Enzo Design",
  description: "Fotel kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker – 82.820 Ft-tól.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
