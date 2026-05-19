import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = { title: "Bútortervezés" };

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/butorgyartas" className="hover:text-white">Bútorgyártás</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Tervezés</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Tervezés</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>A jó dizájn elve</h2>
          <p>„A jó dizájn figyelembe veszi a használat célját, az adott tér adottságait és a felhasználó életstílusát." Esztétika önmagában nem elégséges kritérium – a minőségi bútor kényelmes és tartós is legyen.</p>
          <p>CAD modellezést alkalmazunk a precizitásért és az ügyfélkommunikációért. Az egyedi daraboknál minden egyes lépés dokumentálva van.</p>
          <p>Fenntarthatóság: FSC-tanúsítványú fa, újrahasznosított kárpitanyagok és formaldehidmentes ragasztók is elérhetők igény szerint.</p>
          <ul className="space-y-2 text-sm">
            {["CAD 3D modellezés", "Ergonómiai szempontok figyelembevétele", "Fenntartható anyagválasztás", "Részletes dokumentáció egyedi daraboknál"].map(f => (
              <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 bg-[#7d6142]" />{f}</li>
            ))}
          </ul>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
