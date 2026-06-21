import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminFab from "@/components/admin/AdminFab";
import { AdminProvider } from "@/context/AdminContext";
import { getAdminStatus } from "@/lib/auth";
import { getDynamicPages } from "@/lib/dynamicPages";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://enzodesign.hu"),
  title: {
    default: "Enzo Design – Egyedi kárpitozott bútorok",
    template: "%s | Enzo Design",
  },
  description:
    "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán. Kanapék, fotelek, Chesterfield bútorok közvetlenül a gyártótól. +36 30 377 8983",
  keywords: ["kárpitozott bútor", "kanapé", "fotel", "Chesterfield", "Nagykanizsa", "egyedi bútor", "bútor gyártó"],
  verification: {
    google: "GF7nw14w_hoZNowLq5g0-aCKhNo279gnC0B_h2sYdGA",
  },
  alternates: {
    canonical: "https://enzodesign.hu",
  },
  openGraph: {
    siteName: "Enzo Design",
    locale: "hu_HU",
    type: "website",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800, alt: "Enzo Design – Egyedi kárpitozott bútorok" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [initialAdmin, dynamicPages] = await Promise.all([
    getAdminStatus(),
    getDynamicPages(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Enzo Design",
    "description": "Egyedi kárpitozott bútorok gyártása Nagykanizsán. Kanapék, fotelek, Chesterfield bútorok közvetlenül a gyártótól.",
    "url": "https://enzodesign.hu",
    "telephone": "+36303778983",
    "email": "info@enzodesign.hu",
    "image": "https://enzodesign.hu/images/logo.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Egry József utca 7.",
      "addressLocality": "Nagykanizsa",
      "postalCode": "8800",
      "addressCountry": "HU"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "8",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/enzodesignbutor",
      "https://www.instagram.com/enzodesignbutor/",
      "https://www.tiktok.com/@enzodesign2015"
    ]
  };

  return (
    <html lang="hu" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <AdminProvider initialAdmin={initialAdmin}>
          <Header dynamicPages={dynamicPages} />
          <main className="flex-1">{children}</main>
          <Footer />
          <AdminFab />
        </AdminProvider>
      </body>
    </html>
  );
}
