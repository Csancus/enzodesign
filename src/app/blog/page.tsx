import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Enzo Design blog – bútorokról, kárpitozásról, Chesterfieldről és trendekről.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog" defaultTypes={["banner", "gallery"]} />;
}
