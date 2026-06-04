"use client";
import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-4 text-left text-sm font-semibold text-[#1c1c1c] hover:text-[#b8924a] transition-colors"
          >
            <span>{item.question}</span>
            <span className="ml-4 flex-shrink-0 text-xl leading-none text-[#b8924a]">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="pb-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
