import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield Bútorok",
  description: "Chesterfield kanapék és fotelek közel 20 éve. Tömörfa váz, prémium szövet vagy bőr bevonat.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="chesterfield"
      defaultSections={[
        {
          type: "hero-image",
          config: {
            image: "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp",
            title: "A Chesterfield",
            subtitle: "A Chesterfield bútorok az elegancia, a hagyomány és a stílus tökéletes kombinációi. A mély gombolás, a bőrborítás és a karakteres formavilág évszázadok óta a luxus és a kifinomult ízlés szimbólumai. Legyen szó klasszikus bőrkanapéról vagy modern újragondolásról, a Chesterfield mindig időtálló választás.",
            overlay: "rgba(245,240,234,0.85)",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Ismerkedj meg a Chesterfieldel",
            columns: "2",
            cards: [
              { name: "A Chesterfield kanapé eredete", tagline: "Fedezd fel, hogyan született meg a Chesterfield kanapé legendája az angol arisztokrácia világában! A stílusos bútor gyökerei egészen a 18. századig nyúlnak vissza, és máig az elegancia szimbóluma maradt.", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/chesterfield/a-chesterfield-kanape-eredete" },
              { name: "Chesterfield stílus és formajegyek", tagline: "Mi teszi a Chesterfieldtet igazán különlegessé? Ismerd meg a jellegzetes gombolást, mély ülőrészt, bőrborítást és díszes karfákat – a formai jegyeket, amik ikonikus bútordarabbá tették.", image: "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
              { name: "Anyagok és gyártási technikák", tagline: "A Chesterfield bútorok nemcsak szépek, hanem időtállók is – de vajon mitől? Bemutatjuk a leggyakoribb bőr- és kárpitfajtákat, illetve a tradicionális kézműves technikákat, amelyek a minőséget garantálják.", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
              { name: "A Chesterfield a modern enteriőrben", tagline: "Bár klasszikus darab, a Chesterfield remekül illeszkedik a mai modern terekbe is. Inspirációk és tippek arra, hogyan kombinálhatod ezt az időtlen bútort a mai stílusokkal – legyen az minimalista, loft vagy vintage.", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
            ],
          },
        },
        {
          type: "text-block",
          config: {
            title: "A Chesterfield örök",
            body: "Közel 20 éve gyártunk Chesterfield bútorokat. Mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel és minőségi szövettel vagy bőr bevonattal.",
            align: "center",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
