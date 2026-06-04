import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Cannes Sarokkanapé" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:cannes-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "A modern sarok",
            title: "Cannes Sarokkanapé",
            subtitle: "A Cannes sarokkanapé letisztult formavilágával és kifinomult részleteivel a modern enteriőr ékköve. Állítható fejtámlák, tágas ülőfelület – a maximális kényelem és stílus szintézise.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp",
            imagePosition: "left",
            title: "Cannes Sarokkanapé",
            body: "A Cannes sarokkanapé letisztult formavilágával és kifinomult részleteivel a modern enteriőr ékköve. Állítható fejtámlák, tágas ülőfelület – a maximális kényelem és stílus szintézise.\n\nJellemzők:\n• 50.000 martindale szövet\n• Állítható fejtámlák\n• Tágas ülőfelület\n• Sarokkanapé formátum\n• 3 év garancia\n• 10 év vázgarancia",
          },
        },
        {
          type: "stats",
          config: {
            items: [
              { value: "367.340 Ft", label: "Sarok alaptól" },
              { value: "+190.500 Ft", label: "Ágyfunkció felár" },
            ],
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendeljön Cannes sarokkanapét!",
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
