import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Akciók – Enzo Design",
  description: "Figyelje folyamatosan változó akcióinkat – vásároljon közvetlenül a gyártótól.",
};

export default function AkcioPage() {
  return (
    <PageBuilderPage
      pageId="akcio"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            label: "Akciók",
            title: "Vásároljon közvetlenül a gyártótól!",
            subtitle: "Figyelje folyamatosan változó akcióinkat.",
          },
        },
        {
          type: "image-collage",
          config: {
            images: [
              { src: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", alt: "Akciós franciaágy" },
              { src: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", alt: "Chesterfield akció" },
              { src: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", alt: "Super Sale bútor akció" },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
