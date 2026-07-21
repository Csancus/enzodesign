import type { Metadata } from "next";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import FabricsSection from "@/components/sections/FabricsSection";
import FaqSection from "@/components/sections/FaqSection";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { resolveProductImages } from "@/lib/productImages";
import EditBtn from "@/components/admin/EditBtn";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Franciaágyak – Enzo Design",
  description: "Kárpitozott franciaágyak – egyedi bútor online rendelés bútorbolt Nagykanizsán. Bilbao, Madrid és egyéni modellek tömörfa szerkezettel, 351.160 Ft-tól.",

  alternates: { canonical: "https://www.enzodesign.hu/butoraink/franciaagyak" },
  openGraph: {
    title: "Franciaágyak – Enzo Design",
    description: "Kárpitozott franciaágyak – egyedi bútor online rendelés bútorbolt Nagykanizsán. Bilbao, Madrid és egyéni modellek tömörfa szerkezettel, 351.160 Ft-tól.",
    url: "https://www.enzodesign.hu/butoraink/franciaagyak",
    images: [{ url: "/images/franciaaggy-w3.webp", width: 1920, height: 800 }],
  },
};

const CARDS = [
  { id: "bilbao", name: "Bilbao franciaágy", tagline: "Kényelmedre", images: ["/images/franciaaggy-a1.webp", "/images/franciaaggy-a2.webp", "/images/franciaaggy-a1bg.jpg", "/images/bilbao-franciaaggy.webp", "/images/franciaaggy-w6.webp"], href: "/butoraink/franciaagyak" },
  { id: "madrid", name: "Madrid franciaágy", tagline: "Hálószobád éke", images: ["/images/franciaaggy-a3.webp", "/images/franciaaggy-a4.webp", "/images/franciaaggy-fb1.jpg", "/images/madrid-franciaaggy.webp", "/images/franciaaggy-w5.webp"], href: "/butoraink/franciaagyak" },
  { id: "tovabbi", name: "További ágyak", tagline: "Kísértő és zseniális darabok", images: ["/images/franciaaggy-a5.webp", "/images/franciaaggy-a6.webp", "/images/franciaaggy-a7.jpg", "/images/franciaaggy-isabella.jpg", "/images/tovabbi-franciaaggy-1.webp", "/images/tovabbi-franciaaggy-2.webp", "/images/tovabbi-franciaaggy-3.webp", "/images/tovabbi-franciaaggy-4.webp", "/images/tovabbi-franciaaggy-5.webp", "/images/tovabbi-franciaaggy-6.webp"], href: "/butoraink/franciaagyak" },
  { id: "egyedi", name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", images: ["/images/egyedi-a1.webp", "/images/egyedi-a2.webp", "/images/egyedi-a4.webp", "/images/egyedi-a6.webp", "/images/egyedi-a7.webp", "/images/egyedi-a8.webp", "/images/egyedi-a9.webp", "/images/egyedi-a10.webp", "/images/egyedi-a11.webp", "/images/egyedi-a13.webp", "/images/egyedi-a14.webp", "/images/egyedi-a15.webp", "/images/egyedi-a16.webp", "/images/egyedi-a18.webp", "/images/egyedi-dsc1.jpg", "/images/egyedi-dsc2.jpg"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", images: ["/images/uzleti-a1.webp", "/images/uzleti-a2.webp", "/images/uzleti-a3.webp", "/images/uzleti-a4.webp", "/images/uzleti-a5.webp", "/images/uzleti-a6.webp", "/images/uzleti-a7.webp", "/images/uzleti-a8.webp", "/images/uzleti-a9.webp", "/images/uzleti-aria.jpg", "/images/uzleti-wales.jpg", "/images/uzleti-szalloda.webp", "/images/uzleti-w1.webp", "/images/uzleti-w2.webp", "/images/uzleti-w3.webp", "/images/uzleti-w4.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
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
const SELF = "/butoraink/franciaagyak";

const CARD_SCHEMA: FieldDef[] = [
  { key: "name", label: "Neve", type: "text" },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "href", label: "Link URL", type: "url" },
  { key: "images", label: "Képek", type: "array", itemFields: [{ key: "src", label: "Kép", type: "image" }] },
];

// For cards that link elsewhere: images are inherited from that page, not editable here.
const CARD_SCHEMA_NOTE: FieldDef[] = [
  { key: "name", label: "Neve", type: "text" },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "href", label: "Link URL", type: "url" },
  { key: "imagesEditNote", label: "🖼 A képek a linkelt oldalról öröklődnek – ott szerkeszd őket (kattints):", type: "note" },
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

  const resolvedCards = await Promise.all(
    CARDS.map(async (c, i) => {
      const cfg = cardCfgs[i];
      const href = (cfg?.href as string) || c.href;
      const inherited = href !== SELF; // cards linking elsewhere inherit their images
      const ownImages = (() => { const m = (cfg?.images as { src: string }[] | undefined)?.map((g) => g.src).filter(Boolean) ?? []; return m.length ? m : c.images; })();
      const images = inherited ? await resolveProductImages(href, c.images, c.id) : ownImages;
      return {
        ...c,
        name: (cfg?.name as string) || c.name,
        tagline: (cfg?.tagline as string) || c.tagline,
        href,
        inherited,
        images,
      };
    })
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Franciaágyak – Enzo Design",
    "url": "https://www.enzodesign.hu/butoraink/franciaagyak",
    "numberOfItems": resolvedCards.length,
    "itemListElement": resolvedCards.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "url": `https://www.enzodesign.hu${c.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
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
                {isAdmin && (
                  c.inherited
                    ? <EditBtn moduleId={`franciaagyak-card:${c.id}`} config={{ name: c.name, tagline: c.tagline, href: c.href, imagesEditNote: c.href }} schema={CARD_SCHEMA_NOTE} label="✏" positionClass="absolute top-2 right-2 z-20" />
                    : <EditBtn moduleId={`franciaagyak-card:${c.id}`} config={{ name: c.name, tagline: c.tagline, href: c.href, images: c.images.map((src) => ({ src })) }} schema={CARD_SCHEMA} label="✏" positionClass="absolute top-2 right-2 z-20" />
                )}
              </div>
            ))}
          </div>
        </div>
        {isAdmin && <EditBtn moduleId="franciaagyak-listing:grid" config={{ title: gridTitle }} schema={GRID_SCHEMA} label="✏ Szekció szöveg" />}
      </section>

      <FaqSection moduleId="global:faq" isAdmin={isAdmin} />
      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
