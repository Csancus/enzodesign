import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "Old's Club Fotel" };
export default function Page() {
  return (
    <ProductPageTemplate
      name="Old's Club Fotel"
      tagline="Karakteres elegancia"
      description="Az Old's Club fotel letisztult formái és maximális funkcionalitása az elegancia és kényelem tökéletes szintézise."
      image="https://static.wixstatic.com/media/9a0b1d_13e53dff0c704be6b672061708d151e6~mv2.jpg"
      pricing={{ fotel: { alap: 360420, bor: 468545 } }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Old's Club Fotel", href: "/butoraink/fotelek/olds-club-fotel" }]}
    />
  );
}
