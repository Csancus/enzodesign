import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KapcsolatSection from "@/components/KapcsolatSection";
import { getAdminStatus } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Kapcsolat és Rendelés",
  description: "Lépjen kapcsolatba az Enzo Designnal. Töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default async function KapcsolatPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      <PageHero
        moduleId="hero:kapcsolat"
        defaults={{ label: "Lépjen kapcsolatba velünk", title: "Kapcsolat, rendelés", subtitle: "Töltse ki az alábbi űrlapot és 24 órán belül visszahívjuk!" }}
      />

      <KapcsolatSection isAdmin={isAdmin} />

      {/* TÉRKÉP */}
      <section className="h-80 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.455!2d16.98832!3d46.46307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768b62b3e5b3a4f%3A0x7f2e2d9e1b3c4d5e!2sEgry%20J%C3%B3zsef%20u.%207%2C%20Nagykanizsa%2C%208800%20Hungary!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Enzo Design helyszín"
        />
      </section>
    </>
  );
}
