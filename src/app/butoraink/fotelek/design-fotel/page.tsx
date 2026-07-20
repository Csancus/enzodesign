import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Design Fotel – modern kárpitozott ülőbútor",
  description: "Modern design fotel 82 820 Ft-tól, tömörfa szerkezettel és prémium kárpittal. Egyedi méret és szövetválasztás – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/fotelek/design-fotel" },
  openGraph: {
    title: "Design Fotel – modern kárpitozott ülőbútor | Enzo Design",
    description: "Modern design fotel 82 820 Ft-tól. Tömörfa váz, egyedi méret és szövetválasztás.",
    url: "https://www.enzodesign.hu/butoraink/fotelek/design-fotel",
    images: [{ url: "/images/design-w1.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="design-fotel"
      name="Design Fotel"
      tagline="Modern minőség"
      description="A Design fotel modern formavilágával és letisztult vonalaival nem egy hagyományos bútordarab – egyedi személyiség, több száz szövetből."
      image="/images/design-a1.webp"
      gallery={["/images/design-a1.webp", "/images/design-a3.webp", "/images/design-a4.webp", "/images/design-a5.webp", "/images/design-a6.webp", "/images/design-a7.webp", "/images/design-a2.webp", "/images/design-a26.jpg", "/images/design-a27bg.jpg", "/images/design-a28.jpg", "/images/design-a32bg.jpg", "/images/design-a33.jpg", "/images/design-extra1.jpg", "/images/design-dsc1.jpg", "/images/design-dsc2.jpg", "/images/design-fb1.jpg", "/images/design-fb2.jpg", "/images/design-img1.jpg"]}
      pricing={{ fotel: { alap: 82820, bor: 120000 } }}
      features={["50.000 martindale szövet", "Modern dizájn", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Design Fotel", href: "/butoraink/fotelek/design-fotel" }]}
    />
  );
}
