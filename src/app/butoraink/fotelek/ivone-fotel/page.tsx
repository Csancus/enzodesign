import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Ivone Fotel – steppelt kárpit, elegáns forma",
  description: "Az Ivone fotel jellegzetes steppelt kárpitjával és elegáns formájával szobád ékköve. Tömörfa váz, 3 év garancia, egyedi méretben – közvetlen gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/fotelek/ivone-fotel" },
  openGraph: {
    title: "Ivone Fotel – steppelt kárpit, elegáns forma | Enzo Design",
    description: "Steppelt kárpit, elegáns forma. Tömörfa váz, 3 év garancia, egyedi méret.",
    url: "https://enzodesign.hu/butoraink/fotelek/ivone-fotel",
    images: [{ url: "/images/ivone-w1.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="ivone-fotel"
      name="Ivone Fotel"
      tagline="Nappalid éke"
      description="Az Ivone fotel a klasszikus Chesterfield stílus modern újraértelmezése – gyönyörűen steppelt háttámlával és ívelt kartámaszokkal."
      image="/images/ivone-w1.webp"
      gallery={["/images/ivone-w1.webp", "/images/ivone-w2.webp", "/images/ivone-w5.webp", "/images/ivone-w7.webp", "/images/ivone-w8.webp", "/images/ivone-w9.webp"]}
      pricing={{ fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 667510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Steppelt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Ivone Fotel", href: "/butoraink/fotelek/ivone-fotel" }]}
    />
  );
}
