import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Üzleti Bútor",
  description: "Kárpitozott bútorok kávézóknak, éttermeknek, szállodáknak, orvosi rendelőknek. Ingyenes helyszíni egyeztetés.",
};

const SEGMENTS = [
  { title: "Szállodák és recepciók", desc: "Egyedi garnitúrák különböző méretben, a belső tér karakteréhez igazítva." },
  { title: "Orvosi rendelők", desc: "Chesterfield kanapék és fotelek, amelyek hiteles szakmai környezetet teremtenek." },
  { title: "Éttermek és kávézók", desc: "Nagy teherbírású kárpitozott székek és kanapék, amelyek ellenállnak a napi nagy forgalomnak." },
  { title: "Airbnb és bérleményi ingatlanok", desc: "Helytakarékos, kreatív megoldások kisebb alapterületű bérleményekhez." },
];

export default function UzletiButorPage() {
  return (
    <>
      <PageHero
        label="B2B megoldások"
        title="Éttermeknek, szállodáknak, rendelőknek, fogadóterekbe"
        subtitle="Kávézóba, étterembe, szállodába, orvosi rendelőbe rendszeresen készítünk nagy teherbírású bútorokat."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Miért válasszon minket üzleti célra?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                2000 nm-es telephelyünkön lehetőség van nagyobb mennyiségű bútor gyártására is.
                Kizárólag tömörfa szerkezettel és nagy kopásállóságú anyagokkal dolgozunk –
                a kereskedelmi forgalomhoz tervezett bútorok ellenállnak a napi igénybevételnek.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <strong>Ingyenes helyszíni egyeztetés</strong> után egyedi árajánlatot készítünk.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-8">
                {[
                  "Nagy teherbírású kárpit anyagok (>100.000 martindale)",
                  "Tömörfa váz – 10 év garancia",
                  "Egyedi méret, szín és kialakítás",
                  "Tömegtermelési lehetőség",
                  "Ingyenes helyszíni egyeztetés",
                  "Rövid határidő – 4–6 hét",
                ].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href="tel:+36303778983" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
                +36 30 377 8983
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Üzleti bútor" fill className="object-cover" />
            </div>
          </div>

          {/* SZEGMENSEK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="bg-[#f5f0e8] p-6">
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
