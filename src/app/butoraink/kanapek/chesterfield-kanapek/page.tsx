import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCT_PRICING } from "@/lib/productPricing";

export const metadata: Metadata = {
  title: "Chesterfield Kanapé – tömörfa váz, szövet vagy bőr",
  description: "Kézzel gombolva, tömörfa szerkezettel. Chesterfield kanapé 2, 3 személyes és sarok kivitelben, 324 380 Ft-tól. Közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/kanapek/chesterfield-kanapek" },
  openGraph: {
    title: "Chesterfield Kanapé – tömörfa váz, szövet vagy bőr",
    description: "Kézzel gombolva, tömörfa szerkezettel. 2, 3 személyes és sarok kivitel, 324 380 Ft-tól.",
    url: "https://www.enzodesign.hu/butoraink/kanapek/chesterfield-kanapek",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="chesterfield-kanapek"
      name="Chesterfield Kanapék"
      tagline="A bútor, aminek történelme van"
      description="A Chesterfield kanapé az elegancia és a hagyomány szimbóluma. Közel 20 éve gyártunk Chesterfield bútorokat – mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal."
      image="/images/chesterfield-w1.webp"
      gallery={[
        "/images/chesterfield-a1.webp",
        "/images/chesterfield-a2.webp",
        "/images/chesterfield-a3.webp",
        "/images/chesterfield-a5.webp",
        "/images/chesterfield-enzo.webp",
        "/images/chesterfield-img1.webp",
        "/images/chesterfield-img2.webp",
        "/images/chesterfield-img3.webp",
        "/images/chesterfield-img4.webp",
        "/images/chesterfield-premier.webp",
        "/images/chesterfield-rover.webp",
        "/images/chesterfield-wales.webp",
        "/images/chesterfield-w1.webp",
        "/images/chesterfield-w2.webp",
        "/images/chesterfield-w3.webp",
        "/images/chesterfield-w4.webp",
        "/images/chesterfield-a4.webp",
      ]}
      pricing={PRODUCT_PRICING["chesterfield-kanapek"]}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Mély gombolt háttámla", "Ívelt kartámaszok", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Chesterfield", href: "/butoraink/kanapek/chesterfield-kanapek" },
      ]}
    />
  );
}
