import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Old's Club Fotel" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:fotelek:olds-club-fotel"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Karakteres elegancia",
            title: "Old's Club Fotel",
            subtitle: "Az Old's Club fotel letisztult formái és maximális funkcionalitása az elegancia és kényelem tökéletes szintézise.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
            imagePosition: "left",
            title: "Old's Club Fotel",
            body: "Az Old's Club fotel letisztult formái és maximális funkcionalitása az elegancia és kényelem tökéletes szintézise.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• 3 év garancia\n• 10 év vázgarancia",
          },
        },
        {
          type: "stats",
          config: {
            items: [
              { value: "360.420 Ft", label: "Fotel alaptól" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendeljön Old's Club fotelt!",
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
