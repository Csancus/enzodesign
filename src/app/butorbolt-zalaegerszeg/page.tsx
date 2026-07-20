import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Zalaegerszeg – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Zalaegerszeg: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 30 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-zalaegerszeg" },
  openGraph: {
    title: "Bútorbolt Zalaegerszeg – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Zalaegerszeg: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 30 km-re – 3+10 év garancia, online rendelés.",
    url: "https://enzodesign.hu/butorbolt-zalaegerszeg",
    images: [{ url: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Zalaegerszeg",
  "description": "Bútorbolt Zalaegerszeg: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 30 km-re – 3+10 év garancia, online rendelés.",
  "url": "https://enzodesign.hu/butorbolt-zalaegerszeg",
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
    "name": "Zalaegerszeg",
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
        city="Zalaegerszeg"
        locative="Zalaegerszegen"
        ablative="Zalaegerszegtől"
        dative="Zalaegerszegnek"
        distanceKm={30}
        driveMin={30}
        slug="butorbolt-zalaegerszeg"
        description="Bútorbolt Zalaegerszeg: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 30 km-re – 3+10 év garancia, online rendelés."
        neighborCities={[{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvar"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthely"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofok"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolca"},{"name":"Marcali","locative":"Marcaliban","href":"/butorbolt-marcali"}]}
      />
    </>
  );
}
