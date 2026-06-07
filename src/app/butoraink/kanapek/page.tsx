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
  description: "Kanapé kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker, Cannes – egyedi méretben és szövetben.",
};

const CARDS = [
  {
    id: "olds-club",
    name: "Old's Club Kanapék",
    tagline: "Karakteres elegancia",
    images: [
      "/images/olds-club-fotel.png",
      "/images/olds-club-kettes-kanape.png",
      "/images/olds-club-kettes-kanape-szines.png",
      "/images/olds-club-kettes-kanape-szines2.png",
    ],
    href: "/butoraink/kanapek/olds-club-kanapek",
  },
  { id: "ivone", name: "Ivone kanapék", tagline: "Nappalid éke", images: ["/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp"], href: "/butoraink/kanapek/ivone-kanapek" },
  { id: "design", name: "Design Kanapék", tagline: "Modern minőség", images: ["/images/e7ad8b_d510cf607aca449c835d847344231393.webp"], href: "/butoraink/kanapek/design-kanapek" },
  { id: "chesterfield", name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", images: ["/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"], href: "/butoraink/kanapek/chesterfield-kanapek" },
  { id: "new-york", name: "New York kanapék", tagline: "Klasszikus stílus", images: ["/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp"], href: "/butoraink/kanapek/new-york-kanapek" },
  { id: "joker", name: "Joker Kanapék", tagline: "Gáláns megjelenés", images: ["/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp"], href: "/butoraink/kanapek/joker-kanapek" },
  { id: "cannes", name: "Cannes Kanapé", tagline: "A modern sarok", images: ["/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp"], href: "/butoraink/kanapek/cannes-kanapek" },
  { id: "egyedi", name: "Egyedi kanapé", tagline: "Elkészítjük álombútorod", images: ["/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti bútor, kanapé", tagline: "Vásárlóid kényelmére", images: ["/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
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
  const gridSubtitle = (gridCfg?.subtitle as string) || "Válasszon a 2000 nm-es gyárunkból, kért méretben és anyagmintával.";

  const resolvedCards = CARDS.map((c, i) => {
    const cfg = cardCfgs[i];
    const rawImages = cfg?.images as { src: string }[] | undefined;
    const resolvedImages = rawImages ? rawImages.map((g) => g.src).filter(Boolean) : c.images;
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
      <section className="relative bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
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
          <p className="text-sm text-gray-500 mb-1">{gridSubtitle}</p>
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
