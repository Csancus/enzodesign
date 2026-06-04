import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Ivone Kanapék" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:ivone-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Nappalid éke",
            title: "Ivone Kanapék",
            subtitle: "Az Ivone kanapé a klasszikus Chesterfield stílus modern újraértelmezése. Gyönyörűen steppelt háttámla és ülőfelület, íves kartámaszok – a modern elegancia megtestesítője.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp",
            imagePosition: "left",
            title: "Ivone Kanapék",
            body: "Az Ivone kanapé a klasszikus Chesterfield stílus modern újraértelmezése. Gyönyörűen steppelt háttámla és ülőfelület, íves kartámaszok – a modern elegancia megtestesítője. Több száz szövetből és bőrből rendelhető, tetszőleges méretben.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Steppelt háttámla\n• 3 év garancia\n• 10 év vázgarancia",
          },
        },
        {
          type: "stats",
          config: {
            items: [
              { value: "360.420 Ft", label: "Fotel alaptól" },
              { value: "444.240 Ft", label: "2 személyes alaptól" },
              { value: "553.210 Ft", label: "3 személyes alaptól" },
              { value: "817.240 Ft", label: "Sarok alaptól" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendeljön Ivone kanapét!",
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
