import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Old's Club Fotel",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek:olds-club-fotel" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
