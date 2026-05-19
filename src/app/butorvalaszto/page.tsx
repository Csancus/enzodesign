"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

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

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-2xl mx-auto px-4">
          {step < STEPS.length ? (
            <div className="bg-white p-8 shadow-sm">
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {STEPS.map((_, i) => (
                  <div key={i} className={`h-1 flex-1 transition-colors ${i <= step ? "bg-[#7d6142]" : "bg-gray-200"}`} />
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-2">{step + 1}. lépés / {STEPS.length}</p>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                {STEPS[step].question}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {STEPS[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt)}
                    className="border-2 border-gray-200 hover:border-[#7d6142] hover:bg-[#f5f0e8] p-4 text-left transition-all font-medium text-gray-800"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => { setStep(step - 1); setSelections(selections.slice(0, -1)); }} className="mt-6 text-sm text-gray-500 hover:text-[#7d6142]">
                  ← Vissza
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Megtaláltuk a megfelelő kategóriát!
              </h2>
              <div className="bg-[#f5f0e8] p-4 mb-6 text-left">
                <p className="text-sm text-gray-500 mb-2">Választásai:</p>
                {selections.map((s, i) => (
                  <p key={i} className="text-sm font-medium text-gray-700">{STEPS[i]?.question.replace("?", "")}: <span className="text-[#7d6142]">{s}</span></p>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Link href={finalHref || "/butoraink"} className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
                  Megtekintés
                </Link>
                <Link href="/kapcsolat-es-rendeles" className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
                  Árajánlat kérése
                </Link>
                <button onClick={reset} className="text-gray-500 hover:text-gray-700 text-sm mt-2">Újrakezdés</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>Rendelés és kapcsolat</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
