import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import FabricsSection from "@/components/sections/FabricsSection";

export const metadata: Metadata = {
  title: "Franciaágyak – Enzo Design",
  description: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. 351.160 Ft-tól, tömörfa szerkezettel.",
};

const BEDS_ROW1 = [
  { name: "Bilbao franciaágy", tagline: "Kényelmedre", image: "/images/e7ad8b_335724cf7ec5471c89807f009900353d.webp", href: "/butoraink/franciaagyak" },
  { name: "Madrid franciaágy", tagline: "Hálószobád éke", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", href: "/butoraink/franciaagyak" },
  { name: "További ágyak", tagline: "Kísértő és zseniális darabok", image: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", href: "/butoraink/franciaagyak" },
];

const BEDS_ROW2 = [
  { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

export default async function FranciaagyakPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      {/* HERO */}
      <section className="bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Franciaágyak
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. Tömörfa szerkezettel, prémium szövetekkel.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#b8924a] mb-3">Mindegyik bútorunkat ajánljuk:</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            <li>Egyedi szín és anyagminta választással</li>
            <li>Tetszőleges méretben</li>
            <li>Választható kopásállóság-erősséggel (martindale)</li>
            <li>Tömörfa szerkezettel, 10 év váz-garanciával</li>
          </ul>
        </div>
      </section>

      {/* FRANCIAÁGYAK GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Franciaágyak</h2>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi franciaágyat is elkészítünk →
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {BEDS_ROW1.map((b) => (
              <Link key={b.name} href={b.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image src={b.image} alt={b.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[#b8924a] text-sm font-semibold group-hover:underline">{b.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{b.tagline}</p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BEDS_ROW2.map((b) => (
              <Link key={b.name} href={b.href} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden mb-3">
                  <Image src={b.image} alt={b.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[#b8924a] text-sm font-semibold group-hover:underline">{b.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{b.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
