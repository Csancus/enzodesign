import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsán – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Nagykanizsán: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. 2000 nm-es bemutatóterem, 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-nagykanizsán" },
  openGraph: {
    title: "Bútorbolt Nagykanizsán – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Nagykanizsán: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. 2000 nm-es bemutatóterem, 3+10 év garancia, online rendelés.",
    url: "https://enzodesign.hu/butorbolt-nagykanizsán",
    images: [{ url: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Enzo Design – Bútorbolt Nagykanizsán",
  "description": "Egyedi kárpitozott bútorok gyártója és forgalmazója Nagykanizsán. Kanapé, fotel, franciaágy tömörfa szerkezettel, 3+10 év garanciával.",
  "url": "https://enzodesign.hu/butorbolt-nagykanizsán",
  "telephone": "+36303778983",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Egry József utca 7",
    "addressLocality": "Nagykanizsa",
    "postalCode": "8800",
    "addressCountry": "HU"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kárpitozott bútorok",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chesterfield kanapé" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kárpitozott fotel" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kárpitozott franciaágy" } }
    ]
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityLandingPage
        city="Nagykanizsa"
        locative="Nagykanizsán"
        ablative="Nagykanizsáról"
        dative="Nagykanizsának"
        distanceKm={0}
        driveMin={0}
        slug="butorbolt-nagykanizsán"
        description="Az Enzo Design bemutatóterme közvetlenül Nagykanizsán található – 2000 nm-es showroomban személyesen is megtekintheted egyedi kárpitozott bútoraink teljes kínálatát. Kanapé, fotel, franciaágy tömörfa szerkezettel, 100+ szövetből, 3+10 év garanciával."
        neighborCities={[
          { name: "Zalaegerszeg", locative: "Zalaegerszegen", href: "/butorbolt-zalaegerszegen" },
          { name: "Keszthely", locative: "Keszthelyen", href: "/butorbolt-keszthelyen" },
          { name: "Marcali", locative: "Marcaliban", href: "/butorbolt-marcaliban" },
          { name: "Kaposvár", locative: "Kaposváron", href: "/butorbolt-kaposvaron" },
          { name: "Budapest", locative: "Budapesten", href: "/butorbolt-budapesten" },
        ]}
      />
    </>
  );
}
