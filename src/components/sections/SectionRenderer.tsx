import { Suspense } from "react";
import SlideshowModule from "@/components/modules/SlideshowModule";
import RolunkSection from "./RolunkSection";
import StepsSection from "./StepsSection";
import PopularSection from "./PopularSection";
import EgyediSection from "./EgyediSection";
import TextBlockSection from "./TextBlockSection";
import ImageTextSection from "./ImageTextSection";
import BannerSection from "./BannerSection";
import GallerySection from "./GallerySection";
import ContactFormSection from "@/components/ContactFormSection";

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
      return <ContactFormSection />;
    default:
      return null;
  }
}
