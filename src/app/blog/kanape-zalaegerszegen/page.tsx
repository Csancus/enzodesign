import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kanapé Zalaegerszegen – Enzo Design",
  description: "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – útmutató Zalaegerszeg és közelének vásárlóinak.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Kanapé Zalaegerszegen</span>
        </div>
      </nav>
      <PageHero moduleId="blog-kanape-zalaegerszegen:hero" defaults={{ title: "Kanapé Zalaegerszegen" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp" alt="Ivone kanapé" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Ha Zalaegerszegen él és új kanapét keres, érdemes a nagykanizsai Enzo Designhoz fordulni – mindössze
              30 km-re vagyunk, és az ország egész területére házhozszállítással dolgozunk.
            </p>
            <p>
              Egy új kanapé vásárlásakor az ár és a dizájn mellett érdemes figyelni a szerkezeti minőségre is.
              Tömörfa váz, megfelelő rugózás és legalább 50.000 martindale kopásállóságú szövet – ezek az alapok,
              amelyek hosszú éveken át megőrzik a bútor szépségét.
            </p>
            <p>
              Az Enzo Design kollekciói közül a legnépszerűbbek Zalaegerszeg és a Dél-Dunántúl területén:
              az Ivone, az Old's Club és a Chesterfield modellek. Mindhárom rendelhető 2-es, 3-as és
              sarokkanapé formában, több száz szövet- és bőrfajtával.
            </p>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Szállítás Zalaegerszegre
            </h2>
            <p>
              Bútorainkat az első biztonságos ajtóig szállítjuk az ország bármely pontjára. A szállítást
              a gyártás befejezésekor (4–6 héttel a megrendelés után) koordináljuk, és előre egyeztetünk
              a pontos időpontról.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Rendelje meg kanapéját most!</p>
            <a href="tel:+36303778983" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              +36 30 377 8983
            </a>
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
