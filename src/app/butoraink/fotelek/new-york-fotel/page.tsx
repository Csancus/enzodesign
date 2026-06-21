import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "New York Fotel – klasszikus-modern kárpit",
  description: "A New York fotel a klasszikus és modern stílus ötvözete. Tömörfa váz, prémium szövetek, egyedi méretben – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/fotelek/new-york-fotel" },
  openGraph: {
    title: "New York Fotel – klasszikus-modern kárpit | Enzo Design",
    description: "Klasszikus-modern stílus, tömörfa váz. Prémium szövetek, egyedi méretben.",
    url: "https://enzodesign.hu/butoraink/fotelek/new-york-fotel",
    images: [{ url: "/images/new-york-w5.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="new-york-fotel"
      name="New York Fotel"
      tagline="Klasszikus stílus"
      description="A New York fotel a klasszikus Chesterfield forma eleganciáját ötvözi modern letisztultsággal – minden enteriőrbe illik."
      image="/images/new-york-w5.webp"
      gallery={["/images/new-york-a1.webp", "/images/new-york-a2.webp", "/images/new-york-a3.webp", "/images/new-york-a4.webp", "/images/new-york-a5.webp", "/images/new-york-a6.webp", "/images/new-york-a7.jpg", "/images/new-york-nc1.jpg", "/images/new-york-nc2.jpg", "/images/new-york-w5.webp", "/images/new-york-w3.webp", "/images/new-york-w1.webp", "/images/new-york-w4.webp"]}
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Klasszikus-modern stílus", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "New York Fotel", href: "/butoraink/fotelek/new-york-fotel" }]}
    />
  );
}
