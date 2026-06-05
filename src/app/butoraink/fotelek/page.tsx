import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import FabricsSection from "@/components/sections/FabricsSection";

export const metadata: Metadata = {
  title: "Fotelek – Enzo Design",
  description: "Fotel kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker – 82.820 Ft-tól.",
};

const CARDS = [
  { name: "Old's Club Fotel", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek/olds-club-fotel" },
  { name: "Ivone Fotel", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/fotelek/ivone-fotel" },
  { name: "Design Fotel", tagline: "Modern minőség", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butoraink/fotelek/design-fotel" },
  { name: "Chesterfield Fotel", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butoraink/fotelek/chesterfield-fotel" },
  { name: "New York Fotel", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/fotelek/new-york-fotel" },
  { name: "Joker Fotel", tagline: "Elegáns bútor, bárhova", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/fotelek/joker-fotel" },
  { name: "További Fotelek", tagline: "Kényelem, karfával", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek/tovabbi-fotelek" },
  { name: "Egyedi Fotelek", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti Fotelek, székek", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

export default async function FotelekPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      {/* HERO */}
      <section className="bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Fotelek
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot. A Bútoraink szövete és anyagmintája szabadon választható.
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
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Fotelek</h2>
          <p className="text-sm text-gray-500 mb-1">
            Válasszon a 2000 nm-es gyárunkból, kért méretben és anyagmintával.
          </p>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi fotelt is elkészítünk →
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map((c) => (
              <Link key={c.name} href={c.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
