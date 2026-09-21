import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import { PRODUCT_PRICING } from "@/lib/productPricing";
export const metadata: Metadata = {
  title: "Joker Fotel – elegáns kárpitozott ülőbútor",
  description: "A Joker fotel elegáns megjelenésével és prémium kárpitjával tökéletes kiegészítő. Tömörfa váz, egyedi méret – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/fotelek/joker-fotel" },
  openGraph: {
    title: "Joker Fotel – elegáns kárpitozott ülőbútor",
    description: "Elegáns megjelenés, prémium kárpit. Tömörfa váz, egyedi méret és szövetválasztás.",
    url: "https://www.enzodesign.hu/butoraink/fotelek/joker-fotel",
    images: [{ url: "/images/joker-w1.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="joker-fotel"
      name="Joker Fotel"
      tagline="Elegáns bútor, bárhova"
      description="A Joker fotel prémium szövetborítással és gombolt háttámlával otthonod ékköve. Modern Chesterfield ihlette vonalak, maximális kényelem."
      image="/images/joker-w1.webp"
      gallery={["/images/joker-a1.webp", "/images/joker-a2.webp", "/images/joker-a3.webp", "/images/joker-a4.webp", "/images/joker-a5.webp", "/images/joker-w1.webp", "/images/joker-w2.webp", "/images/joker-w3.webp", "/images/joker-w4.webp"]}
      pricing={PRODUCT_PRICING["joker-fotel"]}
      features={["50.000 martindale szövet", "Gombolt háttámla", "Prémium bársony opció", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Joker Fotel", href: "/butoraink/fotelek/joker-fotel" }]}
    />
  );
}
