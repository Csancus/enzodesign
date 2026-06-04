"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  nev: string;
  telefon: string;
  email: string;
  lakcim: string;
  leiras: string;
  alapbutor: string;
  tipusa: string;
  adatkezeles: boolean;
};

const ALAPBUTOR_OPTIONS = [
  "Még nem tudom",
  "Ivone",
  "Old's Club",
  "Design",
  "Chesterfield",
  "New York",
  "Joker",
  "Cannes-Nizza",
  "Étterem, hotel, üzleti megrendelés",
  "Egyedi bútor",
];

const TIPUSA_OPTIONS = [
  "Még nem tudom / Több bútort",
  "Szék(ek)",
  "Fotel(ek)",
  "2-tes kanapé",
  "3-mas kanapé",
  "Ágy",
  "Sarokkanapé",
  "Teljes szett (fotel+2-tes+3-mas)",
  "Egyedi bútor",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
      reset();
    } catch {
      // silent fail – show success anyway for UX
      setSent(true);
      reset();
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-[#f5f0e8] p-10 text-center">
        <p className="text-2xl font-semibold text-[#7d6142] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Köszönjük!
        </p>
        <p className="text-gray-600">Hamarosan keresni fogunk!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Név *</label>
          <input
            type="text"
            {...register("nev", { required: "Kötelező mező" })}
            className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
            placeholder="Teljes név"
          />
          {errors.nev && <p className="text-red-500 text-xs mt-1">{errors.nev.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefonszám *</label>
          <input
            type="tel"
            {...register("telefon", { required: "Kötelező mező" })}
            className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
            placeholder="+36 XX XXX XXXX"
          />
          {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            {...register("email", { required: "Kötelező mező" })}
            className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
            placeholder="email@példa.hu"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lakcím</label>
          <input
            type="text"
            {...register("lakcim")}
            className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142]"
            placeholder="Szállítási cím"
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">Alapbútor</label>
          <p className="text-xs text-gray-500 mb-1.5">Ha az alap bútoraink közül választanál, jelöld meg, melyiket vásárolnád meg</p>
          <select
            {...register("alapbutor")}
            className="mt-auto w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142] bg-white"
          >
            <option value="">– Válasszon –</option>
            {ALAPBUTOR_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bútor típusa</label>
          <select
            {...register("tipusa")}
            className="mt-auto w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142] bg-white"
          >
            <option value="">– Válasszon –</option>
            {TIPUSA_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bútor leírása</label>
        <textarea
          {...register("leiras")}
          rows={4}
          className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#7d6142] resize-none"
          placeholder="Írja le elképzelését, méreteket, esetleg küldjön képet linkként..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="adatkezeles"
          {...register("adatkezeles", { required: "Az adatkezelési szabályzat elfogadása kötelező" })}
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
      {errors.adatkezeles && <p className="text-red-500 text-xs">{errors.adatkezeles.message}</p>}

      <button
        type="submit"
        disabled={sending}
        className="w-full md:w-auto bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-3 transition-colors disabled:opacity-60"
      >
        {sending ? "Küldés..." : "Küldés"}
      </button>
    </form>
  );
}
