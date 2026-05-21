import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import { FABRICS } from "@/data/products";

export const metadata: Metadata = {
  title: "Bútoraink – Enzo Design",
  description: "Kanapék, fotelek, franciaágyak, székek – 2000 nm-es telephelyünkön készülnek. Tömörfa, prémium szövetek.",
};

const SOFA_CARDS = [
  { name: "Old's Club Kanapék", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
  { name: "Ivone kanapék", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
  { name: "Design Kanapék", tagline: "Modern minőség", image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp", href: "/butoraink/kanapek/design-kanapek" },
  { name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
  { name: "New York", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/kanapek/new-york-kanapek" },
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
  { name: "További ágyak", tagline: "Modern és klasszikus darabok", image: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", href: "/butoraink/franciaagyak" },
  { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

function ProductGrid({ items }: { items: typeof SOFA_CARDS }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group block bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <p className="text-xs text-[#b8924a] uppercase tracking-wider mb-1">{item.tagline}</p>
            <h3 className="text-base font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              {item.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function ButorainkPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Termékeink</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Bútoraink
          </h1>
          <p className="text-gray-300 leading-relaxed mb-3">
            Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel
            és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni. Mindegyik bútorunk egyedi
            színben, anyagmintával, méretben és kopásállóság-erősséggel (martindale) kérhető.
          </p>
        </div>
      </section>

      {/* KANAPÉK */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Kollekciónkból</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              Kanapéink
            </h2>
          </div>
          <ProductGrid items={SOFA_CARDS} />
        </div>
      </section>

      {/* FOTELEK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Kollekciónkból</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              Fotelek
            </h2>
          </div>
          <ProductGrid items={ARMCHAIR_CARDS} />
          <div className="flex flex-col sm:flex-row gap-8 mt-10 text-center justify-center">
            <div>
              <div className="text-2xl font-bold text-[#7d6142]" style={{ fontFamily: "var(--font-heading)" }}>76.000 Ft-tól</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Székek</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#7d6142]" style={{ fontFamily: "var(--font-heading)" }}>90.000 Ft-tól</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Fotelek</div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            3 év a garancia, a vázszerkezetre 10 év garancia
          </p>
        </div>
      </section>

      {/* SZÉK / EGYEDI / ÜZLETI */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/butoraink/szek-zsamoly-falvedo" className="group block bg-white p-8 hover:shadow-md transition-shadow text-center">
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image src="/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp" alt="Székek, zsámolyok, falvédők" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Szék, zsámoly, falvédő</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nézd végig a képeket, vagy küldj egy képet Pinterestről vagy a Google-ből és mi elkészítjük neked.
            </p>
          </Link>

          <Link href="/butoraink/egyedi-butor" className="group block bg-white p-8 hover:shadow-md transition-shadow text-center">
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Egyedi bútor" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Egyedi bútor</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ami neked tetszik! Küldj el egy képet, egyeztessünk és elkészítjük álombútorod!
              Egyedi 2-es fotel: 360.000 Ft-tól.
            </p>
          </Link>

          <Link href="/karpitozott-butor-uzleti-ugyfeleknek" className="group block bg-white p-8 hover:shadow-md transition-shadow text-center">
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image src="/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp" alt="Üzleti bútor" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Üzleti bútor</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Kávézóba, étterembe, szállodába, orvosi rendelőbe rendszeresen készítünk nagy teherbírású bútorokat.
            </p>
          </Link>
        </div>
      </section>

      {/* FRANCIAÁGYAK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Kollekciónkból</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              Franciaágyak
            </h2>
          </div>
          <ProductGrid items={BED_CARDS} />
        </div>
      </section>

      {/* KÁRPITSZÖVETEK */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Anyagaink</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              Nagy kopásállóságú, minőségi kárpit anyagok
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Alapvetően minimum 50.000 martindale-es, nagy kopásállóságú anyagokkal dolgozunk,
              de nem ritka a 100.000 martindale feletti termék sem. Tetszőleges szín, anyag és
              kopásállóság választható.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FABRICS.map((fabric) => (
              <div key={fabric.code} className="bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1c1c1c] text-white font-bold text-sm px-3 py-1">{fabric.code}</span>
                  <span className="font-semibold text-[#1c1c1c]">{fabric.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div><span className="font-medium">Kopásállóság:</span> {fabric.martindale} martindale</div>
                  <div><span className="font-medium">Összetétel:</span> {fabric.composition}</div>
                  {fabric.density !== "–" && (
                    <div><span className="font-medium">Sűrűség:</span> {fabric.density}</div>
                  )}
                  <div><span className="font-medium">Színek:</span> {fabric.colors} szín</div>
                </div>
                <ul className="space-y-1">
                  {fabric.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#7d6142] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Keressen bennünket további szövetválasztékkal kapcsolatban – több mint 100 féle szövetből választhat.
          </p>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
