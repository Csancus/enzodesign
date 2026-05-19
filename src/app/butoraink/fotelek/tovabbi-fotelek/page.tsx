import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = { title: "További Fotelek" };
export default function Page() {
  return (
    <ProductPageTemplate
      name="További Fotelek"
      tagline="Egyedi megoldások"
      description="Gombolt háttámlás modellek és modern letisztult tervek is elérhetők. Nézd végig a képeket, vagy küldj egy képet Pinterestről és mi elkészítjük neked. 82.820 Ft-tól."
      image="https://static.wixstatic.com/media/9a0b1d_13e53dff0c704be6b672061708d151e6~mv2.jpg"
      pricing={{ fotel: { alap: 82820 } }}
      features={["50.000 martindale szövet", "Gombolt háttámla variánsok", "Modern letisztult tervek", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "További Fotelek", href: "/butoraink/fotelek/tovabbi-fotelek" }]}
    />
  );
}
