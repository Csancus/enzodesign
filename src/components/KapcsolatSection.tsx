import ContactForm from "./ContactForm";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  formTitle: "Rendelési űrlap",
  formSubtitle: "Töltsd ki a kapcsolatfelvételi űrlapot és néhány héten belül nálad lehet álmaid bútora!",
  telefon: "+36 30 377 8983",
  email: "info@enzodesign.hu",
  cimNev: "Enzo Design Kft.",
  cimUtca: "8800 Nagykanizsa, Egry József utca 7.",
  steps: "Töltse ki a kapcsolatfelvételi űrlapot vagy hívjon minket\nEgyeztetjük az igényeket (típus, szín, méret)\nElőlegbekérő szerződés küldése (50% előleg)\nGyártás: 4–6 hét\nSzállítás az első biztonságos ajtóig",
  garancia1Ertek: "3 év",
  garancia1Label: "Termékgarancia",
  garancia2Ertek: "10 év",
  garancia2Label: "Vázgarancia",
};

const SCHEMA: FieldDef[] = [
  { key: "formTitle", label: "Űrlap cím (jobb oldal)", type: "text" },
  { key: "formSubtitle", label: "Űrlap alcím", type: "text" },
  { key: "telefon", label: "Telefonszám", type: "text" },
  { key: "email", label: "Email cím", type: "text" },
  { key: "cimNev", label: "Cég neve", type: "text" },
  { key: "cimUtca", label: "Cím (utca)", type: "text" },
  { key: "steps", label: "Rendelés lépései (soronként 1 lépés)", type: "textarea" },
  { key: "garancia1Ertek", label: "Garancia 1 – érték", type: "text" },
  { key: "garancia1Label", label: "Garancia 1 – felirat", type: "text" },
  { key: "garancia2Ertek", label: "Garancia 2 – érték", type: "text" },
  { key: "garancia2Label", label: "Garancia 2 – felirat", type: "text" },
];

export default async function KapcsolatSection({ isAdmin }: { isAdmin: boolean }) {
  const stored = await getModuleConfig("kapcsolat:main");
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const steps = cfg.steps.split("\n").filter(Boolean);

  return (
    <section className="relative py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Elérhetőségek */}
        <div>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Elérhetőségeink
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#7d6142] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Telefon</p>
                <a href={`tel:${cfg.telefon.replace(/\s/g, "")}`} className="text-lg font-semibold text-[#1c1c1c] hover:text-[#7d6142] transition-colors">
                  {cfg.telefon}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#7d6142] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Email</p>
                <a href={`mailto:${cfg.email}`} className="text-lg font-semibold text-[#1c1c1c] hover:text-[#7d6142] transition-colors">
                  {cfg.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#7d6142] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Cím</p>
                <p className="text-[#1c1c1c] font-semibold">{cfg.cimNev}</p>
                <p className="text-gray-600">{cfg.cimUtca}</p>
              </div>
            </div>
          </div>

          {/* Rendelés menete */}
          <div className="mt-10 bg-[#f5f0e8] p-6">
            <h3 className="text-lg font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Rendelés menete
            </h3>
            <ol className="space-y-3">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#7d6142] text-white text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Garancia */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[#1c1c1c] text-white p-5 text-center">
              <div className="text-2xl font-bold text-[#b8924a]">{cfg.garancia1Ertek}</div>
              <div className="text-xs uppercase tracking-wide mt-1">{cfg.garancia1Label}</div>
            </div>
            <div className="bg-[#1c1c1c] text-white p-5 text-center">
              <div className="text-2xl font-bold text-[#b8924a]">{cfg.garancia2Ertek}</div>
              <div className="text-xs uppercase tracking-wide mt-1">{cfg.garancia2Label}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            {cfg.formTitle}
          </h2>
          <p className="text-gray-600 text-sm mb-6">{cfg.formSubtitle}</p>
          <ContactForm />
        </div>
      </div>
      {isAdmin && (
        <EditBtn
          moduleId="kapcsolat:main"
          config={cfg as unknown as Record<string, unknown>}
          schema={SCHEMA}
          label="✏ Szekció szerkesztése"
        />
      )}
    </section>
  );
}
