import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kanapé Zalaegerszegen – Enzo Design",
  description: "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – útmutató Zalaegerszeg és közelének vásárlóinak.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:kanape-zalaegerszegen" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
