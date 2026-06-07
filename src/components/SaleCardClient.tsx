"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { formatPrice } from "@/data/products";
import type { SaleProduct } from "@/components/sections/SaleProductsSection";

function daysLeft(isoDate: string): number | null {
  const end = new Date(isoDate);
  if (isNaN(end.getTime())) return null;
  return Math.ceil((end.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

export default function SaleCardClient({ product }: { product: SaleProduct }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const images = [product.mainImage, product.image2, product.image3].filter(Boolean) as string[];
  const origPrice = parseInt(product.originalPrice, 10);
  const salePrice = parseInt(product.salePrice, 10);
  const discount = origPrice > 0 && salePrice > 0 ? Math.round((1 - salePrice / origPrice) * 100) : 0;
  const days = product.saleEnds ? daysLeft(product.saleEnds) : null;
  const n = images.length;

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i !== null ? (i + 1) % n : null));
      if (e.key === "ArrowLeft") setLightboxIdx((i) => (i !== null ? (i - 1 + n) % n : null));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, n, closeLightbox]);

  const handleRendeles = () => {
    const msg = `Akciós termék érdeklődés: ${product.name} – ${!isNaN(salePrice) ? formatPrice(salePrice) : ""} Ft (akciós ár)`;
    window.dispatchEvent(new CustomEvent("fill-rendeles", { detail: { leiras: msg } }));
    document.getElementById("rendeles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full">
        {/* Clickable image area → lightbox */}
        <div className="relative cursor-zoom-in group" onClick={() => setLightboxIdx(0)}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={images[0] ?? "/images/logo.webp"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
              -{discount}%
            </span>
          )}
          {product.badge && (
            <span className="absolute top-2 right-2 bg-[#1c1c1c]/80 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
              {product.badge}
            </span>
          )}
          {n > 1 && (
            <span className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 z-10">
              🔍 {n} kép
            </span>
          )}
        </div>

        {/* Card info */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-[#1c1c1c] mb-3 text-sm leading-snug">{product.name}</h3>
          <div className="mt-auto">
            {!isNaN(origPrice) && (
              <p className="text-gray-400 line-through text-sm mb-0.5">{formatPrice(origPrice)}</p>
            )}
            {!isNaN(salePrice) && (
              <p className="text-2xl font-bold text-red-600 mb-2">{formatPrice(salePrice)}</p>
            )}
            {days !== null && days > 0 && (
              <p className="text-xs text-gray-500 mb-3">Akció: még {days} nap ({product.saleEnds})</p>
            )}
            {days !== null && days <= 0 && (
              <p className="text-xs text-red-400 mb-3">Az akció lejárt</p>
            )}
            <button
              onClick={handleRendeles}
              className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors"
            >
              Rendelés →
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            style={{ height: "78vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIdx]}
              alt={`${product.name} – ${lightboxIdx + 1}. kép`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
            {lightboxIdx + 1} / {n}
          </span>

          {n > 1 && (
            <>
              <button
                aria-label="Előző kép"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl font-light hover:text-[#b8924a] transition-colors px-2"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + n) % n); }}
              >‹</button>
              <button
                aria-label="Következő kép"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl font-light hover:text-[#b8924a] transition-colors px-2"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % n); }}
              >›</button>
            </>
          )}

          <button
            aria-label="Bezárás"
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl transition-colors"
            onClick={closeLightbox}
          >✕</button>
        </div>
      )}
    </>
  );
}
