import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bőr fotel – Enzo Design",
  description: "Időtálló kényelem és stílus egyetlen bútordarabban – miért érdemes valódi bőr fotelt választani.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:bor-fotel"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Bőr fotel",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Bőr fotel",
            body: "A bőr fotel a klasszikus Chesterfield stílus legkifinomultabb megjelenési formája. Valódi bőrből készített bútor nem csupán esztétikailag különleges – tartóssága és patinaszerű öregedése idővel egyre értékesebbé teszi.\n\nAz Enzo Design foteljeiben olasz valódi bőrt használunk, amely az évtizedek során csak szebbé válik. A bőr felületek kezelése és a kárpitozás kézzel történik – minden varrat precíz, minden gomb megfelelő feszességű.\n\n**Bőr vagy szövet?**\n\nMindkettőnek megvan az előnye. A bőr tartósabb, könnyebben tisztítható és idővel patinaszerű felületet kap – ideális klasszikus, elegáns enteriőrbe. A szövet puhábbnak érződik, több szín és minta közül lehet választani, és hőszabályozóbb is lehet.\n\nChesterfield foteleink mindkét anyagban rendelhetők. A bőr változat ára 421.695 Ft-tól indul, a szövet változaté 324.380 Ft-tól – mindkettő tömörfa szerkezettel, 3+10 év garanciával.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Érdekli a bőr fotel?",
            subtitle: "Kérdezzen bátran – foteljeink árai és modelljei.",
            buttonText: "Foteljeink árai",
            buttonHref: "/butoraink/fotelek/chesterfield-fotel",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
