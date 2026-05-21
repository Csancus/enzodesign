import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = { title: "A bútorgyártás menete" };

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
      {/* BANNER KÉP */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp"
          alt="A bútorgyártás menete"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end pb-8 px-6">
          <div className="max-w-4xl mx-auto w-full">
            <nav className="text-sm text-gray-300 mb-3">
              <Link href="/butorgyartas" className="hover:text-white">Bútorgyártás</Link>
              <span className="mx-2">/</span>
              <span className="text-[#b8924a]">A folyamat</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              A bútorgyártás menete – A részletek mestersége
            </h1>
          </div>
        </div>
      </div>

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            A bútorgyártás egy összetett, precíz folyamat, amelynek minden fázisa befolyásolja a végeredmény minőségét.
            A végeredmény mindig a részletekben rejlik – egy jól megmunkált sarok, egy feszesen húzott kárpit,
            precízen illeszkedő elemek.
          </p>
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

      {/* KAPCSOLÓDÓ CIKKEK */}
      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Bútortervezés", href: "/butorgyartas/tervezes" },
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
