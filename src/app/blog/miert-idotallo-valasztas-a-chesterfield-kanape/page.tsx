import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Miért időtálló választás a Chesterfield kanapé? – Enzo Design",
  description: "A Chesterfield kanapé történelme, stílusok, színek és miért illik a modern otthonba – átfogó útmutató.",
};

export default function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Miért időtálló választás a Chesterfield kanapé?</span>
        </div>
      </nav>
      <PageHero title="Miért időtálló választás a Chesterfield kanapé?" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Chesterfield kanapé" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A Chesterfield kanapé nem csupán egy bútor, hanem egy életérzés. A klasszikus elegancia,
              az időtlen formavilág és a prémium anyaghasználat ötvözete. Akár egy modern loftban,
              akár egy vidéki kúriában helyezed el, azonnal uralja a teret – stílusosan.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Egy brit ikon születése
            </h2>
            <p>
              A Chesterfield kanapé eredete az 1700-as évekre nyúlik vissza, amikor Lord Phillip Stanhope,
              Chesterfield negyedik grófja megrendelt egy különleges, bőrrel kárpitozott ülőalkalmatosságot.
              A cél: egy olyan bútordarab, amelyen a vendégek egyenesen ülhetnek anélkül, hogy a ruhájuk
              összegyűrődne. A mélyen gombolt háttámla, az egy szintben futó karfa és háttámla, valamint
              a masszív fakeret mind ebből az eredeti megrendelésből öröklődött ránk.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              A modern Chesterfield helye a mai enteriőrökben
            </h2>
            <p>
              Sokan úgy gondolják, hogy ez a kanapétípus csak klasszikus vagy vintage terekbe illik –
              de ez tévedés. Semleges színekben – bézs, szürke, zöld vagy sötétkék – diszkrét eleganciát
              sugall még egy minimalista nappaliban is. Bársonyos vagy matt bőr felületek textúrát adnak
              a térnek, a moduláris változatok pedig alkalmazkodnak a mai lakások igényeihez.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Egyedi gyártás: a luxus személyre szabva
            </h2>
            <p>
              A prémium kategóriás Chesterfield bútor nem futószalagon készül. Az Enzo Design kínálatában
              megtalálható darabok kézzel készülnek, kiváló minőségű kárpitanyagok és tömörfa szerkezet
              felhasználásával. Méretre szabott kanapé, szabad szín- és anyagválasztás, extra funkciók –
              mint az ágyazható változat – mind elérhetők.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield ülőgarnitúra – a teljes szett
            </h2>
            <p>
              A Chesterfield stílus nem ér véget a kanapénál. A teljes garnitúra részeként fotel,
              puff, sarokkanapé, étkezőszék és akár franciaágy is rendelhető egységes megjelenéssel –
              így az egész lakás koherens, karakteres stílust kap.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Zöld és kék – az új klasszikusok
            </h2>
            <p>
              Az utóbbi években a Chesterfield zöld és kék változata egyre népszerűbb. Ezek a színek
              mélységet, karaktert és nyugalmat sugallnak, miközben friss, modern érzést keltenek.
              A barna és a bézs pedig a klasszikus bőrhatást idézi meg – mindkettő időtlen választás.
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
      <ContactFormSection />
    </>
  );
}
