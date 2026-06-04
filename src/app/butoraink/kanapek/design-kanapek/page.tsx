import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Design Kanapék",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:design-kanapek" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
