import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Ágyazható Chesterfield kanapé – vendégágy és stílus egyben",
  description: "Az ágyazható Chesterfield kanapé elegáns nappalit és kényelmes vendégágyat kínál egy bútorban. Személyre szabható, kézzel készített, 3+10 év garanciával. Enzo Design.",

  alternates: { canonical: "https://www.enzodesign.hu/blog/agyazhato-chesterfield-kanape" },
  openGraph: {
    title: "Ágyazható Chesterfield kanapé – vendégágy és stílus egyben",
    description: "Az ágyazható Chesterfield kanapé elegáns nappalit és kényelmes vendégágyat kínál egy bútorban. Személyre szabható, kézzel készített, 3+10 év garanciával. Enzo Design.",
    url: "https://www.enzodesign.hu/blog/agyazhato-chesterfield-kanape",
    images: [{ url: "/images/chesterfield-borszovet-boritasu.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Mennyi a felár az ágyazható funkcióért?", answer: "Az ágyazható mechanizmus 190.500 Ft felárral rendelhető bármely Enzo Design kanapéhoz." },
  { question: "Mekkora fekvőfelületet biztosít?", answer: "A kihúzott ágymechanizmus standard két személyes ágyméretű fekvőfelületet biztosít (kb. 140×190 cm)." },
  { question: "Milyen anyagban rendelhető?", answer: "Bársony, mikroszálas, valódi bőr és egyéb prémium szövetek közül lehet választani – összesen több mint 100 féle kárpitból." },
  { question: "Mennyi idő alatt készül el?", answer: "Az egyedi megrendelések általában 4–6 hét alatt készülnek el a visszaigazolástól számítva." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Ágyazható Chesterfield kanapé – vendégágy és stílus egyben",
    "description": "Az ágyazható Chesterfield kanapé elegáns nappalit és kényelmes vendégágyat kínál egy bútorban. Személyre szabható, kézzel készített, 3+10 év garanciával.",
    "image": "https://www.enzodesign.hu/images/chesterfield-borszovet-boritasu.webp",
    "datePublished": "2025-05-20",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/agyazhato-chesterfield-kanape",
    "wordCount": 520,
    "articleSection": "Chesterfield bútorok",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/agyazhato-chesterfield-kanape" },
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
        slug="agyazhato-chesterfield-kanape"
        defaults={{
          category: "Chesterfield bútorok",
          title: "Ágyazható Chesterfield kanapé",
          date: "2025. június 1.",
          readTime: "2 perc olvasás",
          coverImage: "/images/chesterfield-borszovet-boritasu.webp",
          coverAlt: "Ágyazható Chesterfield kanapé – kihúzható ágymechanizmussal, bőr kárpitban",
          intro:
            "A kárpitozott Chesterfield kanapé önmagában is designkincs – de ha kiegészítik egy ágyazható funkcióval, rendkívül sokoldalú bútorrá válik. Ideális azok számára, akik nem akarnak kompromisszumot kötni az esztétika és a praktikusság között.",
          blocks: [
            {
              type: "text",
              heading: "Mit jelent az, hogy ágyazható Chesterfield kanapé?",
              body: `Ez a bútortípus a klasszikus Chesterfield esztétikát ötvözi egy praktikus vendégágy mechanizmussal. A jellegzetes kartámaszok, a mélyen gombolt kárpitozás és a masszív váz megmarad – miközben a bútor belsejében egy diszkrét kihúzható alvófelület lapul. Kétfős alvásra alkalmas, prémium bársony vagy valódi bőr kárpitozással.

Rejtett kihúzható ágymechanizmus
Kényelmes fekvőfelület két személy számára
Tartós kárpit bársonyban vagy valódi bőrben
Stabil vázkonstrukció, hosszú élettartammal

## Mikor ideális az ágyazható változat?

Kisebb lakásban – ahol a nappalit alkalmanként vendégszobává is kell alakítani.
Stúdióapartmanban – ahol minden négyzetméter számít.
Home office-ban – ahol a kanapé egyszerre munkahely-kiegészítő és vendégágy.

Az ágyazható funkció opcionálisan rendelhető minden Enzo Design kanapéhoz, felárért (190.500 Ft).`,
            },
            {
              type: "text",
              heading: "Miért jobb, mint egy hagyományos kihúzható kanapé?",
              body: `A hagyományos kihúzható kanapék általában nem nyújtanak prémium megjelenést. Az ágyazható Chesterfield ellenben napközben elegáns nappali bútor, éjszaka kényelmes vendégágy – minőségi kivitelezéssel, tartós szerkezettel.

Chesterfield ágyazható: Klasszikus, elegáns stílus – prémium bőr vagy bársony – magas háttámla, vastag párnázás – évtizedek, tömörfa vázzal.
Hagyományos kihúzható: Minimalista, modern stílus – szintetikus szövetek – változó kényelem – átlagos élettartam.

## Színek és anyagok

Az ágyazható Chesterfield is teljes mértékben személyre szabható: szövet, bőr, méret és szín szerint egyaránt. A semleges tónusok – bézs, szürke, tengerészkék – a legsokszínűbbek és legkönnyebben kombinálhatók más bútorokkal. De élénkebb árnyalatok (smaragdzöld, mélykék, bordó) is elérhetők, ha karakteresebb megjelenést szeretnél.`,
            },
            {
              type: "faq",
              heading: "GYIK – Kérdések az ágyazható Chesterfield kanapéról",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
          { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
        ]}
        productLinks={[
          { label: "Chesterfield kanapék →", href: "/butoraink/kanapek/chesterfield-kanapek" },
          { label: "Összes kanapé →", href: "/butoraink/kanapek" },
        ]}
      />
    </>
  );
}
