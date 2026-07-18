import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Egyedi bútor készíttetés – személyre szabva | Enzo Design",
  description: "Útmutató egyedi bútor rendeléséhez: ötlettől a kész bútorzig. Méret, szín és anyag szabadon választható. Árajánlat 2 napon belül, gyártás 4–6 hét. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/egyedi-butor-keszittetes" },
  openGraph: {
    title: "Egyedi bútor készíttetés – személyre szabva | Enzo Design",
    description: "Útmutató egyedi bútor rendeléséhez: ötlettől a kész bútorzig. Méret, szín és anyag szabadon választható. Árajánlat 2 napon belül, gyártás 4–6 hét. Enzo Design.",
    url: "https://enzodesign.hu/blog/egyedi-butor-keszittetes",
    images: [{ url: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Lehetek-e ott a gyártás során?", answer: "Igen, a műhely megtekinthető személyes látogatás alkalmával Nagykanizsán." },
  { question: "Mit tegyek, ha nem vagyok biztos a méretben?", answer: "Szakembereink segítenek a tér felmérésében és a megfelelő konfiguráció kiválasztásában." },
  { question: "Kaphatok-e mintaanyagokat?", answer: "Igen, szövetmintákat tudunk küldeni postán, hogy otthon is megtekintsd az anyagokat természetes fényben." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Egyedi bútor készíttetés – személyre szabva",
    "description": "Útmutató egyedi bútor rendeléséhez: ötlettől a kész bútorzig. Méret, szín és anyag szabadon választható. Árajánlat 2 napon belül, gyártás 4–6 hét.",
    "image": "https://www.enzodesign.hu/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
    "datePublished": "2025-07-01",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/egyedi-butor-keszittetes",
    "wordCount": 500,
    "articleSection": "Egyedi bútor",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/egyedi-butor-keszittetes" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle
        slug="egyedi-butor-keszittetes"
        defaults={{
          category: "Egyedi bútor",
          title: "Egyedi bútor készíttetés",
          date: "2025. június 1.",
          readTime: "3 perc olvasás",
          coverImage: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
          coverAlt: "Enzo Design műhely – egyedi bútor gyártás Nagykanizsán",
          intro:
            "Az egyedi kárpitozott bútor nem csupán egy funkcionális tárgy – egyfajta személyes nyilatkozat is. Ha van egy elképzelésed, amit nem találsz meg a boltokban, az egyedi megrendelés a legjobb megoldás.",
          blocks: [
            {
              type: "text",
              heading: "1. Vizuális kiindulópont – kép alapján is dolgozunk",
              body: `A legtöbb vásárló képpel, Pinterestes inspirációval vagy akár egy vázlattal érkezik. Ez a legjobb kiindulópont: minél konkrétabb az elképzelés, annál pontosabb árajánlatot tudunk adni. Akár egy régi bútort is megmutathat, amit meg szeretne újítani vagy másoltatni.

## 2. Méretek és funkció – gondold át előre

Milyen teret szeretnél bebútorozni és milyen méretek férnek el?
Szükséges-e ágyazható funkció?
Kell-e tárolóhely alatta?
Milyen szélességgel, milyen mélységgel képzeled el?

## 3. Anyagválasztás – több mint 100 szövetféleség

Tömörfa szerkezettel dolgozunk, amelyre prémium szöveteket vagy bőröket kárpitozunk. A szövetmintatárból helyszínen is lehet válogatni.

Valódi bőr: tartós, patinás öregedés, könnyen tisztítható, légáteresztő.
Bársony: luxus megjelenés, puha tapintás, szép mélységű szín.
Mikroszálas: praktikus, foltálló, könnyen tisztítható, kisállat-barát.
Sennilé / lenvászon: természetes hatás, modern megjelenés.`,
            },
            {
              type: "text",
              heading: "4. Szakmai konzultáció és hogyan indul a folyamat?",
              body: `A gyártó nemcsak kézműves, hanem tanácsadó is. Megmutatjuk, mi fog működni az adott méretben és formában, és mi az, amire érdemes figyelni. Ha az eredeti ötleted néhány ponton módosítást igényel a stabilitás vagy a tartósság érdekében, azt nyíltan elmondjuk – és közösen megtaláljuk a legjobb megoldást.

## 5. Rugalmasság

Szinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Ha egy látott darabot más szövetben, más méretben, vagy más kartámasz-megoldással szeretnéd, azt is meg tudjuk valósítani.

## Hogyan indul a folyamat?

1. Telefonon vagy e-mailben felveszed a kapcsolatot
2. Konzultáció – személyesen Nagykanizsán vagy online
3. Árajánlat 2 napon belül
4. Szövet- és méretegyeztetés
5. Gyártás – 4–6 hét
6. Házhozszállítás az ország bármely pontjára`,
            },
            {
              type: "faq",
              heading: "GYIK – Egyedi bútor rendelés",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
          { title: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
          { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
        ]}
        productLinks={[
          { label: "Egyedi bútor rendelés →", href: "/butoraink/egyedi-butor" },
          { label: "Kárpitszövetek megtekintése →", href: "/butoraink/karpitoszovetek" },
        ]}
      />
    </>
  );
}
