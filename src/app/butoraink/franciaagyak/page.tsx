import type { Metadata } from "next";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import FabricsSection from "@/components/sections/FabricsSection";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import EditBtn from "@/components/admin/EditBtn";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Franciaágyak – Enzo Design",
  description: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. 351.160 Ft-tól, tömörfa szerkezettel.",
};

const CARDS = [
  { id: "bilbao", name: "Bilbao franciaágy", tagline: "Kényelmedre", images: ["/images/franciaaggy-w3.webp", "/images/franciaaggy-w6.webp"], href: "/butoraink/franciaagyak" },
  { id: "madrid", name: "Madrid franciaágy", tagline: "Hálószobád éke", images: ["/images/franciaaggy-w2.webp", "/images/franciaaggy-w5.webp"], href: "/butoraink/franciaagyak" },
  { id: "tovabbi", name: "További ágyak", tagline: "Kísértő és zseniális darabok", images: ["/images/franciaaggy-w1.webp", "/images/franciaaggy-w4.webp"], href: "/butoraink/franciaagyak" },
  { id: "egyedi", name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", images: ["/images/egyedi-w4.webp", "/images/egyedi-w2.webp"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", images: ["/images/uzleti-w1.webp", "/images/uzleti-w3.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
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

export default async function FranciaagyakPage() {
  const isAdmin = await getAdminStatus();
  const [heroCfg, featuresCfg, gridCfg, ...cardCfgs] = await Promise.all([
    getModuleConfig("franciaagyak-listing:hero"),
    getModuleConfig("franciaagyak-listing:features"),
    getModuleConfig("franciaagyak-listing:grid"),
    ...CARDS.map((c) => getModuleConfig(`franciaagyak-card:${c.id}`)),
  ]);

  const hero = {
    title: (heroCfg?.title as string) || "Franciaágyak",
    subtitle: (heroCfg?.subtitle as string) || "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. Tömörfa szerkezettel, prémium szövetekkel.",
  };
  const featuresIntro = (featuresCfg?.intro as string) || "Mindegyik bútorunkat ajánljuk:";
  const featuresBody = (featuresCfg?.body as string) || "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával";
  const featuresItems = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);
  const gridTitle = (gridCfg?.title as string) || "Franciaágyak";

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
        {isAdmin && <EditBtn moduleId="franciaagyak-listing:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
      </section>

      <section className="relative py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#b8924a] mb-3">{featuresIntro}</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            {featuresItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {isAdmin && <EditBtn moduleId="franciaagyak-listing:features" config={{ intro: featuresIntro, body: featuresBody }} schema={FEATURES_SCHEMA} label="✏ Felsorolás" />}
      </section>

      <section className="relative py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{gridTitle}</h2>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">Egyedi franciaágyat is elkészítünk →</Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolvedCards.map((c) => (
              <div key={c.id} className="relative group/card">
                <Link href={c.href} className="block">
                  <ProductImageCarousel images={c.images} alt={c.name} />
                  <h3 className="text-[#b8924a] text-sm font-semibold group-hover/card:underline">{c.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{c.tagline}</p>
                </Link>
                {isAdmin && <EditBtn moduleId={`franciaagyak-card:${c.id}`} config={{ name: c.name, tagline: c.tagline, href: c.href, images: c.images.map((src) => ({ src })) }} schema={CARD_SCHEMA} label="✏" positionClass="absolute top-2 right-2 z-20" />}
              </div>
            ))}
          </div>
        </div>
        {isAdmin && <EditBtn moduleId="franciaagyak-listing:grid" config={{ title: gridTitle }} schema={GRID_SCHEMA} label="✏ Szekció szöveg" />}
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
