import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield-kollekcio" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
