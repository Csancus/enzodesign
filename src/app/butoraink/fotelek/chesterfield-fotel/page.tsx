import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "Chesterfield Fotel – tömörfa váz, szövet vagy bőr",
  description: "Klasszikus Chesterfield fotel tömörfa szerkezettel, prémium szövettel vagy bőrborítással. 3 év garancia, egyedi méret – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/fotelek/chesterfield-fotel" },
  openGraph: {
    title: "Chesterfield Fotel – tömörfa váz, szövet vagy bőr | Enzo Design",
    description: "Klasszikus Chesterfield fotel tömörfa szerkezettel. 3 év garancia, egyedi méret.",
    url: "https://www.enzodesign.hu/butoraink/fotelek/chesterfield-fotel",
    images: [{ url: "/images/chesterfield-w4.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="chesterfield-fotel"
      name="Chesterfield Fotel"
      tagline="A bútor, aminek történelme van"
      description="Mélyen gombolt háttámla, jellegzetes ívelt kartámaszok – a Chesterfield fotel igazán karakteres, időtálló darab modern és klasszikus enteriőrbe egyaránt."
      image="/images/chesterfield-a4.webp"
      gallery={["/images/chesterfield-a4.webp", "/images/chesterfield-w4.webp", "/images/chesterfield-a1.webp", "/images/chesterfield-a2.webp", "/images/chesterfield-a3.webp", "/images/chesterfield-a5.jpg", "/images/chesterfield-enzo.jpg", "/images/chesterfield-img1.jpg", "/images/chesterfield-img2.jpg", "/images/chesterfield-img3.jpg", "/images/chesterfield-img4.jpg", "/images/chesterfield-premier.jpg", "/images/chesterfield-rover.jpg", "/images/chesterfield-wales.jpg", "/images/chesterfield-w1.webp", "/images/chesterfield-w2.webp", "/images/chesterfield-w3.webp"]}
      pricing={{ fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 }}
      features={["50.000 martindale szövet", "Mély gombolt háttámla", "Ívelt kartámaszok", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "Chesterfield Fotel", href: "/butoraink/fotelek/chesterfield-fotel" }]}
    />
  );
}
