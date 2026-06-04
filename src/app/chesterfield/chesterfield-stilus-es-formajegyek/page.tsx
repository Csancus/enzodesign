import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield – Stílus és formajegyek",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield:chesterfield-stilus-es-formajegyek" defaultTypes={["banner", "text-block", "contact"]} />;
}
