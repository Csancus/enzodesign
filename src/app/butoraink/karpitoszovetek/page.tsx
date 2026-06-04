import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kárpitszövetek",
  description: "Több mint 100 kárpitszövet – bársony, bőr, sennilé. AI, AT, MA, AG szövetcsaládok.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:karpitoszovetek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Anyagok",
            title: "Kárpitszövetek",
            subtitle: "Több mint 100 szövetfajtából választhat.",
          },
        },
        {
          type: "text-block",
          config: {
            body: "Keressen bennünket további szövetválasztékkal kapcsolatban – több mint 100 féle szövetből választhat, beleértve olasz valódi bőrt is.",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
