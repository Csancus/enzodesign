import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "New York Kanapék" };

export default function Page() {
  return (
    <ProductPageTemplate
      name="New York Kanapék"
      tagline="Klasszikus stílus"
      description="A New York kanapé a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Időtálló, kényelmes választás minden nappali számára. Személyre szabható szövettel, bőrrel és méretben."
      image="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
      pricing={{
        fotel: { alap: 324380, bor: 421695 },
        ketSzemelyes: { alap: 399810, bor: 619750 },
        haromSzemelyes: { alap: 497890, bor: 847255 },
        sarok: { alap: 735515, bor: 1156170 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Klasszikus-modern stílus", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "New York", href: "/butoraink/kanapek/new-york-kanapek" },
      ]}
    />
  );
}
