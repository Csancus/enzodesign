import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Fotelek – Enzo Design",
  description: "Fotel kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker – 82.820 Ft-tól.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:fotelek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "ENZO DESIGN",
            title: "Fotelek",
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
            title: "Fotelek",
            cards: [
              { name: "Old's Club Fotel", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek/olds-club-fotel" },
              { name: "Ivone Fotel", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/fotelek/ivone-fotel" },
              { name: "Design Fotel", tagline: "Modern minőség", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butoraink/fotelek/design-fotel" },
              { name: "Chesterfield Fotel", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butoraink/fotelek/chesterfield-fotel" },
              { name: "New York Fotel", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/fotelek/new-york-fotel" },
              { name: "Joker Fotel", tagline: "Elegáns bútor, bárhova", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/fotelek/joker-fotel" },
              { name: "További Fotelek", tagline: "Kényelem, karfával", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek/tovabbi-fotelek" },
              { name: "Egyedi Fotelek", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
              { name: "Üzleti Fotelek, székek", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
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
