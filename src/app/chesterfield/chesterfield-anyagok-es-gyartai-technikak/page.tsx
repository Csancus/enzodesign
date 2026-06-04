import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield – Anyagok és gyártási technikák",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield:chesterfield-anyagok-es-gyartai-technikak" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
