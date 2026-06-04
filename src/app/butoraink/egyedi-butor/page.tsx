import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Egyedi Bútor – Enzo Design",
  description: "Egyedi kárpitozott bútor rendelés. Küldj egy képet és mi elkészítjük álmaid bútorát.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:egyedi-butor" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
