import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Enzo Design blog – bútorokról, kárpitozásról, Chesterfieldről és trendekről.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Írások",
            title: "Blog",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Cikkek",
            cards: [
              { name: "Kanapé Zalaegerszegen", tagline: "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – útmutató Zalaegerszeg és közelének vásárlóinak.", image: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", href: "/blog/kanape-zalaegerszegen" },
              { name: "Bőr fotel", tagline: "Időtálló kényelem és stílus egyetlen bútordarabban – miért érdemes valódi bőr fotelt választani.", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/blog/bor-fotel" },
              { name: "Modern Chesterfield kanapé", tagline: "A Chesterfield kanapé nem csak elegáns, hanem rendkívül sokoldalú is – hogyan illik modern enteriőrbe?", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/blog/modern-chesterfield-kanape" },
              { name: "Melyik Chesterfield bútor illik hozzád?", tagline: "Stíluskalauz Chesterfield bútorokhoz: szék, puff, étkezőszék, forgószék – és a színek jelentése.", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
              { name: "Egyedi bútor készíttetés", tagline: "Mire figyelj, ha saját ötleted van? Vizuális kiindulópont, méretek, anyagválasztás és konzultáció.", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/blog/egyedi-butor-keszittetes" },
              { name: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?", tagline: "5 ok, amiért érdemes egyenesen a gyártótól rendelni – ár, egyediség, minőség és közvetlen kapcsolat.", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
              { name: "Miért időtálló választás a Chesterfield kanapé?", tagline: "A Chesterfield kanapé történelme, stílusok, modern enteriőrökbe illesztés és a legjobb színek.", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
              { name: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?", tagline: "Tévhitek a tömörfáról, előnyök az MDF-fel szemben, és miért garantálja a tartósságot.", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/blog/tomorfa-butor" },
              { name: "Ágyazható Chesterfield kanapé", tagline: "Stílus és praktikum egy bútorban – az ágyazható Chesterfield kanapé minden előnye.", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/blog/agyazhato-chesterfield-kanape" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
