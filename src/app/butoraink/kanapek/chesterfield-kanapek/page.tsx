import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield Kanapék",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:chesterfield-kanapek" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
