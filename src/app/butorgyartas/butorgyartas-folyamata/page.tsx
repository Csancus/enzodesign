import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "A bútorgyártás menete" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butorgyartas:butorgyartas-folyamata"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "A bútorgyártás menete – A részletek mestersége",
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
          },
        },
        {
          type: "text-block",
          config: {
            body: "A bútorgyártás egy összetett, precíz folyamat, amelynek minden fázisa befolyásolja a végeredmény minőségét. A végeredmény mindig a részletekben rejlik – egy jól megmunkált sarok, egy feszesen húzott kárpit, precízen illeszkedő elemek.\n\n**01 Tervezés**\nCAD modellezés, az ügyfél igényeinek részletes dokumentálása. Egyedi bútoroknál szoros kommunikáció és precíz dokumentáció szükséges.\n\n**02 Anyagbeszerzés**\nTömörfa, kárpitanyagok, rugók, szivacs – csak prémium minőségű alapanyagokkal dolgozunk.\n\n**03 Alkatrészek előkészítése**\nCNC marókkal és lézervágókkal precíz, ismételhető alkatrészek készülnek.\n\n**04 Összeszerelés**\nA fa váz összeillesztése és rögzítése – a vázra 10 év garanciát vállalunk.\n\n**05 Kárpitozás**\nKézzel végzett részletmunka – szivacs, rugók, szövet feszítése. A gombolt háttámla precíz kézimunkát igényel.\n\n**06 Minőségellenőrzés**\nMinden elkészített bútort kézzel ellenőrzünk, mielőtt kiszállítjuk.",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kapcsolódó cikkek",
            columns: "3",
            cards: [
              { name: "Bútortervezés", tagline: "Az ötlettől a formáig", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butorgyartas/tervezes" },
              { name: "Anyagok", tagline: "A tartósság és esztétika alapkövei", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butorgyartas/anyagok" },
              { name: "Chesterfield – Anyagok és gyártási technikák", tagline: "Tradicionális kézműves technikák", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
