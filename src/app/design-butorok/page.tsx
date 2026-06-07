import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Design Bútorok" };
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="design-butorok"
      name="Design Bútorok"
      tagline="Modern minőség"
      description="A Design kollekció modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz."
      image="/images/e7ad8b_d510cf607aca449c835d847344231393.webp"
      pricing={{ fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 677510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Modern dizájn", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Design Bútorok", href: "/design-butorok" }]}
    />
  );
}
