import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Old's Club Kanapék" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:olds-club-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Karakteres elegancia",
            title: "Old's Club Kanapék",
            subtitle: "Az Old's Club kanapé letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
            imagePosition: "left",
            title: "Old's Club Kanapék",
            body: "Az Old's Club kanapé letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. Széles ülőfelület, puha háttámla – ideális pihenéshez és vendégfogadáshoz. A sarokváltozat opcionális ágyneműtartóval is rendelhető.\n\nJellemzők:\n• 50.000 martindale szövet\n• Tömörfa szerkezet\n• Prémium szivacs és rugó\n• 3 év garancia\n• 10 év vázgarancia\n• Ágyneműtartó opció",
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
            title: "Rendeljön Old's Club kanapét!",
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
