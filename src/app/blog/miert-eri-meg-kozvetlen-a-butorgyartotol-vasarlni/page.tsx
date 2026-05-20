import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni? – Enzo Design",
  description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni bútort – ár, egyediség, minőség és közvetlen kommunikáció.",
};

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Miért éri meg közvetlenül a bútorgyártótól vásárolni?</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#7d6142] text-white text-xs font-semibold px-2.5 py-1 uppercase tracking-wide">Chesterfield</span>
            <span className="text-gray-400 text-xs">3 perc olvasás</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Miért éri meg közvetlenül a bútorgyártótól vásárolni?
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Enzo Design gyártóüzem" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A bútorvásárlás nem csupán esztétikai döntés, hanem hosszú távú befektetés is.
              Amikor bútort keresel otthonodba vagy irodádba, érdemes elgondolkodnod azon, hogy
              miért lehet jobb döntés egyenesen a gyártótól rendelni.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              1. Elkerülheted a felárat
            </h2>
            <p>
              A bútorboltok gyakran tartalmazzák a disztribúciós és raktározási költségeket az áraikban.
              Az Enzo Design közvetlenül a végfogyasztóval dolgozik, így ezek a rejtett költségek
              teljesen elmaradnak – versenyképes árat kapsz prémium minőségért.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              2. Egyediség, amit nem kapsz meg a boltokban
            </h2>
            <p>
              Boltban csak azt kapod, ami van. A gyártónál viszont lehetőséged van teljesen egyedi,
              személyre szabott bútorok rendelésére. Akár egy fotó alapján is elkészítjük azt,
              amit megálmodtál – saját méretben, szöveted és színed szerint.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              3. Hosszabb élettartam
            </h2>
            <p>
              Az Enzo Design bútorai tömörfa szerkezettel és nagy kopásállóságú szövettel készülnek,
              amelyek garantálják az időtállóságot. 3 év termékgaranciával és 10 év vázgaranciával
              adjuk ki a bútorait – ez ritka a piacon.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              4. Közvetlen kommunikáció
            </h2>
            <p>
              Nem kell üzeneteket közvetíteni egy eladón keresztül. Közvetlen kapcsolatban lehetsz
              a tervezőkkel és kivitelezőkkel, ami sokkal hatékonyabb és gyorsabb folyamattá teszi
              a rendelést. Kérdés esetén 2 napon belül árajánlatot adunk.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              5. Magyar munka támogatása
            </h2>
            <p>
              A hazai gyártás támogatása nemcsak gazdasági, hanem erkölcsi döntés is. Az Enzo Design
              Nagykanizsán, közel 20 éve gyárt egyedi kárpitozott bútorokat – helyi szakemberek
              munkájával, prémium anyagokból.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Rendeljön közvetlenül a gyártótól!</p>
            <Link href="/butoraink" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Megnézem a bútorokat
            </Link>
          </div>

          <div className="mt-6">
            <Link href="/blog" className="text-[#7d6142] font-semibold hover:underline text-sm">← Vissza a bloghoz</Link>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
