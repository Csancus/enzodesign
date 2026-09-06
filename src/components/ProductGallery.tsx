"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { imageAlt } from "@/lib/imageAlt";

export default function ProductGallery({ images, name, priority }: { images: string[]; name: string; priority?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setActive((i) => (i === null ? null : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  const cols = Math.min(images.length, 4);
  const gridColsClass =
    cols === 1 ? "grid-cols-1" :
    cols === 2 ? "grid-cols-2" :
    cols === 3 ? "grid-cols-2 sm:grid-cols-3" :
    "grid-cols-2 sm:grid-cols-4";

  return (
    <>
      {/* Thumbnail grid */}
      <div className={`grid gap-2 sm:gap-3 ${gridColsClass}`}>
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="relative aspect-[4/3] overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#b8924a] cursor-zoom-in"
          >
            <Image
              src={src}
              alt={imageAlt(name, i)}
              fill
              priority={priority && i === 0}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-5 text-white/80 hover:text-white text-4xl leading-none z-10"
            aria-label="Bezárás"
          >
            ×
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl leading-none z-10 px-3 py-4"
              aria-label="Előző"
            >
              ‹
            </button>
          )}

          {/* Image container – fixed height, image fits inside */}
          <div
            className="relative w-full max-w-4xl mx-4 sm:mx-14"
            style={{ height: "75vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={imageAlt(name, active)}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-5xl leading-none z-10 px-3 py-4"
              aria-label="Következő"
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
