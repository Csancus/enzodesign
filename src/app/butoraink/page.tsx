import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bútoraink – Enzo Design",
  description: "Kanapék, fotelek, franciaágyak – 2000 nm-es telephelyünkön készülnek. Tömörfa, prémium szövetek.",
};

const SOFA_CARDS = [
  { name: "Old's Club Kanapék", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
  { name: "Ivone kanapék", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
  { name: "Design Kanapék", tagline: "Modern minőség", image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp", href: "/butoraink/kanapek/design-kanapek" },
  { name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
  { name: "New York kanapék", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/kanapek/new-york-kanapek" },
  { name: "Joker Kanapék", tagline: "Gáláns megjelenés", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/kanapek/joker-kanapek" },
  { name: "Cannes Kanapé", tagline: "A modern sarok", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek/cannes-kanapek" },
  { name: "Egyedi kanapé", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti bútor, kanapé", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const ARMCHAIR_CARDS = [
  { name: "Old's Club Fotel", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek/olds-club-fotel" },
  { name: "Ivone fotel", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/fotelek/ivone-fotel" },
  { name: "Design Fotel", tagline: "Modern minőség", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butoraink/fotelek/design-fotel" },
  { name: "Chesterfield fotel", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butoraink/fotelek/chesterfield-fotel" },
  { name: "New York fotel", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/fotelek/new-york-fotel" },
  { name: "Joker fotel", tagline: "Elegáns bútor, bárhova", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/fotelek/joker-fotel" },
  { name: "További fotelek", tagline: "Kényelem, karfával", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek/tovabbi-fotelek" },
  { name: "Egyedi fotelek", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti fotelek, székek", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const BED_CARDS = [
  { name: "Bilbao franciaágy", tagline: "Kényelmedre", image: "/images/e7ad8b_335724cf7ec5471c89807f009900353d.webp", href: "/butoraink/franciaagyak" },
  { name: "Madrid franciaágy", tagline: "Hálószobád éke", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", href: "/butoraink/franciaagyak" },
  { name: "További ágyak", tagline: "Kísértő és zseniális darabok", image: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", href: "/butoraink/franciaagyak" },
  { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const EXTRA_CARDS = [
  { name: "Szék, zsámoly, falvédő", tagline: "Sok féle választék", image: "/images/9a0b1d_c51fa6474b5a4e789464c038a7b1c1d4.webp", href: "/butoraink/szek-zsamoly-falvedo" },
  { name: "Egyedi bútor", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti bútor", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

type Card = { name: string; tagline: string; image: string; href: string };

function ProductGrid({ items }: { items: Card[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.name} href={item.href} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden mb-3">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-[#1c1c1c] font-semibold text-sm group-hover:text-[#b8924a] transition-colors">{item.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{item.tagline}</p>
        </Link>
      ))}
    </div>
  );
}

function SectionHeader({ title, href, linkLabel }: { title: string; href: string; linkLabel: string }) {
  return (
    <div className="flex items-end justify-between mb-6 pb-3 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>{title}</h2>
      <Link href={href} className="text-sm text-[#b8924a] hover:underline whitespace-nowrap ml-4">
        {linkLabel} →
      </Link>
    </div>
  );
}

export default function ButorainkPage() {
  return (
    <>
      <PageHero
        label="ENZO DESIGN"
        title="Bútoraink"
        subtitle="Kárpitozott bútorok – egyedi méretben, választott szövettel, közvetlenül a gyártótól."
      />

      {/* INTRO TEXT BOX */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk,
            és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, áraink versenyképesek maradnak.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Mindegyik bútorunkat ajánljuk:
          </p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            <li>Egyedi szín és anyagminta választással</li>
            <li>Tetszőleges méretben</li>
            <li>Választható kopásállóság-erősséggel (martindale)</li>
            <li>Tömörfa szerkezettel, 10 év váz-garanciával</li>
          </ul>
        </div>
      </section>

      {/* KANAPÉK */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Kanapék" href="/butoraink/kanapek" linkLabel="Összes kanapé" />
          <ProductGrid items={SOFA_CARDS} />
        </div>
      </section>

      {/* FOTELEK */}
      <section className="py-14 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Fotelek" href="/butoraink/fotelek" linkLabel="Összes fotel" />
          <ProductGrid items={ARMCHAIR_CARDS} />
        </div>
      </section>

      {/* FRANCIAÁGYAK */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="Franciaágyak" href="/butoraink/franciaagyak" linkLabel="Összes franciaágy" />
          <ProductGrid items={BED_CARDS} />
        </div>
      </section>

      {/* TOVÁBBI TERMÉKEINK */}
      <section className="py-14 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader title="További termékeink" href="/butoraink/szek-zsamoly-falvedo" linkLabel="Megnézem" />
          <ProductGrid items={EXTRA_CARDS} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f0e8] py-14 px-4 text-center">
        <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Kérdése van?</p>
        <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Kérjen ajánlatot!
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Szinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Vegye fel velünk a kapcsolatot!
        </p>
        <Link
          href="/kapcsolat-es-rendeles"
          className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-3 transition-colors"
        >
          Kapcsolat és rendelés
        </Link>
      </section>
    </>
  );
}
