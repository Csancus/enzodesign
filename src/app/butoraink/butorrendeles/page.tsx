import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Bútor Rendelés",
  description: "Rendelje meg álombútorát az Enzo Designtól – töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default function ButorrendelesPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Rendelés</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Bútor rendelés
          </h1>
          <p className="mt-4 text-gray-300">Töltse ki az alábbi űrlapot – 24 órán belül visszahívjuk!</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Hogyan rendeljen?</h2>
            <ol className="space-y-4">
              {[
                { title: "Küldjön üzenetet", desc: "Töltse ki az űrlapot, vagy hívjon minket a +36 30 377 8983 számon." },
                { title: "Egyeztetés", desc: "Megbeszéljük az igényeket – típus, szín, méret, anyag. Küldhet képet Pinterestről is." },
                { title: "Előleg", desc: "Előlegbekérő szerződés küldése. Az 50% előleg átutalással is fizethető." },
                { title: "Gyártás", desc: "4–6 héten belül elkészül bútora." },
                { title: "Kiszállítás", desc: "Az első biztonságos ajtóig szállítunk az egész országban." },
              ].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 bg-[#7d6142] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-[#1c1c1c]">{s.title}</p>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#f5f0e8] p-5 text-center">
                <div className="text-2xl font-bold text-[#7d6142]">4–6 hét</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Gyártási idő</div>
              </div>
              <div className="bg-[#f5f0e8] p-5 text-center">
                <div className="text-2xl font-bold text-[#7d6142]">50%</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Előleg</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Rendelési űrlap</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
