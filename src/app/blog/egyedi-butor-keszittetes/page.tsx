import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van? – Enzo Design",
  description: "Útmutató egyedi bútor rendeléséhez: hogyan kommunikáld az ötleted, mire figyelj a méretezésnél, anyagválasztásnál és a gyártási folyamatnál.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:egyedi-butor-keszittetes"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van?",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "left",
            title: "Egyedi bútor készíttetés",
            body: "Az egyedi kárpitozott bútor nem csupán egy funkcionális tárgy – egyfajta személyes nyilatkozat is. Ha van egy elképzelésed, amit nem találsz meg a boltokban, az egyedi megrendelés a legjobb megoldás.\n\n**1. Vizuális kiindulópont**\n\nEgy kép vagy rajz alapján dolgozni remek kiindulópont. Ha van egy Pinterestes fotód, egy régi bútorod, amit megújítanál, vagy akár egy vázlatod, azt hozd magaddal a konzultációra. Minél konkrétabb az elképzelés, annál pontosabb árajánlatot tudunk adni.\n\n**2. Méretek és funkció**\n\nGondold át, milyen teret szeretnél bebútorozni. Szükséges-e ágyazható funkció? Kell-e tárolóhely alatta? Milyen szélesen, milyen mélységgel férne el? Ezeket a szempontokat érdemes már az első találkozó előtt átgondolni.\n\n**3. Anyagválasztás**\n\nTömörfa szerkezettel dolgozunk, amelyre prémium szöveteket vagy bőröket kárpitozunk. A szövetmintatárból helyszínen is lehet válogatni – több mint 100 szövetféleség és valódi olasz bőr áll rendelkezésre. Nagy kopásállóságú anyagokat ajánlunk, különösen ha kisgyerek vagy kisállat is van a háztartásban.\n\n**4. Szakmai konzultáció**\n\nA gyártó nemcsak kézműves, hanem tanácsadó is. Megmutatjuk, mi fog működni az adott méretben és formában, és mi az, amire érdemes figyelni. Ha az eredeti ötleted néhány ponton módosítást igényel a stabilitás vagy a tartósság érdekében, azt nyíltan elmondjuk – és közösen megtaláljuk a legjobb megoldást.\n\n**5. Rugalmasság**\n\nSzinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Ha egy látott darabot más szövetben, más méretben, vagy más kartámasz-megoldással szeretnéd, azt is meg tudjuk valósítani. Az elkészítési idő általában 4–6 hét.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Van egy elképzelésed?",
            subtitle: "Vegye fel velünk a kapcsolatot!",
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
