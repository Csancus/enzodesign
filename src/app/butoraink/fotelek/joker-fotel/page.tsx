import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Joker Fotel",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek:joker-fotel" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
