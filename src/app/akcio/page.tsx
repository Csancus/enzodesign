import type { Metadata } from "next";
import Script from "next/script";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import PageHero from "@/components/PageHero";
import SaleProductsSection, { type SaleProduct } from "@/components/sections/SaleProductsSection";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Akciók – Enzo Design",
  description:
    "Aktuális akciós kárpitozott bútorok közvetlenül a gyártótól – Chesterfield kanapék, franciaágyak, fotelek kedvező áron.",
};

function buildProductSchema(products: SaleProduct[]) {
  return products.map((p) => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    name: p.name,
    image: [p.mainImage, p.image2, p.image3].filter(Boolean),
    offers: {
      "@type": "Offer",
      url: "https://www.enzodesign.hu/akcio",
      priceCurrency: "HUF",
      price: parseInt(p.salePrice, 10) || undefined,
      ...(p.saleEnds ? { priceValidUntil: p.saleEnds } : {}),
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Enzo Design" },
    },
  }));
}

const DEFAULT_PRODUCTS: SaleProduct[] = [
  {
    name: "Chesterfield kanapé – sötét szövet",
    badge: "CHESTERFIELD AKCIÓ",
    mainImage: "/images/chesterfield-w2.webp",
    image2: "/images/chesterfield-w3.webp",
    originalPrice: "553000",
    salePrice: "498000",
    saleEnds: "2026-07-31",
    href: "/butoraink/kanapek/chesterfield-kanapek",
  },
  {
    name: "Chesterfield kanapé – bézs szövet",
    badge: "CHESTERFIELD AKCIÓ",
    mainImage: "/images/chesterfield-w1.webp",
    image2: "/images/chesterfield-w4.webp",
    originalPrice: "498000",
    salePrice: "448000",
    saleEnds: "2026-07-31",
    href: "/butoraink/kanapek/chesterfield-kanapek",
  },
  {
    name: "Prémium zöld kanapé",
    badge: "SUPER SALE",
    mainImage: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp",
    originalPrice: "497890",
    salePrice: "368000",
    saleEnds: "2026-07-31",
  },
  {
    name: "Kárpitozott franciaágy",
    badge: "SUPER SALE",
    mainImage: "/images/franciaaggy-w1.webp",
    image2: "/images/franciaaggy-w2.webp",
    originalPrice: "392100",
    salePrice: "315000",
    saleEnds: "2026-07-31",
    href: "/butoraink/franciaagyak",
  },
  {
    name: "Lila fotel",
    badge: "SUPER SALE",
    mainImage: "/images/fotelek-w1.webp",
    originalPrice: "82820",
    salePrice: "75000",
    saleEnds: "2026-07-31",
    href: "/butoraink/fotelek",
  },
];

export default async function AkcioPage() {
  const isAdmin = await getAdminStatus();
  const saleCfg = await getModuleConfig("akcio:products");
  const products: SaleProduct[] =
    Array.isArray((saleCfg as { products?: SaleProduct[] })?.products) &&
    (saleCfg as { products?: SaleProduct[] }).products!.length > 0
      ? (saleCfg as { products: SaleProduct[] }).products
      : DEFAULT_PRODUCTS;

  const jsonLd = buildProductSchema(products);

  return (
    <>
      <Script
        id="akcio-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        moduleId="akcio:hero"
        defaults={{
          label: "Akciók",
          title: "Vásároljon közvetlenül a gyártótól!",
          subtitle: "Aktuálisan akciós kárpitozott bútoraink – limitált ideig, közvetlen gyártói áron.",
        }}
      />

      <SaleProductsSection moduleId="akcio:products" isAdmin={isAdmin} />

      <ContactFormSection />
    </>
  );
}
