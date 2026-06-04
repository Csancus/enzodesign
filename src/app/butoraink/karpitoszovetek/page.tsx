import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kárpitszövetek",
  description: "Több mint 100 kárpitszövet – bársony, bőr, sennilé. AI, AT, MA, AG szövetcsaládok.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:karpitoszovetek" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
