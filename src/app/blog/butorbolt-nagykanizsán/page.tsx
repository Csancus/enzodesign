import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsán – Enzo Design",
  description: "Prémium kárpitozott bútorok helyi megvásárlásával és kiszállításával – az Enzo Design nagykanizsai bemutatóterme.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:butorbolt-nagykanizsán" defaultTypes={["banner", "text-block", "contact"]} />;
}
