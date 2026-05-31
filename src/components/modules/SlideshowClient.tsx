"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideshowEditor from "./SlideshowEditor";

type SlideImage = { src: string; alt: string };

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
  const [editing, setEditing] = useState(false);
  const [currentImages, setCurrentImages] = useState(images);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % currentImages.length),
    [currentImages.length]
  );

  useEffect(() => {
    if (editing || currentImages.length <= 1) return;
    const t = setInterval(next, 2000);
    return () => clearInterval(t);
  }, [next, editing, currentImages.length]);

  if (currentImages.length === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(320px, 48vw, 560px)" }}
    >
      {currentImages.map((img, i) => (
        <div
          key={img.src + i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
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

      {/* Centered white logo card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white text-center px-8 py-7 max-w-[280px] w-full shadow-sm pointer-events-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image
              src="/images/logo.png"
              alt="Enzo Design"
              width={44}
              height={34}
              className="object-contain"
            />
          </div>
          <p className="text-[#1c1c1c] text-xs leading-relaxed mb-4">
            Egyedi és azonnal elérhető kárpitozott bútorok
            <br />
            közvetlenül a gyártótól.
          </p>
          <Link
            href="/butoraink"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-2 transition-colors text-xs"
          >
            Tovább
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      {currentImages.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
          {currentImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors pointer-events-auto ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Admin edit button */}
      {isAdmin && (
        <button
          onClick={() => setEditing(true)}
          className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white text-xs px-3 py-1.5 z-10 transition-colors"
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
