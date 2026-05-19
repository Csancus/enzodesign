import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import { FABRICS } from "@/data/products";

export const metadata: Metadata = { title: "Bútoripari anyagok" };

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/butorgyartas" className="hover:text-white">Bútorgyártás</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Anyagok</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Anyagok</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-8">
            Az anyagválasztás kulcsfontosságú a bútoriparban. A minőségi bútor megfelelő anyagokkal kezdődik:
            tömörfa, lemez alapú termékek, kárpitanyagok és bőrök. Kizárólag tartós tömörfa szerkezettel
            és extra kopásállóságú szövetekkel dolgozunk.
          </p>

          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Elérhető kárpitszöveteink</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FABRICS.map((fabric) => (
              <div key={fabric.code} className="border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1c1c1c] text-white font-bold text-sm px-3 py-1">{fabric.code}</span>
                  <span className="font-semibold text-[#1c1c1c]">{fabric.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div><span className="font-medium">Kopásállóság:</span> {fabric.martindale}</div>
                  <div><span className="font-medium">Összetétel:</span> {fabric.composition}</div>
                  <div><span className="font-medium">Színek:</span> {fabric.colors}</div>
                </div>
                <ul className="space-y-1">
                  {fabric.features.map(f => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#7d6142] rounded-full flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Több mint 100 szövetfajtából választhat – kérjen egyedi ajánlatot!
          </p>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
