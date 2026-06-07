import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Old's Club Fotel" };
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="olds-club-fotel"
      name="Old's Club Fotel"
      tagline="Karakteres elegancia"
      description="Az Old's Club fotel letisztult formái és maximális funkcionalitása az elegancia és kényelem tökéletes szintézise."
      image="/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp"
      pricing={{ fotel: { alap: 360420, bor: 468545 } }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Old's Club Fotel", href: "/butoraink/fotelek/olds-club-fotel" }]}
    />
  );
}
