import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Miért időtálló a Chesterfield kanapé? – Enzo Design",
  description: "A Chesterfield kanapé 300 éves brit örökség – és ma is trendszetter. Történet, stílusok, anyagok és miért illik minden enteriőrbe. Kézzel készített, 3+10 év garancia.",

  alternates: { canonical: "https://enzodesign.hu/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
  openGraph: {
    title: "Miért időtálló a Chesterfield kanapé? – Enzo Design",
    description: "A Chesterfield kanapé 300 éves brit örökség – és ma is trendszetter. Történet, stílusok, anyagok és miért illik minden enteriőrbe. Kézzel készített, 3+10 év garancia.",
    url: "https://enzodesign.hu/blog/miert-idotallo-valasztas-a-chesterfield-kanape",
    images: [{ url: "/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Mennyire kopásálló a kárpit?", answer: "Az Enzo Design kárpitjai legalább 50.000 martindale kopásállóságúak – ez az otthoni és üzleti használatra egyaránt alkalmas minőségi küszöb." },
  { question: "Miért érdemes Chesterfieldet választani más kanapéval szemben?", answer: "A tömörfa váz, a kézzel gombolt kárpitozás és a tartós rugózás kombinációja 20–30 éves élettartamot biztosít. Formája időtlen, ezért lakásfelújításkor sem válik elavulttá." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Miért időtálló a Chesterfield kanapé?",
    "description": "A Chesterfield kanapé 300 éves brit örökség – és ma is trendszetter. Történet, stílusok, anyagok és miért illik minden enteriőrbe. Kézzel készített, 3+10 év garancia.",
    "image": "https://www.enzodesign.hu/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp",
    "datePublished": "2025-06-03",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/miert-idotallo-valasztas-a-chesterfield-kanape",
    "wordCount": 550,
    "articleSection": "Chesterfield bútorok",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
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
        slug="miert-idotallo-valasztas-a-chesterfield-kanape"
        defaults={{
          category: "Chesterfield bútorok",
          title: "Miért időtálló választás a Chesterfield kanapé?",
          date: "2025. június 1.",
          readTime: "2 perc olvasás",
          coverImage: "/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp",
          coverAlt: "Chesterfield kanapé – időtálló stílus klasszikus és modern enteriőrben",
          intro:
            "A Chesterfield kanapé nem csupán egy bútor, hanem egy életérzés. Klasszikus elegancia, időtlen formavilág és prémium anyaghasználat ötvözete. Akár egy modern loftban, akár egy vidéki kúriában helyezed el – azonnal uralja a teret.",
          blocks: [
            {
              type: "text",
              heading: "A Chesterfield kanapé története – egy brit ikon születése",
              body: `A Chesterfield kanapé eredete az 1700-as évekre nyúlik vissza. Lord Phillip Stanhope, Chesterfield negyedik grófja rendelt egy különleges, bőrrel kárpitozott ülőalkalmatosságot. A cél: egy olyan bútordarab, amelyen a vendégek egyenesen ülhetnek anélkül, hogy ruhájuk összegyűrődne. A mélyen gombolt háttámla, az egy szintben futó karfa és háttámla, valamint a masszív fakeret mind ebből az eredeti megrendelésből öröklődött ránk.

## Klasszikus jellemzők:

Mélyen gombolt háttámla (deep button-tufting)
Egy szintben futó háttámla és kartámasz
Magas minőségű bőr vagy bársony kárpit
Masszív, kézzel készített tömörfa szerkezet

## A modern Chesterfield helye a mai enteriőrökben

Sokan úgy gondolják, hogy ez a kanapétípus csak klasszikus vagy vintage terekbe illik – de ez tévedés. Semleges színekben – bézs, szürke, zöld vagy sötétkék – diszkrét eleganciát sugall még egy minimalista nappaliban is. Bársonyos vagy matt bőr felületek textúrát adnak a térnek, a moduláris változatok pedig alkalmazkodnak a mai lakások igényeihez.`,
            },
            {
              type: "text",
              heading: "Egyedi gyártás és a teljes Chesterfield szett",
              body: `A prémium kategóriás Chesterfield bútor nem futószalagon készül. Az Enzo Design kínálatában megtalálható darabok kézzel készülnek, kiváló minőségű kárpitanyagok és tömörfa szerkezet felhasználásával. Méretre szabott kanapé, szabad szín- és anyagválasztás, extra funkciók – mint az ágyazható változat – mind elérhetők.

## Chesterfield ülőgarnitúra – a teljes szett

A Chesterfield stílus nem ér véget a kanapénál. A teljes garnitúra részeként fotel, puff, sarokkanapé, étkezőszék és akár franciaágy is rendelhető egységes megjelenéssel.

## Zöld és kék – az új klasszikusok

Az utóbbi években a Chesterfield zöld és kék változata egyre népszerűbb. Ezek a színek mélységet, karaktert és nyugalmat sugallnak, miközben friss, modern érzést keltenek. A barna és a bézs a klasszikus bőrhatást idézi – mindkettő időtlen választás.

Zöld: természetközeli, luxus érzet
Kék: hűvös elegancia, időtlenség
Barna: klasszikus bőrkanapé stílus
Szürke: modern, letisztult hatás`,
            },
            {
              type: "faq",
              heading: "GYIK – Chesterfield kanapé tartóssága",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
          { title: "Bőr fotel", href: "/blog/bor-fotel" },
        ]}
        productLinks={[
          { label: "Chesterfield kanapék →", href: "/butoraink/kanapek/chesterfield-kanapek" },
          { label: "Teljes Chesterfield kollekció →", href: "/chesterfield-kollekcio" },
        ]}
      />
    </>
  );
}
