import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Szék, zsámoly, falvédő – Enzo Design",
  description: "Kárpitozott székek 76.000 Ft-tól, zsámolyok és falvédők egyedi méretben.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:szek-zsamoly-falvedo" defaultTypes={["hero-light", "gallery", "text-block", "contact"]} />;
}
