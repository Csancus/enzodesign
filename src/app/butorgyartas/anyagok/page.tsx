import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Alapanyagok a bútorgyártásban",
};

export default function Page() {
  return <PageBuilderPage pageId="butorgyartas:anyagok" defaultTypes={["hero-light", "steps", "text-block", "contact"]} />;
}
