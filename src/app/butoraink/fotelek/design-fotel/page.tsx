import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Design Fotel" };
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="design-fotel"
      name="Design Fotel"
      tagline="Modern minőség"
      description="A Design fotel modern formavilágával és letisztult vonalaival nem egy hagyományos bútordarab – egyedi személyiség, több száz szövetből."
      image="/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp"
      pricing={{ fotel: { alap: 82820, bor: 120000 } }}
      features={["50.000 martindale szövet", "Modern dizájn", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Design Fotel", href: "/butoraink/fotelek/design-fotel" }]}
    />
  );
}
