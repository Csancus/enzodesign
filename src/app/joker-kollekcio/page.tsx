import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = { title: "Joker Kollekció" };

export default function Page() {
  return (
    <PageBuilderPage
      pageId="joker-kollekcio"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Elegáns bútor, bárhova",
            title: "Joker Kollekció",
            subtitle: "A Joker kollekció finoman fénylő, prémium szövetborítással és mélyen gombolt háttámlával – modern Chesterfield ihlette vonalakkal.",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp",
            imagePosition: "left",
            title: "Joker Kollekció",
            body: "A Joker kollekció finoman fénylő, prémium szövetborítással és mélyen gombolt háttámlával – modern Chesterfield ihlette vonalakkal.\n\nJellemzők:\n• 50.000 martindale szövet\n• Prémium bársony opció\n• Gombolt háttámla\n• 3 év garancia\n• 10 év vázgarancia",
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
            title: "Rendeljön Joker bútort!",
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
