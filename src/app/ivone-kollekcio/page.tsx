import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ivone Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="ivone-kollekcio" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
