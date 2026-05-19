import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Chesterfield – Anyagok és gyártási technikák" };

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Anyagok és gyártási technikák</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Anyagok és gyártási technikák
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>Hagyományos és modern anyagok</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A klasszikus Chesterfield bútorok kizárólag prémium minőségű valódi bőrből készültek,
                leggyakrabban szarvasbőrből. A fa váz elengedhetetlen a tartóssághoz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A modern változatokban bársony, mikroszálas szövetek és újrahasznosított anyagok is megjelennek,
                lehetővé téve, hogy a Chesterfield stílus különböző enteriőrökbe is beilleszkedjen.
              </p>
              <h3 className="text-lg font-bold text-[#1c1c1c] mt-6 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Gyártási technikák</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Mély gombolás (button-tufting) – kézzel kivitelezett precíziós technika",
                  "Párnázás: hagyományos lószőr és gyapjú vs. modern szivacs",
                  "Rugórendszer: klasszikus spirálrugók vagy modern habszivacs alap",
                  "Kézzel készített részletek: sárgaréz szegecs, faragott lábak",
                ].map(t => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0 mt-1.5" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/uzem.jpg" alt="Gyártási folyamat" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>Rendelés és kapcsolat</h2>
          <div className="bg-white p-8 shadow-sm"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
