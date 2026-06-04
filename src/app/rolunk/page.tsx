import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Rólunk – Enzo Design",
  description: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán, 2000 nm-es telephelyünkön.",
};

export default function Page() {
  return <PageBuilderPage pageId="rolunk" defaultTypes={["banner", "image-text", "text-block", "contact"]} />;
}
