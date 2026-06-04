import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Adatkezelési Szabályzat – Enzo Design",
  description: "Enzo Design adatkezelési tájékoztató – GDPR-kompatibilis adatkezelési szabályzat.",
};

export default function Page() {
  return <PageBuilderPage pageId="adatkezelesi-szabalyzat" defaultTypes={["text-block"]} />;
}
