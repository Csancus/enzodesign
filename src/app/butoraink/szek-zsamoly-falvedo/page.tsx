import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import FabricsSection from "@/components/sections/FabricsSection";

export const metadata: Metadata = {
  title: "Szék, zsámoly, falvédő – Enzo Design",
  description: "Kárpitozott székek 76.000 Ft-tól, zsámolyok és falvédők egyedi méretben.",
};

const CARDS = [
  { name: "Szék, zsámoly, falvédő", tagline: "Sok féle választék", image: "/images/9a0b1d_c51fa6474b5a4e789464c038a7b1c1d4.webp", href: "/butoraink/szek-zsamoly-falvedo" },
  { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

export default async function SzekZsamolyPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      {/* HERO */}
      <section className="bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Szék, zsámoly, falvédő
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Kárpitozott székek, zsámolyok és falvédők – egyedi méretben és szövettel.
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

      {/* GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Szék, zsámoly, falvédő</h2>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi bútor rendelése →
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CARDS.map((c) => (
              <Link key={c.name} href={c.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[#b8924a] text-sm font-semibold group-hover:underline">{c.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
