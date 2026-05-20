import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "New York Kollekció" };
export default function Page() {
  return (
    <ProductPageTemplate
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
