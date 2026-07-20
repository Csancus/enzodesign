import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  src: "/videos/rolunk.mp4",
  title: "",
  bgColor: "#1c1c1c",
};

const SCHEMA: FieldDef[] = [
  { key: "src", label: "Videó útvonal (pl. /videos/rolunk.mp4)", type: "text" },
  { key: "title", label: "Felirat (opcionális)", type: "text" },
  { key: "bgColor", label: "Háttérszín", type: "text" },
];

export default async function VideoSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": cfg.title || "Enzo Design – Egyedi kárpitozott bútorok gyártása",
    "description": "Egyedi kárpitozott bútorok gyártása Nagykanizsán. Kanapék, fotelek, Chesterfield bútorok saját műhelyben.",
    "thumbnailUrl": "https://www.enzodesign.hu/images/chesterfield-w1.webp",
    "contentUrl": `https://www.enzodesign.hu${cfg.src}`,
    "uploadDate": "2026-06-26T00:00:00+02:00",
    "publisher": {
      "@type": "Organization",
      "name": "Enzo Design",
      "url": "https://www.enzodesign.hu",
      "logo": { "@type": "ImageObject", "url": "https://www.enzodesign.hu/images/logo.webp" },
    },
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }} />
    <section className="relative py-10 px-4" style={{ backgroundColor: cfg.bgColor }}>
      <div className="max-w-4xl mx-auto">
        {cfg.title && (
          <h2
            className="text-2xl font-bold text-white text-center mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cfg.title}
          </h2>
        )}
        <video
          src={cfg.src}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full rounded-sm"
          style={{ maxHeight: "560px" }}
        />
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
    </>
  );
}
