import type { Metadata } from "next";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import FabricsSection from "@/components/sections/FabricsSection";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import EditBtn from "@/components/admin/EditBtn";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Kanapék – Enzo Design",
  description: "Kárpitozott kanapék egyedi méretben – bútorbolt Nagykanizsán, online rendelés. Old's Club, Ivone, Chesterfield, New York, Joker, Cannes kollekciók gyártótól.",

  alternates: { canonical: "https://enzodesign.hu/butoraink/kanapek" },
  openGraph: {
    title: "Kanapék – Enzo Design",
    description: "Kárpitozott kanapék egyedi méretben – bútorbolt Nagykanizsán, online rendelés. Old's Club, Ivone, Chesterfield, New York, Joker, Cannes kollekciók gyártótól.",
    url: "https://enzodesign.hu/butoraink/kanapek",
    images: [{ url: "/images/olds-club-w1.webp", width: 1920, height: 800 }],
  },
};

const CARDS = [
  {
    id: "olds-club",
    name: "Old's Club Kanapék",
    tagline: "Karakteres elegancia",
    images: [
      "/images/olds-club-w1.webp",
      "/images/olds-club-w2.webp",
      "/images/olds-club-w4.webp",
      "/images/olds-club-w5.webp",
      "/images/olds-club-w6.webp",
    ],
    href: "/butoraink/kanapek/olds-club-kanapek",
  },
  {
    id: "ivone",
    name: "Ivone kanapék",
    tagline: "Nappalid éke",
    images: ["/images/ivone-w1.webp", "/images/ivone-w5.webp", "/images/ivone-w7.webp"],
    href: "/butoraink/kanapek/ivone-kanapek",
  },
  {
    id: "design",
    name: "Design Kanapék",
    tagline: "Modern minőség",
    images: ["/images/design-w1.webp", "/images/design-w2.webp", "/images/design-w4.webp", "/images/design-w5.webp"],
    href: "/butoraink/kanapek/design-kanapek",
  },
  {
    id: "chesterfield",
    name: "Chesterfield kanapék",
    tagline: "A bútor, aminek történelme van",
    images: ["/images/chesterfield-w1.webp", "/images/chesterfield-w2.webp", "/images/chesterfield-w3.webp"],
    href: "/butoraink/kanapek/chesterfield-kanapek",
  },
  {
    id: "new-york",
    name: "New York kanapék",
    tagline: "Klasszikus stílus",
    images: ["/images/new-york-w1.webp", "/images/new-york-w2.webp", "/images/new-york-w4.webp"],
    href: "/butoraink/kanapek/new-york-kanapek",
  },
  {
    id: "joker",
    name: "Joker Kanapék",
    tagline: "Gáláns megjelenés",
    images: ["/images/joker-w1.webp", "/images/joker-w3.webp", "/images/joker-w4.webp"],
    href: "/butoraink/kanapek/joker-kanapek",
  },
  {
    id: "cannes",
    name: "Cannes Kanapé",
    tagline: "A modern sarok",
    images: ["/images/cannes-w1.webp", "/images/cannes-w2.webp", "/images/cannes-w3.webp"],
    href: "/butoraink/kanapek/cannes-kanapek",
  },
  {
    id: "egyedi",
    name: "Egyedi kanapé",
    tagline: "Elkészítjük álombútorod",
    images: ["/images/egyedi-w2.webp", "/images/egyedi-w4.webp"],
    href: "/butoraink/egyedi-butor",
  },
  {
    id: "uzleti",
    name: "Üzleti bútor, kanapé",
    tagline: "Vásárlóid kényelmére",
    images: ["/images/uzleti-w1.webp", "/images/uzleti-w3.webp"],
    href: "/karpitozott-butor-uzleti-ugyfeleknek",
  },
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
  { key: "href", label: "Link (pl. /butoraink/kanapek/...)", type: "text" },
  {
    key: "images",
    label: "Képek",
    type: "array",
    itemFields: [{ key: "src", label: "Kép", type: "image" }],
  },
];

export default async function KanapekPage() {
  const isAdmin = await getAdminStatus();

  const [heroCfg, featuresCfg, gridCfg, ...cardCfgs] = await Promise.all([
    getModuleConfig("kanapek-listing:hero"),
    getModuleConfig("kanapek-listing:features"),
    getModuleConfig("kanapek-listing:grid"),
    ...CARDS.map((c) => getModuleConfig(`kanapek-card:${c.id}`)),
  ]);

  const hero = {
    title: (heroCfg?.title as string) || "Kanapék",
    subtitle: (heroCfg?.subtitle as string) || "Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot. A Bútoraink szövete és anyagmintája szabadon választható.",
  };

  const featuresIntro = (featuresCfg?.intro as string) || "Mindegyik bútorunkat ajánljuk:";
  const featuresBody = (featuresCfg?.body as string) || "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával";
  const featuresItems = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);

  const gridTitle = (gridCfg?.title as string) || "Kanapék";
  const gridSubtitle = (gridCfg?.subtitle as string) || "Válassz az alábbi bútorok közül, vagy küldd el egyedi kérésed.\n\nA bútorok alatt láthatod az anyagmintákat és minőségeket.\n\nKettes, hármas, sarok vagy ágyazható kanapék közül választhatsz.";

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
        {isAdmin && <EditBtn moduleId="kanapek-listing:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
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
            moduleId="kanapek-listing:features"
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
          <div className="text-sm text-gray-500 mb-1 space-y-1">
            {gridSubtitle.split("\n").filter(Boolean).map((line, i) => <p key={i}>{line}</p>)}
          </div>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi kanapét is elkészítünk →
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
                    moduleId={`kanapek-card:${c.id}`}
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
          <EditBtn moduleId="kanapek-listing:grid" config={{ title: gridTitle, subtitle: gridSubtitle }} schema={GRID_SCHEMA} label="✏ Szekció szöveg" />
        )}
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
