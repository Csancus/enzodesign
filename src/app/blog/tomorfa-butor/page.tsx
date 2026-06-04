import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás? – Enzo Design",
  description: "Miért érdemes tömörfa bútort választani? Tévhitek, előnyök és miért tartósabb, mint az MDF vagy forgácslap.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:tomorfa-butor" defaultTypes={["banner", "text-block", "contact"]} />;
}
