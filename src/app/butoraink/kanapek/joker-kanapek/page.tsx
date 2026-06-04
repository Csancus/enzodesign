import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Joker Kanapék" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butoraink:kanapek:joker-kanapek"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Gáláns megjelenés",
            title: "Joker Kanapék",
            subtitle: "A visszafogott elegancia megtestesítője. Finoman fénylő, prémium szövetborítása tökéletesen harmonizál a mélyen gombolt háttámlával.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp",
            imagePosition: "left",
            title: "Joker Kanapék",
            body: "A visszafogott elegancia megtestesítője. Finoman fénylő, prémium szövetborítása tökéletesen harmonizál a mélyen gombolt háttámlával. Modern Chesterfield ihlette vonalak, kényelmes ülőfelület – ideális nappalihoz vagy dolgozószobához egyaránt.\n\nJellemzők:\n• 50.000 martindale szövet\n• Prémium bársony opció\n• Gombolt háttámla\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Joker kanapét!",
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
