import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = { title: "Bútorgyártás folyamata" };

const STEPS = [
  { step: "01", title: "Tervezés", desc: "CAD modellezés, az ügyfél igényeinek részletes dokumentálása. Egyedi bútoroknál szoros kommunikáció és precíz dokumentáció szükséges." },
  { step: "02", title: "Anyagbeszerzés", desc: "Tömörfa, kárpitanyagok, rugók, szivacs – csak prémium minőségű alapanyagokkal dolgozunk." },
  { step: "03", title: "Alkatrészek előkészítése", desc: "CNC marókkal és lézervágókkal precíz, ismételhető alkatrészek készülnek." },
  { step: "04", title: "Összeszerelés", desc: "A fa váz összeillesztése és rögzítése – a vázra 10 év garanciát vállalunk." },
  { step: "05", title: "Kárpitozás", desc: "Kézzel végzett részletmunka – szivacs, rugók, szövet feszítése. A gombolt háttámla precíz kézimunkát igényel." },
  { step: "06", title: "Minőségellenőrzés", desc: "Minden elkészített bútort kézzel ellenőrzünk, mielőtt kiszállítjuk." },
];

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/butorgyartas" className="hover:text-white">Bútorgyártás</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">A folyamat</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Bútorgyártás folyamata
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="text-4xl font-bold text-[#ede6d8] flex-shrink-0 w-16 leading-none pt-1" style={{ fontFamily: "var(--font-heading)" }}>{s.step}</div>
                <div className="flex-1 border-b border-gray-100 pb-8">
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
