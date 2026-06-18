import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import { FABRICS } from "@/data/products";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Alapanyagok a bútorgyártásban – Enzo Design",
  alternates: { canonical: "https://enzodesign.hu/butorgyartas/anyagok" },
  openGraph: {
    title: "Alapanyagok a bútorgyártásban – Enzo Design",
    description: "Tömörfa, rugók, szivacs, prémium kárpitszövetek – megtudhatja, milyen alapanyagokból készülnek az Enzo Design bútorai. Tartósság és esztétika.",
    url: "https://enzodesign.hu/butorgyartas/anyagok",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <Link href="/butorgyartas" className="hover:text-white">Bútorgyártás</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Anyagok</span>
        </div>
      </nav>
      <PageHero
        moduleId="butorgyartas-anyagok:hero"
        defaults={{ title: "Alapanyagok a bútorgyártásban – A tartósság és esztétika alapkövei" }}
      />

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
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

      {/* KAPCSOLÓDÓ CIKKEK */}
      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Bútortervezés", href: "/butorgyartas/tervezes" },
              { title: "A bútorgyártás menete", href: "/butorgyartas/butorgyartas-folyamata" },
              { title: "Chesterfield – Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
            ].map(a => (
              <Link key={a.href} href={a.href} className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a]">
                {a.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
