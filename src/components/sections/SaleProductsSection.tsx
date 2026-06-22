import EditBtn from "@/components/admin/EditBtn";
import SaleCardClient from "@/components/SaleCardClient";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef, SimpleField } from "@/types/cms";

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

const PRODUCT_FIELDS: SimpleField[] = [
  { key: "name", label: "Termék neve", type: "text" },
  { key: "badge", label: "Felirat (pl. CHESTERFIELD AKCIÓ)", type: "text" },
  { key: "mainImage", label: "Fő kép", type: "image" },
  { key: "image2", label: "2. kép (opcionális)", type: "image" },
  { key: "image3", label: "3. kép (opcionális)", type: "image" },
  { key: "originalPrice", label: "Eredeti ár (Ft)", type: "text" },
  { key: "salePrice", label: "Akciós ár (Ft)", type: "text" },
  { key: "saleEnds", label: "Akció vége (ÉÉÉÉ-HH-NN)", type: "text" },
  { key: "href", label: "Link URL (opcionális)", type: "url" },
];

const SCHEMA: FieldDef[] = [
  { key: "sectionTitle", label: "Szekció cím", type: "text" },
  { key: "products", label: "Akciós termékek", type: "array", itemFields: PRODUCT_FIELDS },
];


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
            <SaleCardClient key={i} product={p} />
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
