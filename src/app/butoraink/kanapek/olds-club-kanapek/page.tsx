import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "Old's Club Kanapék" };

export default function Page() {
  return (
    <ProductPageTemplate
      name="Old's Club Kanapék"
      tagline="Karakteres elegancia"
      description="Az Old's Club kanapé letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. Széles ülőfelület, puha háttámla – ideális pihenéshez és vendégfogadáshoz. A sarokváltozat opcionális ágyneműtartóval is rendelhető."
      image="/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp"
      pricing={{
        fotel: { alap: 360420, bor: 468545 },
        ketSzemelyes: { alap: 444240, bor: 667510 },
        haromSzemelyes: { alap: 553210, bor: 919170 },
        sarok: { alap: 817240, bor: 1262412 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia", "Ágyneműtartó opció"]}
      gallery={[
        "/images/0e0445_26ed1417f8174764ab6d8d87944fae4f.webp",
        "/images/e7ad8b_3fa161a4e7b74434bff25cc640badfed.webp",
        "/images/e7ad8b_7d4917d9067047f4a03874f615da5103.webp",
        "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.webp",
        "/images/e7ad8b_3e850ebefb7f4de791cf4a4d08804eca.webp",
        "/images/d56f41_8730eebebb7849668031c3ee3fa5f624.webp",
        "/images/0e0445_c570567962c44821978fc817c4298c17.webp",
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
