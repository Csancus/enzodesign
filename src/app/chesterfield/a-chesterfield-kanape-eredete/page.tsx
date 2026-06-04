import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "A Chesterfield kanapé eredete",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield:a-chesterfield-kanape-eredete" defaultTypes={["banner", "text-block", "contact"]} />;
}
