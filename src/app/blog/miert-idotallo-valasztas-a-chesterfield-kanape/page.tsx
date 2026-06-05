import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

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

      <PageBuilderPage
        pageId="blog:miert-idotallo-valasztas-a-chesterfield-kanape"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Miért időtálló választás a Chesterfield kanapé?",
              subtitle: "A Chesterfield kanapé nem csupán egy bútor, hanem egy életérzés. Klasszikus elegancia, időtlen formavilág és prémium anyaghasználat ötvözete. Akár egy modern loftban, akár egy vidéki kúriában helyezed el – azonnal uralja a teret.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp",
              alt: "Chesterfield kanapé időtálló stílus",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "A Chesterfield kanapé története – egy brit ikon születése",
              body: "A Chesterfield kanapé eredete az 1700-as évekre nyúlik vissza. Lord Phillip Stanhope, Chesterfield negyedik grófja rendelt egy különleges, bőrrel kárpitozott ülőalkalmatosságot. A cél: egy olyan bútordarab, amelyen a vendégek egyenesen ülhetnek anélkül, hogy ruhájuk összegyűrődne. A mélyen gombolt háttámla, az egy szintben futó karfa és háttámla, valamint a masszív fakeret mind ebből az eredeti megrendelésből öröklődött ránk.\n\nKlasszikus jellemzők:\nMélyen gombolt háttámla (deep button-tufting)\nEgy szintben futó háttámla és kartámasz\nMagas minőségű bőr vagy bársony kárpit\nMasszív, kézzel készített tömörfa szerkezet\n\nA modern Chesterfield helye a mai enteriőrökben\nSokan úgy gondolják, hogy ez a kanapétípus csak klasszikus vagy vintage terekbe illik – de ez tévedés. Semleges színekben – bézs, szürke, zöld vagy sötétkék – diszkrét eleganciát sugall még egy minimalista nappaliban is. Bársonyos vagy matt bőr felületek textúrát adnak a térnek, a moduláris változatok pedig alkalmazkodnak a mai lakások igényeihez.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Egyedi gyártás és a teljes Chesterfield szett",
              body: "A prémium kategóriás Chesterfield bútor nem futószalagon készül. Az Enzo Design kínálatában megtalálható darabok kézzel készülnek, kiváló minőségű kárpitanyagok és tömörfa szerkezet felhasználásával. Méretre szabott kanapé, szabad szín- és anyagválasztás, extra funkciók – mint az ágyazható változat – mind elérhetők.\n\nChesterfield ülőgarnitúra – a teljes szett\nA Chesterfield stílus nem ér véget a kanapénál. A teljes garnitúra részeként fotel, puff, sarokkanapé, étkezőszék és akár franciaágy is rendelhető egységes megjelenéssel.\n\nZöld és kék – az új klasszikusok\nAz utóbbi években a Chesterfield zöld és kék változata egyre népszerűbb. Ezek a színek mélységet, karaktert és nyugalmat sugallnak, miközben friss, modern érzést keltenek. A barna és a bézs a klasszikus bőrhatást idézi – mindkettő időtlen választás.\n\nZöld: természetközeli, luxus érzet\nKék: hűvös elegancia, időtlenség\nBarna: klasszikus bőrkanapé stílus\nSzürke: modern, letisztult hatás",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          { type: "contact" },
        ]}
      />

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
                {a.title} ›
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
