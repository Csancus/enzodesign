import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Rólunk – Enzo Design",
  description: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán, 2000 nm-es telephelyünkön.",
};

export default function RolunkPage() {
  return (
    <>
      <section className="bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Rólunk</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            Rólunk
          </h1>
          <p className="mt-4 text-gray-500">Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán.</p>
        </div>
      </section>

      <section className="bg-white pt-12 pb-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
              alt="Enzo Design kanapé"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* TÖRTÉNETÜNK */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Történetünk
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nagykanizsán közel 20 éve készítünk bútorokat melyeket főleg Magyarországon
              és Németországban, de Európa szerte használnak.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A minőség elsődleges számunkra, ezért kizárólag tömörfa szerkezettel és nagy
              kopásállóságú anyagokkal dolgozunk.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mivel mi vagyunk a gyártó és az eladó is, ezért nincs extra reklámköltségünk,
              így reális áron tudjuk adni bútoraink.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              2000 nm-es üzemünkben bármilyen egyedi, vagy típusbútort el tudunk készíteni
              lakásokba, kávézókba, éttermekbe vagy szállodákba is.
            </p>
            <blockquote className="border-l-4 border-[#7d6142] pl-4 italic text-gray-500 mb-6">
              „Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak."
              <footer className="mt-2 text-sm not-italic font-medium text-[#7d6142]">– Bernlef</footer>
            </blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Enzo Design telephely" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* STATISZTIKÁK */}
      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Alapítva", value: "2015" },
              { label: "Telephely", value: "2000 nm" },
              { label: "Tapasztalat", value: "~20 év" },
              { label: "Garancia", value: "3+10 év" },
            ].map((s) => (
              <div key={s.label} className="bg-white p-6 text-center">
                <div className="text-2xl font-bold text-[#7d6142]" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Szeretne egyedi bútort?
          </h2>
          <p className="text-gray-600 mb-8">Vegye fel velünk a kapcsolatot – 24 órán belül visszahívjuk!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+36303778983" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm">
              +36 30 377 8983
            </a>
            <Link href="/kapcsolat-es-rendeles" className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm">
              Rendelés
            </Link>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
