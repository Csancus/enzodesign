import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Joker Kanapék",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:joker-kanapek" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
