import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútor Keszthelyen – kárpitozott kanapé, fotel gyártótól",
  description: "Prémium kárpitozott bútort keresel Keszthely közelében? Az Enzo Design Nagykanizsán, 45 km-re – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Keszthelyig.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-keszthelyen" },
  openGraph: {
    title: "Bútor Keszthelyen – kárpitozott kanapé, fotel gyártótól",
    description: "Prémium kárpitozott bútort keresel Keszthely közelében? Az Enzo Design Nagykanizsán, 45 km-re – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Keszthelyig.",
    url: "https://enzodesign.hu/butorbolt-keszthelyen",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Keszthely",
  "description": "Prémium kárpitozott bútort keresel Keszthely közelében? Az Enzo Design Nagykanizsán, 45 km-re – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Keszthelyig.",
  "url": "https://enzodesign.hu/butorbolt-keszthelyen",
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
        ablative="Keszthelyről"
        dative="Keszthelyinek"
        distanceKm={45}
        driveMin={40}
        slug="butorbolt-keszthelyen"
        description="Prémium kárpitozott bútort keresel Keszthely közelében? Az Enzo Design Nagykanizsán, 45 km-re – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Keszthelyig."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszegen"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvaron"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofokon"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolcan"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcaliban"}]}
      />
    </>
  );
}
