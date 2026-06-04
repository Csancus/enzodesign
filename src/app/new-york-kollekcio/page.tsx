import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "New York Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="new-york-kollekcio" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
