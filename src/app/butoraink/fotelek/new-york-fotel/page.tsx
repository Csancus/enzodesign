import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "New York Fotel" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:fotelek:new-york-fotel"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Klasszikus stílus",
            title: "New York Fotel",
            subtitle: "A New York fotel a klasszikus Chesterfield forma eleganciáját ötvözi modern letisztultsággal – minden enteriőrbe illik.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp",
            imagePosition: "left",
            title: "New York Fotel",
            body: "A New York fotel a klasszikus Chesterfield forma eleganciáját ötvözi modern letisztultsággal – minden enteriőrbe illik.\n\nJellemzők:\n• 50.000 martindale szövet\n• Klasszikus-modern stílus\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön New York fotelt!",
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
