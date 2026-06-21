import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Ivone Kollekció – Enzo Design",
  description: "Ivone kanapé és fotel egyedi méretben – bútorbolt Nagykanizsán, online rendelés. Klasszikus elegancia steppelt háttámlával, tömörfa szerkezet, 444.240 Ft-tól.",
  alternates: { canonical: "https://enzodesign.hu/ivone-kollekcio" },
  openGraph: {
    title: "Ivone Kollekció – Enzo Design",
    description: "A klasszikus elegancia és a modern kényelem tökéletes találkozása – steppelt háttámla, ívelt karfák, fotel és kanapé szériában. 444.240 Ft-tól.",
    url: "https://enzodesign.hu/ivone-kollekcio",
    images: [{ url: "/images/ivone-w1.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="ivone-kollekcio"
      name="Ivone Kollekció"
      tagline="Nappalid éke"
      description="A klasszikus elegancia és a modern kényelem tökéletes találkozása – ez az Ivone kollekció, amely minden nappalit egy stílusos, otthonos térré varázsol. A gyönyörűen steppelt háttámla és ülőfelület, valamint a gazdagon ívelt karfák az időtlen Chesterfield-stílus modern újraértelmezését kínálják."
      image="/images/ivone-a1.webp"
      gallery={["/images/ivone-a1.webp", "/images/ivone-dsc1.jpg", "/images/ivone-a7.webp", "/images/ivone-a8.webp", "/images/ivone-a5.webp", "/images/ivone-a9.webp", "/images/ivone-a6.webp", "/images/ivone-dsc2.jpg", "/images/ivone-a10.jpg", "/images/ivone-w1.webp", "/images/ivone-w2.webp", "/images/ivone-w5.webp", "/images/ivone-w7.webp"]}
      pricing={{ fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 677510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Tömörfa szerkezet", "Steppelt háttámla", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Ivone Kollekció", href: "/ivone-kollekcio" }]}
    />
  );
}
