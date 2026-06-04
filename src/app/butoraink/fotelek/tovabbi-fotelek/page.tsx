import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "További Fotelek",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:fotelek:tovabbi-fotelek" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
