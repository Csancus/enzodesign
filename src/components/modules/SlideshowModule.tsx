import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import SlideshowClient from "./SlideshowClient";

const DEFAULT_IMAGES = [
  { src: "/images/slide1.jpg", alt: "Enzo Design kárpitozott bútorok" },
  { src: "/images/slide2.jpg", alt: "Enzo Design kanapék és fotelek" },
  { src: "/images/slide3.jpg", alt: "Egyedi kárpitozott bútorok" },
  { src: "/images/slide4.png", alt: "Enzo Design kollekció" },
  { src: "/images/slide5.png", alt: "Kárpitozott bútor gyártó" },
  { src: "/images/slide6.jpg", alt: "Chesterfield kanapék" },
  { src: "/images/slide7.jpg", alt: "Enzo Design bútorok" },
];

export default async function SlideshowModule({
  moduleId = "home:slideshow",
}: {
  moduleId?: string;
}) {
  const config = await getModuleConfig(moduleId);
  const images = Array.isArray((config as { images?: unknown }).images) &&
    ((config as { images: unknown[] }).images).length > 0
    ? (config as { images: { src: string; alt: string }[] }).images
    : DEFAULT_IMAGES;

  const isAdmin = await getAdminStatus();

  return <SlideshowClient images={images} moduleId={moduleId} isAdmin={isAdmin} />;
}
