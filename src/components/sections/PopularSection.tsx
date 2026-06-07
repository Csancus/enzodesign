import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

type Product = {
  name: string;
  tagline: string;
  images: string[];
  href: string;
};

const DEFAULT: { title: string; subtitle: string; products: Product[] } = {
  title: "Legnépszerűbb bútoraink",
  subtitle: "Válassz jelenlegi termékeinkből vagy kérj egyedi ajánlatot",
  products: [
    { name: "Old's Club", tagline: "Fotel, kanapé, ágy, székek", images: ["/images/olds-club-kettes-kanape.png", "/images/olds-club-fotel.png"], href: "/butoraink/kanapek/olds-club-kanapek" },
    { name: "Ivone", tagline: "Fotel, kanapé, ágy, székek", images: ["/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp"], href: "/butoraink/kanapek/ivone-kanapek" },
    { name: "Chesterfield", tagline: "A bútor, melynek történelme van", images: ["/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"], href: "/butoraink/kanapek/chesterfield-kanapek" },
    { name: "Cannes-Nizza", tagline: "Egyik kedvelt darabunk", images: ["/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp"], href: "/butoraink/kanapek/cannes-kanapek" },
    { name: "Fotelek", tagline: "Bármilyen egyedi fotelt vagy széket elkészítünk", images: ["/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp"], href: "/butoraink/fotelek" },
    { name: "Étterem, hotel, üzleti bútorok", tagline: "Nagy teherbírású termékeink üzleti célokra is alkalmasak", images: ["/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
  { key: "products", label: "Termékek", type: "array", itemFields: [
    { key: "name", label: "Név", type: "text" },
    { key: "tagline", label: "Tagline", type: "text" },
    { key: "image", label: "Fő kép", type: "image" },
    { key: "href", label: "Link URL", type: "url" },
  ]},
];

function resolveImages(p: Record<string, unknown>): string[] {
  if (Array.isArray(p.images) && p.images.length > 0) {
    return (p.images as { src?: string; url?: string; image?: string }[])
      .map((img) => img.src ?? img.url ?? img.image ?? "")
      .filter(Boolean);
  }
  if (typeof p.image === "string" && p.image) return [p.image];
  return [];
}

export default async function PopularSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  const rawProducts = (cfg.products?.length ? cfg.products : DEFAULT.products) as unknown as Record<string, unknown>[];

  const products = rawProducts.map((p) => ({
    name: String(p.name ?? ""),
    tagline: String(p.tagline ?? p.desc ?? ""),
    images: resolveImages(p),
    href: String(p.href ?? "/butoraink"),
  }));

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#7d6142] text-center mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h2>
        <p className="text-center text-sm text-gray-500 mb-10">{cfg.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Link key={i} href={p.href} className="group block">
              <ProductImageCarousel images={p.images.length ? p.images : ["/images/logo.webp"]} alt={p.name} />
              <h3 className="text-[#b8924a] text-sm font-semibold group-hover:underline leading-snug">
                {p.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ title: cfg.title, subtitle: cfg.subtitle, products: products.map((p) => ({ name: p.name, tagline: p.tagline, image: p.images[0] ?? "", href: p.href })) }} schema={SCHEMA} />}
    </section>
  );
}
