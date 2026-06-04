import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni? – Enzo Design",
  description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni bútort – ár, egyediség, minőség és közvetlen kommunikáció.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
