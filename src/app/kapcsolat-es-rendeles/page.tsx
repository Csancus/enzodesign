import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kapcsolat és Rendelés",
  description: "Lépjen kapcsolatba az Enzo Designnal. Töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="kapcsolat-es-rendeles"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Lépjen kapcsolatba velünk",
            title: "Kapcsolat, rendelés",
            subtitle: "Töltse ki az alábbi űrlapot és 24 órán belül visszahívjuk!",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
