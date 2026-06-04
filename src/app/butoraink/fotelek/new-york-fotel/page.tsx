import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "New York Fotel",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek:new-york-fotel" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
