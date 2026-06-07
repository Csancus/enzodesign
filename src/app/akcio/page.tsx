import type { Metadata } from "next";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import PageHero from "@/components/PageHero";
import SaleProductsSection, {
  type SaleProduct,
  DEFAULT_PRODUCTS,
} from "@/components/sections/SaleProductsSection";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Akciók – Enzo Design",
  description:
    "Aktuális akciós kárpitozott bútorok közvetlenül a gyártótól – Chesterfield kanapék, franciaágyak, fotelek kedvező áron.",
};

function buildProductSchema(products: SaleProduct[]) {
  return products.map((p) => {
    const price = parseInt(p.salePrice, 10);
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: p.name,
      image: [p.mainImage, p.image2, p.image3].filter(Boolean),
      offers: {
        "@type": "Offer",
        url: "https://www.enzodesign.hu/akcio",
        priceCurrency: "HUF",
        ...(price > 0 ? { price } : {}),
        ...(p.saleEnds ? { priceValidUntil: p.saleEnds } : {}),
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Enzo Design" },
      },
    };
  });
}

export default async function AkcioPage() {
  const isAdmin = await getAdminStatus();
  const saleCfg = await getModuleConfig("akcio:products");
  const storedProducts = (saleCfg as { products?: SaleProduct[] })?.products;
  const products: SaleProduct[] =
    Array.isArray(storedProducts) && storedProducts.length > 0
      ? storedProducts
      : DEFAULT_PRODUCTS;

  const jsonLd = buildProductSchema(products);

  return (
    <>
      {/* JSON-LD as inline script — rendered in HTML directly, no JS loading delay */}
      <script
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
