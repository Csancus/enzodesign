import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútoraink – Enzo Design",
  description: "Kanapék, fotelek, franciaágyak – 2000 nm-es telephelyünkön készülnek. Tömörfa, prémium szövetek.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
