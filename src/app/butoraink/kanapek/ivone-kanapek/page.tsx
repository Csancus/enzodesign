import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "Ivone Kanapék" };

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="ivone-kanapek"
      name="Ivone Kanapék"
      tagline="Nappalid éke"
      description="Az Ivone kanapé a klasszikus Chesterfield stílus modern újraértelmezése. Gyönyörűen steppelt háttámla és ülőfelület, íves kartámaszok – a modern elegancia megtestesítője. Több száz szövetből és bőrből rendelhető, tetszőleges méretben."
      image="/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp"
      pricing={{
        fotel: { alap: 360420, bor: 468545 },
        ketSzemelyes: { alap: 444240, bor: 677510 },
        haromSzemelyes: { alap: 553210, bor: 919170 },
        sarok: { alap: 817240, bor: 1262412 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Steppelt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Ivone", href: "/butoraink/kanapek/ivone-kanapek" },
      ]}
    />
  );
}
