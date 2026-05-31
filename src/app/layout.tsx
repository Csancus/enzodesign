import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AdminProvider } from "@/context/AdminContext";
import { getAdminStatus } from "@/lib/auth";

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
  openGraph: {
    siteName: "Enzo Design",
    locale: "hu_HU",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialAdmin = await getAdminStatus();

  return (
    <html lang="hu" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <AdminProvider initialAdmin={initialAdmin}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AdminProvider>
      </body>
    </html>
  );
}
