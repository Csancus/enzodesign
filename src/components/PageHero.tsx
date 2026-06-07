import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import { getAdminStatus } from "@/lib/auth";
import type { FieldDef } from "@/types/cms";

type HeroContent = { label?: string; title: string; subtitle?: string };

type EditableProps = { moduleId: string; defaults: HeroContent };
type StaticProps = HeroContent & { moduleId?: never; defaults?: never };
type Props = EditableProps | StaticProps;

const SCHEMA: FieldDef[] = [
  { key: "label", label: "Felső felirat (pl. ENZO DESIGN)", type: "text" },
  { key: "title", label: "Főcím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
];

function HeroMarkup({ cfg }: { cfg: HeroContent }) {
  return (
    <section className="bg-[#f5f0e8] py-12 sm:py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {cfg.label && (
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">
            {cfg.label}
          </p>
        )}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h1>
        {cfg.subtitle && (
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
            {cfg.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default async function PageHero(props: Props) {
  if (props.moduleId) {
    const [stored, isAdmin] = await Promise.all([
      getModuleConfig(props.moduleId),
      getAdminStatus(),
    ]);
    const cfg: HeroContent = { ...props.defaults, ...(stored as Partial<HeroContent>) };
    return (
      <section className="relative bg-[#f5f0e8] py-12 sm:py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {cfg.label && (
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">
              {cfg.label}
            </p>
          )}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cfg.title}
          </h1>
          {cfg.subtitle && (
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              {cfg.subtitle}
            </p>
          )}
        </div>
        {isAdmin && (
          <EditBtn
            moduleId={props.moduleId}
            config={cfg as unknown as Record<string, unknown>}
            schema={SCHEMA}
            label="✏ Hero szerkesztése"
          />
        )}
      </section>
    );
  }

  // Static (no edit) — backward compatible
  const p = props as StaticProps;
  return <HeroMarkup cfg={{ label: p.label, title: p.title, subtitle: p.subtitle }} />;
}
