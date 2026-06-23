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
    "Akciós egyedi bútor – bútorbolt Nagykanizsán, online rendelés. Chesterfield kanapék, fotelek, franciaágyak kedvező áron közvetlenül a gyártótól.",

  alternates: { canonical: "https://enzodesign.hu/akcio" },
  openGraph: {
    title: "Akciók – Enzo Design",
    description: "Aktuális akciós kárpitozott bútorok közvetlenül a gyártótól – Chesterfield kanapék, franciaágyak, fotelek kedvező áron.",
    url: "https://enzodesign.hu/akcio",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

function buildProductSchema(products: SaleProduct[]) {
  return products.map((p) => {
    const price = parseInt(p.salePrice, 10);
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: p.name,
      description: `Egyedi kárpitozott ${p.name} közvetlenül az Enzo Design gyártójától. Tömörfa szerkezetű, nagy kopásállóságú szövettel borított bútor, garanciával.`,
      image: [p.mainImage, p.image2, p.image3].filter(Boolean),
      brand: { "@type": "Brand", name: "Enzo Design" },
      offers: {
        "@type": "Offer",
        url: "https://www.enzodesign.hu/akcio",
        priceCurrency: "HUF",
        ...(price > 0 ? { price } : {}),
        ...(p.saleEnds ? { priceValidUntil: p.saleEnds } : {}),
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Enzo Design" },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "HUF" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "HU" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 6, unitCode: "WEE" },
          },
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "HU",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 14,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "12",
        bestRating: "5",
        worstRating: "1",
      },
      review: {
        "@type": "Review",
        author: { "@type": "Person", name: "Tóth Gábor" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Kedves, korrekt és rendkívül jó minőségű egyedi bútorok!!!! Csak ajánlani tudom!!!",
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

      {/* Link to full furniture catalogue */}
      <div className="bg-white py-8 text-center border-t border-gray-100">
        <p className="text-sm text-gray-500 mb-4">Több bútort keres? Nézze meg teljes kínálatunkat!</p>
        <a
          href="/butoraink"
          className="inline-block bg-[#1c1c1c] hover:bg-[#7d6142] text-white font-bold uppercase tracking-wider px-10 py-3 transition-colors text-xs"
        >
          Tovább a többi bútorhoz →
        </a>
      </div>

      <ContactFormSection />
    </>
  );
}
