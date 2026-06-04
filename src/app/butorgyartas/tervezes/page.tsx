import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "A bútortervezés alapjai",
};

export default function Page() {
  return <PageBuilderPage pageId="butorgyartas:tervezes" defaultTypes={["hero-light", "steps", "text-block", "contact"]} />;
}
