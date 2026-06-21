import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Joker Kanapé – elegáns forma, prémium kárpit",
  description: "A Joker kanapé gáláns megjelenésével és prémium kárpitjával tökéletes választás. Tömörfa váz, egyedi méret, szövet- és bőrborítással – közvetlen gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/kanapek/joker-kanapek" },
  openGraph: {
    title: "Joker Kanapé – elegáns forma, prémium kárpit | Enzo Design",
    description: "Gáláns megjelenés, prémium kárpit. Tömörfa váz, egyedi méret és szövetválasztás.",
    url: "https://enzodesign.hu/butoraink/kanapek/joker-kanapek",
    images: [{ url: "/images/joker-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="joker-kanapek"
      name="Joker Kanapék"
      tagline="Gáláns megjelenés"
      description="A visszafogott elegancia megtestesítője. Finoman fénylő, prémium szövetborítása tökéletesen harmonizál a mélyen gombolt háttámlával. Modern Chesterfield ihlette vonalak, kényelmes ülőfelület – ideális nappalihoz vagy dolgozószobához egyaránt."
      image="/images/joker-w1.webp"
      gallery={[
        "/images/joker-a1.webp",
        "/images/joker-a2.webp",
        "/images/joker-a3.webp",
        "/images/joker-a4.webp",
        "/images/joker-a5.jpg",
        "/images/joker-w1.webp",
        "/images/joker-w2.webp",
        "/images/joker-w3.webp",
        "/images/joker-w4.webp",
      ]}
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
