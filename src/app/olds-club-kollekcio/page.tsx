import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Old's Club Kollekció" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="olds-club-kollekcio"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Karakteres elegancia",
            title: "Old's Club Kollekció",
            subtitle: "Az Old's Club kollekció letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
            imagePosition: "left",
            title: "Old's Club Kollekció",
            body: "Az Old's Club kollekció letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. Elérhető fotelben, 2-es, 3-as kanapéban és sarokkanapéban.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Prémium szivacs és rugó\n• Ágyneműtartó opció\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Old's Club bútort!",
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
