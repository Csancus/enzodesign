import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Miért időtálló választás a Chesterfield kanapé? – Enzo Design",
  description: "A Chesterfield kanapé történelme, stílusok, színek és miért illik a modern otthonba – átfogó útmutató.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:miert-idotallo-valasztas-a-chesterfield-kanape"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Miért időtálló választás a Chesterfield kanapé?",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Miért időtálló választás a Chesterfield kanapé?",
            body: "A Chesterfield kanapé nem csupán egy bútor, hanem egy életérzés. A klasszikus elegancia, az időtlen formavilág és a prémium anyaghasználat ötvözete. Akár egy modern loftban, akár egy vidéki kúriában helyezed el, azonnal uralja a teret – stílusosan.\n\n**Egy brit ikon születése**\n\nA Chesterfield kanapé eredete az 1700-as évekre nyúlik vissza, amikor Lord Phillip Stanhope, Chesterfield negyedik grófja megrendelt egy különleges, bőrrel kárpitozott ülőalkalmatosságot. A cél: egy olyan bútordarab, amelyen a vendégek egyenesen ülhetnek anélkül, hogy a ruhájuk összegyűrődna. A mélyen gombolt háttámla, az egy szintben futó karfa és háttámla, valamint a masszív fakeret mind ebből az eredeti megrendelésből öröklődött ránk.\n\n**A modern Chesterfield helye a mai enteriőrökben**\n\nSokan úgy gondolják, hogy ez a kanapétípus csak klasszikus vagy vintage terekbe illik – de ez tévedés. Semleges színekben – bézs, szürke, zöld vagy sötétkék – diszkrét eleganciát sugall még egy minimalista nappaliban is. Bársonyos vagy matt bőr felületek textúrát adnak a térnek, a moduláris változatok pedig alkalmazkodnak a mai lakások igényeihez.\n\n**Egyedi gyártás: a luxus személyre szabva**\n\nA prémium kategóriás Chesterfield bútor nem futószalagon készül. Az Enzo Design kínálatában megtalálható darabok kézzel készülnek, kiváló minőségű kárpitanyagok és tömörfa szerkezet felhasználásával. Méretre szabott kanapé, szabad szín- és anyagválasztás, extra funkciók – mint az ágyazható változat – mind elérhetők.\n\n**Chesterfield ülőgarnitúra – a teljes szett**\n\nA Chesterfield stílus nem ér véget a kanapénál. A teljes garnitúra részeként fotel, puff, sarokkanapé, étkezőszék és akár franciaágy is rendelhető egységes megjelenéssel – így az egész lakás koherens, karakteres stílust kap.\n\n**Zöld és kék – az új klasszikusok**\n\nAz utóbbi években a Chesterfield zöld és kék változata egyre népszerűbb. Ezek a színek mélységet, karaktert és nyugalmat sugallnak, miközben friss, modern érzést keltenek. A barna és a bézs pedig a klasszikus bőrhatást idézi meg – mindkettő időtlen választás.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Válassza ki az Önnek való Chesterfield kanapét!",
            buttonText: "Árak és kollekció",
            buttonHref: "/butoraink/kanapek/chesterfield-kanapek",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
