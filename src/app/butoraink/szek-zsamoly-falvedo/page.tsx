import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Szék, zsámoly, falvédő – Enzo Design",
  description: "Kárpitozott székek 76.000 Ft-tól, zsámolyok és falvédők egyedi méretben.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:szek-zsamoly-falvedo"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "ENZO DESIGN",
            title: "Szék, zsámoly, falvédő",
            subtitle: "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk.",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Szék, zsámoly, falvédő",
            cards: [
              { name: "Szék, zsámoly, falvédő", tagline: "Sok féle választék", image: "/images/9a0b1d_c51fa6474b5a4e789464c038a7b1c1d4.webp", href: "/butoraink/szek-zsamoly-falvedo" },
              { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
              { name: "Üzleti garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Nagy kopásállóságú, minőségi kárpit anyagok",
            subtitle: "Alapvetően minimum 50.000 martindale-es, nagy kopásállóságú anyagokkal dolgozunk, de nem ritka a 100.000 martindale feletti termék sem. Tetszőleges szín, anyag és kopásállóság választható.",
            buttonText: "Kapcsolat és rendelés",
            buttonHref: "/kapcsolat-es-rendeles",
          },
        },
      ]}
    />
  );
}
