import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Üzleti Bútor",
  description: "Kárpitozott bútorok kávézóknak, éttermeknek, szállodáknak, orvosi rendelőknek. Ingyenes helyszíni egyeztetés.",
};

export default function Page() {
  return <PageBuilderPage pageId="karpitozott-butor-uzleti-ugyfeleknek" defaultTypes={["banner", "text-block", "image-text", "contact"]} />;
}
