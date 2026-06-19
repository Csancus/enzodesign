import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Kaposvár – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Kaposvár: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 52 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-kaposvaron" },
  openGraph: {
    title: "Bútorbolt Kaposvár – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Kaposvár: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 52 km-re – 3+10 év garancia, online rendelés.",
    url: "https://enzodesign.hu/butorbolt-kaposvaron",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Kaposvár",
  "description": "Egyedi kárpitozott bútort keresel Kaposváron? Az Enzo Design Nagykanizsán, 52 km-re gyárt prémium kanapékat, fotelokat, franciaágyakat. Házhozszállítás Kaposvárra.",
  "url": "https://enzodesign.hu/butorbolt-kaposvaron",
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
        slug="butorbolt-kaposvaron"
        description="Egyedi kárpitozott bútort keresel Kaposváron? Az Enzo Design Nagykanizsán, 52 km-re gyárt prémium kanapékat, fotelokat, franciaágyakat. Házhozszállítás Kaposvárra."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszegen"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthelyen"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofokon"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolcan"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcaliban"}]}
      />
    </>
  );
}
