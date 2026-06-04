import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Ivone Kollekció" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="ivone-kollekcio"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Nappalid éke",
            title: "Ivone Kollekció",
            subtitle: "A klasszikus elegancia és a modern kényelem tökéletes találkozása – ez az Ivone kollekció, amely minden nappalit egy stílusos, otthonos térré varázsol.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp",
            imagePosition: "left",
            title: "Ivone Kollekció",
            body: "A klasszikus elegancia és a modern kényelem tökéletes találkozása – ez az Ivone kollekció, amely minden nappalit egy stílusos, otthonos térré varázsol. A gyönyörűen steppelt háttámla és ülőfelület, valamint a gazdagon ívelt karfák az időtlen Chesterfield-stílus modern újraértelmezését kínálják.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Steppelt háttámla\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Ivone bútort!",
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
