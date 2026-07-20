import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Keszthely – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Keszthely: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 45 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://www.enzodesign.hu/butorbolt-keszthely" },
  openGraph: {
    title: "Bútorbolt Keszthely – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Keszthely: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 45 km-re – 3+10 év garancia, online rendelés.",
    url: "https://www.enzodesign.hu/butorbolt-keszthely",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Keszthely",
  "description": "Bútorbolt Keszthely: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 45 km-re – 3+10 év garancia, online rendelés.",
  "url": "https://www.enzodesign.hu/butorbolt-keszthely",
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
    "name": "Keszthely",
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
        city="Keszthely"
        locative="Keszthelyen"
        ablative="Keszthelytől"
        dative="Keszthelyinek"
        distanceKm={45}
        driveMin={40}
        slug="butorbolt-keszthely"
        description="Bútorbolt Keszthely: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 45 km-re – 3+10 év garancia, online rendelés."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszeg"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvar"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofok"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolca"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcali"}]}
      />
    </>
  );
}
