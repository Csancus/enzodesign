import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Szigetváron – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Szigetváron: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 65 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-szigetvaron" },
  openGraph: {
    title: "Bútorbolt Szigetváron – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Szigetváron: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 65 km-re – 3+10 év garancia, online rendelés.",
    url: "https://enzodesign.hu/butorbolt-szigetvaron",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Szigetvár",
  "description": "Kárpitozott kanapét, fotelt keresel Szigetvár közelében? Az Enzo Design Nagykanizsán, 65 km-re vár – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Szigetvárra.",
  "url": "https://enzodesign.hu/butorbolt-szigetvaron",
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
    "name": "Szigetvár",
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
        city="Szigetvár"
        locative="Szigetváron"
        ablative="Szigetvárról"
        dative="Szigetvárnak"
        distanceKm={65}
        driveMin={55}
        slug="butorbolt-szigetvaron"
        description="Kárpitozott kanapét, fotelt keresel Szigetvár közelében? Az Enzo Design Nagykanizsán, 65 km-re vár – egyedi méret, 100+ szövet, 3+10 év garancia. Szállítás Szigetvárra."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszegen"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvaron"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthelyen"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofokon"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolcan"}]}
      />
    </>
  );
}
