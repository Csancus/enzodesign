"use client";

import { useState, useEffect } from "react";

type Quote = { author: string; text: string };

const QUOTES: Quote[] = [
  {
    author: "Bernlef",
    text: `\u201EBizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak. Az ember valahogyan kötődik hozzájuk, maga sem tudja pontosan, miért.\u201D`,
  },
  {
    author: "Agatha Christie",
    text: `\u201EAz ember egyszerűen kíváncsi. Én, tudják, hiszek egy hely hangulatában. Az emberek gondolatai, érzései beszivárognak a bútorokba, a falakba.\u201D`,
  },
  {
    author: "Jennifer E. Smith",
    text: `\u201ECsak mert egy házat átfestenek, attól még a benne lévő bútorok nem változnak meg. Az emberekkel is biztosan ugyanez a helyzet. A felszín alatt, a lelke mélyén az ember mindig ugyanolyan.\u201D`,
  },
];

export default function QuoteSlider() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setIdx((i) => (i + 1) % QUOTES.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const q = QUOTES[idx];

  return (
    <div className="bg-[#e8e4df] py-16 px-4">
      <div className="flex items-center justify-center gap-6">
        <button onClick={prev} className="text-gray-500 hover:text-[#7d6142] text-4xl font-thin w-10 flex-shrink-0 transition-colors">
          ‹
        </button>

        <div className="bg-white max-w-xl w-full px-10 py-12 text-center shadow-sm">
          <p className="text-xl italic font-light text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
            {q.author}
          </p>
          <p className="text-sm leading-relaxed text-[#b8924a] mt-6">{q.text}</p>
        </div>

        <button onClick={next} className="text-gray-500 hover:text-[#7d6142] text-4xl font-thin w-10 flex-shrink-0 transition-colors">
          ›
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-[#7d6142]" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
