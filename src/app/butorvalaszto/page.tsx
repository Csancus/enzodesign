import type { Metadata } from "next";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";
import ButorvalasztoQuiz from "./ButorvalasztoQuiz";

export const metadata: Metadata = {
  title: "Bútorválasztó – Enzo Design",
  description: "Segítünk megtalálni az Önnek leginkább megfelelő bútort 3 egyszerű lépésben.",
};

export default function ButorvalasztoPage() {
  return (
    <>
      <PageHero
        moduleId="hero:butorvalaszto"
        defaults={{
          title: "Bútorválasztásra fel!",
          subtitle: "Közel 20 éve gyártunk bútorokat közvetlenül – segítünk megtalálni az önnek leginkább megfelelő darabot 3 egyszerű lépésben.",
        }}
      />
      <ButorvalasztoQuiz />
      <ContactFormSection />
    </>
  );
}
