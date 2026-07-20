import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Chesterfield Kollekció – Enzo Design",
  description: "Chesterfield kanapé és fotel egyedi méretben – bútorbolt Nagykanizsán, online rendelés. Tömörfa szerkezet, 50.000 martindale szövet, 399.810 Ft-tól.",
  alternates: { canonical: "https://www.enzodesign.hu/chesterfield-kollekcio" },
  openGraph: {
    title: "Chesterfield Kollekció – Enzo Design",
    description: "Közel 20 éve gyártunk Chesterfield bútorokat tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal. Az elegancia szimbóluma – 399.810 Ft-tól.",
    url: "https://www.enzodesign.hu/chesterfield-kollekcio",
    images: [{ url: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="chesterfield-kollekcio"
      name="Chesterfield Kollekció"
      tagline="A bútor, aminek történelme van"
      description="Közel 20 éve gyártunk Chesterfield bútorokat tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal. Az elegancia és hagyomány szimbóluma."
      image="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Mély gombolt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Chesterfield Kollekció", href: "/chesterfield-kollekcio" }]}
    />
  );
}
