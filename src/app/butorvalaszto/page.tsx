import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorválasztó",
};

export default function Page() {
  return <PageBuilderPage pageId="butorvalaszto" defaultTypes={["hero-light", "steps", "contact"]} />;
}
