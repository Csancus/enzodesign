import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Old's Club Kollekció – Enzo Design",
  alternates: { canonical: "https://enzodesign.hu/olds-club-kollekcio" },
  openGraph: {
    title: "Old's Club Kollekció – Enzo Design",
    description: "Az Old's Club kollekció letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. 444.240 Ft-tól.",
    url: "https://enzodesign.hu/olds-club-kollekcio",
    images: [{ url: "/images/olds-club-w1.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="olds-club-kollekcio"
      name="Old's Club Kollekció"
      tagline="Karakteres elegancia"
      description="Az Old's Club kollekció letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. Elérhető fotelben, 2-es, 3-as kanapéban és sarokkanapéban."
      image="/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp"
      pricing={{ fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 667510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "Ágyneműtartó opció", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Old's Club Kollekció", href: "/olds-club-kollekcio" }]}
    />
  );
}
