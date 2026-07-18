import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Melyik Chesterfield bútor illik hozzád? Stíluskalauz",
  description: "Chesterfield szék, fotel, puff, étkezőszék vagy kanapé – stíluskalauz a típusokhoz, színekhez és az ideális enteriőrhez. Egyedi gyártás, 3+10 év garancia. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad" },
  openGraph: {
    title: "Melyik Chesterfield bútor illik hozzád? Stíluskalauz",
    description: "Chesterfield szék, fotel, puff, étkezőszék vagy kanapé – stíluskalauz a típusokhoz, színekhez és az ideális enteriőrhez. Egyedi gyártás, 3+10 év garancia. Enzo Design.",
    url: "https://enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad",
    images: [{ url: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Hol alkalmazható a Chesterfield stílus az irodában?", answer: "Chesterfield forgószék és kanapé egyaránt kiváló fogadószobákba, vezetői irodákba és tárgyalókba. Az elegáns megjelenés presztízsértéket ad a munkahelynek." },
  { question: "Rendelhető-e garnitúra egységes kárpitban?", answer: "Igen – a kanapé mellé párosítható fotel, puff, étkezőszék és franciaágy is azonos szövetben és színben rendelhető." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Melyik Chesterfield bútor illik hozzád? Stíluskalauz",
    "description": "Chesterfield szék, fotel, puff, étkezőszék vagy kanapé – stíluskalauz a típusokhoz, színekhez és az ideális enteriőrhez. Egyedi gyártás, 3+10 év garancia.",
    "image": "https://www.enzodesign.hu/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
    "datePublished": "2025-05-06",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad",
    "wordCount": 590,
    "articleSection": "Chesterfield bútorok",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad" },
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
        slug="melyik-chesterfield-butor-illik-hozzad"
        defaults={{
          category: "Chesterfield bútorok",
          title: "Melyik Chesterfield bútor illik hozzád?",
          date: "2025. június 1.",
          readTime: "2 perc olvasás",
          coverImage: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
          coverAlt: "Chesterfield bútor kollekció – kanapé, fotel, szék, puff",
          intro:
            "A Chesterfield nem csak kanapé. Szék, puff, étkezőszék, forgószék – és minden típus más térbe, más célra ideális. Ez az útmutató segít megtalálni a hozzád illő darabot.",
          blocks: [
            {
              type: "text",
              heading: "Chesterfield bútor típusok",
              body: `## Chesterfield szék – ahol a komfort és a stílus találkozik

A klasszikus Chesterfield szék magas háttámlájával, elegáns gombolásával és ívelt karfáival kiegészítő ülőhelyként nappaliba, dolgozószobába vagy olvasósarokba illeszkedik. Bőr vagy bársony kárpit garantálja a tartósságot, a masszív fakeret hosszú évekre szóló befektetés.
Ideális helyek: kanapé mellé kiegészítőnek, vállalati irodákba, tárgyalókba, kávézók és boutique üzletek belső tereihez.

## Chesterfield puff – kicsi, de sokoldalú

Sokan alábecsülik a Chesterfield puff szerepét, pedig egyszerre több funkcióban is szolgál: lábpihentetőként, extra ülőhelyként, vagy tárolós változatban. A puffok általában azonos kárpitozással készülnek a kanapéval – a garnitúra egységes marad.

## Chesterfield étkezőszék – a kifinomult vacsorák kísérője

Letisztultabb formában, de ugyanolyan gombolással és ívelt vonalvezetéssel készül. Rusztikus vagy vintage étkezőkbe, vendéglátóhelyekre, de home office munkaszékként is kiváló. Bőr, bársony és velúr kárpitban elérhető.

## Chesterfield forgószék – luxus az irodában

Egyedi megjelenésével prémium munkahelyet teremt ügyvédi irodákban, vezetői szobákban vagy home office berendezésekben. Kombinálja az irodai komfortot a tradicionális Chesterfield stílussal.`,
            },
            {
              type: "text",
              heading: "A színek jelentése a Chesterfield bútorok világában",
              body: `Zöld: frissítő, természetközeli, kifinomult – modern és eklektikus enteriőrbe.
Kék / tengerészkék: mély elegancia, intellektuális hangulat – skandináv és minimalista stílusba.
Barna / konyak: klasszikus, tekintélyt sugárzó – tradicionális és vintage terekben.
Szürke / bézs: modern, letisztult, semleges – skandináv és loft stílusba.

## Melyiket válaszd?

Ha nappaliba keresel kiegészítő ülőhelyet, a szék vagy fotel a legjobb választás. Ha kisebb teret bútorozol és minden négyzetméter számít, a puff tökéletes kiegészítő. Ha étkezőt rendezed be stílusosan, az étkezőszék a nyerő.

Az Enzo Design-nél minden Chesterfield bútor teljesen egyedi szín- és anyagkombinációban rendelhető – segítünk megtalálni az otthonodhoz legjobban illő darabot.`,
            },
            {
              type: "faq",
              heading: "GYIK – Chesterfield bútor típusok",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Bőr fotel", href: "/blog/bor-fotel" },
          { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
        ]}
        productLinks={[
          { label: "Chesterfield kollekció →", href: "/chesterfield-kollekcio" },
          { label: "Chesterfield fotel →", href: "/butoraink/fotelek/chesterfield-fotel" },
          { label: "Chesterfield kanapék →", href: "/butoraink/kanapek/chesterfield-kanapek" },
        ]}
      />
    </>
  );
}
