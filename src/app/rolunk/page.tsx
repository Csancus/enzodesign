import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Rólunk – Enzo Design",
  description: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán, 2000 nm-es telephelyünkön.",
};

export default function RolunkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1c1c1c] py-24 text-center text-white overflow-hidden">
        <Image
          src="/images/uzem.jpg"
          alt="Enzo Design műhely"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Rólunk</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Fától a kanapéig
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Közel 20 éve gyártunk kárpitozott bútorokat Nagykanizsán.
          </p>
        </div>
      </section>

      {/* SZÖVEG */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Ki vagyunk mi?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Az Enzo Design közel 20 éve készít egyedi kárpitozott bútorokat Nagykanizsán,
              2000 nm-es telephelyünkön. Termékeink Magyarországon, Németországban és egész
              Európában megtalálhatók.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kizárólag tömörfa szerkezettel és nagy kopásállóságú anyagokkal dolgozunk.
              Minden elkészített bútort kézzel ellenőrzünk – a minőség elsődleges számunkra.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gyártóként és kereskedőként egyaránt működünk, ezért nincs szükség közvetítőkre –
              így reális, versenyképes áron juthat hozzá álombútoráros. Lakóbútorok,
              kávézók, éttermek és szállodák számára egyaránt készítünk bútorokat.
            </p>
            <blockquote className="border-l-4 border-[#7d6142] pl-4 italic text-gray-500 mb-6">
              „Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak."
              <footer className="mt-2 text-sm not-italic font-medium text-[#7d6142]">– Bernlef</footer>
            </blockquote>
          </div>
          <div>
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image src="/images/uzem.jpg" alt="Enzo Design telephely" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Alapítva", value: "2015" },
                { label: "Telephely", value: "2000 nm" },
                { label: "Tapasztalat", value: "~20 év" },
                { label: "Garancia", value: "3+10 év" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f5f0e8] p-4 text-center">
                  <div className="text-2xl font-bold text-[#7d6142]" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ÉRTÉKEK */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            Miért válasszon minket?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tömörfa szerkezet",
                desc: "Minden bútorunk tömörfa vázra épül, amely 10 év garanciával rendelkezik.",
              },
              {
                title: "Egyedi méret és szín",
                desc: "Több száz szövet- és bőrfajtából választhat. Bármilyen méretben és kivitelben elkészítjük.",
              },
              {
                title: "Közvetlen gyártó",
                desc: "Nem kereskedünk mások bútorával – mi gyártjuk, amit eladunk. Versenyképes ár, nincs közvetítő.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1c] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Szeretne egyedi bútort?
          </h2>
          <p className="text-gray-400 mb-8">
            Vegye fel velünk a kapcsolatot – 24 órán belül visszahívjuk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+36303778983"
              className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              +36 30 377 8983
            </a>
            <Link
              href="/kapcsolat-es-rendeles"
              className="border-2 border-white hover:bg-white hover:text-[#1c1c1c] text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors"
            >
              Rendelés
            </Link>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Rendelés és kapcsolat
          </h2>
          <div className="bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
