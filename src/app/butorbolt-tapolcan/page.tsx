import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Tapolcán – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Tapolcán: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 58 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-tapolcan" },
  openGraph: {
    title: "Bútorbolt Tapolcán – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Tapolcán: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 58 km-re – 3+10 év garancia, online rendelés.",
    url: "https://enzodesign.hu/butorbolt-tapolcan",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Tapolca",
  "description": "Kárpitozott kanapét, fotelt keresel Tapolca közelében? Az Enzo Design Nagykanizsán, 58 km-re vár – egyedi méret, tömörfa szerkezet, 3+10 év garancia.",
  "url": "https://enzodesign.hu/butorbolt-tapolcan",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Enzo Design",
    "url": "https://www.enzodesign.hu",
    "telephone": "+36303778983",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Egry József utca 7",
      "addressLocality": "Nagykanizsa",
      "postalCode": "8800",
      "addressCountry": "HU"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Tapolca",
    "containedInPlace": {
      "@type": "Country",
      "name": "Hungary"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kárpitozott bútorok",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Chesterfield kanapé"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Kárpitozott fotel"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Kárpitozott franciaágy"
        }
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityLandingPage
        city="Tapolca"
        locative="Tapolcán"
        ablative="Tapolcáról"
        dative="Tapolcának"
        distanceKm={58}
        driveMin={50}
        slug="butorbolt-tapolcan"
        description="Kárpitozott kanapét, fotelt keresel Tapolca közelében? Az Enzo Design Nagykanizsán, 58 km-re vár – egyedi méret, tömörfa szerkezet, 3+10 év garancia."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszegen"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvaron"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthelyen"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofokon"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcaliban"}]}
      />
    </>
  );
}
