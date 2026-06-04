import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield Bútorok",
  description: "Chesterfield kanapék és fotelek közel 20 éve. Tömörfa váz, prémium szövet vagy bőr bevonat.",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
