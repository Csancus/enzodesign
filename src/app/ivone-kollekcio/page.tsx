import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ivone Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="ivone-kollekcio" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
