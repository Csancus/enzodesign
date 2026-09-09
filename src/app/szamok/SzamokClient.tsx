"use client";

import { useState } from "react";

type Stats = {
  events: string[];
  eventLabels: Record<string, string>;
  days: string[];
  data: Record<string, Record<string, number>>;
  test: Record<string, Record<string, number>>;
  testTotal: Record<string, number>;
  total: Record<string, number>;
  pages: Record<string, Record<string, number>>;
  labels: Record<string, Record<string, number>>;
};

const heading = { fontFamily: "var(--font-heading)" } as const;

export default function SzamokClient() {
  const [pw, setPw] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function load(password: string, markTest = false) {
    setLoading(true);
    setError(null);
    try {
      const url = `/api/stats?pw=${encodeURIComponent(password)}${markTest ? "&marktest=1" : ""}`;
      const res = await fetch(url, { cache: "no-store" });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error ?? "Nem sikerült betölteni.");
        setStats(null);
      } else {
        setStats(json as Stats);
      }
    } catch {
      setError("Nem sikerült betölteni.");
    } finally {
      setLoading(false);
    }
  }

  if (!stats) {
    return (
      <main className="bg-[#f5f0e8] min-h-[60vh]">
        <div className="mx-auto w-full max-w-md px-4 py-20">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">Belső oldal</p>
          <h1 className="text-3xl font-bold text-[#1c1c1c]" style={heading}>Számok</h1>
          <p className="mt-1 text-sm text-gray-500">Kattintásmérés – enzodesign.hu</p>

          <form
            className="mt-8 bg-white border border-gray-200 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              void load(pw);
            }}
          >
            <label htmlFor="pw" className="block text-sm font-semibold text-[#1c1c1c]">
              Jelszó
            </label>
            <input
              id="pw"
              type="password"
              autoComplete="current-password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="mt-2 w-full border border-gray-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#7d6142]"
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#7d6142] hover:bg-[#b8924a] text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 transition-colors disabled:opacity-60"
            >
              {loading ? "Töltés…" : "Belépek"}
            </button>
            {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
          </form>
        </div>
      </main>
    );
  }

  const { events, eventLabels, days, data, test, testTotal, total, pages, labels } = stats;
  const hasTest = Object.values(testTotal).some((n) => n > 0);

  return (
    <main className="bg-[#f5f0e8]">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">Belső oldal</p>
            <h1 className="text-3xl font-bold text-[#1c1c1c]" style={heading}>Számok</h1>
            <p className="mt-1 text-sm text-gray-500">
              Kattintásmérés – enzodesign.hu. Csak összesített darabszám; se IP, se süti, se
              azonosító.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void load(pw)}
              disabled={loading}
              className="bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors disabled:opacity-60"
            >
              Frissítés
            </button>
            <button
              type="button"
              onClick={() => {
                if (confirm("Az eddigi összes számot fejlesztői tesztnek jelöljük, és levonjuk. Biztos?")) {
                  void load(pw, true);
                }
              }}
              className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors"
            >
              Eddigieket tesztnek jelölöm
            </button>
          </div>
        </div>

        <Section title="Összesen">
          <Table
            head={["Esemény", "Összes", ...(hasTest ? ["ebből teszt", "Valós"] : [])]}
            rows={events.map((e) => [
              eventLabels[e] ?? e,
              total[e] ?? 0,
              ...(hasTest ? [testTotal[e] ?? 0, (total[e] ?? 0) - (testTotal[e] ?? 0)] : []),
            ])}
          />
        </Section>

        <Section title="Naponta">
          {days.length === 0 ? (
            <Empty />
          ) : (
            <Table
              head={["Nap", ...events.map((e) => eventLabels[e] ?? e)]}
              rows={days.map((d) => [
                d,
                ...events.map((e) => {
                  const n = data[d]?.[e] ?? 0;
                  const t = test[d]?.[e] ?? 0;
                  return n - t;
                }),
              ])}
            />
          )}
        </Section>

        <Section title="Mire kattintottak">
          <Breakdown rows={labels} events={events} eventLabels={eventLabels} first="Gomb / címke" />
        </Section>

        <Section title="Melyik oldalról">
          <Breakdown rows={pages} events={events} eventLabels={eventLabels} first="Oldal" />
        </Section>

        <p className="mt-10 bg-white/70 border border-gray-200 px-4 py-3 text-xs leading-relaxed text-gray-500">
          A számok a Supabase-adatbázisban élnek, naponta és eseményenként összesítve. A mérés
          nem használ sütit és nem tárol semmit, amiből egy látogató azonosítható lenne, ezért
          nem is kér hozzájárulást. Ez az oldal <strong>noindex</strong>, a keresők nem indexelik.
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-[#1c1c1c]" style={heading}>
        {title}
      </h2>
      <div className="mt-3 overflow-x-auto bg-white border border-gray-200">{children}</div>
    </section>
  );
}

function Empty() {
  return <p className="px-4 py-6 text-sm text-gray-500">Még nincs mért adat.</p>;
}

function Table({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <table className="w-full min-w-[640px] text-sm tabular-nums">
      <thead>
        <tr>
          {head.map((h, i) => (
            <th
              key={h}
              className={`border-b-2 border-[#b8924a] px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-gray-500 ${
                i === 0 ? "text-left" : "text-right"
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={String(row[0])} className="hover:bg-[#f5f0e8]/70">
            {row.map((cell, i) => (
              <td
                key={i}
                className={`whitespace-nowrap border-b border-gray-100 px-3 py-2 ${
                  i === 0 ? "text-left font-medium text-[#1c1c1c]" : "text-right"
                } ${cell === 0 ? "text-gray-300" : ""}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Breakdown({
  rows,
  events,
  eventLabels,
  first,
}: {
  rows: Record<string, Record<string, number>>;
  events: string[];
  eventLabels: Record<string, string>;
  first: string;
}) {
  const keys = Object.keys(rows).sort(
    (a, b) => sum(rows[b]) - sum(rows[a]) || a.localeCompare(b, "hu"),
  );
  if (keys.length === 0) return <Empty />;

  const usedEvents = events.filter((e) => keys.some((k) => rows[k][e]));

  return (
    <Table
      head={[first, ...usedEvents.map((e) => eventLabels[e] ?? e), "Összes"]}
      rows={keys.map((k) => [k, ...usedEvents.map((e) => rows[k][e] ?? 0), sum(rows[k])])}
    />
  );
}

function sum(o: Record<string, number>) {
  return Object.values(o).reduce((a, b) => a + b, 0);
}
