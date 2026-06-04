import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "További Fotelek" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:fotelek:tovabbi-fotelek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Egyedi megoldások",
            title: "További Fotelek",
            subtitle: "Gombolt háttámlás modellek és modern letisztult tervek is elérhetők. Nézd végig a képeket, vagy küldj egy képet Pinterestről és mi elkészítjük neked. 82.820 Ft-tól.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp",
            imagePosition: "left",
            title: "További Fotelek",
            body: "Gombolt háttámlás modellek és modern letisztult tervek is elérhetők. Nézd végig a képeket, vagy küldj egy képet Pinterestről és mi elkészítjük neked. 82.820 Ft-tól.\n\nJellemzők:\n• 50.000 martindale szövet\n• Gombolt háttámla variánsok\n• Modern letisztult tervek\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön fotelt!",
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
