import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "A Chesterfield kanapé eredete" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="chesterfield:a-chesterfield-kanape-eredete"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "A Chesterfield kanapé eredete",
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
            imagePosition: "right",
            title: "Egy bútor, ami történelmet írt",
            body: "A Chesterfield kanapé nem csupán egy bútordarab – története évszázadokra nyúlik vissza, és maga az elegancia és hagyomány szimbóluma.\n\nA Chesterfield kanapé a 18. század közepén keletkezett. Egy történet szerint a 4. Chesterfield gróf, Philip Dormer Stanhope kérte fel udvari asztalosát, hogy készítsen olyan bútort, amely egyenes testtartást tesz lehetővé a ruha összegyűrődése nélkül.\n\nAz eredeti bútorok valódi bőrrel voltak borítva, kézzel faragott lábakkal és precízen kivitelezett szegecsekkel díszítve. A viktoriánus korszakban az arisztokrácia körében rendkívül elterjedtek, majd klubokban és előkelő otthonokban egyaránt megjelentek.\n\nA modern változatokban már különféle anyagok – bársony, len, mikroszálas szövetek – is megjelennek, mégis megőrizte jellegzetes gombolását és karakterét.\n\nA Chesterfield bútor időtálló befektetés, amely több generáción átörökíthető – megtartja jellegzetes patinaját és megjelenését az évtizedek során.",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Kapcsolódó cikkek",
            columns: "3",
            cards: [
              { name: "Stílus és formajegyek", tagline: "", image: "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
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
