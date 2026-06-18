import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Design Kanapé – modern vonalak, prémium kárpit",
  description: "Modern design kanapék tömörfa szerkezettel és prémium kárpittal. 2, 3 személyes és sarok kivitel – egyedi méretben és szövettel, közvetlen gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/kanapek/design-kanapek" },
  openGraph: {
    title: "Design Kanapé – modern vonalak, prémium kárpit | Enzo Design",
    description: "Modern design kanapék tömörfa szerkezettel. Egyedi méret és szövetválasztás, közvetlen gyártótól.",
    url: "https://enzodesign.hu/butoraink/kanapek/design-kanapek",
    images: [{ url: "/images/design-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="design-kanapek"
      name="Design Kanapék"
      tagline="Modern minőség"
      description="A Design kanapé modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz. Tömörfa váz, prémium szivacs és rugórendszer – korszerű dizájn, maradandó minőség."
      image="/images/design-w1.webp"
      gallery={[
        "/images/design-w1.webp",
        "/images/design-w2.webp",
        "/images/design-w3.webp",
        "/images/design-w4.webp",
        "/images/design-w5.webp",
        "/images/design-w6.webp",
        "/images/design-w7.webp",
      ]}
      pricing={{
        fotel: { alap: 360420, bor: 468545 },
        ketSzemelyes: { alap: 444240, bor: 677510 },
        haromSzemelyes: { alap: 553210, bor: 919170 },
        sarok: { alap: 817240, bor: 1262412 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Modern dizájn", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Design", href: "/butoraink/kanapek/design-kanapek" },
      ]}
    />
  );
}
