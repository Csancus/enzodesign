import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kanapék – Enzo Design",
  description: "Kanapé kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker, Cannes – egyedi méretben és szövetben.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "ENZO DESIGN",
            title: "Kanapék",
            subtitle: "Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot. A Bútoraink szövete és anyagmintája szabadon választható.",
          },
        },
        {
          type: "text-block",
          config: {
            body: "Mindegyik bútorunkat ajánljuk:\n• Egyedi szín és anyagminta választással\n• Tetszőleges méretben\n• Választható kopásállóság-erősséggel (martindale)\n• Tömörfa szerkezettel, 10 év váz-garanciával",
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
          type: "cta",
          config: {
            title: "Nagy kopásállóságú, minőségi kárpit anyagok",
            subtitle: "Minimum 50.000 martindale-es anyagokkal dolgozunk – de nem ritka a 100.000 feletti sem. Tetszőleges szín, anyag és kopásállóság választható.",
            buttonText: "Kárpitszövetek megtekintése",
            buttonHref: "/butoraink/karpitoszovetek",
          },
        },
      ]}
    />
  );
}
