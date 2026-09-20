import EditBtn from "@/components/admin/EditBtn";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import TrackedLink from "@/components/TrackedLink";

type Product = {
  name: string;
  alt?: string;
  tagline: string;
  price: string;
  images: string[];
  href: string;
};

const DEFAULT: { title: string; subtitle: string; products: Product[] } = {
  title: "Legnépszerűbb bútoraink",
  subtitle: "Válassz jelenlegi termékeinkből vagy kérj egyedi ajánlatot",
  products: [
    {
      name: "Old's Club",
      alt: "Barna bőr Old's Club kétszemélyes kanapé gombolt háttámlával",
      tagline: "Fotel, kanapé, ágy, székek",
      price: "2-es kanapé 444 240 Ft-tól",
      images: ["/images/popular-olds-club.webp", "/images/olds-club-w1.webp", "/images/olds-club-w2.webp"],
      href: "/butoraink/kanapek/olds-club-kanapek",
    },
    {
      name: "Ivone",
      alt: "Bézs Ivone kanapé és fotel világos, napfényes nappaliban",
      tagline: "Fotel, kanapé, ágy, székek",
      price: "2-es kanapé 444 240 Ft-tól",
      images: ["/images/popular-ivone.webp", "/images/ivone-w1.webp", "/images/ivone-w5.webp"],
      href: "/butoraink/kanapek/ivone-kanapek",
    },
    {
      name: "Chesterfield",
      alt: "Púderrózsaszín bársony Chesterfield kanapé és fotel napfényes szalonban",
      tagline: "A bútor, melynek történelme van",
      price: "2-es kanapé 399 000 Ft-tól",
      images: ["/images/popular-chesterfield.webp", "/images/chesterfield-w1.webp", "/images/chesterfield-w2.webp"],
      href: "/butoraink/kanapek/chesterfield-kanapek",
    },
    {
      name: "Cannes-Nizza",
      alt: "Zöld Cannes sarokkanapé állítható fejtámlákkal",
      tagline: "Egyik kedvelt darabunk",
      price: "Sarokkanapé 367 340 Ft-tól",
      images: ["/images/popular-cannes.webp", "/images/cannes-w1.webp", "/images/cannes-w2.webp"],
      href: "/butoraink/kanapek/cannes-kanapek",
    },
    {
      name: "Fotelek",
      alt: "Lila bársony klubfotel, egyedi szövettel",
      tagline: "Bármilyen egyedi fotelt vagy széket elkészítünk",
      price: "Fotelek 82 820 Ft-tól",
      images: ["/images/popular-fotelek.webp", "/images/fotelek-w1.webp"],
      href: "/butoraink/fotelek",
    },
    {
      name: "Étterem, hotel, üzleti bútorok",
      alt: "Bézs kárpitozott székek kerek asztal körül, vendéglátóipari bútor",
      tagline: "Nagy teherbírású termékeink üzleti célokra is alkalmasak",
      price: "Éttermi székek 76 200 Ft-tól",
      images: ["/images/popular-uzleti.webp", "/images/uzleti-w1.webp", "/images/uzleti-w2.webp"],
      href: "/karpitozott-butor-uzleti-ugyfeleknek",
    },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
  {
    key: "products",
    label: "Termékek",
    type: "array",
    itemFields: [
      { key: "name", label: "Név", type: "text" },
      { key: "alt", label: "Kép alt szövege (mit ábrázol a fotó)", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "price", label: "Ár szöveg (pl. 2-es kanapé 444 240 Ft-tól)", type: "text" },
      { key: "href", label: "Link URL", type: "url" },
      {
        key: "images",
        label: "Képek (több is lehet, lapozható)",
        type: "array",
        itemFields: [{ key: "src", label: "Kép", type: "image" }],
      },
    ],
  },
];

function resolveImages(p: Record<string, unknown>): string[] {
  if (Array.isArray(p.images) && p.images.length > 0) {
    return (p.images as unknown[]).flatMap((img): string[] => {
      if (typeof img === "string" && img) return [img];
      if (typeof img === "object" && img !== null) {
        const o = img as { src?: string; url?: string; image?: string };
        const v = o.src ?? o.url ?? o.image ?? "";
        return v ? [v] : [];
      }
      return [];
    });
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
    alt: typeof p.alt === "string" && p.alt.trim() ? p.alt.trim() : undefined,
    price: String(p.price ?? ""),
    images: resolveImages(p),
    href: String(p.href ?? "/butoraink"),
  }));

  return (
    <section id="legnepszerubb-butoraink" className="relative py-14 bg-white scroll-mt-20">
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
            <TrackedLink key={i} href={p.href} event="termek_kartya" label={p.name} className="group block border border-gray-100 hover:border-[#b8924a] transition-colors">
              <ProductImageCarousel images={p.images.length ? p.images : ["/images/logo.webp"]} alt={p.alt || p.name} />
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-0.5 leading-snug">{p.tagline}</p>
                <h3 className="text-[#b8924a] text-sm font-semibold group-hover:underline leading-snug mb-1">
                  {p.name}
                </h3>
                {p.price && (
                  <p className="text-xs text-gray-500 mb-3">{p.price}</p>
                )}
                <span className="inline-block bg-[#7d6142] group-hover:bg-[#b8924a] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors">
                  Tovább
                </span>
              </div>
            </TrackedLink>
          ))}
        </div>
      </div>
      {isAdmin && (
        <EditBtn
          moduleId={moduleId}
          config={{
            title: cfg.title,
            subtitle: cfg.subtitle,
            products: products.map((p) => ({
              name: p.name,
              alt: p.alt ?? "",
              tagline: p.tagline,
              price: p.price,
              href: p.href,
              images: p.images.map((src) => ({ src })),
            })),
          }}
          schema={SCHEMA}
        />
      )}
    </section>
  );
}
