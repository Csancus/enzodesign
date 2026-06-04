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
              {
                src: "https://static.wixstatic.com/media/9a0b1d_13e53dff0c704be6b672061708d151e6~mv2.jpg/v1/fill/w_502,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a0b1d_13e53dff0c704be6b672061708d151e6~mv2.jpg",
                alt: "Akciós bútor",
              },
              {
                src: "https://static.wixstatic.com/media/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6~mv2.jpg/v1/fill/w_417,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6~mv2.jpg",
                alt: "Chesterfield akció",
              },
              {
                src: "https://static.wixstatic.com/media/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472~mv2.jpg/v1/fill/w_409,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472~mv2.jpg",
                alt: "Super Sale",
              },
            ],
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
