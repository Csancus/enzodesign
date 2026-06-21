import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Ivone Kanapé – steppelt kárpit, klasszikus forma",
  description: "Az Ivone kanapé jellegzetes steppelt kárpitjával és klasszikus vonalaival nappalid ékköve. Tömörfa váz, egyedi méret és szövetválasztás – közvetlen gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/kanapek/ivone-kanapek" },
  openGraph: {
    title: "Ivone Kanapé – steppelt kárpit, klasszikus forma | Enzo Design",
    description: "Steppelt kárpit, klasszikus vonalak. Tömörfa váz, egyedi méret és szövetválasztás.",
    url: "https://enzodesign.hu/butoraink/kanapek/ivone-kanapek",
    images: [{ url: "/images/ivone-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="ivone-kanapek"
      name="Ivone Kanapék"
      tagline="Nappalid éke"
      description="Az Ivone kanapé a klasszikus Chesterfield stílus modern újraértelmezése. Gyönyörűen steppelt háttámla és ülőfelület, íves kartámaszok – a modern elegancia megtestesítője. Több száz szövetből és bőrből rendelhető, tetszőleges méretben."
      image="/images/ivone-w1.webp"
      gallery={[
        "/images/ivone-a1.webp",
        "/images/ivone-dsc1.jpg",
        "/images/ivone-a7.webp",
        "/images/ivone-a8.webp",
        "/images/ivone-a5.webp",
        "/images/ivone-a9.webp",
        "/images/ivone-a6.webp",
        "/images/ivone-dsc2.jpg",
        "/images/ivone-a10.jpg",
        "/images/ivone-w1.webp",
        "/images/ivone-w2.webp",
        "/images/ivone-w5.webp",
        "/images/ivone-w6.webp",
        "/images/ivone-w7.webp",
        "/images/ivone-w8.webp",
        "/images/ivone-w9.webp",
      ]}
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
