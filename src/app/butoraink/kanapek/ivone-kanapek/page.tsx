import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ivone Kanapék",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:kanapek:ivone-kanapek" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
