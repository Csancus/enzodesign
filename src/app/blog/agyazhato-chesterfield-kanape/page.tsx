import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban – Enzo Design",
  description: "Az ágyazható Chesterfield kanapé ötvözi a klasszikus stílust a kényelmes vendégágy funkcióval – ideális kis lakásba és vendégszobába.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:agyazhato-chesterfield-kanape" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
