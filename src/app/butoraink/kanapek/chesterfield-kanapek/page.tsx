import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "Chesterfield Kanapék" };

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="chesterfield-kanapek"
      name="Chesterfield Kanapék"
      tagline="A bútor, aminek történelme van"
      description="A Chesterfield kanapé az elegancia és a hagyomány szimbóluma. Közel 20 éve gyártunk Chesterfield bútorokat – mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal."
      image="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
      pricing={{
        fotel: { alap: 324380, bor: 421695 },
        ketSzemelyes: { alap: 399810, bor: 619750 },
        haromSzemelyes: { alap: 497890, bor: 847255 },
        sarok: { alap: 735515, bor: 1156170 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Mély gombolt háttámla", "Ívelt kartámaszok", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Chesterfield", href: "/butoraink/kanapek/chesterfield-kanapek" },
      ]}
    />
  );
}
