"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type Option = { label: string; value: string; image: string };

const FORMA: Option[] = [
  { label: "Fotel", value: "Fotel", image: "/images/d56f41_676a4c24883a4688bf94e8d5a0d64eb6.png" },
  { label: "Kettes kanapé", value: "Kettes kanapé", image: "/images/d56f41_f0f19cda74b8497e8d3f2a509ae6caea.png" },
  { label: "Hármas kanapé", value: "Hármas kanapé", image: "/images/d56f41_29dc2a9fee104b6db9336687ebd8770f.png" },
  { label: "Sarokkanapé", value: "Sarokkanapé", image: "/images/d56f41_3850e23204d245b8accbcdf46013859f.png" },
  { label: "Ágy", value: "Ágy", image: "/images/d56f41_92b0cb9ed50a43a3888a5730babf9e5a.png" },
  { label: "Egyedi bútor", value: "Egyedi bútor", image: "/images/d56f41_769357f0c70c4da0a97844526b883a30.png" },
];

const STILUS: Option[] = [
  { label: "Modern", value: "Modern", image: "/images/d56f41_dda4c8df36424541b6df6120ac359107.png" },
  { label: "Minimál", value: "Minimál", image: "/images/d56f41_5fd1357cb7db40c28eb775a4e7045c61.png" },
  { label: "Chesterfield", value: "Chesterfield", image: "/images/d56f41_9ac453092389438b8a7aa408c6f7cfc0.png" },
  { label: "Skandináv", value: "Skandináv", image: "/images/d56f41_76eec56e21ea4859bf77076fd5bb3dea.png" },
  { label: "Glamour", value: "Glamour", image: "/images/d56f41_27a01083494743efb6d2d470f8c730ab.png" },
];

const ANYAG: Option[] = [
  { label: "Bársony", value: "Bársony", image: "/images/d56f41_d2176371a8ae443781e761754acbdaac.png" },
  { label: "Bőr", value: "Bőr", image: "/images/d56f41_34121c2c4bb34ba4bd94c90e482a2e39.png" },
  { label: "Zsenília", value: "Zsenília", image: "/images/d56f41_8087504c294d453f92d1b29f2202b479.png" },
  { label: "Gyapjú", value: "Gyapjú", image: "/images/d56f41_7abc23c13d314ed583d498be566e068d.png" },
  { label: "Többféle", value: "Többféle / Nem tudom", image: "/images/d56f41_1ff1037e13594f2c8195637abf3107e7.png" },
];

function SelectionGrid({
  step,
  title,
  options,
  selected,
  onSelect,
}: {
  step: number;
  title: string;
  options: Option[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="mb-10">
      <h2
        className="text-lg font-bold text-[#1c1c1c] text-center mb-5"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {step}. {title}
      </h2>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      >
        {options.map((opt) => {
          const active = selected === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(active ? "" : opt.value)}
              className={`group relative overflow-hidden text-left transition-all border-2 ${
                active
                  ? "border-[#b8924a] shadow-md"
                  : "border-transparent hover:border-[#7d6142]"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={opt.image}
                  alt={opt.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {active && (
                  <div className="absolute inset-0 bg-[#b8924a]/20 flex items-center justify-center">
                    <div className="bg-[#b8924a] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`px-1 py-1.5 text-xs font-medium text-center transition-colors ${
                  active ? "text-[#b8924a]" : "text-[#1c1c1c]"
                }`}
              >
                {opt.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ButorvalasztoQuiz() {
  const [forma, setForma] = useState("");
  const [stilus, setStilus] = useState("");
  const [anyag, setAnyag] = useState("");

  const [nev, setNev] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [lakcim, setLakcim] = useState("");
  const [extraLeiras, setExtraLeiras] = useState("");
  const [adatkezeles, setAdatkezeles] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formRef = useRef<HTMLDivElement>(null);

  const selectionSummary = [
    forma && `Forma: ${forma}`,
    stilus && `Stílus: ${stilus}`,
    anyag && `Anyag: ${anyag}`,
  ]
    .filter(Boolean)
    .join("\n");

  const leiras = selectionSummary
    ? selectionSummary + (extraLeiras ? "\n\n" + extraLeiras : "")
    : extraLeiras;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!nev.trim()) errs.nev = "Kötelező mező";
    if (!telefon.trim()) errs.telefon = "Kötelező mező";
    if (!email.trim()) errs.email = "Kötelező mező";
    if (!adatkezeles) errs.adatkezeles = "Az adatkezelési szabályzat elfogadása kötelező";
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nev, telefon, email, lakcim, leiras, alapbutor: "", tipusa: "" }),
      });
    } catch { /* silent */ }
    setSending(false);
    setSent(true);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const anySelected = forma || stilus || anyag;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Bútorválasztásra <span className="text-[#b8924a]">fel!</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Segíts nekünk, hogy tökéletes bútort ajánljunk neked és kérj egyedi ajánlatot!
          </p>
        </div>

        {/* Step 1 */}
        <SelectionGrid step={1} title="Válaszd ki a formát" options={FORMA} selected={forma} onSelect={setForma} />

        {/* Step 2 */}
        <SelectionGrid step={2} title="Válaszd ki a stílust" options={STILUS} selected={stilus} onSelect={setStilus} />

        {/* Step 3 */}
        <SelectionGrid step={3} title="Válaszd ki az anyagot" options={ANYAG} selected={anyag} onSelect={setAnyag} />

        {/* CTA if anything selected */}
        {anySelected && (
          <div className="bg-[#f5f0e8] border border-[#b8924a]/30 p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#1c1c1c] text-sm mb-1">Kiválasztottad a bútort:</p>
              <p className="text-sm text-[#7d6142]">
                {[forma, stilus, anyag].filter(Boolean).join(" · ")}
              </p>
            </div>
            <button
              onClick={scrollToForm}
              className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors shrink-0"
            >
              Kérek ajánlatot ↓
            </button>
          </div>
        )}

        {/* Intro text (below selections) */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-3 text-gray-700 text-sm leading-relaxed">
          <p>20 éve azért dolgozunk, hogy minőségi és strapabíró bútorokat készítsünk.</p>
          <p>
            Gyártók vagyunk, így a magas minőség mellett az ár reális tud maradni, nincs disztribúciós költség.
            Ezen kívül bármilyen stílusú, anyagú, méretű bútort elkészítünk Neked!
          </p>
          <p>Töltsd ki a lenti kapcsolat formot, küldj egy képet vagy írd meg, mit szeretnél és mi elkészítjük neked 4 héten belül!</p>
          <p className="text-[#7d6142] font-semibold">
            Írj egy emailt az{" "}
            <a href="mailto:info@enzodesign.hu" className="underline hover:text-[#b8924a]">info@enzodesign.hu</a>
            {" "}címre vagy hívd bútortervezőnket a{" "}
            <a href="tel:+36303778983" className="underline hover:text-[#b8924a]">+36303778983</a>
            {" "}számon.
          </p>
        </div>

        {/* Contact form */}
        <div ref={formRef} className="bg-[#f5f0e8] p-8 mt-4">
          <div className="text-center mb-8">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">Kapcsolatfelvétel</p>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Kérj egyedi ajánlatot!
            </h2>
            <p className="text-gray-500 text-sm">Töltsd ki az űrlapot és 24 órán belül visszahívunk!</p>
          </div>

          {sent ? (
            <div className="bg-white p-10 text-center">
              <p className="text-2xl font-semibold text-[#7d6142] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Köszönjük!</p>
              <p className="text-gray-600">Hamarosan keresni fogunk!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Név *</label>
                  <input
                    type="text"
                    value={nev}
                    onChange={(e) => setNev(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
                    placeholder="Teljes név"
                  />
                  {errors.nev && <p className="text-red-500 text-xs mt-1">{errors.nev}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefonszám *</label>
                  <input
                    type="tel"
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
                    placeholder="+36 XX XXX XXXX"
                  />
                  {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
                    placeholder="email@példa.hu"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lakcím</label>
                  <input
                    type="text"
                    value={lakcim}
                    onChange={(e) => setLakcim(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
                    placeholder="Szállítási cím"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bútor leírása</label>
                {selectionSummary && (
                  <p className="text-xs text-[#7d6142] mb-1.5 font-medium">
                    Választásaid automatikusan bekerültek a szövegbe.
                  </p>
                )}
                <textarea
                  rows={5}
                  value={leiras}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (selectionSummary && val.startsWith(selectionSummary)) {
                      const extra = val.slice(selectionSummary.length).replace(/^\n+/, "");
                      setExtraLeiras(extra);
                    } else {
                      setExtraLeiras(val);
                    }
                  }}
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142] resize-none"
                  placeholder="Írja le elképzelését, méreteket, esetleg küldjön képet linkként..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="adatkezeles"
                  checked={adatkezeles}
                  onChange={(e) => setAdatkezeles(e.target.checked)}
                  className="mt-0.5 accent-[#7d6142]"
                />
                <label htmlFor="adatkezeles" className="text-sm text-gray-600">
                  Elfogadom az{" "}
                  <a href="/adatkezelesi-szabalyzat" className="text-[#7d6142] underline">
                    adatkezelési szabályzatot
                  </a>
                  .
                </label>
              </div>
              {errors.adatkezeles && <p className="text-red-500 text-xs">{errors.adatkezeles}</p>}

              <button
                type="submit"
                disabled={sending}
                className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-3 transition-colors disabled:opacity-60"
              >
                {sending ? "Küldés..." : "Küldés"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
