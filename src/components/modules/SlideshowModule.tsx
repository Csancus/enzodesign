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
  heading = "Egyedi kárpitozott bútorok gyártótól",
}: {
  moduleId?: string;
  heading?: string;
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

  return <SlideshowClient images={images} moduleId={moduleId} isAdmin={isAdmin} heading={heading} />;
}
