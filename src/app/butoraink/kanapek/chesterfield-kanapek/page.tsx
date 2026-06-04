import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Chesterfield Kanapék" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:chesterfield-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "A bútor, aminek történelme van",
            title: "Chesterfield Kanapék",
            subtitle: "A Chesterfield kanapé az elegancia és a hagyomány szimbóluma. Közel 20 éve gyártunk Chesterfield bútorokat – mondhatni, ők már családtagok.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Chesterfield Kanapék",
            body: "A Chesterfield kanapé az elegancia és a hagyomány szimbóluma. Közel 20 éve gyártunk Chesterfield bútorokat – mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Mély gombolt háttámla\n• Ívelt kartámaszok\n• 3 év garancia\n• 10 év vázgarancia",
          },
        },
        {
          type: "stats",
          config: {
            items: [
              { value: "324.380 Ft", label: "Fotel alaptól" },
              { value: "399.810 Ft", label: "2 személyes alaptól" },
              { value: "497.890 Ft", label: "3 személyes alaptól" },
              { value: "735.515 Ft", label: "Sarok alaptól" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendeljön Chesterfield kanapét!",
            subtitle: "Személyre szabható szövettel, bőrrel és méretben. Kérjen árajánlatot!",
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
