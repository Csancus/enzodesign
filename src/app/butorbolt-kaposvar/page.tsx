import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Kaposvár – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Kaposvár: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 52 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-kaposvar" },
  openGraph: {
    title: "Bútorbolt Kaposvár – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Kaposvár: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 52 km-re – 3+10 év garancia, online rendelés.",
    url: "https://enzodesign.hu/butorbolt-kaposvar",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Kaposvár",
  "description": "Bútorbolt Kaposvár: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 52 km-re – 3+10 év garancia, online rendelés.",
  "url": "https://enzodesign.hu/butorbolt-kaposvar",
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
    "name": "Kaposvár",
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
        city="Kaposvár"
        locative="Kaposváron"
        ablative="Kaposvárról"
        dative="Kaposvárnak"
        distanceKm={52}
        driveMin={45}
        slug="butorbolt-kaposvar"
        description="Bútorbolt Kaposvár: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 52 km-re – 3+10 év garancia, online rendelés."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszeg"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthely"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofok"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolca"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcali"}]}
      />
    </>
  );
}
