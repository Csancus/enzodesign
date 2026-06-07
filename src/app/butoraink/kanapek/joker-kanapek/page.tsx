import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "Joker Kanapék" };

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="joker-kanapek"
      name="Joker Kanapék"
      tagline="Gáláns megjelenés"
      description="A visszafogott elegancia megtestesítője. Finoman fénylő, prémium szövetborítása tökéletesen harmonizál a mélyen gombolt háttámlával. Modern Chesterfield ihlette vonalak, kényelmes ülőfelület – ideális nappalihoz vagy dolgozószobához egyaránt."
      image="/images/joker-kanape.png"
      gallery={["/images/joker-katalogus.jpg", "/images/joker-sarga.jpg"]}
      pricing={{
        fotel: { alap: 324380, bor: 421695 },
        ketSzemelyes: { alap: 399810, bor: 619750 },
        haromSzemelyes: { alap: 497890, bor: 847255 },
        sarok: { alap: 735515, bor: 1156170 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Prémium bársony opció", "Gombolt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Joker", href: "/butoraink/kanapek/joker-kanapek" },
      ]}
    />
  );
}
