import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Miért vásárolj gyártótól? 5 érv az egyedi bútor mellett",
  description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni: alacsonyabb ár, egyediség, 3+10 év garancia, közvetlen kapcsolat és magyar kézimunka. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
  openGraph: {
    title: "Miért vásárolj gyártótól? 5 érv az egyedi bútor mellett",
    description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni: alacsonyabb ár, egyediség, 3+10 év garancia, közvetlen kapcsolat és magyar kézimunka. Enzo Design.",
    url: "https://enzodesign.hu/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",
    images: [{ url: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Mennyi időt vesz igénybe az egyedi megrendelés?", answer: "Általában 4–6 hét a megrendelés visszaigazolásától a szállításig." },
  { question: "Kaphatok-e mintaanyagokat előre?", answer: "Igen – szövetmintákat postafordultával küldünk, hogy otthon, természetes fényben is megtekinthetők legyenek." },
  { question: "Mi történik, ha az elkészült bútor nem tetszik?", answer: "Közvetlen gyártói kapcsolatban bármilyen módosítási igényt rugalmasan kezelünk. A garanciális problémákat közvetlenül kezeljük – nincs közvetítő a folyamatban." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Miért vásárolj gyártótól? 5 érv az egyedi bútor mellett",
    "description": "5 ok, amiért érdemes egyenesen a gyártótól rendelni: alacsonyabb ár, egyediség, 3+10 év garancia, közvetlen kapcsolat és magyar kézimunka.",
    "image": "https://www.enzodesign.hu/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
    "datePublished": "2025-07-15",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",
    "wordCount": 610,
    "articleSection": "Bútor vásárlás",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
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
        slug="miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni"
        defaults={{
          category: "Bútor vásárlás",
          title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?",
          date: "2025. június 1.",
          readTime: "2 perc olvasás",
          coverImage: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
          coverAlt: "Enzo Design gyártóüzem – kézimunka, tömörfa vázkészítés",
          intro:
            "A bútorvásárlás hosszú távú befektetés. Amikor bútort keresel otthonodba vagy irodádba, érdemes elgondolkodnod azon, hogy miért lehet jobb döntés egyenesen a gyártótól rendelni – akár 30–40%-kal kedvezőbb áron.",
          blocks: [
            {
              type: "text",
              heading: "5 ok, amiért érdemes gyártótól vásárolni",
              body: `## 1. Elkerülheted a felárat

A bútorboltok áraikba beépítik a disztribúciós, raktározási és közvetítői költségeket. Az Enzo Design közvetlenül a végfogyasztóval dolgozik – ezek a rejtett költségek teljesen elmaradnak. Versenyképes árat kapsz prémium minőségért.

## 2. Egyediség, amit nem kapsz meg a boltokban

Boltban csak azt kapod, ami van. A gyártónál lehetőséged van teljesen egyedi, személyre szabott bútor rendelésére. Az Enzo Design akár egy fotó alapján is elkészíti, amit megálmodtál – saját méretben, a te szöveteddel és színeddel.

## 3. Hosszabb élettartam és garancia

Az Enzo Design bútorai tömörfa szerkezettel és nagy kopásállóságú szövettel készülnek. 3 év termékgaranciával és 10 év vázgaranciával adjuk ki a bútorokat – ez ritka a piacon.

## 4. Közvetlen kommunikáció

Nem kell üzeneteket közvetíteni egy eladón keresztül. Közvetlen kapcsolatban lehetsz a tervezőkkel és kivitelezőkkel – kérdés esetén 2 napon belül árajánlatot adunk.

## 5. Magyar munka támogatása

A hazai gyártás támogatása nemcsak gazdasági, hanem erkölcsi döntés is. Az Enzo Design Nagykanizsán, közel 20 éve gyárt egyedi kárpitozott bútorokat – helyi szakemberek munkájával, prémium anyagokból.`,
            },
            {
              type: "table",
              heading: "Összehasonlítás: gyártótól vs. bútorboltból",
              tableHead: "Szempont | Gyártótól | Bútorboltból",
              tableRows: [
                { cells: "Ár | Gyártói ár, felár nélkül | közvetítői felár beépítve" },
                { cells: "Egyediség | Teljes testreszabás | csak raktárkészletből" },
                { cells: "Garancia | 3 + 10 év | általában 1–2 év" },
                { cells: "Kommunikáció | Közvetlen a gyártóval | közvetítőn át" },
                { cells: "Élettartam | 20–30+ év tömörfával | átlagos, gyorsabb kopás" },
              ],
            },
            {
              type: "text",
              body: `A bútorboltok korlátozott kínálattal dolgoznak, míg az Enzo Design személyre szabott, egyedi bútorok készítésére képes – minden négyzetméternyi és minden szövettípusban, amit megálmodsz.`,
            },
            {
              type: "faq",
              heading: "GYIK – Gyártótól vásárlás",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
          { title: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
          { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
        ]}
        productLinks={[
          { label: "Egyedi bútor rendelés →", href: "/butoraink/egyedi-butor" },
          { label: "Összes kanapé →", href: "/butoraink/kanapek" },
        ]}
      />
    </>
  );
}
