import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Bőr fotel – prémium kárpitozott fotel | Enzo Design",
  description: "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak 421 695 Ft-tól. Személyre szabható, kézzel készített, 3+10 év garancia.",

  alternates: { canonical: "https://enzodesign.hu/blog/bor-fotel" },
  openGraph: {
    title: "Bőr fotel – prémium kárpitozott fotel | Enzo Design",
    description: "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak 421 695 Ft-tól. Személyre szabható, kézzel készített, 3+10 év garancia.",
    url: "https://enzodesign.hu/blog/bor-fotel",
    images: [{ url: "/images/blog-bor-fotel-cover.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Valódi bőrt használ az Enzo Design?", answer: "Igen – prémium minőségű valódi olasz bőrt kínálunk, de elérhetők alternatív, könnyebben tisztítható bőrhatású anyagok is." },
  { question: "Milyen színekben kérhető?", answer: "Szinte bármilyen színben – a klasszikus fekete és barna mellett sötétzöld, bordó vagy akár tengerészkék árnyalat is választható." },
  { question: "Milyen gyakran kell tisztítani?", answer: "Havonta portalanítás száraz, puha ruhával elegendő. Félévente bőrápolóval érdemes kezelni." },
  { question: "Mit érdemes tudni a bőrfotel és a szövetfotel különbségéről?", answer: "A bőr tartósabb és könnyebben tisztítható – hosszú távon jobb befektetés. A szövet puhábbnak érződik és olcsóbb belépőáron elérhető. Mindkét anyag elérhető az Enzo Design foteleknél." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Bőr fotel – prémium kárpitozott fotel",
    "description": "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak 421 695 Ft-tól. Személyre szabható, kézzel készített, 3+10 év garancia.",
    "image": "https://www.enzodesign.hu/images/blog-bor-fotel-cover.webp",
    "datePublished": "2025-04-08",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/bor-fotel",
    "wordCount": 650,
    "articleSection": "Fotelek",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/bor-fotel" },
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
        slug="bor-fotel"
        defaults={{
          category: "Fotelek",
          title: "Bőr fotel: Időtálló kényelem és stílus",
          date: "2025. június 1.",
          readTime: "3 perc olvasás",
          coverImage: "/images/blog-bor-fotel-cover.webp",
          coverAlt: "Bőr fotel – Enzo Design prémium kárpitozott bútorok",
          intro:
            "A bőr fotel nem csupán bútor – életérzés. Elegáns, tartós, és évtizedek alatt sem veszít szépségéből. Épp ellenkezőleg: a valódi bőr idővel patinát kap, amelynek saját varázsa van.",
          blocks: [
            {
              type: "text",
              heading: "Bőrfotel típusok – melyik illik hozzád?",
              body: `## Relax fotel

Állítható háttámlával és kihúzható lábzsámollyal – ideális tévénézéshez és pihenéshez. Általában mechanikus vagy elektromos dönthető mechanizmussal készül.

## Olvasó fotel

Mélyebb ülőrésszel és magas háttámlával, kifejezetten hosszabb ülésre tervezve. Legtöbbször olvasósarokba, könyvtárszobába vagy hálószobába kerül.

## Karfás bőrfotel

Klasszikus forma, tekintélyes megjelenéssel. Tárgyalókba, irodákba és elegáns nappalikba egyaránt kiváló választás.

## Chesterfield bőrfotel

Mélyen gombolt háttámlával és ívelt karfákkal – a brit klasszikus stílus csúcsa. Vintage, klasszikus vagy tradicionális enteriőrbe illik, de modern kontrasztként is megállja a helyét.`,
            },
            {
              type: "text",
              heading: "Hogyan illik a bőr fotel a különböző enteriőr stílusokhoz?",
              body: `Modern / minimalista: Fekete vagy szürke bőrfotel, karcsú falábakon – tiszta vonalak, kevés dekoráció.

Klasszikus / tradicionális: Barna vagy konyak árnyalatú Chesterfield fotel, fa bútorok és keleti szőnyeg társaságában.

Loft / indusztriális: Sötét bőr, szegecselt részletek, fém és betonfelületek mellett.

Irodai tér: Fekete bőrfotel – státuszszimbólum és praktikus, könnyen tisztítható megoldás egyszerre.

## Bőr vagy szövet?

A bőr tartósabb, könnyebben tisztítható és idővel patinaszerű felületet kap – ideális klasszikus, elegáns enteriőrbe. A szövet puhábbnak érződik, több szín és minta közül lehet választani. Chesterfield foteleink mindkét anyagban rendelhetők: bőr változat 421.695 Ft-tól, szövet változat 324.380 Ft-tól – tömörfa szerkezettel, 3+10 év garanciával.

## Karbantartási tippek

Havonta portold le száraz, puha ruhával.
Félévente kezeld bőrápoló termékkel – ez megőrzi rugalmasságát.
Kerüld a közvetlen napfényt – elfakítja a bőrt.
Friss foltot azonnal töröld fel száraz kendővel.`,
            },
            {
              type: "faq",
              heading: "GYIK – Gyakori kérdések a bőr fotelekről",
              faqItems,
            },
            {
              type: "text",
              body: `## Tévhitek és valóság

"A bőr fotel nyáron izzasztó, télen hideg" → A valódi bőr lélegzik, hőszabályzó tulajdonságokkal bír.
"A bőr mindig bőrbarna" → Ma már széles színválaszték érhető el – akár pasztell vagy élénk árnyalatokban is.
"Bőr fotelt csak klasszikus stílushoz lehet választani" → A modern formatervezésnek köszönhetően bármilyen enteriőrbe illeszthető.`,
            },
          ],
        }}
        related={[
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
          { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
        ]}
        productLinks={[
          { label: "Chesterfield fotel →", href: "/butoraink/fotelek/chesterfield-fotel" },
          { label: "Összes fotel →", href: "/butoraink/fotelek" },
        ]}
      />
    </>
  );
}
