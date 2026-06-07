"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i - 1 + total) % total);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i + 1) % total);
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden mb-3 group/carousel">
      <Image
        src={images[idx]}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Előző kép"
            className="absolute left-1.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-7 h-7 flex items-center justify-center transition-opacity opacity-0 group-hover/carousel:opacity-100 z-10"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Következő kép"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-7 h-7 flex items-center justify-center transition-opacity opacity-0 group-hover/carousel:opacity-100 z-10"
          >
            ›
          </button>
          <span className="absolute bottom-1.5 right-2 text-xs text-white bg-black/40 px-1.5 py-0.5 z-10">
            {idx + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}
