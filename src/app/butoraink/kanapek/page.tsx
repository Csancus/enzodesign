import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kanapék – Enzo Design",
  description: "Kanapé kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker, Cannes – egyedi méretben és szövetben.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
