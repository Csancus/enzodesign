import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield-kollekcio" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
