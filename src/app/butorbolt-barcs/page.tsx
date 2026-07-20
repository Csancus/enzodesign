import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Barcs – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Barcs: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 60 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://www.enzodesign.hu/butorbolt-barcs" },
  openGraph: {
    title: "Bútorbolt Barcs – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Barcs: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 60 km-re – 3+10 év garancia, online rendelés.",
    url: "https://www.enzodesign.hu/butorbolt-barcs",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Barcs",
  "description": "Bútorbolt Barcs: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 60 km-re – 3+10 év garancia, online rendelés.",
  "url": "https://www.enzodesign.hu/butorbolt-barcs",
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
    "name": "Barcs",
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
        city="Barcs"
        locative="Barcson"
        ablative="Barcstól"
        dative="Barcsnak"
        distanceKm={60}
        driveMin={50}
        slug="butorbolt-barcs"
        description="Bútorbolt Barcs: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 60 km-re – 3+10 év garancia, online rendelés."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszeg"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvar"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthely"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofok"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolca"}]}
      />
    </>
  );
}
