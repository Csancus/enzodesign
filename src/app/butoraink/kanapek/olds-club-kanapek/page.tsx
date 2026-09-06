import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Old's Club Kanapé – karakteres elegancia",
  description: "Az Old's Club kanapé karakteres, elegáns vonalaival és tömörfa szerkezetével évtizedekre szól. Egyedi méret, prémium szövetek – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/kanapek/olds-club-kanapek" },
  openGraph: {
    title: "Old's Club Kanapé – karakteres elegancia | Enzo Design",
    description: "Karakteres elegancia, tömörfa szerkezet. Egyedi méret, prémium szövetek.",
    url: "https://www.enzodesign.hu/butoraink/kanapek/olds-club-kanapek",
    images: [{ url: "/images/olds-club-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="olds-club-kanapek"
      name="Old's Club Kanapék"
      tagline="Karakteres elegancia"
      description="Az Old's Club kanapé letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. Széles ülőfelület, puha háttámla – ideális pihenéshez és vendégfogadáshoz. A sarokváltozat opcionális ágyneműtartóval is rendelhető."
      image="/images/olds-club-w1.webp"
      pricing={{
        fotel: { alap: 360420, bor: 468545 },
        ketSzemelyes: { alap: 444240, bor: 667510 },
        haromSzemelyes: { alap: 553210, bor: 919170 },
        sarok: { alap: 817240, bor: 1262412 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia", "Ágyneműtartó opció"]}
      gallery={[
        "/images/olds-club-a1.webp",
        "/images/olds-club-a6.webp",
        "/images/olds-club-a4.webp",
        "/images/olds-club-a34.webp",
        "/images/olds-club-a2.webp",
        "/images/olds-club-a3.webp",
        "/images/olds-club-w1.webp",
        "/images/olds-club-w2.webp",
        "/images/olds-club-w3.webp",
        "/images/olds-club-w4.webp",
        "/images/olds-club-w5.webp",
        "/images/olds-club-w6.webp",
        "/images/olds-club-bg.webp",
        "/images/olds-club-a5.webp",
      ]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Old's Club", href: "/butoraink/kanapek/olds-club-kanapek" },
      ]}
    />
  );
}
