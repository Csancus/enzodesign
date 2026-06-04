import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorválasztó – Enzo Design",
  description: "Közel 20 éve gyártunk bútorokat közvetlenül – segítünk megtalálni az önnek leginkább megfelelő darabot 3 egyszerű lépésben.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butorvalaszto"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Bútorválasztásra fel!",
            subtitle: "Közel 20 éve gyártunk bútorokat közvetlenül – segítünk megtalálni az önnek leginkább megfelelő darabot 3 egyszerű lépésben.",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Milyen formát szeretne?",
            columns: "3",
            cards: [
              { name: "Fotel", tagline: "Kényelmes és stílusos", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek" },
              { name: "2 személyes kanapé", tagline: "Kompakt és elegáns", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek" },
              { name: "3 személyes kanapé", tagline: "Tágas és kényelmes", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek" },
              { name: "Sarokkanapé", tagline: "Maxális kényelem", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek" },
              { name: "Franciaágy", tagline: "Álomhálószoba", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", href: "/butoraink/franciaagyak" },
              { name: "Egyedi bútor", tagline: "Az Ön elképzelése szerint", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
