import { Suspense } from "react";
import SlideshowModule from "@/components/modules/SlideshowModule";
import HeroLightSection from "./HeroLightSection";
import HeroDarkSection from "./HeroDarkSection";
import HeroImageSection from "./HeroImageSection";
import RolunkSection from "./RolunkSection";
import StepsSection from "./StepsSection";
import PopularSection from "./PopularSection";
import EgyediSection from "./EgyediSection";
import TextBlockSection from "./TextBlockSection";
import ImageTextSection from "./ImageTextSection";
import BannerSection from "./BannerSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";

export default function SectionRenderer({
  type,
  id,
  isAdmin,
}: {
  type: string;
  id: string;
  isAdmin: boolean;
}) {
  switch (type) {
    case "slideshow":
      return (
        <Suspense fallback={<div style={{ height: "clamp(320px,48vw,560px)" }} className="bg-gray-100" />}>
          <SlideshowModule moduleId={id} />
        </Suspense>
      );
    case "hero-light":
      return <HeroLightSection moduleId={id} isAdmin={isAdmin} />;
    case "hero-dark":
      return <HeroDarkSection moduleId={id} isAdmin={isAdmin} />;
    case "hero-image":
      return <HeroImageSection moduleId={id} isAdmin={isAdmin} />;
    case "rolunk":
      return <RolunkSection moduleId={id} isAdmin={isAdmin} />;
    case "steps":
      return <StepsSection moduleId={id} isAdmin={isAdmin} />;
    case "popular":
      return <PopularSection moduleId={id} isAdmin={isAdmin} />;
    case "egyedi":
      return <EgyediSection moduleId={id} isAdmin={isAdmin} />;
    case "text-block":
      return <TextBlockSection moduleId={id} isAdmin={isAdmin} />;
    case "image-text":
      return <ImageTextSection moduleId={id} isAdmin={isAdmin} />;
    case "banner":
      return <BannerSection moduleId={id} isAdmin={isAdmin} />;
    case "gallery":
      return <GallerySection moduleId={id} isAdmin={isAdmin} />;
    case "contact":
      return <ContactSection moduleId={id} isAdmin={isAdmin} />;
    default:
      return null;
  }
}
