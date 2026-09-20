import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import SlideshowClient from "./SlideshowClient";

const DEFAULT_IMAGES = [
  { src: "/images/slide1.webp", alt: "Barna bőr Chesterfield kanapé sárga díszpárnákkal, sötétzöld falú nappaliban" },
  { src: "/images/slide2.webp", alt: "Szürke bársony, mélyen gombolt Chesterfield ülőgarnitúra márványpadlós nappaliban" },
  { src: "/images/slide3.webp", alt: "Petrolzöld bársony Chesterfield kanapé színes falfestmény előtt, egyedi rendelésre készítve" },
  { src: "/images/slide4.webp", alt: "Szürke kárpitozott ágy és fotel modern, sötét tónusú hálószobában" },
  { src: "/images/slide5.webp", alt: "Bézs kárpitozott étkezőszékek fehér asztal körül, világos étkezőben" },
  { src: "/images/slide6.webp", alt: "Krémszínű moduláris ülőgarnitúra tágas, napfényes nappaliban" },
  { src: "/images/slide7.webp", alt: "Fehér modern kanapé és fotelek kandallós nappaliban, panorámaablakkal" },
];

export default async function SlideshowModule({
  moduleId = "home:slideshow",
  heading = "Egyedi kárpitozott bútorok",
  headingTag,
  ctaHref,
}: {
  moduleId?: string;
  heading?: string;
  headingTag?: "h1" | "h2";
  ctaHref?: string;
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

  return <SlideshowClient images={images} moduleId={moduleId} isAdmin={isAdmin} heading={heading} headingTag={headingTag} ctaHref={ctaHref} />;
}
