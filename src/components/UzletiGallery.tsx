"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { DEFAULT_UZLETI_IMAGES } from "@/data/uzletiGalleryImages";
import { imageAlt } from "@/lib/imageAlt";

export default function UzletiGallery({ images }: { images?: string[] }) {
  const list = images && images.length > 0 ? images : DEFAULT_UZLETI_IMAGES;
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
        {list.map((src, i) => (
          <div
            key={i}
            className="relative flex-none w-[75vw] sm:w-[40%] lg:w-[30%] snap-start overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={src}
              alt={imageAlt("Üzleti kárpitozott bútor referencia", i)}
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
