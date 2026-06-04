import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Design Fotel" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:fotelek:design-fotel"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Modern minőség",
            title: "Design Fotel",
            subtitle: "A Design fotel modern formavilágával és letisztult vonalaival nem egy hagyományos bútordarab – egyedi személyiség, több száz szövetből.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp",
            imagePosition: "left",
            title: "Design Fotel",
            body: "A Design fotel modern formavilágával és letisztult vonalaival nem egy hagyományos bútordarab – egyedi személyiség, több száz szövetből.\n\nJellemzők:\n• 50.000 martindale szövet\n• Modern dizájn\n• 3 év garancia\n• 10 év vázgarancia",
          },
        },
        {
          type: "stats",
          config: {
            items: [
              { value: "82.820 Ft", label: "Fotel alaptól" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendeljön Design fotelt!",
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
