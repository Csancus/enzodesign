import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorgyártás",
  description: "A bútorgyártás komplex, precíz folyamat. Megismerheti az Enzo Design gyártástechnológiáját.",
};

export default function Page() {
  return <PageBuilderPage pageId="butorgyartas" defaultTypes={["hero-light", "steps", "text-block", "contact"]} />;
}
