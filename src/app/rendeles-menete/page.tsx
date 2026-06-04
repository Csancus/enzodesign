import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Rendelés menete – Enzo Design",
  description: "Rendelje meg álombútorát az Enzo Designtól – töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default function Page() {
  return <PageBuilderPage pageId="rendeles-menete" defaultTypes={["hero-light", "steps", "text-block", "contact"]} />;
}
