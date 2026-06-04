import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Joker Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="joker-kollekcio" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
