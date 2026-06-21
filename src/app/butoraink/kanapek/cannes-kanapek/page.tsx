import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = {
  title: "Cannes Sarokkanapé – modern, dönthető fejtámlával",
  description: "A Cannes sarokkanapé modern sarokbútor állítható fejtámlával. Tömörfa váz, prémium kárpit, egyedi méretben – közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://enzodesign.hu/butoraink/kanapek/cannes-kanapek" },
  openGraph: {
    title: "Cannes Sarokkanapé – modern, dönthető fejtámlával | Enzo Design",
    description: "Modern sarokkanapé állítható fejtámlával. Tömörfa váz, prémium kárpit, egyedi méretben.",
    url: "https://enzodesign.hu/butoraink/kanapek/cannes-kanapek",
    images: [{ url: "/images/cannes-w1.webp", width: 1920, height: 800 }],
  },
};

export default function Page() {
  return (
    <ProductPageTemplate
      pageId="cannes-kanapek"
      name="Cannes Sarokkanapé"
      tagline="A modern sarok"
      description="A Cannes sarokkanapé letisztult formavilágával és kifinomult részleteivel a modern enteriőr ékköve. Állítható fejtámlák, tágas ülőfelület – a maximális kényelem és stílus szintézise."
      image="/images/cannes-w1.webp"
      gallery={[
        "/images/cannes-a1.webp",
        "/images/cannes-a2.webp",
        "/images/cannes-a3.webp",
        "/images/cannes-a4.jpg",
        "/images/cannes-a5.jpg",
        "/images/cannes-a6.jpg",
        "/images/cannes-w1.webp",
        "/images/cannes-w2.webp",
        "/images/cannes-w3.webp",
      ]}
      pricing={{
        sarok: { alap: 367340, bor: 787740 },
        agyFunkcio: 190500,
      }}
      features={["50.000 martindale szövet", "Állítható fejtámlák", "Tágas ülőfelület", "Sarokkanapé formátum", "3 év garancia", "10 év vázgarancia"]}
      breadcrumb={[
        { label: "Főoldal", href: "/" },
        { label: "Bútoraink", href: "/butoraink" },
        { label: "Kanapék", href: "/butoraink/kanapek" },
        { label: "Cannes", href: "/butoraink/kanapek/cannes-kanapek" },
      ]}
    />
  );
}
