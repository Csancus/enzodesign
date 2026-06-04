import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Chesterfield Fotel" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:fotelek:chesterfield-fotel"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "A bútor, aminek történelme van",
            title: "Chesterfield Fotel",
            subtitle: "Mélyen gombolt háttámla, jellegzetes ívelt kartámaszok – a Chesterfield fotel igazán karakteres, időtálló darab modern és klasszikus enteriőrbe egyaránt.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
            imagePosition: "left",
            title: "Chesterfield Fotel",
            body: "Mélyen gombolt háttámla, jellegzetes ívelt kartámaszok – a Chesterfield fotel igazán karakteres, időtálló darab modern és klasszikus enteriőrbe egyaránt.\n\nJellemzők:\n• 50.000 martindale szövet\n• Mély gombolt háttámla\n• Ívelt kartámaszok\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Chesterfield fotelt!",
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
