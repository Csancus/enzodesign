import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Joker Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="joker-kollekcio" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
