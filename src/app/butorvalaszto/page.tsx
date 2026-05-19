"use client";

import { useState } from "react";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

const STEPS = [
  {
    id: "forma",
    question: "Milyen formát szeretne?",
    options: [
      { label: "Fotel", value: "fotel", href: "/butoraink/fotelek" },
      { label: "2 személyes kanapé", value: "2-es", href: "/butoraink/kanapek" },
      { label: "3 személyes kanapé", value: "3-as", href: "/butoraink/kanapek" },
      { label: "Sarokkanapé", value: "sarok", href: "/butoraink/kanapek" },
      { label: "Franciaágy", value: "franciaágy", href: "/butoraink/franciaagyak" },
      { label: "Egyedi bútor", value: "egyedi", href: "/butoraink/egyedi-butor" },
    ],
  },
  {
    id: "stilus",
    question: "Milyen stílust kedvel?",
    options: [
      { label: "Modern", value: "modern", href: "/butoraink/kanapek/design-kanapek" },
      { label: "Minimál", value: "minimal", href: "/butoraink/kanapek/design-kanapek" },
      { label: "Chesterfield", value: "chesterfield", href: "/butoraink/kanapek/chesterfield-kanapek" },
      { label: "Skandináv", value: "skandinav", href: "/butoraink/kanapek/new-york-kanapek" },
      { label: "Glamour", value: "glamour", href: "/butoraink/kanapek/olds-club-kanapek" },
    ],
  },
  {
    id: "anyag",
    question: "Milyen anyagot szeretne?",
    options: [
      { label: "Bársony", value: "barsony", href: "/butoraink" },
      { label: "Bőr", value: "bor", href: "/butoraink" },
      { label: "Sennilé", value: "sennile", href: "/butoraink" },
      { label: "Gyapjú", value: "gyapju", href: "/butoraink" },
      { label: "Vegyes szövetek", value: "vegyes", href: "/butoraink" },
    ],
  },
];

export default function ButorvalasztoPage() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [finalHref, setFinalHref] = useState<string | null>(null);

  const handleSelect = (option: { label: string; value: string; href: string }) => {
    const newSelections = [...selections, option.label];
    setSelections(newSelections);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
      setFinalHref(option.href);
    } else {
      setFinalHref(option.href);
      setStep(STEPS.length);
    }
  };

  const reset = () => {
    setStep(0);
    setSelections([]);
    setFinalHref(null);
  };

  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Segítünk választani</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Bútorválasztó
          </h1>
          <p className="mt-4 text-gray-300">Válasszon 3 egyszerű lépésben – megmutatjuk az ideális bútort!</p>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
