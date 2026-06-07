import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Chesterfield Fotel" };
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="chesterfield-fotel"
      name="Chesterfield Fotel"
      tagline="A bútor, aminek történelme van"
      description="Mélyen gombolt háttámla, jellegzetes ívelt kartámaszok – a Chesterfield fotel igazán karakteres, időtálló darab modern és klasszikus enteriőrbe egyaránt."
      image="/images/chesterfield-w4.webp"
      gallery={["/images/chesterfield-w4.webp", "/images/chesterfield-w1.webp", "/images/chesterfield-w2.webp", "/images/chesterfield-w3.webp"]}
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Mély gombolt háttámla", "Ívelt kartámaszok", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Chesterfield Fotel", href: "/butoraink/fotelek/chesterfield-fotel" }]}
    />
  );
}
