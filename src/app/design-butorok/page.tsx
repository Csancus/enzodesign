import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Design Bútorok",
};

export default function Page() {
  return <PageBuilderPage pageId="design-butorok" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
