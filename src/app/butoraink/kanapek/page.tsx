import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import { SOFA_COLLECTIONS } from "@/data/products";

export const metadata: Metadata = {
  title: "Kanapék",
  description: "Kanapé kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker, Cannes – egyedi méretben és szövetben.",
};

const EXTRA_CARDS = [
  { name: "Egyedi kanapé", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti bútor", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

export default function KanapekPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Bútoraink</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Kanapék
          </h1>
          <p className="mt-4 text-gray-300">
            Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel
            és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk.
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFA_COLLECTIONS.map((sofa) => (
              <Link
                key={sofa.slug}
                href={`/butoraink/kanapek/${sofa.slug}`}
                className="group block overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={sofa.image}
                    alt={sofa.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
                    {sofa.name}
                  </h2>
                  <p className="text-[#7d6142] text-sm font-medium mb-2">{sofa.tagline}</p>
                  <p className="text-gray-500 text-sm line-clamp-2">{sofa.description}</p>
                  {sofa.pricing.ketSzemelyes && (
                    <p className="mt-3 text-sm font-semibold text-[#1c1c1c]">
                      2-es kanapé:{" "}
                      <span className="text-[#7d6142]">
                        {sofa.pricing.ketSzemelyes.alap.toLocaleString("hu-HU")} Ft-tól
                      </span>
                    </p>
                  )}
                  {sofa.pricing.sarok && !sofa.pricing.ketSzemelyes && (
                    <p className="mt-3 text-sm font-semibold text-[#1c1c1c]">
                      Sarokkanapé:{" "}
                      <span className="text-[#7d6142]">
                        {sofa.pricing.sarok.alap.toLocaleString("hu-HU")} Ft-tól
                      </span>
                    </p>
                  )}
                </div>
              </Link>
            ))}
            {EXTRA_CARDS.map((card) => (
              <Link
                key={card.name}
                href={card.href}
                className="group block overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image src={card.image} alt={card.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>{card.name}</h2>
                  <p className="text-[#7d6142] text-sm font-medium">{card.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
