import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = { title: "A bútortervezés alapjai" };

export default function Page() {
  return (
    <>
      {/* BANNER KÉP */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp"
          alt="A bútortervezés alapjai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end pb-8 px-6">
          <div className="max-w-4xl mx-auto w-full">
            <nav className="text-sm text-gray-300 mb-3">
              <Link href="/butorgyartas" className="hover:text-white">Bútorgyártás</Link>
              <span className="mx-2">/</span>
              <span className="text-[#b8924a]">Tervezés</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              A bútortervezés alapjai – Az ötlettől a formáig
            </h1>
          </div>
        </div>
      </div>

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            A bútortervezés ötvözi a felhasználói igényeket, az ergonómiát, a stílust és a funkcionalitást –
            az esztétika önmagában nem elégséges kritérium.
          </p>
          <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>A jó dizájn elve</h2>
            <p>„A jó dizájn figyelembe veszi a használat célját, az adott tér adottságait és a felhasználó életstílusát." A minőségi bútor kényelmes és tartós is legyen – ezért minden egyedi darabunkat részletes tervezési folyamat előzi meg.</p>
            <p>CAD modellezést alkalmazunk a precizitásért és az ügyfélkommunikációért. Az egyedi daraboknál minden egyes lépés dokumentálva van, hogy a végeredmény pontosan megfeleljen az elképzeléseknek.</p>
            <p>Fenntarthatóság: FSC-tanúsítványú fa, újrahasznosított kárpitanyagok és formaldehidmentes ragasztók is elérhetők igény szerint.</p>
            <ul className="space-y-2 text-sm">
              {["CAD 3D modellezés", "Ergonómiai szempontok figyelembevétele", "Fenntartható anyagválasztás", "Részletes dokumentáció egyedi daraboknál"].map(f => (
                <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
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
              { title: "A bútorgyártás menete", href: "/butorgyartas/butorgyartas-folyamata" },
              { title: "Anyagok", href: "/butorgyartas/anyagok" },
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
