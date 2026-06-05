"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type Option = { label: string; value: string; image: string };

const FORMA: Option[] = [
  { label: "Fotel", value: "Fotel", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp" },
  { label: "Kettes kanapé", value: "Kettes kanapé", image: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp" },
  { label: "Hármas kanapé", value: "Hármas kanapé", image: "/images/9a0b1d_422ba4768edb46bbabf18c71920c58b5.webp" },
  { label: "Sarokkanapé", value: "Sarokkanapé", image: "/images/9a0b1d_90d30f27c0514e7dbd3b3937f18c09d6.webp" },
  { label: "Ágy", value: "Ágy", image: "/images/9a0b1d_90fdfb1584894cccb9dbe73b245823b1.webp" },
  { label: "Egyedi bútor", value: "Egyedi bútor", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" },
];

const STILUS: Option[] = [
  { label: "Modern", value: "Modern", image: "/images/9a0b1d_044763de7b1c42628cb972936f92346e.webp" },
  { label: "Minimál", value: "Minimál", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp" },
  { label: "Chesterfield", value: "Chesterfield", image: "/images/chesterfield-klasszikus-stilus.webp" },
  { label: "Skandináv", value: "Skandináv", image: "/images/9a0b1d_8720015a57b84595a2f5a3a3abe73648.webp" },
  { label: "Glamour", value: "Glamour", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp" },
];

const ANYAG: Option[] = [
  { label: "Bársony", value: "Bársony", image: "/images/chesterfield-borszovet-boritasu.webp" },
  { label: "Bőr", value: "Bőr", image: "/images/chesterfield-bor-anyag.webp" },
  { label: "Zsenília", value: "Zsenília", image: "/images/9a0b1d_1946145440dc499d9ea4522e3df74f8a.webp" },
  { label: "Gyapjú", value: "Gyapjú", image: "/images/9a0b1d_b763b84e6b714e8982fbd96f0c9f425d.webp" },
  { label: "Többféle", value: "Többféle / Nem tudom", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp" },
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
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#7d6142] text-white flex items-center justify-center font-bold text-lg shrink-0">
          {step}
        </div>
        <h2 className="text-xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                  : "border-gray-200 hover:border-[#7d6142] hover:shadow-sm"
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
                    <div className="bg-[#b8924a] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                      ✓
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`px-3 py-2.5 text-sm font-semibold transition-colors ${
                  active ? "bg-[#b8924a] text-white" : "bg-white text-[#1c1c1c] group-hover:text-[#7d6142]"
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

        {/* Intro */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4">
            20 éve azért dolgozunk, hogy minőségi és strapabíró bútorokat készítsünk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gyártók vagyunk, így a magas minőség mellett az ár reális tud maradni, nincs disztribúciós költség.
            Ezen kívül bármilyen stílusú, anyagú, méretű bútort elkészítünk Neked!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Töltsd ki a lenti kapcsolat formot, küldj egy képet vagy írd meg, mit szeretnél és mi elkészítjük neked 4 héten belül!
          </p>
          <p className="text-[#7d6142] font-semibold mt-4">
            Írj a{" "}
            <a href="mailto:info@enzodesign.hu" className="underline hover:text-[#b8924a]">info@enzodesign.hu</a>
            {" "}címre vagy hívd bútortervezőnket a{" "}
            <a href="tel:+36303778983" className="underline hover:text-[#b8924a]">+36 30 377 8983</a>
            {" "}számon.
          </p>
        </div>

        {/* Step 1 */}
        <SelectionGrid step={1} title="Válaszd ki a formát" options={FORMA} selected={forma} onSelect={setForma} />

        {/* Step 2 */}
        <SelectionGrid step={2} title="Válaszd ki a stílust" options={STILUS} selected={stilus} onSelect={setStilus} />

        {/* Step 3 */}
        <SelectionGrid step={3} title="Válaszd ki az anyagot" options={ANYAG} selected={anyag} onSelect={setAnyag} />

        {/* CTA to scroll to form */}
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
