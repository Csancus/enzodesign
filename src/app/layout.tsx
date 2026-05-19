import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
