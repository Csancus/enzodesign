import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import SlideshowClient from "./SlideshowClient";

const DEFAULT_IMAGES = [
  { src: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", alt: "Chesterfield kanapé" },
  { src: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", alt: "Enzo Design szoba" },
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
