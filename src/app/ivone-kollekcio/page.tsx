import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Ivone Kollekció" };
export default function Page() {
  return (
    <ProductPageTemplate
      name="Ivone Kollekció"
      tagline="Nappalid éke"
      description="A klasszikus elegancia és a modern kényelem tökéletes találkozása – ez az Ivone kollekció, amely minden nappalit egy stílusos, otthonos térré varázsol. A gyönyörűen steppelt háttámla és ülőfelület, valamint a gazdagon ívelt karfák az időtlen Chesterfield-stílus modern újraértelmezését kínálják."
      image="/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp"
      pricing={{ fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 677510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Steppelt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Ivone Kollekció", href: "/ivone-kollekcio" }]}
    />
  );
}
