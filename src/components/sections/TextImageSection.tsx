import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import { imageAlt } from "@/lib/imageAlt";

const DEFAULT = {
  title: "Cím",
  body: "Szöveg tartalma...\n\nTöbb bekezdés is írható.",
  quote: "",
  quoteAuthor: "",
  image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
  bgColor: "#ffffff",
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "body", label: "Szöveg (üres sor = bekezdés)", type: "textarea" },
  { key: "quote", label: "Idézet (opcionális)", type: "text" },
  { key: "quoteAuthor", label: "Idézet szerzője", type: "text" },
  { key: "image", label: "Kép", type: "image" },
  { key: "bgColor", label: "Háttérszín (pl. #ffffff)", type: "text" },
];

export default async function TextImageSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative py-16 px-4" style={{ backgroundColor: cfg.bgColor }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Szöveg – bal */}
        <div>
          <h2
            className="text-3xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cfg.title}
          </h2>
          {cfg.body.split(/\n\n+/).map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">
              {para}
            </p>
          ))}
          {cfg.quote && (
            <blockquote className="border-l-4 border-[#7d6142] pl-4 italic text-gray-500 mt-2">
              {cfg.quote}
              {cfg.quoteAuthor && (
                <footer className="mt-2 text-sm not-italic font-medium text-[#7d6142]">
                  – {cfg.quoteAuthor}
                </footer>
              )}
            </blockquote>
          )}
        </div>

        {/* Kép – jobb */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={cfg.image} alt={imageAlt(cfg.title)} fill className="object-cover" />
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
