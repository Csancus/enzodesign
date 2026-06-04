import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bőr fotel – Enzo Design",
  description: "Időtálló kényelem és stílus egyetlen bútordarabban – miért érdemes valódi bőr fotelt választani.",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:bor-fotel" defaultTypes={["banner", "text-block", "contact"]} />;
}
