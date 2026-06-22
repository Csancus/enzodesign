import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminFab from "@/components/admin/AdminFab";
import { AdminProvider } from "@/context/AdminContext";
import { getAdminStatus } from "@/lib/auth";
import { getDynamicPages } from "@/lib/dynamicPages";
import { getModuleConfig } from "@/lib/moduleStore";
import { REVIEWS_MODULE_ID, REVIEWS_DEFAULT } from "@/components/sections/ReviewsSection";

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
  const [initialAdmin, dynamicPages, reviewsCfg] = await Promise.all([
    getAdminStatus(),
    getDynamicPages(),
    getModuleConfig(REVIEWS_MODULE_ID),
  ]);

  const storedReviews = (reviewsCfg as { reviews?: typeof REVIEWS_DEFAULT.reviews }).reviews;
  const reviews = storedReviews?.length ? storedReviews : REVIEWS_DEFAULT.reviews;
  const reviewCount = reviews.length;
  const ratingSum = reviews.reduce((sum, r) => sum + (parseInt(r.rating) || 5), 0);
  const ratingValue = reviewCount ? (ratingSum / reviewCount).toFixed(1) : "5.0";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FurnitureStore"],
    "name": "Enzo Design",
    "description": "Egyedi kárpitozott bútorok gyártása Nagykanizsán. Kanapék, fotelek, Chesterfield bútorok közvetlenül a gyártótól.",
    "url": "https://enzodesign.hu",
    "telephone": "+36303778983",
    "email": "info@enzodesign.hu",
    "image": "https://enzodesign.hu/images/logo.webp",
    "priceRange": "$$",
    "currenciesAccepted": "HUF",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Egry József utca 7.",
      "addressLocality": "Nagykanizsa",
      "addressRegion": "Zala",
      "postalCode": "8800",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.4490,
      "longitude": 16.9897
    },
    "hasMap": "https://maps.google.com/?q=Enzo+Design+Nagykanizsa+Egry+J%C3%B3zsef+utca+7",
    "areaServed": [
      { "@type": "City", "name": "Nagykanizsa" },
      { "@type": "City", "name": "Zalaegerszeg" },
      { "@type": "City", "name": "Kaposvár" },
      { "@type": "City", "name": "Keszthely" },
      { "@type": "City", "name": "Siófok" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": String(reviewCount),
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/enzodesignbutor/",
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
