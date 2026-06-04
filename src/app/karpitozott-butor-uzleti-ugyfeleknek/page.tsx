import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Üzleti Bútor",
  description: "Kárpitozott bútorok kávézóknak, éttermeknek, szállodáknak, orvosi rendelőknek. Ingyenes helyszíni egyeztetés.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="karpitozott-butor-uzleti-ugyfeleknek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "B2B megoldások",
            title: "Éttermeknek, szállodáknak, rendelőknek, fogadóterekbe",
            subtitle: "Kávézóba, étterembe, szállodába, orvosi rendelőbe rendszeresen készítünk nagy teherbírású bútorokat.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "right",
            title: "Miért válasszon minket üzleti célra?",
            body: "2000 nm-es telephelyünkön lehetőség van nagyobb mennyiségű bútor gyártására is. Kizárólag tömörfa szerkezettel és nagy kopásállóságú anyagokkal dolgozunk – a kereskedelmi forgalomhoz tervezett bútorok ellenállnak a napi igénybevételnek.\n\nIngyenes helyszíni egyeztetés után egyedi árajánlatot készítünk.\n\n• Nagy teherbírású kárpit anyagok (>100.000 martindale)\n• Tömörfa váz – 10 év garancia\n• Egyedi méret, szín és kialakítás\n• Tömegtermelési lehetőség\n• Ingyenes helyszíni egyeztetés\n• Rövid határidő – 4–6 hét",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kik számára dolgozunk?",
            columns: "2",
            cards: [
              { name: "Szállodák és recepciók", tagline: "Egyedi garnitúrák különböző méretben, a belső tér karakteréhez igazítva.", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/kapcsolat-es-rendeles" },
              { name: "Orvosi rendelők", tagline: "Chesterfield kanapék és fotelek, amelyek hiteles szakmai környezetet teremtenek.", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/kapcsolat-es-rendeles" },
              { name: "Éttermek és kávézók", tagline: "Nagy teherbírású kárpitozott székek és kanapék, amelyek ellenállnak a napi nagy forgalomnak.", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/kapcsolat-es-rendeles" },
              { name: "Airbnb és bérleményi ingatlanok", tagline: "Helytakarékos, kreatív megoldások kisebb alapterületű bérleményekhez.", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/kapcsolat-es-rendeles" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
