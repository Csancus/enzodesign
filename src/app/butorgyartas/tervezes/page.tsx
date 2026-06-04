import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "A bútortervezés alapjai" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butorgyartas:tervezes"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "A bútortervezés alapjai – Az ötlettől a formáig",
            image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp",
          },
        },
        {
          type: "text-block",
          config: {
            title: "A jó dizájn elve",
            body: "A bútortervezés ötvözi a felhasználói igényeket, az ergonómiát, a stílust és a funkcionalitást – az esztétika önmagában nem elégséges kritérium.\n\n\u201EA jó dizájn figyelembe veszi a használat célját, az adott tér adottságait és a felhasználó életstílusát.\" A minőségi bútor kényelmes és tartós is legyen – ezért minden egyedi darabunkat részletes tervezési folyamat előzi meg.\n\nCAD modellezést alkalmazunk a precizitásért és az ügyfélkommunikációért. Az egyedi daraboknál minden egyes lépés dokumentálva van, hogy a végeredmény pontosan megfeleljen az elképzeléseknek.\n\nFenntarthatóság: FSC-tanúsítványú fa, újrahasznosított kárpitanyagok és formaldehidmentes ragasztók is elérhetők igény szerint.\n\n• CAD 3D modellezés\n• Ergonómiai szempontok figyelembevétele\n• Fenntartható anyagválasztás\n• Részletes dokumentáció egyedi daraboknál",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kapcsolódó cikkek",
            columns: "3",
            cards: [
              { name: "A bútorgyártás menete", tagline: "A részletek mestersége", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butorgyartas/butorgyartas-folyamata" },
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
