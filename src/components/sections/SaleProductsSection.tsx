import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { getModuleConfig } from "@/lib/moduleStore";
import { formatPrice } from "@/data/products";
import type { FieldDef } from "@/types/cms";

export type SaleProduct = {
  name: string;
  badge?: string;
  mainImage: string;
  image2?: string;
  image3?: string;
  originalPrice: string;
  salePrice: string;
  saleEnds?: string;
  href?: string;
};

export const DEFAULT_PRODUCTS: SaleProduct[] = [
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

const DEFAULT_CONFIG = {
  sectionTitle: "Aktuális akciók",
  products: DEFAULT_PRODUCTS,
};

const PRODUCT_FIELDS: FieldDef[] = [
  { key: "name", label: "Termék neve", type: "text" },
  { key: "badge", label: "Felirat (pl. CHESTERFIELD AKCIÓ)", type: "text" },
  { key: "mainImage", label: "Fő kép", type: "image" },
  { key: "image2", label: "2. kép (opcionális)", type: "image" },
  { key: "image3", label: "3. kép (opcionális)", type: "image" },
  { key: "originalPrice", label: "Eredeti ár (Ft)", type: "text" },
  { key: "salePrice", label: "Akciós ár (Ft)", type: "text" },
  { key: "saleEnds", label: "Akció vége (ÉÉÉÉ-HH-NN)", type: "text" },
  { key: "href", label: "Link (opcionális)", type: "text" },
];

const SCHEMA: FieldDef[] = [
  { key: "sectionTitle", label: "Szekció cím", type: "text" },
  { key: "products", label: "Akciós termékek", type: "array", itemFields: PRODUCT_FIELDS },
];

function daysLeft(isoDate: string): number | null {
  const end = new Date(isoDate);
  if (isNaN(end.getTime())) return null;
  const now = new Date();
  return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function SaleCard({ product }: { product: SaleProduct }) {
  const images = [product.mainImage, product.image2, product.image3].filter(Boolean) as string[];
  const origPrice = parseInt(product.originalPrice, 10);
  const salePrice = parseInt(product.salePrice, 10);
  const discount = origPrice > 0 && salePrice > 0 ? Math.round((1 - salePrice / origPrice) * 100) : 0;
  const days = product.saleEnds ? daysLeft(product.saleEnds) : null;

  const inner = (
    <div className="bg-white border border-gray-200 overflow-hidden group flex flex-col h-full">
      <div className="relative">
        <ProductImageCarousel images={images} alt={product.name} />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
            -{discount}%
          </span>
        )}
        {product.badge && (
          <span className="absolute top-2 right-2 bg-[#1c1c1c]/80 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#1c1c1c] mb-3 text-sm leading-snug">{product.name}</h3>
        <div className="mt-auto">
          {!isNaN(origPrice) && (
            <p className="text-gray-400 line-through text-sm mb-0.5">
              {formatPrice(origPrice)}
            </p>
          )}
          {!isNaN(salePrice) && (
            <p className="text-2xl font-bold text-red-600 mb-2">
              {formatPrice(salePrice)}
            </p>
          )}
          {days !== null && days > 0 && (
            <p className="text-xs text-gray-500 mb-3">
              Akció: még {days} nap ({product.saleEnds})
            </p>
          )}
          {days !== null && days <= 0 && (
            <p className="text-xs text-red-400 mb-3">Az akció lejárt</p>
          )}
          {product.href && (
            <span className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors">
              Megnézem →
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (product.href) {
    return <Link href={product.href} className="block h-full">{inner}</Link>;
  }
  return inner;
}

export default async function SaleProductsSection({
  moduleId,
  isAdmin,
}: {
  moduleId: string;
  isAdmin: boolean;
}) {
  const stored = await getModuleConfig(moduleId);
  const cfg = stored
    ? { ...DEFAULT_CONFIG, ...(stored as typeof DEFAULT_CONFIG) }
    : DEFAULT_CONFIG;

  const products: SaleProduct[] =
    Array.isArray(cfg.products) && cfg.products.length > 0
      ? cfg.products
      : DEFAULT_PRODUCTS;

  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.sectionTitle || DEFAULT_CONFIG.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <SaleCard key={i} product={p} />
          ))}
        </div>
      </div>
      {isAdmin && (
        <EditBtn
          moduleId={moduleId}
          config={cfg as unknown as Record<string, unknown>}
          schema={SCHEMA}
          label="✏ Akciók szerkesztése"
        />
      )}
    </section>
  );
}
