import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Kanapé Zalaegerszegen – minőségi bútor gyártótól",
  description: "Kényelmes, egyedi kanapét keresel Zalaegerszeg közelében? Az Enzo Design Nagykanizsán, 30 km-re vár – 2000 nm bemutatóterem, 100+ szövet, házhozszállítással.",

  alternates: { canonical: "https://enzodesign.hu/blog/kanape-zalaegerszegen" },
  openGraph: {
    title: "Kanapé Zalaegerszegen – minőségi bútor gyártótól",
    description: "Kényelmes, egyedi kanapét keresel Zalaegerszeg közelében? Az Enzo Design Nagykanizsán, 30 km-re vár – 2000 nm bemutatóterem, 100+ szövet, házhozszállítással.",
    url: "https://enzodesign.hu/blog/kanape-zalaegerszegen",
    images: [{ url: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", width: 1920, height: 800 }],
  },
};

const faqItems = [
  { question: "Kell-e előre bejelentkezni a bemutatóterembe?", answer: "Nem kötelező, de ajánlott, hogy biztosan legyen jelen szakemberünk. Hívjon minket az +36 30 377 8983-as számon." },
  { question: "Mit hozzak magammal a bemutatóterembe?", answer: "Érdemes hozni a szoba alaprajzát vagy méreteit, és ha van inspiráló képed, azt is – így pontosabb tanácsot tudunk adni." },
  { question: "Van lehetőség részletfizetésre?", answer: "Vegye fel a kapcsolatot velünk, és egyedi megállapodásban segítünk a legjobb megoldást megtalálni." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Kanapé Zalaegerszegen – minőségi bútor gyártótól",
    "description": "Kényelmes, egyedi kanapét keresel Zalaegerszeg közelében? Az Enzo Design Nagykanizsán, 30 km-re vár – 2000 nm bemutatóterem, 100+ szövet, házhozszállítással.",
    "image": "https://www.enzodesign.hu/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
    "datePublished": "2025-03-25",
    "dateModified": "2026-06-19",
    "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
    "url": "https://www.enzodesign.hu/blog/kanape-zalaegerszegen",
    "wordCount": 560,
    "articleSection": "Kanapé vásárlás",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/kanape-zalaegerszegen" },
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
        slug="kanape-zalaegerszegen"
        defaults={{
          category: "Kanapé vásárlás",
          title: "Kanapé Zalaegerszegen",
          date: "2025. június 1.",
          readTime: "3 perc olvasás",
          coverImage: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
          coverAlt: "Kanapé Zalaegerszegen – Enzo Design prémium bútorok Nagykanizsán",
          intro:
            "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – ez a döntés évekre meghatározza a nappalid hangulatát. Ha Zalaegerszegen keresel minőségi kanapét, az Enzo Design Nagykanizsán, 30 km-re várja.",
          blocks: [
            {
              type: "text",
              heading: "Milyen típusú kanapék közül válogathatsz?",
              body: `## Ágyazható kanapé

Kisebb lakásban ideális megoldás, ha vendégszoba nincs, de időnként vendégeket fogadsz. A modern ágyazható kanapék mechanizmusa megbízható és kényelmes fekvőfelületet biztosítanak. Az Enzo Design kínálatában több modell elérhető ágyazható kivitelben.

## Klasszikus fix kanapé

Ha nem szükséges az ágyazható funkció, a fix kanapé általában kényelmesebb ülőfelületet és stabilabb szerkezetet kínál. Ezek jellemzően mélyebb ülőrésszel és tartósabb rugózással készülnek.

## Sarokkanapé

Tágas nappaliba ideális, ahol maximálisan ki szeretnéd használni a teret. Az L- vagy U-alakú konfigurációk akár 5–7 személy számára is kényelmes ülőhelyet biztosítanak.`,
            },
            {
              type: "text",
              heading: "Mire érdemes figyelni kanapévásárlásakor?",
              body: `## Méret és elhelyezés

Mérd fel a szoba méretét vásárlás előtt. A kanapénak legalább 40–50 cm szabad helyet kell hagynia minden oldalán a mozgáshoz. A sarokkanapénál figyelj a kijáratokra és az egyéb bútorok elhelyezésére.

## Kárpit és anyaghasználat

A szövet kopásállóságát martindale-számmal mérik – legalább 50.000 értékig megbízható háztartási használatra. Kisgyermekes vagy kisállatos otthonban a mikroszálas vagy technikai szövet a legpraktikusabb. A valódi bőr elegáns és tartós, de gondosabb ápolást igényel.

## Funkciók

Ágyazható mechanizmus, ágyneműtartó, USB-töltő – ezek ma már praktikus kiegészítők. Döntsd el előre, mire van szükséged a mindennapokban.

## Hol vásárolj kanapét Zalaegerszeg közelében?

Az Enzo Design Nagykanizsán, mindössze 30 km-re található Zalaegerszegről. 2000 nm-es bemutatótermünkben személyesen megtekintheted és kipróbálhatod a modelleket. Legnépszerűbb modellek: Ivone, Old's Club és a Chesterfield kollekció.

## Szállítás Zalaegerszegre

Bútorainkat az első biztonságos ajtóig szállítjuk az ország bármely pontjára. A szállítást a gyártás befejezésekor – általában 4–6 héttel a megrendelés után – koordináljuk, és előre egyeztetünk a pontos időpontról.`,
            },
            {
              type: "faq",
              heading: "GYIK – Kanapévásárlás Zalaegerszeg közelében",
              faqItems,
            },
          ],
        }}
        related={[
          { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
          { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
        ]}
        productLinks={[
          { label: "Kanapék böngészése →", href: "/butoraink/kanapek" },
          { label: "Chesterfield kanapék →", href: "/butoraink/kanapek/chesterfield-kanapek" },
        ]}
      />
    </>
  );
}
