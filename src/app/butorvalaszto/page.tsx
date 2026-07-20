import type { Metadata } from "next";
import ButorvalasztoQuiz from "./ButorvalasztoQuiz";

export const metadata: Metadata = {
  title: "Bútorválasztó – Enzo Design",
  description: "Segítünk megtalálni az Önnek leginkább megfelelő bútort 3 egyszerű lépésben.",

  alternates: { canonical: "https://www.enzodesign.hu/butorvalaszto" },
  openGraph: {
    title: "Bútorválasztó – Enzo Design",
    description: "Segítünk megtalálni az Önnek leginkább megfelelő bútort 3 egyszerű lépésben.",
    url: "https://www.enzodesign.hu/butorvalaszto",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

export default function ButorvalasztoPage() {
  return <ButorvalasztoQuiz />;
}
