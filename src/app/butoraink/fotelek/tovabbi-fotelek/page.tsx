import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "További Fotelek" };
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="tovabbi-fotelek"
      name="További Fotelek"
      tagline="Egyedi megoldások"
      description="Gombolt háttámlás modellek és modern letisztult tervek is elérhetők. Nézd végig a képeket, vagy küldj egy képet Pinterestről és mi elkészítjük neked. 82.820 Ft-tól."
      image="/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp"
      pricing={{ fotel: { alap: 82820 } }}
      features={["50.000 martindale szövet", "Gombolt háttámla variánsok", "Modern letisztult tervek", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "További Fotelek", href: "/butoraink/fotelek/tovabbi-fotelek" }]}
    />
  );
}
