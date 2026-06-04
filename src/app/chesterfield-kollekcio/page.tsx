import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Chesterfield Kollekció" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="chesterfield-kollekcio"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "A bútor, aminek történelme van",
            title: "Chesterfield Kollekció",
            subtitle: "Közel 20 éve gyártunk Chesterfield bútorokat tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal. Az elegancia és hagyomány szimbóluma.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Chesterfield Kollekció",
            body: "Közel 20 éve gyártunk Chesterfield bútorokat tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal. Az elegancia és hagyomány szimbóluma.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Mély gombolt háttámla\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Chesterfield bútort!",
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
