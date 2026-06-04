import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Design Kanapék" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:design-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Modern minőség",
            title: "Design Kanapék",
            subtitle: "A Design kanapé modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp",
            imagePosition: "left",
            title: "Design Kanapék",
            body: "A Design kanapé modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz. Tömörfa váz, prémium szivacs és rugórendszer – korszerű dizájn, maradandó minőség.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Modern dizájn\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Design kanapét!",
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
