import fs from "fs";
import path from "path";

const RENAME = [
  { old: "butorbolt-zalaegerszegen", new: "butorbolt-zalaegerszeg",  city: "Zalaegerszeg", locative: "Zalaegerszegen", ablative: "Zalaegerszegről", dative: "Zalaegerszegnek", distanceKm: 30, driveMin: 30, ogImage: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp" },
  { old: "butorbolt-kaposvaron",     new: "butorbolt-kaposvar",      city: "Kaposvár",     locative: "Kaposváron",     ablative: "Kaposvárról",     dative: "Kaposvárnak",     distanceKm: 52, driveMin: 45, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-keszthelyen",    new: "butorbolt-keszthely",     city: "Keszthely",    locative: "Keszthelyen",    ablative: "Keszthelyről",    dative: "Keszthelyinek",   distanceKm: 45, driveMin: 40, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-siofokon",       new: "butorbolt-siofok",        city: "Siófok",       locative: "Siófokon",       ablative: "Siófokról",       dative: "Siófoknak",       distanceKm: 74, driveMin: 60, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-tapolcan",       new: "butorbolt-tapolca",       city: "Tapolca",      locative: "Tapolcán",       ablative: "Tapolcáról",      dative: "Tapolcának",      distanceKm: 58, driveMin: 50, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-marcaliban",     new: "butorbolt-marcali",       city: "Marcali",      locative: "Marcaliban",     ablative: "Marcaliból",      dative: "Marcalinak",      distanceKm: 35, driveMin: 30, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-kormenden",      new: "butorbolt-kormend",       city: "Körmend",      locative: "Körmenden",      ablative: "Körmendről",      dative: "Körmendnek",      distanceKm: 62, driveMin: 55, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-barcson",        new: "butorbolt-barcs",         city: "Barcs",        locative: "Barcson",        ablative: "Barcsról",        dative: "Barcsnak",        distanceKm: 60, driveMin: 50, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-szigetvaron",    new: "butorbolt-szigetvar",     city: "Szigetvár",    locative: "Szigetváron",    ablative: "Szigetvárról",    dative: "Szigetvárnak",    distanceKm: 65, driveMin: 55, ogImage: "/images/chesterfield-w1.webp" },
  { old: "butorbolt-nagykanizsán",   new: "butorbolt-nagykanizsa",   city: "Nagykanizsa",  locative: "Nagykanizsán",   ablative: "Nagykanizsáról",  dative: "Nagykanizsának",  distanceKm: 0,  driveMin: 0,  ogImage: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp" },
  { old: "butorbolt-budapesten",     new: "butorbolt-budapest",      city: "Budapest",     locative: "Budapesten",     ablative: "Budapestről",     dative: "Budapestnek",     distanceKm: 220,driveMin: 120,ogImage: "/images/chesterfield-w1.webp" },
];

const BASE = "https://enzodesign.hu";
const SRC  = path.resolve("src/app");

// Neighbour map: for each new slug, pick 5 others
function neighbors(currentNew) {
  return RENAME.filter(c => c.new !== currentNew).slice(0, 5)
    .map(c => ({ name: c.city, locative: c.locative, href: `/${c.new}` }));
}

function jsonLd(c) {
  if (c.new === "butorbolt-nagykanizsa") {
    return {
      "@context": "https://schema.org",
      "@type": "FurnitureStore",
      name: "Enzo Design – Bútorbolt Nagykanizsa",
      description: "Egyedi kárpitozott bútorok gyártója Nagykanizsán. Kanapé, fotel, franciaágy tömörfa szerkezettel.",
      url: `${BASE}/${c.new}`,
      telephone: "+36303778983",
      address: { "@type": "PostalAddress", streetAddress: "Egry József utca 7", addressLocality: "Nagykanizsa", postalCode: "8800", addressCountry: "HU" },
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Kárpitozott bútor gyártás és szállítás – ${c.city}`,
    description: `Bútorbolt ${c.city}: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, ${c.distanceKm} km-re – 3+10 év garancia, online rendelés.`,
    url: `${BASE}/${c.new}`,
    provider: {
      "@type": "LocalBusiness", name: "Enzo Design", url: "https://www.enzodesign.hu", telephone: "+36303778983",
      address: { "@type": "PostalAddress", streetAddress: "Egry József utca 7", addressLocality: "Nagykanizsa", postalCode: "8800", addressCountry: "HU" }
    },
    areaServed: { "@type": "City", name: c.city, containedInPlace: { "@type": "Country", name: "Hungary" } },
    hasOfferCatalog: {
      "@type": "OfferCatalog", name: "Kárpitozott bútorok",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Chesterfield kanapé" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kárpitozott fotel" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kárpitozott franciaágy" } },
      ],
    },
  };
}

function description(c) {
  if (c.new === "butorbolt-nagykanizsa")
    return "Az Enzo Design bemutatóterme közvetlenül Nagykanizsán található – 2000 nm-es showroomban személyesen is megtekintheted egyedi kárpitozott bútoraink teljes kínálatát. Kanapé, fotel, franciaágy tömörfa szerkezettel, 100+ szövetből, 3+10 év garanciával.";
  if (c.new === "butorbolt-budapest")
    return `Egyedi kárpitozott bútort keresel Budapestre? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat, franciaágyakat – online rendelhetsz, házhozszállítás Budapestre, 3+10 év garancia.`;
  return `Bútorbolt ${c.city}: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, ${c.distanceKm} km-re – 3+10 év garancia, online rendelés.`;
}

for (const c of RENAME) {
  const dir = path.join(SRC, c.new);
  fs.mkdirSync(dir, { recursive: true });

  const metaDesc = `Bútorbolt ${c.city}: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, ${c.distanceKm} km-re – 3+10 év garancia, online rendelés.`;
  const metaTitle = `Bútorbolt ${c.city} – Egyedi kárpit bútor | Enzo Design`;
  const nc = JSON.stringify(neighbors(c.new));
  const ld = JSON.stringify(jsonLd(c), null, 2);
  const desc = description(c);

  const content = `import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "${metaTitle}",
  description: "${metaDesc}",
  alternates: { canonical: "${BASE}/${c.new}" },
  openGraph: {
    title: "${metaTitle}",
    description: "${metaDesc}",
    url: "${BASE}/${c.new}",
    images: [{ url: "${c.ogImage}", width: 1920, height: 800 }],
  },
};

const jsonLd = ${ld};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityLandingPage
        city="${c.city}"
        locative="${c.locative}"
        ablative="${c.ablative}"
        dative="${c.dative}"
        distanceKm={${c.distanceKm}}
        driveMin={${c.driveMin}}
        slug="${c.new}"
        description="${desc}"
        neighborCities={${nc}}
      />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content, "utf8");
  console.log(`Created: ${c.new}`);
}
