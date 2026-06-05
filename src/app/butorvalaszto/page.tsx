import type { Metadata } from "next";
import ButorvalasztoQuiz from "./ButorvalasztoQuiz";

export const metadata: Metadata = {
  title: "Bútorválasztó – Enzo Design",
  description: "Segítünk megtalálni az Önnek leginkább megfelelő bútort 3 egyszerű lépésben.",
};

export default function ButorvalasztoPage() {
  return <ButorvalasztoQuiz />;
}
