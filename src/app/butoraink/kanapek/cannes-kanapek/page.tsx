import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Cannes Sarokkanapé",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:cannes-kanapek" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
