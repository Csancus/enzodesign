import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Rólunk – Enzo Design",
  description: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán, 2000 nm-es telephelyünkön.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="rolunk"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Rólunk",
            title: "Rólunk",
            subtitle: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán.",
          },
        },
        {
          type: "banner",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            alt: "Enzo Design kanapé",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "right",
            title: "Történetünk",
            body: "Nagykanizsán közel 20 éve készítünk bútorokat melyeket főleg Magyarországon és Németországban, de Európa szerte használnak.\n\nA minőség elsődleges számunkra, ezért kizárólag tömörfa szerkezettel és nagy kopásállóságú anyagokkal dolgozunk.\n\nMivel mi vagyunk a gyártó és az eladó is, ezért nincs extra reklámköltségünk, így reális áron tudjuk adni bútoraink.\n\n2000 nm-es üzemünkben bármilyen egyedi, vagy típusbútort el tudunk készíteni lakásokba, kávézókba, éttermekbe vagy szállodákba is.\n\n\u201EBizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak.\" – Bernlef",
          },
        },
        {
          type: "stats",
          config: {
            items: [
              { value: "2015", label: "Alapítva" },
              { value: "2000 nm", label: "Telephely" },
              { value: "~20 év", label: "Tapasztalat" },
              { value: "3+10 év", label: "Garancia" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Szeretne egyedi bútort?",
            subtitle: "Vegye fel velünk a kapcsolatot – 24 órán belül visszahívjuk!",
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
