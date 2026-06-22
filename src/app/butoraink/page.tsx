import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FabricsSection from "@/components/sections/FabricsSection";
import EditBtn from "@/components/admin/EditBtn";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { getModuleConfig } from "@/lib/moduleStore";
import { getAdminStatus } from "@/lib/auth";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Bútoraink – Enzo Design",
  description: "Bútorbolt Nagykanizsán – egyedi bútor online rendelés: kanapék, fotelek, franciaágyak 2000 nm-es bemutatóteremből. Tömörfa, prémium szövetek, 3+10 év garancia.",

  alternates: { canonical: "https://enzodesign.hu/butoraink" },
  openGraph: {
    title: "Bútoraink – Enzo Design",
    description: "Bútorbolt Nagykanizsán – egyedi bútor online rendelés: kanapék, fotelek, franciaágyak 2000 nm-es bemutatóteremből. Tömörfa, prémium szövetek, 3+10 év garancia.",
    url: "https://enzodesign.hu/butoraink",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

type Card = { id: string; name: string; tagline: string; images: string[]; href: string };

const SOFA_CARDS: Card[] = [
  { id: "olds-club", name: "Old's Club Kanapék", tagline: "Karakteres elegancia", images: ["/images/olds-club-a1.webp", "/images/olds-club-a6.webp", "/images/olds-club-a4.webp", "/images/olds-club-a34.jpg", "/images/olds-club-a2.webp", "/images/olds-club-a3.webp", "/images/olds-club-a5.webp"], href: "/butoraink/kanapek/olds-club-kanapek" },
  { id: "ivone", name: "Ivone kanapék", tagline: "Nappalid éke", images: ["/images/ivone-a1.webp", "/images/ivone-a2.webp", "/images/ivone-dsc1.jpg", "/images/ivone-a7.webp", "/images/ivone-a8.webp", "/images/ivone-a5.webp", "/images/ivone-a9.webp", "/images/ivone-a6.webp", "/images/ivone-dsc2.jpg", "/images/ivone-a10.jpg"], href: "/butoraink/kanapek/ivone-kanapek" },
  { id: "design", name: "Design Kanapék", tagline: "Modern minőség", images: ["/images/design-a1.webp", "/images/design-a3.webp", "/images/design-a4.webp", "/images/design-a5.webp", "/images/design-a6.webp", "/images/design-a7.webp", "/images/design-a2.webp", "/images/design-a26.jpg", "/images/design-a27bg.jpg", "/images/design-a28.jpg", "/images/design-dsc1.jpg", "/images/design-dsc2.jpg"], href: "/butoraink/kanapek/design-kanapek" },
  { id: "chesterfield", name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", images: ["/images/chesterfield-a1.webp", "/images/chesterfield-a2.webp", "/images/chesterfield-a3.webp", "/images/chesterfield-a5.jpg", "/images/chesterfield-enzo.jpg", "/images/chesterfield-img1.jpg", "/images/chesterfield-img2.jpg", "/images/chesterfield-img3.jpg", "/images/chesterfield-a4.webp"], href: "/butoraink/kanapek/chesterfield-kanapek" },
  { id: "new-york", name: "New York kanapék", tagline: "Klasszikus stílus", images: ["/images/new-york-a1.webp", "/images/new-york-a2.webp", "/images/new-york-a3.webp", "/images/new-york-a4.webp", "/images/new-york-a5.webp", "/images/new-york-a6.webp", "/images/new-york-a7.jpg", "/images/new-york-nc1.jpg", "/images/new-york-nc2.jpg"], href: "/butoraink/kanapek/new-york-kanapek" },
  { id: "joker", name: "Joker Kanapék", tagline: "Gáláns megjelenés", images: ["/images/joker-a1.webp", "/images/joker-a2.webp", "/images/joker-a3.webp", "/images/joker-a4.webp", "/images/joker-a5.jpg", "/images/joker-w1.webp", "/images/joker-w3.webp"], href: "/butoraink/kanapek/joker-kanapek" },
];

const ARMCHAIR_CARDS: Card[] = [
  { id: "olds-club", name: "Old's Club Fotel", tagline: "Karakteres elegancia", images: ["/images/olds-club-a5.webp", "/images/olds-club-a1.webp", "/images/olds-club-a6.webp", "/images/olds-club-a4.webp", "/images/olds-club-a34.jpg", "/images/olds-club-a2.webp"], href: "/butoraink/fotelek/olds-club-fotel" },
  { id: "ivone", name: "Ivone Fotel", tagline: "Nappalid éke", images: ["/images/ivone-a1.webp", "/images/ivone-a2.webp", "/images/ivone-dsc1.jpg", "/images/ivone-a7.webp", "/images/ivone-a8.webp", "/images/ivone-a5.webp", "/images/ivone-a9.webp"], href: "/butoraink/fotelek/ivone-fotel" },
  { id: "design", name: "Design Fotel", tagline: "Modern minőség", images: ["/images/design-a1.webp", "/images/design-a3.webp", "/images/design-a4.webp", "/images/design-a5.webp", "/images/design-a6.webp", "/images/design-a7.webp", "/images/design-a2.webp"], href: "/butoraink/fotelek/design-fotel" },
  { id: "chesterfield", name: "Chesterfield Fotel", tagline: "A bútor, aminek történelme van", images: ["/images/chesterfield-a4.webp", "/images/chesterfield-a1.webp", "/images/chesterfield-a2.webp", "/images/chesterfield-a3.webp", "/images/chesterfield-a5.jpg", "/images/chesterfield-enzo.jpg"], href: "/butoraink/fotelek/chesterfield-fotel" },
  { id: "new-york", name: "New York Fotel", tagline: "Klasszikus stílus", images: ["/images/new-york-a1.webp", "/images/new-york-a2.webp", "/images/new-york-a3.webp", "/images/new-york-a4.webp", "/images/new-york-a5.webp", "/images/new-york-a6.webp"], href: "/butoraink/fotelek/new-york-fotel" },
  { id: "joker", name: "Joker Fotel", tagline: "Elegáns bútor, bárhova", images: ["/images/joker-a1.webp", "/images/joker-a2.webp", "/images/joker-a3.webp", "/images/joker-a4.webp", "/images/joker-a5.jpg", "/images/joker-w1.webp"], href: "/butoraink/fotelek/joker-fotel" },
];

const BED_CARDS: Card[] = [
  { id: "bilbao", name: "Bilbao franciaágy", tagline: "Kényelmedre", images: ["/images/bilbao-franciaaggy.webp", "/images/franciaaggy-a1.webp", "/images/franciaaggy-a2.webp", "/images/franciaaggy-a3.webp", "/images/franciaaggy-a4.webp", "/images/franciaaggy-w1.webp", "/images/franciaaggy-w2.webp"], href: "/butoraink/franciaagyak" },
  { id: "madrid", name: "Madrid franciaágy", tagline: "Hálószobád éke", images: ["/images/madrid-franciaaggy.webp", "/images/franciaaggy-a5.webp", "/images/franciaaggy-a6.webp", "/images/franciaaggy-w3.webp", "/images/franciaaggy-w4.webp", "/images/franciaaggy-w5.webp", "/images/franciaaggy-isabella.jpg"], href: "/butoraink/franciaagyak" },
  { id: "tovabbi", name: "További ágyak", tagline: "Kísértő és zseniális darabok", images: ["/images/franciaaggy-a7.jpg", "/images/franciaaggy-w6.webp", "/images/franciaaggy-fb1.jpg"], href: "/butoraink/franciaagyak" },
];

const EXTRA_CARDS: Card[] = [
  { id: "szek", name: "Szék, zsámoly, falvédő", tagline: "Sok féle választék", images: ["/images/szek-a2.webp", "/images/szek-a5.webp", "/images/szek-a6.webp", "/images/szek-a7.webp", "/images/szek-a8.webp", "/images/szek-a9.webp", "/images/szek-a10.webp", "/images/szek-dsc1.jpg", "/images/szek-dsc2.jpg", "/images/szek-fb1.jpg"], href: "/butoraink/szek-zsamoly-falvedo" },
  { id: "egyedi", name: "Egyedi bútor", tagline: "Elkészítjük álombútorod", images: ["/images/egyedi-a1.webp", "/images/egyedi-a2.webp", "/images/egyedi-a4.webp", "/images/egyedi-a6.webp", "/images/egyedi-a7.webp", "/images/egyedi-a8.webp", "/images/egyedi-a9.webp", "/images/egyedi-a10.webp", "/images/egyedi-dsc1.jpg", "/images/egyedi-dsc2.jpg"], href: "/butoraink/egyedi-butor" },
  { id: "uzleti", name: "Üzleti bútor", tagline: "Vásárlóid kényelmére", images: ["/images/uzleti-a1.webp", "/images/uzleti-a2.webp", "/images/uzleti-a3.webp", "/images/uzleti-a4.webp", "/images/uzleti-a5.webp", "/images/uzleti-aria.jpg", "/images/uzleti-szalloda.webp", "/images/uzleti-w1.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const CARD_SCHEMA: FieldDef[] = [
  { key: "name", label: "Neve", type: "text" },
  { key: "tagline", label: "Tagline", type: "text" },
  { key: "href", label: "Link URL", type: "url" },
  { key: "images", label: "Képek (lapozható)", type: "array", itemFields: [{ key: "src", label: "Kép", type: "image" }] },
];

const INTRO_SCHEMA: FieldDef[] = [
  { key: "body", label: "Bevezető szöveg", type: "textarea" },
  { key: "features", label: "Felsorolás (soronként egy)", type: "textarea" },
];

async function resolveCards(cards: Card[], prefix: string): Promise<Card[]> {
  const cfgs = await Promise.all(cards.map((c) => getModuleConfig(`${prefix}-card:${c.id}`)));
  return cards.map((c, i) => {
    const cfg = cfgs[i];
    const rawImages = cfg?.images as { src: string }[] | undefined;
    const resolvedImages = rawImages?.map((g) => g.src).filter(Boolean) ?? [];
    return {
      ...c,
      name: (cfg?.name as string) || c.name,
      tagline: (cfg?.tagline as string) || c.tagline,
      href: (cfg?.href as string) || c.href,
      images: resolvedImages.length ? resolvedImages : c.images,
    };
  });
}

function ProductGrid({ items, isAdmin, prefix }: { items: Card[]; isAdmin: boolean; prefix: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="relative group/card">
          <Link href={item.href} className="block">
            <ProductImageCarousel images={item.images} alt={item.name} />
            <h3 className="text-[#1c1c1c] font-semibold text-sm group-hover:text-[#b8924a] transition-colors mt-1">{item.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{item.tagline}</p>
          </Link>
          {isAdmin && (
            <EditBtn moduleId={`${prefix}-card:${item.id}`} config={{ name: item.name, tagline: item.tagline, href: item.href, images: item.images.map((src) => ({ src })) }} schema={CARD_SCHEMA} label="✏" positionClass="absolute top-2 right-2 z-20" />
          )}
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ title, href, linkLabel }: { title: string; href: string; linkLabel: string }) {
  return (
    <div className="flex items-end justify-between mb-6 pb-3 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>{title}</h2>
      <Link href={href} className="text-sm text-[#b8924a] hover:underline whitespace-nowrap ml-4">{linkLabel} →</Link>
    </div>
  );
}

export default async function ButorainkPage() {
  const isAdmin = await getAdminStatus();

  const [introCfg, sofas, armchairs, beds, extras] = await Promise.all([
    getModuleConfig("butoraink:intro"),
    resolveCards(SOFA_CARDS, "butoraink-kanapek"),
    resolveCards(ARMCHAIR_CARDS, "butoraink-fotel"),
    resolveCards(BED_CARDS, "butoraink-agy"),
    resolveCards(EXTRA_CARDS, "butoraink-extra"),
  ]);

  const introBody = (introCfg?.body as string) || "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk, és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, áraink versenyképesek maradnak.";
  const introFeatures = (introCfg?.features as string) || "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával";
  const introItems = introFeatures.split("\n").map((s) => s.trim()).filter(Boolean);

  return (
    <>
      <PageHero moduleId="hero:butoraink" defaults={{ label: "ENZO DESIGN", title: "Bútoraink", subtitle: "Kárpitozott bútorok – egyedi méretben, választott szövettel, közvetlenül a gyártótól." }} />

      <section className="relative bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">{introBody}</p>
          <p className="text-gray-700 leading-relaxed mb-3 font-medium">Mindegyik bútorunkat ajánljuk:</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            {introItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {isAdmin && <EditBtn moduleId="butoraink:intro" config={{ body: introBody, features: introFeatures }} schema={INTRO_SCHEMA} label="✏ Bevezető" />}
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Kanapék" href="/butoraink/kanapek" linkLabel="Összes kanapé" />
          <ProductGrid items={sofas} isAdmin={isAdmin} prefix="butoraink-kanapek" />
        </div>
      </section>

      <section className="py-14 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Fotelek" href="/butoraink/fotelek" linkLabel="Összes fotel" />
          <ProductGrid items={armchairs} isAdmin={isAdmin} prefix="butoraink-fotel" />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Franciaágyak" href="/butoraink/franciaagyak" linkLabel="Összes franciaágy" />
          <ProductGrid items={beds} isAdmin={isAdmin} prefix="butoraink-agy" />
        </div>
      </section>

      <section className="py-14 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="További termékeink" href="/butoraink/szek-zsamoly-falvedo" linkLabel="Megnézem" />
          <ProductGrid items={extras} isAdmin={isAdmin} prefix="butoraink-extra" />
        </div>
      </section>

      <FabricsSection isAdmin={isAdmin} />

      <section className="bg-[#f5f0e8] py-14 px-4 text-center">
        <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Kérdése van?</p>
        <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>Kérjen ajánlatot!</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">Szinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Vegye fel velünk a kapcsolatot!</p>
        <Link href="/kapcsolat-es-rendeles" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-3 transition-colors">
          Kapcsolat és rendelés
        </Link>
      </section>
    </>
  );
}
