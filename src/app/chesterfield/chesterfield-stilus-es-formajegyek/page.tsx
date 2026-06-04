import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Chesterfield – Stílus és formajegyek" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="chesterfield:chesterfield-stilus-es-formajegyek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Stílus és formajegyek",
            image: "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "right",
            title: "A mély gombolás technikája",
            body: "A Chesterfield kanapék stílusa és formai megoldásai évszázadok óta alig változtak – ez a letisztult konzervativizmus az, ami mindmáig vonzóvá teszi.\n\nA \u201Emély gombolásos technika\" (deep tufting) a Chesterfield megkülönböztető jegye – egyszerre esztétikus és funkcionális, mivel segít megőrizni a bútor formáját az évek során. A precízen kézzel elvégzett művelet minden gombnál egyforma mélységet és feszességet kíván.\n\nA jellegzetes ívelt, visszahajló kartámaszok szintén meghatározó formaelem – ezek adják a Chesterfield karakterének nagy részét. A sárgaréz szegecsdíszítés és a faragott, néha gömbös lábak tovább erősítik a klasszikus megjelenést.\n\nA klasszikus modellek hagyományosan valódi bőrből készültek, de a modern változatokban már bársony, len és mikroszálas szövetek is megjelennek – a formavilág azonban változatlan maradt.\n\nA részletgazdag kidolgozás és a kézműves precizitás teszi a Chesterfield bútort életre szóló befektetéssé, amely minden korban megőrzi aktualitását.",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kapcsolódó cikkek",
            columns: "3",
            cards: [
              { name: "A Chesterfield kanapé eredete", tagline: "", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/chesterfield/a-chesterfield-kanape-eredete" },
              { name: "Anyagok és gyártási technikák", tagline: "", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
              { name: "A Chesterfield a modern enteriőrben", tagline: "", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
