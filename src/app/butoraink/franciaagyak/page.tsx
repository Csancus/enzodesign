import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Franciaágyak – Enzo Design",
  description: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. 351.160 Ft-tól, tömörfa szerkezettel.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:franciaagyak"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "ENZO DESIGN",
            title: "Ágyak",
            subtitle: "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak.",
          },
        },
        {
          type: "text-block",
          config: {
            body: "Mindegyik bútorunkat ajánljuk:\n• Egyedi szín és anyagmintával\n• Tetszőleges méretben\n• Kopásállóság-erősséggel (martindale) kérhető",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Franciaágyak",
            cards: [
              { name: "Bilbao franciaágy", tagline: "Kényelmedre", image: "/images/e7ad8b_335724cf7ec5471c89807f009900353d.webp", href: "/butoraink/franciaagyak" },
              { name: "Madrid franciaágy", tagline: "Hálószobád éke", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", href: "/butoraink/franciaagyak" },
              { name: "További ágyak", tagline: "Kísértő és zseniális darabok", image: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", href: "/butoraink/franciaagyak" },
              { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
              { name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
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
