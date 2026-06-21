import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "További Kárpitozott Fotelek – karfás modellek",
  description: "Karfás és egyedi kárpitozott fotelek gyűjteménye. Tömörfa szerkezet, nagy kopásállóságú szövetek – egyedi méretben, közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/fotelek/tovabbi-fotelek" },
  openGraph: {
    title: "További Kárpitozott Fotelek – karfás modellek | Enzo Design",
    description: "Karfás fotelek gyűjteménye. Tömörfa szerkezet, nagy kopásállóságú szövetek, egyedi méretben.",
    url: "https://enzodesign.hu/butoraink/fotelek/tovabbi-fotelek",
    images: [{ url: "/images/fotelek-w2.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="tovabbi-fotelek"
      name="További Fotelek"
      tagline="Egyedi megoldások"
      description="Gombolt háttámlás modellek és modern letisztult tervek is elérhetők. Nézd végig a képeket, vagy küldj egy képet Pinterestről és mi elkészítjük neked. 82.820 Ft-tól."
      image="/images/fotelek-a1.webp"
      gallery={["/images/fotelek-a1.webp", "/images/fotelek-a2.webp", "/images/fotelek-a3.webp", "/images/fotelek-a4.webp", "/images/fotelek-a5.webp", "/images/fotelek-a6.webp", "/images/fotelek-a7.webp", "/images/fotelek-a9.webp", "/images/fotelek-a10.webp", "/images/fotelek-a11.webp", "/images/fotelek-a12.webp", "/images/fotelek-a13.webp", "/images/fotelek-a14.webp", "/images/fotelek-a15.webp", "/images/fotelek-a16.webp", "/images/fotelek-a17.webp", "/images/fotelek-brighton.jpg", "/images/fotelek-cleo.jpg", "/images/fotelek-rover.jpg", "/images/fotelek-wales.jpg", "/images/fotelek-dsc1.jpg", "/images/fotelek-dsc2.jpg", "/images/fotelek-dsc3.jpg", "/images/fotelek-fb1.jpg", "/images/fotelek-img1.jpg", "/images/fotelek-w2.webp", "/images/fotelek-w3.webp", "/images/fotelek-w5.webp", "/images/fotelek-w6.webp"]}
      pricing={{ fotel: { alap: 82820 } }}
      features={["50.000 martindale szövet", "Gombolt háttámla variánsok", "Modern letisztult tervek", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "További Fotelek", href: "/butoraink/fotelek/tovabbi-fotelek" }]}
    />
  );
}
