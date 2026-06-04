import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kapcsolat és Rendelés",
  description: "Lépjen kapcsolatba az Enzo Designnal. Töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default function Page() {
  return <PageBuilderPage pageId="kapcsolat-es-rendeles" defaultTypes={["hero-light", "contact"]} />;
}
