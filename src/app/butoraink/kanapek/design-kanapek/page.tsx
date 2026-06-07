import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "Design Kanapék" };

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="design-kanapek"
      name="Design Kanapék"
      tagline="Modern minőség"
      description="A Design kanapé modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz. Tömörfa váz, prémium szivacs és rugórendszer – korszerű dizájn, maradandó minőség."
      image="/images/design-kanape.png"
      gallery={["/images/design-modul1.jpg", "/images/design-modul2.jpg", "/images/design-modul3.jpg", "/images/design-varia2a.jpg", "/images/design-varia2b.jpg", "/images/design-varia2c.jpg", "/images/design-varia2d.jpg"]}
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
