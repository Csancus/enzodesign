import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Chesterfield Kanapé – tömörfa váz, szövet vagy bőr",
  description: "Kézzel gombolva, tömörfa szerkezettel. Chesterfield kanapé 2, 3 személyes és sarok kivitelben, 324 380 Ft-tól. Közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/kanapek/chesterfield-kanapek" },
  openGraph: {
    title: "Chesterfield Kanapé – tömörfa váz, szövet vagy bőr | Enzo Design",
    description: "Kézzel gombolva, tömörfa szerkezettel. 2, 3 személyes és sarok kivitel, 324 380 Ft-tól.",
    url: "https://www.enzodesign.hu/butoraink/kanapek/chesterfield-kanapek",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="chesterfield-kanapek"
      name="Chesterfield Kanapék"
      tagline="A bútor, aminek történelme van"
      description="A Chesterfield kanapé az elegancia és a hagyomány szimbóluma. Közel 20 éve gyártunk Chesterfield bútorokat – mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal."
      image="/images/chesterfield-w1.webp"
      gallery={[
        "/images/chesterfield-a1.webp",
        "/images/chesterfield-a2.webp",
        "/images/chesterfield-a3.webp",
        "/images/chesterfield-a5.jpg",
        "/images/chesterfield-enzo.jpg",
        "/images/chesterfield-img1.jpg",
        "/images/chesterfield-img2.jpg",
        "/images/chesterfield-img3.jpg",
        "/images/chesterfield-img4.jpg",
        "/images/chesterfield-premier.jpg",
        "/images/chesterfield-rover.jpg",
        "/images/chesterfield-wales.jpg",
        "/images/chesterfield-w1.webp",
        "/images/chesterfield-w2.webp",
        "/images/chesterfield-w3.webp",
        "/images/chesterfield-w4.webp",
        "/images/chesterfield-a4.webp",
      ]}
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
