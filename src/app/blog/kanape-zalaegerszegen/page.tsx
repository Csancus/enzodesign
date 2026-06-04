import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kanapé Zalaegerszegen – Enzo Design",
  description: "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – útmutató Zalaegerszeg és közelének vásárlóinak.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:kanape-zalaegerszegen"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Kanapé Zalaegerszegen",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
            imagePosition: "left",
            title: "Kanapé Zalaegerszegen",
            body: "Ha Zalaegerszegen él és új kanapét keres, érdemes a nagykanizsai Enzo Designhoz fordulni – mindössze 30 km-re vagyunk, és az ország egész területére házhozszállítással dolgozunk.\n\nEgy új kanapé vásárlásakor az ár és a dizájn mellett érdemes figyelni a szerkezeti minőségre is. Tömörfa váz, megfelelő rugózás és legalább 50.000 martindale kopásállóságú szövet – ezek az alapok, amelyek hosszú éveken át megőrzik a bútor szépségét.\n\nAz Enzo Design kollekciói közül a legnépszerűbbek Zalaegerszeg és a Dél-Dunántúl területén: az Ivone, az Old's Club és a Chesterfield modellek. Mindhárom rendelhető 2-es, 3-as és sarokkanapé formában, több száz szövet- és bőrfajtával.\n\n**Szállítás Zalaegerszegre**\n\nBútorainkat az első biztonságos ajtóig szállítjuk az ország bármely pontjára. A szállítást a gyártás befejezésekor (4–6 héttel a megrendelés után) koordináljuk, és előre egyeztetünk a pontos időpontról.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendelje meg kanapéját most!",
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
