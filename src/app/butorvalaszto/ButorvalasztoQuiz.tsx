"use client";

import { useState } from "react";
import Link from "next/link";

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
      { label: "Zsenília", value: "zsenilia", href: "/butoraink" },
      { label: "Gyapjú", value: "gyapju", href: "/butoraink" },
      { label: "Többféle", value: "vegyes", href: "/butoraink" },
    ],
  },
];

export default function ButorvalasztoQuiz() {
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
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-4">
        {step < STEPS.length ? (
          <>
            <div className="flex items-center gap-2 mb-10 justify-center">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= step ? "bg-[#7d6142] text-white" : "bg-white text-gray-400 border border-gray-300"}`}>
                    {i + 1}
                  </div>
                  {i < STEPS.length - 1 && <div className={`w-12 h-0.5 ${i < step ? "bg-[#7d6142]" : "bg-gray-300"}`} />}
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
              {STEPS[step].question}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {STEPS[step].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className="bg-white border-2 border-gray-200 hover:border-[#7d6142] hover:shadow-md transition-all p-6 text-center font-semibold text-[#1c1c1c] hover:text-[#7d6142]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-6">✓</div>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Tökéletes! Megtaláltuk az önnek való bútort.
            </h2>
            <p className="text-gray-600 mb-2">Választásai: {selections.join(" → ")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {finalHref && (
                <Link href={finalHref} className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm">
                  Megnézem a bútorokat
                </Link>
              )}
              <button onClick={reset} className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm">
                Újrakezdem
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
