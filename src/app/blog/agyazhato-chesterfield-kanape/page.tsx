import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban – Enzo Design",
  description: "Az ágyazható Chesterfield kanapé ötvözi a klasszikus stílust a kényelmes vendégágy funkcióval – ideális kis lakásba és vendégszobába.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:agyazhato-chesterfield-kanape"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Ágyazható Chesterfield kanapé",
            body: "A kárpitozott Chesterfield kanapé önmagában is designkincs, de ha kiegészítik egy ágyazható funkcióval, rendkívül sokoldalú bútorrá válik. Ideális azok számára, akik nem akarnak kompromisszumot kötni az esztétika és a praktikusság között.\n\n**Mi az az ágyazható Chesterfield kanapé?**\n\nEz a bútortípus a klasszikus Chesterfield esztétikát ötvözi egy praktikus vendégágy mechanizmussal. A jellegzetes kartámaszok, a gombolt kárpitozás és a masszív váz megmarad – miközben a bútor belsejében egy diszkrét kihúzható alvófelület lapul. Kétfős alvásra alkalmas, prémium bársony vagy valódi bőr kárpitozással.\n\n**Mikor ideális az ágyazható változat?**\n\nKisebb lakásokban, ahol a nappalit vendégszobává is kell alakítani alkalmanként. Stúdióapartmanokban, ahol minden négyzetméter számít. Home office-ban, ahol a kanapé egyszerre munkahely-kiegészítő és vendégágy. Az ágyazható funkció opcionálisan rendelhető minden Enzo Design kanapéhoz.\n\n**Miért jobb, mint egy hagyományos kihúzható kanapé?**\n\nA hagyományos kihúzható kanapék általában nem nyújtanak prémium megjelenést. Az ágyazható Chesterfield ellenben napközben elegáns nappali bútor, éjszaka kényelmes vendégágy – minőségi kivitelezéssel, tartós szerkezettel. Az ágyfunkció felára 190.500 Ft, és minden kollekciónkhoz elérhető.\n\n**Színek és anyagok**\n\nAz ágyazható Chesterfield is teljes mértékben személyre szabható: szövet, bőr, méret és szín szerint egyaránt. A semleges tónusok – bézs, szürke, tengerészkék – sokoldalúak, de élénkebb árnyalatokra is lehetőség van.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Érdekli az ágyazható változat?",
            subtitle: "Kérjen árajánlatot!",
            phone: "+36 30 377 8983",
            buttonText: "Rendelés",
            buttonHref: "/kapcsolat-es-rendeles",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
