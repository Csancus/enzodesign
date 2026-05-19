import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Ivone Kollekció" };
export default function Page() {
  return (
    <ProductPageTemplate
      name="Ivone Kollekció"
      tagline="Klasszikus elegancia és modern kényelem"
      description="Az Ivone kollekció a klasszikus Chesterfield stílus modern újraértelmezése. Gyönyörűen steppelt háttámla és ülőfelület, íves kartámaszok."
      image="/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp"
      pricing={{ fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 667510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Steppelt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Ivone Kollekció", href: "/ivone-kollekcio" }]}
    />
  );
}
