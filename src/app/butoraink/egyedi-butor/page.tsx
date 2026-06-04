import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Egyedi Bútor – Enzo Design",
  description: "Egyedi kárpitozott bútor rendelés. Küldj egy képet és mi elkészítjük álmaid bútorát.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:egyedi-butor"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "ENZO DESIGN",
            title: "Egyedi bútor",
            subtitle: "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak.",
          },
        },
        {
          type: "gallery",
          config: {
            title: "Egyedi bútor galériánk",
            images: [
              { src: "/images/d56f41_1856f7e2d27f49c0970c4b84722b089d.webp", alt: "Egyedi bútor 1" },
              { src: "/images/d56f41_25474a021ee44234972eec82773e58de.webp", alt: "Egyedi bútor 2" },
              { src: "/images/d56f41_2d00c16047994b71b258082850454298.webp", alt: "Egyedi bútor 3" },
              { src: "/images/d56f41_33f0883f221f432e82f585c99d9462af.webp", alt: "Egyedi bútor 4" },
              { src: "/images/d56f41_4ac620604ed74e9abf233f78ead4d1fd.webp", alt: "Egyedi bútor 5" },
              { src: "/images/d56f41_6112327234134a6b97efea35c3078ddc.webp", alt: "Egyedi bútor 6" },
              { src: "/images/d56f41_76121739e60c481ea7e2318fab374f6f.webp", alt: "Egyedi bútor 7" },
              { src: "/images/d56f41_8e5df897a0fb4ab9a8fa551ab9cd1aca.webp", alt: "Egyedi bútor 8" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Nagy kopásállóságú, minőségi kárpit anyagok",
            subtitle: "Alapvetően minimum 50.000 martindale-es, nagy kopásállóságú anyagokkal dolgozunk, de nem ritka a 100.000 martindale feletti termék sem. Tetszőleges szín, anyag és kopásállóság választható.",
            buttonText: "Egyedi bútor rendelése",
            buttonHref: "/kapcsolat-es-rendeles",
          },
        },
      ]}
    />
  );
}
