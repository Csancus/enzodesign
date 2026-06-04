import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import TextBlockSection from "@/components/sections/TextBlockSection";
import { getAdminStatus } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Rendelés menete – Enzo Design",
  description: "Rendelje meg álombútorát az Enzo Designtól – töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default async function RendelesMenetePage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      <PageHero moduleId="hero:rendeles-menete" defaults={{ label: "Rendelés", title: "Rendelés menete" }} />

      <TextBlockSection
        moduleId="rendeles-menete:content"
        isAdmin={isAdmin}
        defaultConfig={{
          title: "Rendelés menete",
          body: `Honlapunk nem webáruházként működik, ezért a rendelés menete a következő:\n\nRendelését leadhatja személyesen telephelyünkön a 8800 Nagykanizsa, Egry József utca 7 szám alatt, vagy e-mailben az info@enzodesign.hu címen.\n\nGyors egyeztetésre a +36303778983 -mas telefonszámot használják bizalommal, melyen bútortervezőnk érhető el.\n\nOrszágos szinten kiszállítjuk a bútort az első zárt ajtóig.\n\nLegegyszerűbb mód vagy a kapcsolat űrlap kitöltése itt a weboldalon, vagy emailben egy kép csatolása, melyre 2 napon belül árajánlatot adunk.\n\nE-mailes rendelés esetében kérjük adja meg a számlázási nevet, címet, céges rendelésnél pedig az adószámát is, valamint írja a megrendelni kívánt termék nevét, színét és darabszámát, vagy küldjön képet, amennyiben egyedi bútorról van szó.\n\nKollégáink ennek alapján előlegbekérő szerződést küldenek, mely előleget utalással is ki tud egyenlíteni.`,
          align: "left",
        }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-[#1c1c1c] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rendelési űrlap
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
