import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactFormSection from "@/components/ContactFormSection";
import { getAdminStatus } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Vásárlói visszajelzések – Enzo Design",
  description: "Olvasson valódi vásárlói véleményeket az Enzo Design bútorainkról. Google értékelések, elégedett ügyfelek.",
};

export default async function VasarloiVissszajelzesekPage() {
  const isAdmin = await getAdminStatus();
  return (
    <>
      <PageHero
        moduleId="hero:vasarloi-visszajelzesek"
        defaults={{ label: "Vélemények", title: "Vásárlói visszajelzések", subtitle: "Amit ügyfeleink mondanak rólunk" }}
      />
      <ReviewsSection isAdmin={isAdmin} showAll />
      <ContactFormSection />
    </>
  );
}
