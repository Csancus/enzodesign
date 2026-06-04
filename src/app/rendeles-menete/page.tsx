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

      <TextBlockSection moduleId="rendeles-menete:content" isAdmin={isAdmin} />

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
