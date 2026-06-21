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
  description: "Kárpitozott franciaágyak – egyedi bútor online rendelés bútorbolt Nagykanizsán. Bilbao, Madrid és egyéni modellek tömörfa szerkezettel, 351.160 Ft-tól.",

  alternates: { canonical: "https://enzodesign.hu/butoraink/franciaagyak" },
  openGraph: {
    title: "Franciaágyak – Enzo Design",
    description: "Kárpitozott franciaágyak – egyedi bútor online rendelés bútorbolt Nagykanizsán. Bilbao, Madrid és egyéni modellek tömörfa szerkezettel, 351.160 Ft-tól.",
    url: "https://enzodesign.hu/butoraink/franciaagyak",
    images: [{ url: "/images/franciaaggy-w3.webp", width: 1920, height: 800 }],
  },
};

const CARDS = [
  { id: "bilbao", name: "Bilbao franciaágy", tagline: "Kényelmedre", images: ["/images/bilbao-franciaaggy.webp", "/images/franciaaggy-w6.webp"], href: "/butoraink/franciaagyak" },
  { id: "madrid", name: "Madrid franciaágy", tagline: "Hálószobád éke", images: ["/images/madrid-franciaaggy.webp", "/images/franciaaggy-w5.webp"], href: "/butoraink/franciaagyak" },
  { id: "tovabbi", name: "További ágyak", tagline: "Kísértő és zseniális darabok", images: ["/images/tovabbi-franciaaggy-1.webp", "/images/tovabbi-franciaaggy-2.webp", "/images/tovabbi-franciaaggy-3.webp", "/images/tovabbi-franciaaggy-4.webp", "/images/tovabbi-franciaaggy-5.webp", "/images/tovabbi-franciaaggy-6.webp"], href: "/butoraink/franciaagyak" },
  { id: "egyedi", name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", images: ["/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", "/images/e7ad8b_aca61fd0c27746da9f91a44377825085.webp", "/images/e7ad8b_a6ef192520f14d18bb7296848c319c17.webp", "/images/9a0b1d_e2873d90b1d04241a6382d7da598e821.webp", "/images/e7ad8b_1a5a2fd2adb04b7cbf6faa50280714d4.webp", "/images/e7ad8b_a6f2120917464fd084a819fbd6828556.webp", "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", "/images/e7ad8b_bc066bd9f28f4fbab4b31b619d02e1ff.webp", "/images/e7ad8b_68c0304ad1514869b9827831425d131b.webp", "/images/e7ad8b_ebf6019015ea4512933aacab43daaf4a.webp"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", images: ["/images/uzleti-szalloda.webp", "/images/uzleti-w1.webp", "/images/uzleti-w2.webp", "/images/uzleti-w3.webp", "/images/uzleti-w4.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
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
  const featuresIntro = (featuresCfg?.intro as string) || "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk.\n\nMivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak.\n\nSzinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni.";
  const featuresBody = (featuresCfg?.body as string) || "Mindegyik bútorunk egyedi\nszínben\nanyagmintával\nméretben\nés kopásállóság-erősséggel (martindale)\nkérhető.";
  const featuresBodyLines = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);
  const featuresListLabel = featuresBodyLines[0];
  const featuresItems = featuresBodyLines.slice(1);
  const gridTitle = (gridCfg?.title as string) || "Franciaágyak";

  const resolvedCards = CARDS.map((c, i) => {
    const cfg = cardCfgs[i];
    const rawImages = cfg?.images as { src: string }[] | undefined;
    return {
      ...c,
      name: (cfg?.name as string) || c.name,
      tagline: (cfg?.tagline as string) || c.tagline,
      href: (cfg?.href as string) || c.href,
      images: (() => { const m = rawImages?.map((g) => g.src).filter(Boolean) ?? []; return m.length ? m : c.images; })(),
    };
  });

  return (
    <>
      <section className="relative bg-[#f5f0e8] py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>{hero.title}</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">{hero.subtitle}</p>
        </div>
        {isAdmin && <EditBtn moduleId="franciaagyak-listing:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
      </section>

      <section className="relative py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          {featuresIntro.split("\n\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text-sm text-gray-600">{para}</p>
          ))}
          <p className="text-sm font-semibold text-[#b8924a]">{featuresListLabel}</p>
          <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
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
