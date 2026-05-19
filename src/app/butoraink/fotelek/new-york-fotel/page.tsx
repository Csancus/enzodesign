import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "New York Fotel" };
export default function Page() {
  return (
    <ProductPageTemplate
      name="New York Fotel"
      tagline="Klasszikus stílus"
      description="A New York fotel a klasszikus Chesterfield forma eleganciáját ötvözi modern letisztultsággal – minden enteriőrbe illik."
      image="https://static.wixstatic.com/media/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965~mv2.jpg"
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Klasszikus-modern stílus", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "New York Fotel", href: "/butoraink/fotelek/new-york-fotel" }]}
    />
  );
}
