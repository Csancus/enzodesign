import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Melyik Chesterfield bútor illik hozzád? – Enzo Design",
  description: "Stíluskalauz Chesterfield bútorokhoz: szék, puff, étkezőszék, forgószék – melyik illik hozzád és a lakásodba?",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:melyik-chesterfield-butor-illik-hozzad"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Melyik Chesterfield bútor illik hozzád? – Stíluskalauz színekhez és formákhoz",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Melyik Chesterfield bútor illik hozzád?",
            body: "A Chesterfield bútorok időtlen eleganciát és karaktert kölcsönöznek bármilyen enteriőrnek, legyen szó fotelről, étkezőszékről vagy puffról. De melyik típus illik legjobban hozzád?\n\n**Chesterfield szék – ahol a komfort és a stílus találkozik**\n\nA klasszikus Chesterfield szék magas háttámlájával, elegáns gombolásával és ívelt karfáival nappaliba, dolgozószobába vagy olvasósarokba illeszkedik. Gyakori felhasználások: kiegészítő ülőhelyként kanapé mellett, vállalati irodákba és tárgyalókba, kávézók és boutique üzletek belső tereihez. A bőr vagy bársony kárpit garantálja a tartósságot, míg a masszív fakeret hosszú évekre szóló befektetés.\n\n**Chesterfield puff – kicsi, de sokoldalú**\n\nSokan alábecsülik a Chesterfield puff szerepét, pedig egy jól megválasztott darab egyszerre több funkcióban is szolgál: lábpihentetőként, extra ülőhelyként, vagy tárolós változatként. A puffok gyakran azonos kárpitozással készülnek a kanapéval, így a garnitúra egységes és harmonikus megjelenést kap.\n\n**Chesterfield étkezőszék – a kifinomult vacsorák kísérője**\n\nA Chesterfield étkezőszék letisztultabb formában, gombolással és ívelt vonalvezetéssel készül. Ideális rusztikus vagy vintage étkezőkbe, vendéglátóhelyekre, vagy home office munkaszékként. Anyagválasztéka – bőr, bársony, velúr – praktikussá és könnyen tisztíthatóvá teszi.\n\n**Chesterfield forgószék – luxus az irodában**\n\nA Chesterfield forgószék egyedi megjelenésével prémium munkahelyet teremt ügyvédi irodákban, vezetői szobákban vagy home office berendezésekben. Kombinálja az irodai komfortot a tradicionális Chesterfield stílussal, gördülékeny mozgást és ergonomikus kialakítást kínálva.\n\n**A színek jelentése a Chesterfield bútorok világában**\n\nA színválasztás meghatározza a tér hangulatát. A zöld fotel előtűnik natúr tónusú nappaliban, míg a kék verzió nyugalmat sugall. A barna és a bézs klasszikus bőrhatást ad, a szürke pedig modern, skandináv stílusba illeszkedik. Az Enzo Design-nél minden Chesterfield bútor teljesen egyedi szín- és anyagkombinációban rendelhető.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Nézze meg Chesterfield kollekciónkat!",
            buttonText: "Árak és kollekció",
            buttonHref: "/butoraink/kanapek/chesterfield-kanapek",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
