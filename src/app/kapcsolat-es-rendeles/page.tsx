import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KapcsolatSection from "@/components/KapcsolatSection";
import { getAdminStatus } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Kapcsolat és Rendelés – Enzo Design",
  description: "Egyedi bútor online rendelés – bútorbolt Nagykanizsán. Töltsd ki az űrlapot, 24 órán belül visszahívunk. 8800 Nagykanizsa, Egry József utca 7.",

  alternates: { canonical: "https://enzodesign.hu/kapcsolat-es-rendeles" },
  openGraph: {
    title: "Kapcsolat és Rendelés – Enzo Design",
    description: "Egyedi bútor online rendelés – bútorbolt Nagykanizsán. Töltsd ki az űrlapot, 24 órán belül visszahívunk. 8800 Nagykanizsa, Egry József utca 7.",
    url: "https://enzodesign.hu/kapcsolat-es-rendeles",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://enzodesign.hu/kapcsolat-es-rendeles",
  "name": "Kapcsolat és Rendelés – Enzo Design",
  "description": "Egyedi bútor online rendelés – bútorbolt Nagykanizsán. Töltsd ki az űrlapot, 24 órán belül visszahívunk.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Enzo Design",
    "url": "https://enzodesign.hu",
    "telephone": "+36303778983",
    "email": "info@enzodesign.hu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Egry József utca 7.",
      "addressLocality": "Nagykanizsa",
      "postalCode": "8800",
      "addressCountry": "HU",
    },
  },
};

export default async function KapcsolatPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
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
