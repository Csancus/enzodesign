import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "A Chesterfield a modern enteriőrben",
};

export default function Page() {
  return <PageBuilderPage pageId="chesterfield:chesterfield-a-modern-enteriorben" defaultTypes={["hero-light", "text-block", "contact"]} />;
}
