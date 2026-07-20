import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsa – Egyedi kárpit bútor | Enzo Design",
  description: "Bútorbolt Nagykanizsa: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 0 km-re – 3+10 év garancia, online rendelés.",
  alternates: { canonical: "https://www.enzodesign.hu/butorbolt-nagykanizsa" },
  openGraph: {
    title: "Bútorbolt Nagykanizsa – Egyedi kárpit bútor | Enzo Design",
    description: "Bútorbolt Nagykanizsa: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, 0 km-re – 3+10 év garancia, online rendelés.",
    url: "https://www.enzodesign.hu/butorbolt-nagykanizsa",
    images: [{ url: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Enzo Design – Bútorbolt Nagykanizsa",
  "description": "Egyedi kárpitozott bútorok gyártója Nagykanizsán. Kanapé, fotel, franciaágy tömörfa szerkezettel.",
  "url": "https://www.enzodesign.hu/butorbolt-nagykanizsa",
  "telephone": "+36303778983",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Egry József utca 7",
    "addressLocality": "Nagykanizsa",
    "postalCode": "8800",
    "addressCountry": "HU"
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CityLandingPage
        city="Nagykanizsa"
        locative="Nagykanizsán"
        ablative="Nagykanizsától"
        dative="Nagykanizsának"
        distanceKm={0}
        driveMin={0}
        slug="butorbolt-nagykanizsa"
        description="Az Enzo Design bemutatóterme közvetlenül Nagykanizsán található – 2000 nm-es showroomban személyesen is megtekintheted egyedi kárpitozott bútoraink teljes kínálatát. Kanapé, fotel, franciaágy tömörfa szerkezettel, 100+ szövetből, 3+10 év garanciával."
        neighborCities={[{"name":"Zalaegerszeg","locative":"Zalaegerszegen","href":"/butorbolt-zalaegerszeg"},{"name":"Kaposvár","locative":"Kaposváron","href":"/butorbolt-kaposvar"},{"name":"Keszthely","locative":"Keszthelyen","href":"/butorbolt-keszthely"},{"name":"Siófok","locative":"Siófokon","href":"/butorbolt-siofok"},{"name":"Tapolca","locative":"Tapolcán","href":"/butorbolt-tapolca"}]}
      />
    </>
  );
}
