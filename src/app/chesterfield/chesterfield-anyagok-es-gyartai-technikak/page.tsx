import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Chesterfield – Anyagok és gyártási technikák" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="chesterfield:chesterfield-anyagok-es-gyartai-technikak"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Anyagok és gyártási technikák",
            image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "right",
            title: "Hagyományos és modern anyagok",
            body: "A Chesterfield bútorok minősége nem véletlen – mögöttük évszázados kézműves hagyomány és tudás rejlik.\n\nA klasszikus Chesterfield bútorok kizárólag prémium minőségű valódi bőrből készültek. A bőr mellett a fa váz is kulcsfontosságú: a tömörfa szerkezet garantálja a tartósságot és a stabilitást.\n\nA modern változatokban bársony, mikroszálas szövetek és újrahasznosított anyagok is megjelennek, lehetővé téve, hogy a Chesterfield stílus különböző enteriőrökbe is beilleszkedjen.\n\nGyártási technikák:\n• Mély gombolás (button-tufting) – precíz, kézzel végzett művelet\n• Párnázás: hagyományos lószőr és gyapjú vs. modern szivacs\n• Rugórendszer: klasszikus spirálrugók vagy modern habszivacs alap\n• Kézzel készített részletek: sárgaréz szegecs, faragott lábak, gondos varrás",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kapcsolódó cikkek",
            columns: "3",
            cards: [
              { name: "A Chesterfield kanapé eredete", tagline: "", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/chesterfield/a-chesterfield-kanape-eredete" },
              { name: "Stílus és formajegyek", tagline: "", image: "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
              { name: "A Chesterfield a modern enteriőrben", tagline: "", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
