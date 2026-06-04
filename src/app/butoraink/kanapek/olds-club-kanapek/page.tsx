import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Old's Club Kanapék",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:olds-club-kanapek" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
