import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "A Chesterfield a modern enteriőrben" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="chesterfield:chesterfield-a-modern-enteriorben"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "A Chesterfield a modern enteriőrben",
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
            imagePosition: "right",
            title: "A Chesterfield a modern enteriőrben",
            body: "A Chesterfield kanapé klasszikus stílusa a 18. századra nyúlik vissza, mégis tökéletesen illeszkedik a kortárs enteriőr trendekbe.\n\nA Chesterfield népszerűsége nem csupán történelmi súlyából ered – formavilága és alkalmazkodóképessége biztosítja, hogy a mai otthonokban is releváns maradjon. A klasszikus barna vagy fekete bőr változatok elegáns nappalikhoz illenek, míg a világos bársony verziók romantikus hangulatot teremtenek.\n\nStílustippek enteriőr szerint:\n• Elegáns nappali: Klasszikus barna/fekete bőr Chesterfield – időtálló, prémium hatás.\n• Hálószoba / olvasósarok: Világos bársony változat – puha, meleg, nőies eleganciával.\n• Skandináv stílus: Szürke-kék modell vékony lábakon – könnyű, légies hatás.\n• Ipari loft: Sötét bőr szegecses részletekkel – erős karakterű választás.\n• Minimalista enteriőr: Egyszínű anyagú, modern talpas verzió – visszafogott eleganciával.",
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
              { name: "Anyagok és gyártási technikák", tagline: "", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
