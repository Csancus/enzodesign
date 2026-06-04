import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Akciók – Enzo Design",
  description: "Figyelje folyamatosan változó akcióinkat – vásároljon közvetlenül a gyártótól.",
};

export default function Page() {
  return <PageBuilderPage pageId="akcio" defaultTypes={["hero-light", "gallery", "contact"]} />;
}
