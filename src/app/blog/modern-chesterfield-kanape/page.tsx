import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Modern Chesterfield kanapé – Enzo Design",
  description: "A Chesterfield kanapé nem csak elegáns, hanem rendkívül sokoldalú is – hogyan illik modern enteriőrbe?",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:modern-chesterfield-kanape" defaultTypes={["banner", "text-block", "contact"]} />;
}
