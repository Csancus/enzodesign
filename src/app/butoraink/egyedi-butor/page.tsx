import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import FabricsSection from "@/components/sections/FabricsSection";

export const metadata: Metadata = {
  title: "Egyedi Bútor – Enzo Design",
  description: "Egyedi kárpitozott bútor rendelés. Küldj egy képet és mi elkészítjük álmaid bútorát.",
};

const GALLERY = [
  "/images/d56f41_1856f7e2d27f49c0970c4b84722b089d.webp",
  "/images/d56f41_25474a021ee44234972eec82773e58de.webp",
  "/images/d56f41_2d00c16047994b71b258082850454298.webp",
  "/images/d56f41_33f0883f221f432e82f585c99d9462af.webp",
  "/images/d56f41_4ac620604ed74e9abf233f78ead4d1fd.webp",
  "/images/d56f41_6112327234134a6b97efea35c3078ddc.webp",
  "/images/d56f41_76121739e60c481ea7e2318fab374f6f.webp",
  "/images/d56f41_8e5df897a0fb4ab9a8fa551ab9cd1aca.webp",
];

export default async function EgyediButorPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      {/* HERO */}
      <section className="bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Egyedi bútor
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Küldj egy képet vagy leírást, és mi elkészítjük álmaid bútorát. Tömörfa váz, prémium szövetek, egyedi méret.
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

      {/* GALÉRIA */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Egyedi bútor</h2>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi bútor rendelése →
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={src} alt={`Egyedi bútor ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
