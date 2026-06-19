import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútor Körmenden – kárpitozott kanapé, fotel gyártótól",
  description: "Kárpitozott kanapét, fotelt keresel Körmend közelében? Az Enzo Design Nagykanizsán, 62 km-re gyárt egyedi bútorait. Házhozszállítás Körmendre, 3+10 év garancia.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-kormenden" },
  openGraph: {
    title: "Bútor Körmenden – kárpitozott kanapé, fotel gyártótól",
    description: "Kárpitozott kanapét, fotelt keresel Körmend közelében? Az Enzo Design Nagykanizsán, 62 km-re gyárt egyedi bútorait. Házhozszállítás Körmendre, 3+10 év garancia.",
    url: "https://enzodesign.hu/butorbolt-kormenden",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Körmend",
  "description": "Kárpitozott kanapét, fotelt keresel Körmend közelében? Az Enzo Design Nagykanizsán, 62 km-re gyárt egyedi bútorait. Házhozszállítás Körmendre, 3+10 év garancia.",
  "url": "https://enzodesign.hu/butorbolt-kormenden",
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
    "name": "Körmend",
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
        city="Körmend"
        locative="Körmenden"
        ablative="Körmendről"
        dative="Körmendnek"
        distanceKm={62}
        driveMin={55}
        slug="butorbolt-kormenden"
        description="Kárpitozott kanapét, fotelt keresel Körmend közelében? Az Enzo Design Nagykanizsán, 62 km-re gyárt egyedi bútorait. Házhozszállítás Körmendre, 3+10 év garancia."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszegen"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvaron"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthelyen"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofokon"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolcan"}]}
      />
    </>
  );
}
