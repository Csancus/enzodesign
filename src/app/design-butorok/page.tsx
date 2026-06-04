import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Design Bútorok" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="design-butorok"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Modern minőség",
            title: "Design Bútorok",
            subtitle: "A Design kollekció modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp",
            imagePosition: "left",
            title: "Design Bútorok",
            body: "A Design kollekció modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz.\n\nJellemzők:\n• 50.000 martindale szövet\n• Modern dizájn\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Design bútort!",
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
