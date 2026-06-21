"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/uzleti-gal-01.webp",
  "/images/uzleti-gal-02.webp",
  "/images/uzleti-gal-03.webp",
  "/images/uzleti-gal-04.webp",
  "/images/uzleti-gal-05.webp",
  "/images/uzleti-gal-06.webp",
  "/images/uzleti-gal-07.webp",
  "/images/uzleti-gal-08.webp",
  "/images/uzleti-gal-09.webp",
  "/images/uzleti-gal-10.webp",
  "/images/uzleti-gal-11.webp",
  "/images/uzleti-gal-12.webp",
  "/images/uzleti-gal-13.webp",
  "/images/uzleti-gal-14.webp",
  "/images/uzleti-gal-15.webp",
];

export default function UzletiGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.75;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={checkBounds}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className="relative flex-none w-[75vw] sm:w-[40%] lg:w-[30%] snap-start overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={src}
              alt={`Üzleti referencia ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 30vw"
            />
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={() => scroll(-1)}
        disabled={atStart}
        aria-label="Előző"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-white border border-[#b8924a] text-[#b8924a] flex items-center justify-center shadow hover:bg-[#b8924a] hover:text-white transition-colors disabled:opacity-0 disabled:pointer-events-none"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={() => scroll(1)}
        disabled={atEnd}
        aria-label="Következő"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 bg-white border border-[#b8924a] text-[#b8924a] flex items-center justify-center shadow hover:bg-[#b8924a] hover:text-white transition-colors disabled:opacity-0 disabled:pointer-events-none"
      >
        ›
      </button>
    </div>
  );
}
