import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "A bútorgyártás menete",
};

export default function Page() {
  return <PageBuilderPage pageId="butorgyartas:butorgyartas-folyamata" defaultTypes={["hero-light", "steps", "text-block", "contact"]} />;
}
