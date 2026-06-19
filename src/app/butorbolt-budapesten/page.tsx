import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Budapest – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Budapest: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 220 km-re – 3+10 év garancia, online rendelés, házhozszállítás Budapestre.",
  alternates: { canonical: "https://enzodesign.hu/butorbolt-budapesten" },
  openGraph: {
    title: "Bútorbolt Budapest – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Budapest: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 220 km-re – 3+10 év garancia, online rendelés, házhozszállítás Budapestre.",
    url: "https://enzodesign.hu/butorbolt-budapesten",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kárpitozott bútor gyártás és szállítás – Budapest",
  "description": "Egyedi kárpitozott bútor Budapestre: kanapé, fotel, franciaágy tömörfa szerkezettel az Enzo Designtól. Online rendelés, házhozszállítás, 3+10 év garancia.",
  "url": "https://enzodesign.hu/butorbolt-budapesten",
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
    "name": "Budapest",
    "containedInPlace": { "@type": "Country", "name": "Hungary" }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kárpitozott bútorok",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chesterfield kanapé" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kárpitozott fotel" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kárpitozott franciaágy" } }
    ]
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityLandingPage
        city="Budapest"
        locative="Budapesten"
        ablative="Budapestről"
        dative="Budapestnek"
        distanceKm={220}
        driveMin={120}
        slug="butorbolt-budapesten"
        description="Egyedi kárpitozott bútort keresel Budapestre? Az Enzo Design Nagykanizsán gyárt prémium kanapékat, fotelokat, franciaágyakat – online rendelhetsz, házhozszállítás Budapestre, 3+10 év garancia."
        neighborCities={[
          { name: "Zalaegerszeg", locative: "Zalaegerszegen", href: "/butorbolt-zalaegerszegen" },
          { name: "Kaposvár", locative: "Kaposváron", href: "/butorbolt-kaposvaron" },
          { name: "Siófok", locative: "Siófokon", href: "/butorbolt-siofokon" },
          { name: "Keszthely", locative: "Keszthelyen", href: "/butorbolt-keszthelyen" },
          { name: "Nagykanizsa", locative: "Nagykanizsán", href: "/butorbolt-nagykanizsán" },
        ]}
      />
    </>
  );
}
