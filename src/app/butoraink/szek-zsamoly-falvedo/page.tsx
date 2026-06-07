import type { Metadata } from "next";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import FabricsSection from "@/components/sections/FabricsSection";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import EditBtn from "@/components/admin/EditBtn";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Szék, zsámoly, falvédő – Enzo Design",
  description: "Kárpitozott székek 76.000 Ft-tól, zsámolyok és falvédők egyedi méretben.",
};

const CARDS = [
  {
    id: "szek",
    name: "Szék, zsámoly, falvédő",
    tagline: "Sok féle választék",
    images: ["/images/szek-w2.webp", "/images/szek-w9.webp", "/images/szek-w11.webp", "/images/szek-w12.webp", "/images/szek-w7.webp"],
    href: "/butoraink/szek-zsamoly-falvedo",
  },
  { id: "egyedi", name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", images: ["/images/egyedi-w1.webp", "/images/egyedi-w7.webp"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti garnitúrák", tagline: "Vásárlóid kényelmére", images: ["/images/uzleti-w1.webp", "/images/uzleti-w4.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const HERO_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "textarea" },
];
const FEATURES_SCHEMA: FieldDef[] = [
  { key: "intro", label: "Bevezető szöveg", type: "text" },
  { key: "body", label: "Felsorolás (soronként egy)", type: "textarea" },
];
const GRID_SCHEMA: FieldDef[] = [{ key: "title", label: "Szekció cím", type: "text" }];
const CARD_SCHEMA: FieldDef[] = [
  { key: "name", label: "Neve", type: "text" },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "href", label: "Link", type: "text" },
  { key: "images", label: "Képek", type: "array", itemFields: [{ key: "src", label: "Kép", type: "image" }] },
];

export default async function SzekZsamolyPage() {
  const isAdmin = await getAdminStatus();
  const [heroCfg, featuresCfg, gridCfg, ...cardCfgs] = await Promise.all([
    getModuleConfig("szek-listing:hero"),
    getModuleConfig("szek-listing:features"),
    getModuleConfig("szek-listing:grid"),
    ...CARDS.map((c) => getModuleConfig(`szek-card:${c.id}`)),
  ]);

  const hero = {
    title: (heroCfg?.title as string) || "Szék, zsámoly, falvédő",
    subtitle: (heroCfg?.subtitle as string) || "Kárpitozott székek, zsámolyok és falvédők – egyedi méretben és szövettel.",
  };
  const featuresIntro = (featuresCfg?.intro as string) || "Mindegyik bútorunkat ajánljuk:";
  const featuresBody = (featuresCfg?.body as string) || "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával";
  const featuresItems = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);
  const gridTitle = (gridCfg?.title as string) || "Szék, zsámoly, falvédő";

  const resolvedCards = CARDS.map((c, i) => {
    const cfg = cardCfgs[i];
    const rawImages = cfg?.images as { src: string }[] | undefined;
    return {
      ...c,
      name: (cfg?.name as string) || c.name,
      tagline: (cfg?.tagline as string) || c.tagline,
      href: (cfg?.href as string) || c.href,
      images: rawImages ? rawImages.map((g) => g.src).filter(Boolean) : c.images,
    };
  });

  return (
    <>
      <section className="relative bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>{hero.title}</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">{hero.subtitle}</p>
        </div>
        {isAdmin && <EditBtn moduleId="szek-listing:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
      </section>

      <section className="relative py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#b8924a] mb-3">{featuresIntro}</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            {featuresItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {isAdmin && <EditBtn moduleId="szek-listing:features" config={{ intro: featuresIntro, body: featuresBody }} schema={FEATURES_SCHEMA} label="✏ Felsorolás" />}
      </section>

      <section className="relative py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{gridTitle}</h2>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">Egyedi bútor rendelése →</Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolvedCards.map((c) => (
              <div key={c.id} className="relative group/card">
                <Link href={c.href} className="block">
                  <ProductImageCarousel images={c.images} alt={c.name} />
                  <h3 className="text-[#b8924a] text-sm font-semibold group-hover/card:underline">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{c.tagline}</p>
                </Link>
                {isAdmin && <EditBtn moduleId={`szek-card:${c.id}`} config={{ name: c.name, tagline: c.tagline, href: c.href, images: c.images.map((src) => ({ src })) }} schema={CARD_SCHEMA} label="✏" positionClass="absolute top-2 right-2 z-20" />}
              </div>
            ))}
          </div>
        </div>
        {isAdmin && <EditBtn moduleId="szek-listing:grid" config={{ title: gridTitle }} schema={GRID_SCHEMA} label="✏ Szekció szöveg" />}
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
