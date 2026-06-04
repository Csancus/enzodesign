import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútoraink – Enzo Design",
  description: "Kanapék, fotelek, franciaágyak – 2000 nm-es telephelyünkön készülnek. Tömörfa, prémium szövetek.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "ENZO DESIGN",
            title: "Bútoraink",
            subtitle: "Kárpitozott bútorok – egyedi méretben, választott szövettel, közvetlenül a gyártótól.",
          },
        },
        {
          type: "text-block",
          config: {
            body: "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk, és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, áraink versenyképesek maradnak.\n\nMindegyik bútorunkat ajánljuk:\n• Egyedi szín és anyagminta választással\n• Tetszőleges méretben\n• Választható kopásállóság-erősséggel (martindale)\n• Tömörfa szerkezettel, 10 év váz-garanciával",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kanapék",
            cards: [
              { name: "Old's Club Kanapék", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
              { name: "Ivone kanapék", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
              { name: "Design Kanapék", tagline: "Modern minőség", image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp", href: "/butoraink/kanapek/design-kanapek" },
              { name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
              { name: "New York kanapék", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/kanapek/new-york-kanapek" },
              { name: "Joker Kanapék", tagline: "Gáláns megjelenés", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/kanapek/joker-kanapek" },
              { name: "Cannes Kanapé", tagline: "A modern sarok", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek/cannes-kanapek" },
              { name: "Egyedi kanapé", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
              { name: "Üzleti bútor, kanapé", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
            ],
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Fotelek",
            cards: [
              { name: "Old's Club Fotel", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek/olds-club-fotel" },
              { name: "Ivone fotel", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/fotelek/ivone-fotel" },
              { name: "Design Fotel", tagline: "Modern minőség", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butoraink/fotelek/design-fotel" },
              { name: "Chesterfield fotel", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butoraink/fotelek/chesterfield-fotel" },
              { name: "New York fotel", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/fotelek/new-york-fotel" },
              { name: "Joker fotel", tagline: "Elegáns bútor, bárhova", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/fotelek/joker-fotel" },
              { name: "További fotelek", tagline: "Kényelem, karfával", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek/tovabbi-fotelek" },
              { name: "Egyedi fotelek", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
              { name: "Üzleti fotelek, székek", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
            ],
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
          type: "card-grid",
          config: {
            title: "További termékeink",
            cards: [
              { name: "Szék, zsámoly, falvédő", tagline: "Sok féle választék", image: "/images/9a0b1d_c51fa6474b5a4e789464c038a7b1c1d4.webp", href: "/butoraink/szek-zsamoly-falvedo" },
              { name: "Egyedi bútor", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
              { name: "Üzleti bútor", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Kérjen ajánlatot!",
            subtitle: "Szinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Vegye fel velünk a kapcsolatot!",
            buttonText: "Kapcsolat és rendelés",
            buttonHref: "/kapcsolat-es-rendeles",
          },
        },
      ]}
    />
  );
}
