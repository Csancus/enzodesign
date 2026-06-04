import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Alapanyagok a bútorgyártásban" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butorgyartas:anyagok"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Alapanyagok a bútorgyártásban – A tartósság és esztétika alapkövei",
            image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
          },
        },
        {
          type: "text-block",
          config: {
            body: "Az anyagválasztás kulcsfontosságú a bútoriparban. A minőségi bútor megfelelő anyagokkal kezdődik: tömörfa, lemez alapú termékek, kárpitanyagok és bőrök. Kizárólag tartós tömörfa szerkezettel és extra kopásállóságú szövetekkel dolgozunk.\n\nTöbb mint 100 szövetfajtából választhat – kérjen egyedi ajánlatot!",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kapcsolódó cikkek",
            columns: "3",
            cards: [
              { name: "Bútortervezés", tagline: "Az ötlettől a formáig", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butorgyartas/tervezes" },
              { name: "A bútorgyártás menete", tagline: "A részletek mestersége", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butorgyartas/butorgyartas-folyamata" },
              { name: "Chesterfield – Anyagok és gyártási technikák", tagline: "Tradicionális kézműves technikák", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
