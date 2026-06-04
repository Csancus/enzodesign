"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideshowEditor from "./SlideshowEditor";

type SlideImage = { src: string; alt: string };

const HEIGHT = "clamp(320px, 48vw, 560px)";

export default function SlideshowClient({
  images,
  moduleId,
  isAdmin,
}: {
  images: SlideImage[];
  moduleId: string;
  isAdmin: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentImages, setCurrentImages] = useState(images);

  const n = currentImages.length;
  // Clone the first image at the end for seamless loop
  const slides = n > 0 ? [...currentImages, currentImages[0]] : [];
  const sliceW = slides.length > 0 ? 100 / slides.length : 100;

  // Auto-advance
  useEffect(() => {
    if (editing || n <= 1) return;
    const t = setInterval(() => setCurrent((c) => c + 1), 3500);
    return () => clearInterval(t);
  }, [editing, n]);

  // When reaching the clone at index n, jump back to 0 without animation
  useEffect(() => {
    if (current !== n) return;
    const t = setTimeout(() => {
      setAnimated(false);
      setCurrent(0);
    }, 620);
    return () => clearTimeout(t);
  }, [current, n]);

  // Re-enable animation after the instant jump
  useEffect(() => {
    if (animated) return;
    const t = setTimeout(() => setAnimated(true), 30);
    return () => clearTimeout(t);
  }, [animated]);

  if (n === 0) return null;

  const dotIndex = current >= n ? 0 : current;

  return (
    <section className="relative w-full overflow-hidden" style={{ height: HEIGHT }}>
      {/* Sliding strip */}
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * sliceW}%)`,
          transition: animated ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="relative h-full flex-shrink-0"
            style={{ width: `${sliceW}%` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Centered hero card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white/95 backdrop-blur-sm text-center px-10 py-8 max-w-[340px] w-full shadow-lg pointer-events-auto border-t-2 border-[#b8924a]">
          <div className="flex items-center justify-center mb-4">
            <Image src="/images/logo.webp" alt="Enzo Design" width={52} height={40} className="object-contain" />
          </div>
          <div className="w-8 h-px bg-[#b8924a] mx-auto mb-4" />
          <p
            className="text-[#1c1c1c] text-base leading-snug mb-1 font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Egyedi kárpitozott bútorok
          </p>
          <p className="text-[#7d6142] text-xs tracking-widest uppercase mb-6">
            közvetlenül a gyártótól
          </p>
          <Link
            href="/butoraink"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-widest px-8 py-3 transition-colors text-xs"
          >
            Tovább
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      {n > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
          {currentImages.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnimated(true); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-colors pointer-events-auto ${
                i === dotIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Admin edit button */}
      {isAdmin && (
        <button
          onClick={() => setEditing(true)}
          className="absolute top-10 right-3 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 z-10 transition-colors"
        >
          ✏ Szerkesztés
        </button>
      )}

      {editing && (
        <SlideshowEditor
          moduleId={moduleId}
          images={currentImages}
          onClose={() => setEditing(false)}
          onSave={(imgs) => {
            setCurrentImages(imgs);
            setCurrent(0);
            setEditing(false);
          }}
        />
      )}
    </section>
  );
}
