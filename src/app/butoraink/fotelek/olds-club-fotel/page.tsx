import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Old's Club Fotel – karakteres kárpitozott fotel",
  description: "Az Old's Club fotel karakteres eleganciájával és tömörfa szerkezetével évtizedekre szól. Prémium szövetek, egyedi méret, 3 év garancia – közvetlen gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/fotelek/olds-club-fotel" },
  openGraph: {
    title: "Old's Club Fotel – karakteres kárpitozott fotel | Enzo Design",
    description: "Karakteres elegancia, tömörfa szerkezet. Prémium szövetek, egyedi méret, 3 év garancia.",
    url: "https://enzodesign.hu/butoraink/fotelek/olds-club-fotel",
    images: [{ url: "/images/fotelek-w1.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="olds-club-fotel"
      name="Old's Club Fotel"
      tagline="Karakteres elegancia"
      description="Az Old's Club fotel letisztult formái és maximális funkcionalitása az elegancia és kényelem tökéletes szintézise."
      image="/images/olds-club-a5.webp"
      gallery={["/images/olds-club-a5.webp", "/images/olds-club-a1.webp", "/images/olds-club-a6.webp", "/images/olds-club-a4.webp", "/images/olds-club-a34.jpg", "/images/olds-club-a2.webp", "/images/olds-club-a3.webp", "/images/fotelek-w1.webp", "/images/olds-club-w5.webp", "/images/fotelek-w13.webp", "/images/fotelek-w17.webp"]}
      pricing={{ fotel: { alap: 360420, bor: 468545 } }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Old's Club Fotel", href: "/butoraink/fotelek/olds-club-fotel" }]}
    />
  );
}
