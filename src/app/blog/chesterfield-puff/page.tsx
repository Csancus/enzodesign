import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Chesterfield puff – elegáns zsámoly a nappaliba | Enzo Design",
  description: "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs elem. Egyedi méretben, bőrben vagy szövetben, tömörfa szerkezettel – közvetlenül a gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/blog/chesterfield-puff" },
  openGraph: {
    title: "Chesterfield puff – elegáns zsámoly a nappaliba",
    description: "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs elem. Egyedi méretben, bőrben vagy szövetben, tömörfa szerkezettel – közvetlenül a gyártótól.",
    url: "https://enzodesign.hu/blog/chesterfield-puff",
    images: [{ url: "/images/szek-w5.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Mennyi idő alatt készül el egy Chesterfield puff?", answer: "Egyedi megrendelés esetén általában 4–6 hét az átfutási idő. Készletről elérhető daraboknál ennél rövidebb is lehet." },
  { question: "Van-e tisztítható Chesterfield puff?", answer: "Igen – a mikroszálas és az eco bőr kivitel foltálló anyagból készül. Valódi bőr esetén speciális bőrápoló szükséges." },
  { question: "Rendelhető-e matching setben a kanapéval?", answer: "Agen – a puffot ugyanabból az anyagból és színből rendelheted meg, mint a kanapét vagy fotelt. Így egységes, összehangolt enteriőrt kapsz." },
  { question: "Mekkora a szállítási idő?", answer: "Magyarországra ingyenes szállítás, a kiszállítás a gyártást követő 1–2 héten belül történik." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Chesterfield puff – elegáns zsámoly a nappaliba",
    "description": "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs elem. Egyedi méretben, bőrben vagy szövetben, tömörfa szerkezettel.",
    "image": "https://www.enzodesign.hu/images/szek-w5.webp",
    "datePublished": "2026-06-23",
    "dateModified": "2026-06-23",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/chesterfield-puff",
    "wordCount": 560,
    "articleSection": "Chesterfield bútorok",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/chesterfield-puff" },
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
        slug="chesterfield-puff"
        defaults={{
          category: "Chesterfield bútorok",
          title: "Chesterfield puff – elegáns zsámoly a nappaliba",
          date: "2026. június 23.",
          readTime: "3 perc olvasás",
          coverImage: "/images/szek-w5.webp",
          coverAlt: "Chesterfield puff – kárpitozott zsámoly elegáns nappaliban",
          intro:
            "A Chesterfield puff az egyik legtöbbféleképpen használható bútordarab, amit megvehetsz. Lábzsámoly, extra ülőhely, dohányzóasztal-helyettes – és mindeközben a nappalid egyik legszebb dísze.",
          blocks: [
            {
              type: "text",
              heading: "Mi a Chesterfield puff?",
              body: `A Chesterfield puff (más néven Chesterfield zsámoly vagy ottoman) a klasszikus Chesterfield stílus kompakt változata. Jellegzetessége a mély gombolt kárpitozás – ugyanaz a technika, ami a kanapékat és foteleket is ikonikus megjelenésükkel ruházza fel.

Míg a hagyományos kanapénál a gombolás a hát- és kartámaszon látható, a puffnál az ülőfelület tetejét díszíti. Az eredmény: egy tömör, elegáns tárgy, amely önmagában is figyelmet érdemel.

## A Chesterfield puff főbb jellemzői

Mély gombolt kárpitozás az ülőfelületen
Tömörfa láb – általában sötét, fényes kivitelben
Premi szövet vagy valódi bőr borítás
Egyedi méretben rendelhető
Illik a Chesterfield kanapé és fotel mellé, de önállóan is megállja a helyét`,
            },
            {
              type: "text",
              heading: "Mire jó a puff a nappaliban?",
              body: `A puff igazi multifunkcionális bútor – attól függően, hogyan helyezed el, egészen más szerepet tölthet be.

Lábzsámoly – a fotel vagy kanapé előtt elhelyezve azonnal növeli a kényelmet: pihentesd rajta a lábad, miközben az ülőbútor mélyen tartja a tested.

Extra ülőhely – vendégek érkezésekor azonnal mobilizálható, nem vesz el sok helyet, és nem lóg ki az enteriőrből.

Dohányzóasztal-helyettes – egy kerek vagy szögletes tálca ráfektetve máris stabil felületet ad italnak, könyvnek, távirányítónak.

Dekorációs fókuszpont – a helyiség közepén, egy szőnyegen elhelyezve önálló hangsúlyos elem lesz, amely köré szervezhető a bútorozás.

## Hol a legjobb elhelyezni?

Chesterfield kanapé elé – matching set hatás, összefogott enteriőr
Fotel mellé vagy elé – lábzsámoly funkcióban
Ágy tövébe – hálószobában is elegáns megoldás
Dolgozo sarokba – kiegészítő ülőhely, ami nem foglal sok helyet`,
            },
            {
              type: "image",
              image: "/images/chesterfield-a1.webp",
              imageAlt: "Chesterfield puff prémium bőrborítással, nappali enteriőrben",
            },
            {
              type: "text",
              heading: "Anyagok, méretek, rendelés",
              body: `Az Enzo Design Chesterfield puffjai egyedileg készülnek – méretük, kárpitjuk és színük szerint teljesen személyre szabhatók.

## Méretek

A leggyakoribb méret 60×60 cm vagy 70×70 cm alaplappal, magassága 40–45 cm között mozog. Hosszúkás ottomán változat esetén 120×60 cm is lehetséges. Konkrét méretigénnyel rendelők esetén más méretet is vállalunk.

## Anyagok

Bársony – a legkeresettebb Chesterfield puff anyag; gazdag felület, intenzív szín
Mikroszálas bársony – könnyebben tisztítható, foltálló változat
Valódi bőr – luxus megjelenés, hosszú élettartam
Eco bőr – bőr hatású, gazdaságosabb alternatíva
Bútorvászon / textilszövet – visszafogottabb, skandináv stílushoz is illik

## Színek

A legkelendőbb árnyalatok Chesterfield puffhoz: mustársárga, smaragdzöld, sötétkék, homokbézs, grafit. De összesen 200+ féle kárpitból választhatsz – köztük mintásak is.

## Garancia

Minden Enzo Design puffra 3 év garancia vonatkozik, a váz esetén 10 éves szavatossággal.`,
            },
            {
              type: "faq",
              heading: "GYIK – Chesterfield puff",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Bőr fotel – időtálló kényelem", href: "/blog/bor-fotel" },
        ]}
        productLinks={[
          { label: "Zsámolyok és puffok →", href: "/butoraink/szek-zsamoly-falvedo" },
          { label: "Fotelek →", href: "/butoraink/fotelek" },
          { label: "Chesterfield Kollekció →", href: "/chesterfield-kollekcio" },
        ]}
      />
    </>
  );
}
