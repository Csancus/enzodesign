import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Miért időtálló választás a Chesterfield kanapé? – Enzo Design",
  description: "A Chesterfield kanapé történelme, stílusok, színek és miért illik a modern otthonba – átfogó útmutató.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:miert-idotallo-valasztas-a-chesterfield-kanape" defaultTypes={["banner", "text-block", "contact"]} />;
}
