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
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Old's Club", href: "/butoraink/kanapek/olds-club-kanapek" },
      ]}
    />
  );
}
