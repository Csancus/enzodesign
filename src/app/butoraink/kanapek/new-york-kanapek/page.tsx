import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "New York Kanapék",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:new-york-kanapek" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
