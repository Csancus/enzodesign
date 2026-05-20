import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Joker Kollekció" };
export default function Page() {
  return (
    <ProductPageTemplate
      name="Joker Kollekció"
      tagline="Elegáns bútor, bárhova"
      description="A Joker kollekció finoman fénylő, prémium szövetborítással és mélyen gombolt háttámlával – modern Chesterfield ihlette vonalakkal."
      image="/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp"
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Prémium bársony opció", "Gombolt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Joker Kollekció", href: "/joker-kollekcio" }]}
    />
  );
}
