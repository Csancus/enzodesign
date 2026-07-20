import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Modern Chesterfield kanapé – klasszikus forma, mai anyagok",
  description: "Modern Chesterfield kanapé loft, skandináv és minimalista enteriőrbe. 100+ szövet és bőr – kézzel készített, tömörfa váz, 399 810 Ft-tól. Enzo Design.",

  alternates: { canonical: "https://www.enzodesign.hu/blog/modern-chesterfield-kanape" },
  openGraph: {
    title: "Modern Chesterfield kanapé – klasszikus forma, mai anyagok",
    description: "Modern Chesterfield kanapé loft, skandináv és minimalista enteriőrbe. 100+ szövet és bőr – kézzel készített, tömörfa váz, 399 810 Ft-tól. Enzo Design.",
    url: "https://www.enzodesign.hu/blog/modern-chesterfield-kanape",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Mennyi idő alatt készül el egy egyedi modern Chesterfield kanapé?", answer: "Általában 4–6 hét a megrendelés visszaigazolásától számítva, az anyagtól és a mérettől függően." },
  { question: "Lehet bőr helyett más kárpitot választani?", answer: "Természetesen! Széles bársony-, mikroszálas- és textilopcióból választhatsz. Minden anyag ellenőrzött minőségű, legalább 50.000 martindale kopásállóságú." },
  { question: "Hogyan tisztítható a kárpit?", answer: "A legtöbb modern kárpit vízzel és semleges tisztítószerrel kezelhető. Rendeléskor pontosan tájékoztatjuk az anyagspecifikus ápolási tanácsokról." },
  { question: "Milyen stílusba illik a modern Chesterfield?", answer: "Loft: robusztus forma, sötét szín nyers felületekkel. Skandináv: homokszín bársony, vékony falábakon. Minimalista: semleges egyszínű, kevés kiegészítővel. Vintage: barna bőr, fa bútorokkal." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Modern Chesterfield kanapé – klasszikus forma, mai anyagok",
    "description": "Modern Chesterfield kanapé loft, skandináv és minimalista enteriőrbe. 100+ szövet és bőr – kézzel készített, tömörfa váz, 399 810 Ft-tól.",
    "image": "https://www.enzodesign.hu/images/chesterfield-modern-enterior-1.webp",
    "datePublished": "2025-04-22",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/modern-chesterfield-kanape",
    "wordCount": 700,
    "articleSection": "Chesterfield bútorok",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/modern-chesterfield-kanape" },
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
        slug="modern-chesterfield-kanape"
        defaults={{
          category: "Chesterfield bútorok",
          title: "Modern Chesterfield kanapé",
          date: "2025. június 1.",
          readTime: "3 perc olvasás",
          coverImage: "/images/chesterfield-modern-enterior-1.webp",
          coverAlt: "Modern Chesterfield kanapé elegáns nappaliban – loft és minimalista stílusban",
          intro:
            "Sokan azt gondolják, hogy a Chesterfield csak klasszikus enteriőrbe illik – ez tévhit. A Chesterfield az egyik legjobban alkalmazkodó bútortípus, amely modern lakásban éppúgy otthon van, mint vintage térben.",
          blocks: [
            {
              type: "text",
              heading: "Mi is az a modern Chesterfield kanapé?",
              body: `A modern Chesterfield a klasszikus stílus újragondolása: luxus és letisztultság ötvözete. Az eredeti forma – mélyen gombolt háttámla, ívelt kartámaszok, tömörfa szerkezet – megmarad, de az anyagok, a színek és a méretek a mai igényekhez igazodnak.

Letisztultabb vonalak, de megőrzött karakter
Széles színpaletta: pasztelloktól a mélytónusú árnyalatokig
Változatos anyagok: bársony, mikroszálas, prémium hatású szövetek, valódi bőr
Rugalmas méretkonfigurációk

## Milyen enteriőrbe illik legjobban?

Loft / indusztriális: Sötét bőr, szegecselt részletek, fém és betonfelületek mellett – igazi jellem.
Skandináv: Szürkéskék vagy homokszín bársony változat, vékony falábakon, természetes anyagokkal kombinálva.
Modern minimalista: Egyszínű, semleges árnyalatú Chesterfield, kevés kiegészítővel – a forma önmagáért beszél.
Vintage / eklektikus: Barna vagy konyak bőr, fa bútorokkal és vintage részletekkel.`,
            },
            {
              type: "text",
              heading: "A forma időtlen, az anyag rugalmas",
              body: `Az Enzo Design Chesterfield kollekcióban több mint 100 szövet- és bőrfajtából lehet választani. A mélyen gombolt háttámla és az ívelt kartámaszok az eredeti formát tartják – de a szín, az anyag és a méret szabadon testreszabható. Legyen szó kétszemélyes kanapéról, háromszemelyesről vagy sarokkanapéról – minden konfiguráció elérhető, 399.810 Ft-tól.

## Mit érdemes mérlegelni a választáskor?

Méretek: A Chesterfield karfái és háttámlája miatt általában kissé nagyobb helyet igényel. Mérd fel a teret vásárlás előtt.
Szín és anyag összehangolása: Ha a szoba többi bútora semleges, egy merészebb szín izgalmas kontrasztot adhat.
Láb és részletek: Magasabb, vékonyabb falábakon a Chesterfield könnyedebb, modernebb hatást kelt.

## Enzo Design – 100% kézzel készített, magyar műhelyben

Minden Chesterfield bútorunk Nagykanizsán, saját műhelyünkben készül kézzel. Tömörfa szerkezet, prémium rugózás, min. 50.000 martindale kopásállóságú kárpit – és 3+10 év garancia. Az ár, a méret és az anyag teljes mértékben testreszabható.

## Mennyi idő alatt készül el az egyedi Chesterfield?

Általában 4–6 hét a megrendelés visszaigazolásától számítva.`,
            },
            {
              type: "image",
              image: "/images/blog-modern-chesterfield-2.webp",
              imageAlt: "Modern Chesterfield kanapé indusztriális és skandináv enteriőrben",
            },
            {
              type: "faq",
              heading: "GYIK – Kérdések a modern Chesterfield kanapéról",
              faqItems,
            },
            {
              type: "text",
              body: `## Tévhitek és valóság:

"Csak bőrből készülhet" → A modern Chesterfield bársony, mikroszálas és egyéb textilekből is elérhető.
"Csak klasszikus lakásokba illik" → A letisztult formák miatt modern enteriőrbe is tökéletesen illeszkedik.
"Mind ugyanúgy néz ki" → Az egyedi gyártás miatt nincs két egyforma darab.`,
            },
          ],
        }}
        related={[
          { title: "Bőr fotel", href: "/blog/bor-fotel" },
          { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
          { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
        ]}
        productLinks={[
          { label: "Chesterfield kanapék →", href: "/butoraink/kanapek/chesterfield-kanapek" },
          { label: "Teljes Chesterfield kollekció →", href: "/chesterfield-kollekcio" },
        ]}
      />
    </>
  );
}
