import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ivone Fotel",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek:ivone-fotel" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
