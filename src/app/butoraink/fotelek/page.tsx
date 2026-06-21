import type { Metadata } from "next";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import FabricsSection from "@/components/sections/FabricsSection";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import EditBtn from "@/components/admin/EditBtn";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Fotelek – Enzo Design",
  description: "Egyedi bútor online – kárpitozott fotelek bútorbolt Nagykanizsán: Old's Club, Ivone, Chesterfield, New York, Joker, Design kollekciók, 82.820 Ft-tól.",

  alternates: { canonical: "https://enzodesign.hu/butoraink/fotelek" },
  openGraph: {
    title: "Fotelek – Enzo Design",
    description: "Egyedi bútor online – kárpitozott fotelek bútorbolt Nagykanizsán: Old's Club, Ivone, Chesterfield, New York, Joker, Design kollekciók, 82.820 Ft-tól.",
    url: "https://enzodesign.hu/butoraink/fotelek",
    images: [{ url: "/images/fotelek-w1.webp", width: 1920, height: 800 }],
  },
};

const CARDS = [
  { id: "olds-club", name: "Old's Club Fotel", tagline: "Karakteres elegancia", images: ["/images/fotelek-w1.webp"], href: "/butoraink/fotelek/olds-club-fotel" },
  { id: "ivone", name: "Ivone Fotel", tagline: "Nappalid éke", images: ["/images/ivone-w1.webp", "/images/ivone-w7.webp"], href: "/butoraink/fotelek/ivone-fotel" },
  { id: "design", name: "Design Fotel", tagline: "Modern minőség", images: ["/images/design-w1.webp"], href: "/butoraink/fotelek/design-fotel" },
  { id: "chesterfield", name: "Chesterfield Fotel", tagline: "A bútor, aminek történelme van", images: ["/images/chesterfield-w4.webp"], href: "/butoraink/fotelek/chesterfield-fotel" },
  {
    id: "new-york",
    name: "New York Fotel",
    tagline: "Klasszikus stílus",
    images: ["/images/new-york-w5.webp", "/images/new-york-w3.webp"],
    href: "/butoraink/fotelek/new-york-fotel",
  },
  {
    id: "joker",
    name: "Joker Fotel",
    tagline: "Elegáns bútor, bárhova",
    images: ["/images/joker-w1.webp"],
    href: "/butoraink/fotelek/joker-fotel",
  },
  {
    id: "tovabbi",
    name: "További Fotelek",
    tagline: "Kényelem, karfával",
    images: ["/images/fotelek-w2.webp", "/images/fotelek-w3.webp", "/images/fotelek-w5.webp", "/images/fotelek-w6.webp"],
    href: "/butoraink/fotelek/tovabbi-fotelek",
  },
  { id: "egyedi", name: "Egyedi Fotelek", tagline: "Elkészítjük álombútorod", images: ["/images/egyedi-w1.webp", "/images/egyedi-w2.webp"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti Fotelek, székek", tagline: "Vásárlóid kényelmére", images: ["/images/uzleti-w1.webp", "/images/uzleti-w3.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const HERO_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "textarea" },
];

const FEATURES_SCHEMA: FieldDef[] = [
  { key: "intro", label: "Bevezető szöveg", type: "text" },
  { key: "body", label: "Felsorolás (soronként egy)", type: "textarea" },
];

const GRID_SCHEMA: FieldDef[] = [
  { key: "title", label: "Szekció cím", type: "text" },
  { key: "subtitle", label: "Alcím szöveg", type: "textarea" },
];

const CARD_SCHEMA: FieldDef[] = [
  { key: "name", label: "Neve", type: "text" },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "href", label: "Link (pl. /butoraink/fotelek/...)", type: "text" },
  {
    key: "images",
    label: "Képek",
    type: "array",
    itemFields: [{ key: "src", label: "Kép", type: "image" }],
  },
];

export default async function FotelekPage() {
  const isAdmin = await getAdminStatus();

  const [heroCfg, featuresCfg, gridCfg, ...cardCfgs] = await Promise.all([
    getModuleConfig("fotelek-listing:hero"),
    getModuleConfig("fotelek-listing:features"),
    getModuleConfig("fotelek-listing:grid"),
    ...CARDS.map((c) => getModuleConfig(`fotelek-card:${c.id}`)),
  ]);

  const hero = {
    title: (heroCfg?.title as string) || "Fotelek",
    subtitle: (heroCfg?.subtitle as string) || "Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot. A Bútoraink szövete és anyagmintája szabadon választható.",
  };

  const featuresIntro = (featuresCfg?.intro as string) || "Mindegyik bútorunkat ajánljuk:";
  const featuresBody = (featuresCfg?.body as string) || "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával";
  const featuresItems = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);

  const gridTitle = (gridCfg?.title as string) || "Fotelek";
  const gridSubtitle = (gridCfg?.subtitle as string) || "Válasszon a 2000 nm-es gyárunkból, kért méretben és anyagmintával.";

  const resolvedCards = CARDS.map((c, i) => {
    const cfg = cardCfgs[i];
    const rawImages = cfg?.images as { src: string }[] | undefined;
    const resolvedImages = (rawImages?.length ? rawImages.map((g) => g.src).filter(Boolean) : null) ?? c.images;
    return {
      ...c,
      name: (cfg?.name as string) || c.name,
      tagline: (cfg?.tagline as string) || c.tagline,
      href: (cfg?.href as string) || c.href,
      images: resolvedImages,
    };
  });

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#f5f0e8] py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {hero.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">{hero.subtitle}</p>
        </div>
        {isAdmin && <EditBtn moduleId="fotelek-listing:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
      </section>

      {/* FEATURES */}
      <section className="relative py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#b8924a] mb-3">{featuresIntro}</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            {featuresItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {isAdmin && (
          <EditBtn
            moduleId="fotelek-listing:features"
            config={{ intro: featuresIntro, body: featuresBody }}
            schema={FEATURES_SCHEMA}
            label="✏ Felsorolás"
          />
        )}
      </section>

      {/* GRID */}
      <section className="relative py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{gridTitle}</h2>
          <p className="text-sm text-gray-500 mb-1">{gridSubtitle}</p>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi fotelt is elkészítünk →
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolvedCards.map((c) => (
              <div key={c.id} className="relative group/card">
                <Link href={c.href} className="block">
                  <ProductImageCarousel images={c.images} alt={c.name} />
                  <h3 className="text-[#b8924a] text-sm font-semibold group-hover/card:underline">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{c.tagline}</p>
                </Link>
                {isAdmin && (
                  <EditBtn
                    moduleId={`fotelek-card:${c.id}`}
                    config={{
                      name: c.name,
                      tagline: c.tagline,
                      href: c.href,
                      images: c.images.map((src) => ({ src })),
                    }}
                    schema={CARD_SCHEMA}
                    label="✏"
                    positionClass="absolute top-2 right-2 z-20"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="fotelek-listing:grid" config={{ title: gridTitle, subtitle: gridSubtitle }} schema={GRID_SCHEMA} label="✏ Szekció szöveg" />
        )}
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
