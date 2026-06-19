import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import SlideshowClient from "./SlideshowClient";

const DEFAULT_IMAGES = [
  { src: "/images/slide1.webp", alt: "Enzo Design kárpitozott bútorok" },
  { src: "/images/slide2.webp", alt: "Enzo Design kanapék és fotelek" },
  { src: "/images/slide3.webp", alt: "Egyedi kárpitozott bútorok" },
  { src: "/images/slide4.webp", alt: "Enzo Design kollekció" },
  { src: "/images/slide5.webp", alt: "Kárpitozott bútor gyártó" },
  { src: "/images/slide6.webp", alt: "Chesterfield kanapék" },
  { src: "/images/slide7.webp", alt: "Enzo Design bútorok" },
];

export default async function SlideshowModule({
  moduleId = "home:slideshow",
}: {
  moduleId?: string;
}) {
  const config = await getModuleConfig(moduleId);
  const rawImages = Array.isArray((config as { images?: unknown }).images) &&
    ((config as { images: unknown[] }).images).length > 0
    ? (config as { images: { src: string; alt: string }[] }).images
    : DEFAULT_IMAGES;
  const images = rawImages.map((img) => ({
    ...img,
    src: img.src.replace(/\.(jpg|jpeg|png)$/i, ".webp"),
  }));

  const isAdmin = await getAdminStatus();

  return (
    <div className="relative">
      <SlideshowClient images={images} moduleId={moduleId} isAdmin={isAdmin} />
      <div className="absolute inset-0 flex flex-col justify-end px-4 pb-10 z-20 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h1
            className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Egyedi kárpitozott bútorok gyártótól – Enzo Design
          </h1>
          <p className="text-white/90 text-sm sm:text-base mt-2 tracking-wider uppercase font-semibold drop-shadow">
            Bútorbolt Nagykanizsán &nbsp;·&nbsp; Online rendelés
          </p>
        </div>
      </div>
    </div>
  );
}
