import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "New York Kanapé – klasszikus-modern bútor",
  description: "A New York kanapé ötvözi a klasszikus és modern stílust. Tömörfa váz, prémium szövetek és bőr, egyedi méretben – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/kanapek/new-york-kanapek" },
  openGraph: {
    title: "New York Kanapé – klasszikus-modern bútor | Enzo Design",
    description: "Klasszikus és modern stílus ötvözete. Tömörfa váz, prémium szövetek, egyedi méretben.",
    url: "https://enzodesign.hu/butoraink/kanapek/new-york-kanapek",
    images: [{ url: "/images/new-york-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="new-york-kanapek"
      name="New York Kanapék"
      tagline="Klasszikus stílus"
      description="A New York kanapé a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Időtálló, kényelmes választás minden nappali számára. Személyre szabható szövettel, bőrrel és méretben."
      image="/images/new-york-w1.webp"
      gallery={[
        "/images/new-york-a1.webp",
        "/images/new-york-a2.webp",
        "/images/new-york-a3.webp",
        "/images/new-york-a4.webp",
        "/images/new-york-a5.webp",
        "/images/new-york-a6.webp",
        "/images/new-york-a7.jpg",
        "/images/new-york-nc1.jpg",
        "/images/new-york-nc2.jpg",
        "/images/new-york-w1.webp",
        "/images/new-york-w2.webp",
        "/images/new-york-w3.webp",
        "/images/new-york-w4.webp",
        "/images/new-york-w5.webp",
        "/images/new-york-w6.webp",
      ]}
      pricing={{
        fotel: { alap: 324380, bor: 421695 },
        ketSzemelyes: { alap: 399810, bor: 619750 },
        haromSzemelyes: { alap: 497890, bor: 847255 },
        sarok: { alap: 735515, bor: 1156170 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Klasszikus-modern stílus", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "New York", href: "/butoraink/kanapek/new-york-kanapek" },
      ]}
    />
  );
}
