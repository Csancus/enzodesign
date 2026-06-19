import fs from "fs";
import path from "path";

const BASE = "https://enzodesign.hu";
const SRC = path.resolve("src/app");

const CITIES = [
  {
    slug: "butorbolt-zalaegerszegen",
    city: "Zalaegerszeg",
    locative: "Zalaegerszegen",
    ablative: "Zalaegerszegről",
    dative: "Zalaegerszegnek",
    distanceKm: 30,
    driveMin: 30,
    title: "Bútor Zalaegerszegen – kárpitozott kanapé, fotel gyártótól",
    description:
      "Kényelmes, egyedi kárpitozott bútort keresel Zalaegerszegen? Az Enzo Design Nagykanizsán, mindössze 30 km-re várja vásárlóit – 2000 nm bemutatóterem, 100+ szövet, házhozszállítás.",
    ogImage: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
  },
  {
    slug: "butorbolt-kaposvaron",
    city: "Kaposvár",
    locative: "Kaposváron",
    ablative: "Kaposvárról",
    dative: "Kaposvárnak",
    distanceKm: 52,
    driveMin: 45,
    title: "Bútor Kaposváron – kárpitozott kanapé, fotel gyártótól",
    description:
      "Egyedi kárpitozott bútort keresel Kaposváron? Az Enzo Design Nagykanizsán, 52 km-re gyárt prémium kanapékat, fotelokat, franciaágyakat. Házhozszállítás Kaposvárra.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-keszthelyen",
    city: "Keszthely",
    locative: "Keszthelyen",
    ablative: "Keszthelyről",
    dative: "Keszthelyinek",
    distanceKm: 45,
    driveMin: 40,
    title: "Bútor Keszthelyen – kárpitozott kanapé, fotel gyártótól",
    description:
      "Prémium kárpitozott bútort keresel Keszthely közelében? Az Enzo Design Nagykanizsán, 45 km-re – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Keszthelyig.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-siofokon",
    city: "Siófok",
    locative: "Siófokon",
    ablative: "Siófokról",
    dative: "Siófoknak",
    distanceKm: 74,
    driveMin: 60,
    title: "Bútor Siófokon – kárpitozott kanapé, fotel gyártótól",
    description:
      "Egyedi kárpitozott bútort keresel Siófokon? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat – szállítás Siófokra, 3+10 év garancia.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-tapolcan",
    city: "Tapolca",
    locative: "Tapolcán",
    ablative: "Tapolcáról",
    dative: "Tapolcának",
    distanceKm: 58,
    driveMin: 50,
    title: "Bútor Tapolcán – kárpitozott kanapé, fotel gyártótól",
    description:
      "Kárpitozott kanapét, fotelt keresel Tapolca közelében? Az Enzo Design Nagykanizsán, 58 km-re vár – egyedi méret, tömörfa szerkezet, 3+10 év garancia.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-marcaliban",
    city: "Marcali",
    locative: "Marcaliban",
    ablative: "Marcaliból",
    dative: "Marcalinak",
    distanceKm: 35,
    driveMin: 30,
    title: "Bútor Marcaliban – kárpitozott kanapé, fotel gyártótól",
    description:
      "Prémium kárpitozott bútort keresel Marcaliban? Az Enzo Design Nagykanizsán, 35 km-re – kanapé, fotel, franciaágy egyedi méretben. Szállítás Marcaliba.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-kormenden",
    city: "Körmend",
    locative: "Körmenden",
    ablative: "Körmendről",
    dative: "Körmendnek",
    distanceKm: 62,
    driveMin: 55,
    title: "Bútor Körmenden – kárpitozott kanapé, fotel gyártótól",
    description:
      "Kárpitozott kanapét, fotelt keresel Körmend közelében? Az Enzo Design Nagykanizsán, 62 km-re gyárt egyedi bútorait. Házhozszállítás Körmendre, 3+10 év garancia.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-barcson",
    city: "Barcs",
    locative: "Barcson",
    ablative: "Barcsról",
    dative: "Barcsnak",
    distanceKm: 60,
    driveMin: 50,
    title: "Bútor Barcson – kárpitozott kanapé, fotel gyártótól",
    description:
      "Egyedi kárpitozott bútort keresel Barcson? Az Enzo Design Nagykanizsán, 60 km-re – prémium kanapé, fotel, franciaágy tömörfa szerkezettel. Szállítás Barcsra.",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    slug: "butorbolt-szigetvaron",
    city: "Szigetvár",
    locative: "Szigetváron",
    ablative: "Szigetvárról",
    dative: "Szigetvárnak",
    distanceKm: 65,
    driveMin: 55,
    title: "Bútor Szigetváron – kárpitozott kanapé, fotel gyártótól",
    description:
      "Kárpitozott kanapét, fotelt keresel Szigetvár közelében? Az Enzo Design Nagykanizsán, 65 km-re vár – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Szigetvárra.",
    ogImage: "/images/chesterfield-w1.webp",
  },
];

function buildNeighbors(currentSlug) {
  return CITIES.filter((c) => c.slug !== currentSlug)
    .slice(0, 5)
    .map((c) => ({ name: c.city, locative: c.locative, href: `/${c.slug}` }));
}

function buildJsonLd(city) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Kárpitozott bútor gyártás és szállítás – ${city.city}`,
    description: city.description,
    url: `${BASE}/${city.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Enzo Design",
      url: "https://www.enzodesign.hu",
      telephone: "+36303778983",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Egry József utca 7",
        addressLocality: "Nagykanizsa",
        postalCode: "8800",
        addressCountry: "HU",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: { "@type": "Country", name: "Hungary" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kárpitozott bútorok",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Chesterfield kanapé" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kárpitozott fotel" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kárpitozott franciaágy" } },
      ],
    },
  };
}

function buildPage(city) {
  const neighbors = buildNeighbors(city.slug);
  const neighborsStr = JSON.stringify(neighbors)
    .replace(/"/g, '"')
    .replace(/^\[/, "[\n    ")
    .replace(/\]$/, "\n  ]")
    .replace(/\{/g, "{ ")
    .replace(/\}/g, " }")
    .replace(/,(?=")/g, ", ");

  const jsonLd = JSON.stringify(buildJsonLd(city), null, 2);

  return `import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "${city.title}",
  description: "${city.description}",
  alternates: { canonical: "${BASE}/${city.slug}" },
  openGraph: {
    title: "${city.title}",
    description: "${city.description}",
    url: "${BASE}/${city.slug}",
    images: [{ url: "${city.ogImage}", width: 1920, height: 800 }],
  },
};

const jsonLd = ${jsonLd};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityLandingPage
        city="${city.city}"
        locative="${city.locative}"
        ablative="${city.ablative}"
        dative="${city.dative}"
        distanceKm={${city.distanceKm}}
        driveMin={${city.driveMin}}
        slug="${city.slug}"
        description="${city.description}"
        neighborCities={${JSON.stringify(neighbors)}}
      />
    </>
  );
}
`;
}

let created = 0;
for (const city of CITIES) {
  const dir = path.join(SRC, city.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "page.tsx");
  fs.writeFileSync(file, buildPage(city), "utf8");
  console.log(`Created: src/app/${city.slug}/page.tsx`);
  created++;
}

// Update sitemap
const sitemapPath = path.resolve("src/app/sitemap.ts");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapEntries = CITIES.map(
  (c) => `  { url: "/${c.slug}", priority: 0.8, changeFrequency: "monthly" },`
).join("\n");

if (!sitemap.includes(CITIES[0].slug)) {
  sitemap = sitemap.replace(
    `  { url: "/akcio", priority: 0.8, changeFrequency: "weekly" },`,
    `  { url: "/akcio", priority: 0.8, changeFrequency: "weekly" },\n${sitemapEntries}`
  );
  fs.writeFileSync(sitemapPath, sitemap, "utf8");
  console.log("\nSitemap updated.");
}

console.log(`\nDone: ${created} city pages created.`);
