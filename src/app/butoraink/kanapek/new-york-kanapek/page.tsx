import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "New York Kanapék" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:new-york-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Klasszikus stílus",
            title: "New York Kanapék",
            subtitle: "A New York kanapé a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Időtálló, kényelmes választás minden nappali számára.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp",
            imagePosition: "left",
            title: "New York Kanapék",
            body: "A New York kanapé a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Időtálló, kényelmes választás minden nappali számára. Személyre szabható szövettel, bőrrel és méretben.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Klasszikus-modern stílus\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön New York kanapét!",
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
