import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Tapolca – kanapé, fotel, ülőgarnitúra gyártótól",
  description: "Kanapé, fotel, ülőgarnitúra egyedi méretben Tapolcán és környékén, házhozszállítással a gyártótól. 100+ szövet, 3+10 év garancia, árajánlat 2 napon belül. Bemutatóterem Nagykanizsán, 58 km-re.",
  alternates: { canonical: "https://www.enzodesign.hu/butorbolt-tapolca" },
  openGraph: {
    title: "Bútorbolt Tapolca – kanapé, fotel, ülőgarnitúra gyártótól",
    description: "Kanapé, fotel, ülőgarnitúra egyedi méretben Tapolcán és környékén, házhozszállítással a gyártótól. 100+ szövet, 3+10 év garancia, árajánlat 2 napon belül. Bemutatóterem Nagykanizsán, 58 km-re.",
    url: "https://www.enzodesign.hu/butorbolt-tapolca",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Tapolca",
  "description": "Kanapé, fotel, ülőgarnitúra egyedi méretben Tapolcán és környékén, házhozszállítással a gyártótól. 100+ szövet, 3+10 év garancia, árajánlat 2 napon belül. Bemutatóterem Nagykanizsán, 58 km-re.",
  "url": "https://www.enzodesign.hu/butorbolt-tapolca",
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
        ablative="Tapolcától"
        dative="Tapolcának"
        distanceKm={58}
        driveMin={50}
        slug="butorbolt-tapolca"
        description="Kanapé, fotel, ülőgarnitúra egyedi méretben Tapolcán és környékén, házhozszállítással a gyártótól. 100+ szövet, 3+10 év garancia, árajánlat 2 napon belül. Bemutatóterem Nagykanizsán, 58 km-re."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszeg"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvar"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthely"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofok"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcali"}]}
      />
    </>
  );
}
