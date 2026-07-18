import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsán – prémium kárpitozott bútorok",
  description: "Egyedi kárpitozott bútorok gyártótól Nagykanizsán – közel 20 éve. 2000 nm bemutatóterem, 100+ szövet, házhozszállítás az egész országba. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/butorbolt-nagykanizsan" },
  openGraph: {
    title: "Bútorbolt Nagykanizsán – prémium kárpitozott bútorok",
    description: "Egyedi kárpitozott bútorok gyártótól Nagykanizsán – közel 20 éve. 2000 nm bemutatóterem, 100+ szövet, házhozszállítás az egész országba. Enzo Design.",
    url: "https://enzodesign.hu/blog/butorbolt-nagykanizsan",
    images: [{ url: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Bútorbolt Nagykanizsán – prémium kárpitozott bútorok",
  "description": "Egyedi kárpitozott bútorok gyártótól Nagykanizsán – közel 20 éve. 2000 nm bemutatóterem, 100+ szövet, házhozszállítás az egész országba.",
  "image": "https://www.enzodesign.hu/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  "datePublished": "2025-03-10",
  "dateModified": "2026-06-19",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/butorbolt-nagykanizsan",
  "wordCount": 600,
  "articleSection": "Bútor vásárlás",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/butorbolt-nagykanizsan" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle
        slug="butorbolt-nagykanizsan"
        defaults={{
          category: "Bútor vásárlás",
          title: "Bútorbolt Nagykanizsán",
          date: "2025. június 1.",
          readTime: "2 perc olvasás",
          coverImage: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
          coverAlt: "Enzo Design bemutatóterem Nagykanizsa – kárpitozott bútorok",
          intro:
            "Prémium kárpitozott bútorok helyi megvásárlásával és kiszállítással – az Enzo Design nagykanizsai bemutatóterme közel 20 éve kínál egyedi bútorokat gyártótól közvetlenül.",
          blocks: [
            {
              type: "text",
              heading: "Miért érdemes az Enzo Design bútorboltot választani Nagykanizsán?",
              body: `Ha megbízható és prémium minőségű bútorboltot keresel Nagykanizsán, az Enzo Design a legjobb választás. Közel 20 éve gyártunk kézzel készített, egyedi kárpitozott bútorokat – közvetlenül a gyártótól, közvetítők nélkül. 2000 nm-es telephelyünkön személyesen megtekintheted a kollekció darabjait, kipróbálhatod az ülőbútorokat és konzultálhatsz szakembereinkkel.

Nagykanizsai bemutatótermünk könnyen elérhető a környező városokból is: Zalaegerszegről mindössze 30 km, Keszthelyről kb. 45 km, Kaposvárról kb. 55 km. Ha nem tudsz személyesen eljönni, az ország egész területére vállalunk házhozszállítást.

Kézzel készített, prémium bútorok – minden darab egyedi, tömörfa szerkezettel és 3+10 év garanciával.
Egyedi megrendelés – méret, szín, szövet és forma mind testreszabható.
Minőségi anyagok – valódi olasz bőr, prémium szövetek, több mint 100 féle mintából.
Személyes konzultáció – szakembereink segítenek a választásban.
Kiszállítás – az ország bármely pontjára, az első ajtóig.`,
            },
            {
              type: "text",
              heading: "Milyen típusú bútorok közül válogathatsz?",
              body: `Bemutatótermünkben széles kínálatból választhatsz, amelyet folyamatosan frissítünk az aktuális trendeknek megfelelően.

## Nappali bútorok

Kanapék, fotelok és sarokülőgarnitúrák – kétszemélyes, háromszemelyestől egészen a nagyobb L-alakú konfigurációkig. Ágyazható változatok is elérhetők, amelyek praktikus megoldást nyújtanak kisebb lakásokban. Legnépszerűbb modelljeink: Old's Club, Ivone, Chesterfield, New York, Joker, Design és Cannes.

## Chesterfield kollekció

Prémium Chesterfield kanapéink és foteleink a klasszikus brit stílust képviselik, modern anyagokkal és testreszabható méretben. Valódi olasz bőrben és prémium szövetben egyaránt rendelhetők.

## Használt bútor vs. új prémium bútor

Sokan fontolgatják, hogy használt bútort vásárolnak az ár miatt. Ugyanakkor egy prémium, kézzel készített bútor 10–20 évig is kifogástalanul szolgál. Az Enzo Design bútorainak ára tartalmazza a minőségi alapanyagot, a kézimunkát és a garanciát – hosszú távon sokkal kedvezőbb befektetés.

## Bútorbolt Zalaegerszeg, Kaposvár és Keszthely közelében

Zalaegerszeg: kb. 30 km – mintegy 30 perc autóval
Keszthely: kb. 45 km – kb. 45 perc
Kaposvár: kb. 55 km – kb. 55 perc

## Mennyi idő alatt készül el a bútor?

Az egyedi megrendelések általában 4–6 héten belül elkészülnek a megrendelés visszaigazolásától számítva.`,
            },
          ],
        }}
        related={[
          { title: "Kanapé Zalaegerszegen", href: "/blog/kanape-zalaegerszegen" },
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
        ]}
        productLinks={[
          { label: "Kanapék →", href: "/butoraink/kanapek" },
          { label: "Fotelek →", href: "/butoraink/fotelek" },
          { label: "Kapcsolat és nyitvatartás →", href: "/kapcsolat-es-rendeles" },
        ]}
      />
    </>
  );
}
