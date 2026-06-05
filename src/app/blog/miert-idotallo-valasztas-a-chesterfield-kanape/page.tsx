import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Miért időtálló választás a Chesterfield kanapé? – Enzo Design",
  description: "A Chesterfield kanapé történelme, stílusok, színek és miért illik a modern otthonba is – átfogó útmutató a klasszikus brit bútor világához.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Miért időtálló választás a Chesterfield kanapé?</span>
        </div>
      </nav>
      <PageHero moduleId="blog-miert-idotallo-valasztas-a-chesterfield-kanape:hero" defaults={{ title: "Miért időtálló választás a Chesterfield kanapé?" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp" alt="Chesterfield kanapé időtálló stílus" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A Chesterfield kanapé nem csupán egy bútor, hanem egy életérzés. A klasszikus elegancia,
              az időtlen formavilág és a prémium anyaghasználat ötvözete. Akár egy modern loftban,
              akár egy vidéki kúriában helyezed el – azonnal uralja a teret, stílusosan.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              A Chesterfield kanapé története – egy brit ikon születése
            </h2>
            <p>
              A Chesterfield kanapé eredete az 1700-as évekre nyúlik vissza. Lord Phillip Stanhope,
              Chesterfield negyedik grófja rendelt egy különleges, bőrrel kárpitozott ülőalkalmatosságot.
              A cél: egy olyan bútordarab, amelyen a vendégek egyenesen ülhetnek anélkül, hogy ruhájuk
              összegyűrődne. A mélyen gombolt háttámla, az egy szintben futó karfa és háttámla, valamint
              a masszív fakeret mind ebből az eredeti megrendelésből öröklődött ránk.
            </p>
            <p><strong>Klasszikus jellemzők:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mélyen gombolt háttámla (deep button-tufting)</li>
              <li>Egy szintben futó háttámla és kartámasz</li>
              <li>Magas minőségű bőr vagy bársony kárpit</li>
              <li>Masszív, kézzel készített tömörfa szerkezet</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              A modern Chesterfield helye a mai enteriőrökben
            </h2>
            <p>
              Sokan úgy gondolják, hogy ez a kanapétípus csak klasszikus vagy vintage terekbe illik – de ez tévedés.
              Semleges színekben – bézs, szürke, zöld vagy sötétkék – diszkrét eleganciát sugall még egy minimalista
              nappaliban is. Bársonyos vagy matt bőr felületek textúrát adnak a térnek, a moduláris változatok
              pedig alkalmazkodnak a mai lakások igényeihez.
            </p>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image src="/images/chesterfield-modern-enterior.webp" alt="Chesterfield kanapé modern enteriőrben" fill className="object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Egyedi gyártás: a luxus személyre szabva
            </h2>
            <p>
              A prémium kategóriás Chesterfield bútor nem futószalagon készül. Az Enzo Design kínálatában
              megtalálható darabok kézzel készülnek, kiváló minőségű kárpitanyagok és tömörfa szerkezet
              felhasználásával. Méretre szabott kanapé, szabad szín- és anyagválasztás, extra funkciók –
              mint az ágyazható változat – mind elérhetők.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield ülőgarnitúra – a teljes szett
            </h2>
            <p>
              A Chesterfield stílus nem ér véget a kanapénál. A teljes garnitúra részeként fotel, puff,
              sarokkanapé, étkezőszék és akár franciaágy is rendelhető egységes megjelenéssel – így az egész
              lakás koherens, karakteres stílust kap.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Zöld és kék – az új klasszikusok
            </h2>
            <p>
              Az utóbbi években a Chesterfield zöld és kék változata egyre népszerűbb. Ezek a színek mélységet,
              karaktert és nyugalmat sugallnak, miközben friss, modern érzést keltenek. A barna és a bézs
              a klasszikus bőrhatást idézi – mindkettő időtlen választás.
            </p>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Szín</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Hatás</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-200 px-4 py-2">Zöld</td><td className="border border-gray-200 px-4 py-2">Természetközeli, luxus érzet</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Kék</td><td className="border border-gray-200 px-4 py-2">Hűvös elegancia, időtlenség</td></tr>
                  <tr><td className="border border-gray-200 px-4 py-2">Barna</td><td className="border border-gray-200 px-4 py-2">Klasszikus bőrkanapé stílus</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Szürke</td><td className="border border-gray-200 px-4 py-2">Modern, letisztult hatás</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mire figyelj, ha használt Chesterfield kanapét nézel?
            </h2>
            <p>
              Ha vintage vagy antik darabot keresel, ellenőrizd a kárpit kopottságát, a gombolás állapotát
              és a fa szerkezet stabilitását. Az eredeti brit darabok több évtizedes múltra is visszatekinthetnek –
              a tömörfa váz generációkon át bírja, ha a kárpit esetleg cserére szorul is.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Válassza ki az Önnek való Chesterfield kanapét!</p>
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Árak és kollekció
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
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
              { title: "Bőr fotel", href: "/blog/bor-fotel" },
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
