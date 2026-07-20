import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "New York Kollekció – Enzo Design",
  description: "New York kanapé és fotel egyedi méretben – bútorbolt Nagykanizsán, online rendelés. Modern Chesterfield ihlette bútor tömörfa szerkezettel, 399.810 Ft-tól.",
  alternates: { canonical: "https://www.enzodesign.hu/new-york-kollekcio" },
  openGraph: {
    title: "New York Kollekció – Enzo Design",
    description: "A New York kollekció a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Személyre szabható – 399.810 Ft-tól.",
    url: "https://www.enzodesign.hu/new-york-kollekcio",
    images: [{ url: "/images/new-york-w5.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="new-york-kollekcio"
      name="New York Kollekció"
      tagline="Klasszikus stílus"
      description="A New York kollekció a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Személyre szabható szövettel, bőrrel és méretben."
      image="/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp"
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Klasszikus-modern stílus", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "New York Kollekció", href: "/new-york-kollekcio" }]}
    />
  );
}
