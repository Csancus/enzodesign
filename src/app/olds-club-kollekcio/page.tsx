import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Old's Club Kollekció",
};

export default function Page() {
  return <PageBuilderPage pageId="olds-club-kollekcio" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
