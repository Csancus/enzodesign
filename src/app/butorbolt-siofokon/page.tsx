import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútor Siófokon – kárpitozott kanapé, fotel gyártótól",
  description: "Egyedi kárpitozott bútort keresel Siófokon? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat – szállítás Siófokra, 3+10 év garancia.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-siofokon" },
  openGraph: {
    title: "Bútor Siófokon – kárpitozott kanapé, fotel gyártótól",
    description: "Egyedi kárpitozott bútort keresel Siófokon? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat – szállítás Siófokra, 3+10 év garancia.",
    url: "https://enzodesign.hu/butorbolt-siofokon",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Siófok",
  "description": "Egyedi kárpitozott bútort keresel Siófokon? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat – szállítás Siófokra, 3+10 év garancia.",
  "url": "https://enzodesign.hu/butorbolt-siofokon",
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
    "name": "Siófok",
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
        city="Siófok"
        locative="Siófokon"
        ablative="Siófokról"
        dative="Siófoknak"
        distanceKm={74}
        driveMin={60}
        slug="butorbolt-siofokon"
        description="Egyedi kárpitozott bútort keresel Siófokon? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat – szállítás Siófokra, 3+10 év garancia."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszegen"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvaron"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthelyen"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolcan"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcaliban"}]}
      />
    </>
  );
}
