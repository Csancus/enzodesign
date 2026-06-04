import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield Fotel",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek:chesterfield-fotel" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
