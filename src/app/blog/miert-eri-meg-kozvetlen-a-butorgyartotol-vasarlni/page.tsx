import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni? – Enzo Design",
  description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni bútort – ár, egyediség, minőség, közvetlen kommunikáció és magyar munka.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Miért éri meg közvetlenül a bútorgyártótól vásárolni?</span>
        </div>
      </nav>
      <PageHero moduleId="blog-miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni:hero" defaults={{ title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp" alt="Enzo Design gyártóüzem" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A bútorvásárlás nem csupán esztétikai döntés, hanem hosszú távú befektetés is. Amikor bútort
              keresel otthonodba vagy irodádba, érdemes elgondolkodnod azon, hogy miért lehet jobb döntés
              egyenesen a gyártótól rendelni – akár 30–40%-kal kedvezőbb áron.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              1. Elkerülheted a felárat
            </h2>
            <p>
              A bútorboltok áraikba beépítik a disztribúciós, raktározási és közvetítői költségeket.
              Az Enzo Design közvetlenül a végfogyasztóval dolgozik – ezek a rejtett költségek teljesen elmaradnak.
              Versenyképes árat kapsz prémium minőségért, közvetítő nélkül.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              2. Egyediség, amit nem kapsz meg a boltokban
            </h2>
            <p>
              Boltban csak azt kapod, ami van. A gyártónál lehetőséged van teljesen egyedi, személyre szabott
              bútor rendelésére. Az Enzo Design akár egy fotó alapján is elkészíti, amit megálmodtál –
              saját méretben, a te szöveteddel és színeddel.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Több mint 100 szövet- és bőrféleség</li>
              <li>Egyedi méret és konfiguráció</li>
              <li>Extra funkciók: ágyazható, tárolós, szögletes vagy lekerekített forma</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              3. Hosszabb élettartam és garancia
            </h2>
            <p>
              Az Enzo Design bútorai tömörfa szerkezettel és nagy kopásállóságú szövettel készülnek.
              <strong> 3 év termékgaranciával és 10 év vázgaranciával</strong> adjuk ki a bútorokat – ez ritka a piacon.
              Egy ilyen bútor nem 5–10 évre szól, hanem 20–30-ra is.
            </p>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image src="/images/chesterfield-karpitos-munka.webp" alt="Enzo Design kárpitozás kézimunka" fill className="object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              4. Közvetlen kommunikáció
            </h2>
            <p>
              Nem kell üzeneteket közvetíteni egy eladón keresztül. Közvetlen kapcsolatban lehetsz a tervezőkkel
              és kivitelezőkkel, ami sokkal hatékonyabb és gyorsabb folyamattá teszi a rendelést. Kérdés esetén
              2 napon belül árajánlatot adunk.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              5. Magyar munka támogatása
            </h2>
            <p>
              A hazai gyártás támogatása nemcsak gazdasági, hanem erkölcsi döntés is. Az Enzo Design Nagykanizsán,
              közel 20 éve gyárt egyedi kárpitozott bútorokat – helyi szakemberek munkájával, prémium anyagokból.
              Minden vásárlásoddal egy magyar műhely fennmaradását is támogatod.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Összehasonlítás: gyártótól vs. bútorboltból
            </h2>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Szempont</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Gyártótól (Enzo Design)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Bútorboltból</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Ár</td>
                    <td className="border border-gray-200 px-4 py-2">Gyártói ár, felár nélkül</td>
                    <td className="border border-gray-200 px-4 py-2">Közvetítői felár beépítve</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Egyediség</td>
                    <td className="border border-gray-200 px-4 py-2">Teljes testreszabás</td>
                    <td className="border border-gray-200 px-4 py-2">Csak raktárkészletből</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Garancia</td>
                    <td className="border border-gray-200 px-4 py-2">3 + 10 év</td>
                    <td className="border border-gray-200 px-4 py-2">Általában 1–2 év</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Kommunikáció</td>
                    <td className="border border-gray-200 px-4 py-2">Közvetlen a gyártóval</td>
                    <td className="border border-gray-200 px-4 py-2">Közvetítőn át</td>
                  </tr>
                </tbody>
              </table>
            </div>
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

      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
              { title: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
              { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
            ].map((a) => (
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
