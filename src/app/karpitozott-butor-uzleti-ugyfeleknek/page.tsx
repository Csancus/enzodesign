import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Kárpitozott bútor üzleti ügyfeleknek – Enzo Design",
  description: "Éttermeknek, szállodáknak, rendelőknek, fogadóterekbe. Tömörfa szerkezettel, nagy kopásállóságú anyagokkal. Ingyenes helyszíni egyeztetés.",
};

const SEGMENTS = [
  {
    title: "Szálloda, fogadótér",
    desc: "Örömmel készítünk azonos designban többféle, egyedi méretű terméket.",
    image: "/images/uzleti-szalloda.webp",
  },
  {
    title: "Rendelő",
    desc: "Egy orvosi rendelő nem lehetne autentikus egy Chesterfield kanapé vagy néhány fotel nélkül.",
    image: "/images/uzleti-rendelo.webp",
  },
  {
    title: "Étterem, kávézó",
    desc: "Teljes, nagy teherbírású szetteket gyártunk kis kávézók vagy nagy éttermek részére.",
    image: "/images/uzleti-etterem.webp",
  },
  {
    title: "Airbnb",
    desc: "Egyedi, kisebb helységű Airbnb-k számára készítünk okos és vagány megoldásokat.",
    image: "/images/uzleti-airbnb.webp",
  },
];

const REFS = [
  "/images/uzleti-ref1.webp",
  "/images/uzleti-ref2.webp",
  "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
];

export default function UzletiButorPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1c1c1c] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-4">Üzleti megrendelések</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Éttermeknek, szállodáknak, rendelőknek, fogadóterekbe
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            2000 nm-es üzemünkben rendszeresen gyártunk nem csak lakossági, hanem üzleti megrendelésre is termékeket.
            Tömörfa szerkezettel, nagy kopásállóságú anyagokkal dolgozunk, így a bútor forgalmas helyeken is hosszú élettartammal rendelkezik.
          </p>
          <a
            href="#kapcsolat"
            className="inline-block bg-[#b8924a] hover:bg-[#7d6142] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm"
          >
            Ajánlatot kérek
          </a>
        </div>
      </section>

      {/* INTRO SZÖVEG */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Minden ügyfelünkkel egyedileg foglalkozunk.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Telefonos vagy emailes egyeztetést követően ingyenes helyszíni egyeztetéssel rövid határidőn belül elkészítjük a kért bútorokat.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Nézd meg referenciáinkat és kérj árajánlatot!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+36303778983"
              className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
              +36 30 377 8983
            </a>
            <a
              href="mailto:info@enzodesign.hu"
              className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
              info@enzodesign.hu
            </a>
          </div>
        </div>
      </section>

      {/* 4 SZEGMENS */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3
                      className="text-white font-bold text-lg leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELŐNYÖK */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-2xl font-bold text-[#1c1c1c] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Miért válasszon minket üzleti célra?
              </h2>
              <ul className="space-y-3 text-sm text-gray-700 mb-8">
                {[
                  "Nagy teherbírású kárpit anyagok (>100.000 martindale)",
                  "Tömörfa váz – 10 év vázgarancia",
                  "Egyedi méret, szín és kialakítás",
                  "Tömegtermelési lehetőség – 2000 nm-es üzem",
                  "Ingyenes helyszíni egyeztetés",
                  "Rövid határidő – 4–6 hét",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#b8924a] flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kapcsolat"
                className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
              >
                Ajánlatot kérek
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp"
                alt="Üzleti bútor gyártás"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCIÁK */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-[#1c1c1c] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Referenciák és inspirációk
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {REFS.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`Referencia ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KAPCSOLAT FORM */}
      <div id="kapcsolat">
        <ContactFormSection />
      </div>
    </>
  );
}
