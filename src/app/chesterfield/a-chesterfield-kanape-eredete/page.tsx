import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "A Chesterfield kanapé eredete",
  description: "A Chesterfield kanapé a 18. századi angol arisztokrácia körében született. Ismerd meg a történetét.",
};

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Eredete</span>
          </nav>
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Történelem</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            A Chesterfield kanapé eredete
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>A 18. századi arisztokrácia öröksége</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Chesterfield kanapé a 18. század közepén keletkezett. Egy történet szerint a 4. Chesterfield gróf
              kérte fel udvari asztalosát, hogy készítsen olyan bútort, amely egyenes testtartást tesz lehetővé
              a ruha összegyűrődése nélkül.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Az eredeti bútorok bőrrel voltak borítva, kézzel készített lábakkal. A viktoriánus korszakban
              elterjedtek, majd klubokban és otthonokban egyaránt megjelentek.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A modern verzióban már különféle anyagok használatosak – például bársony vagy szövet – mégis
              megőrizte jellegzetes gombolását és karakterét.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A Chesterfield bútor időtálló befektetés, amely több generáción átörökíthető – megtartja
              jellegzetes patinaját és megjelenését.
            </p>
          </div>
          <div>
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Chesterfield kanapé" fill className="object-cover" />
            </div>
            <div className="bg-[#f5f0e8] p-6">
              <h3 className="font-semibold text-[#1c1c1c] mb-2">Az Enzo Design Chesterfieldről</h3>
              <p className="text-sm text-gray-600">
                Közel 20 éve gyártunk Chesterfield bútorokat tömörfa szerkezettel, prémium szövettel és bőrrel.
              </p>
              <Link href="/butoraink/kanapek/chesterfield-kanapek" className="inline-block mt-4 bg-[#7d6142] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-[#b8924a] transition-colors">
                Megnézem az árakat
              </Link>
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
