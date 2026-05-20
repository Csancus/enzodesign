import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata: Metadata = { title: "Cannes Sarokkanapé" };

export default function Page() {
  return (
    <ProductPageTemplate
      name="Cannes Sarokkanapé"
      tagline="A modern sarok"
      description="A Cannes sarokkanapé letisztult formavilágával és kifinomult részleteivel a modern enteriőr ékköve. Állítható fejtámlák, tágas ülőfelület – a maximális kényelem és stílus szintézise."
      image="/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp"
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
