import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

export type Review = { name: string; text: string; rating: string; date: string };

export const REVIEWS_DEFAULT = {
  title: "Ügyfeleink véleménye",
  reviews: [
    { name: "Judit Néber",    text: "Karácsonykor vásároltunk két Chesterfield kanapét az Enzo Design-tól – és egyszerűen imádjuk őket! A bútorok minősége, egyedisége és stílusa messze felülmúlta a várakozásainkat.", rating: "5", date: "2 éve" },
    { name: "Tóth Gábor",     text: "Kedves, korrekt és rendkívül jó minőségű egyedi bútorok!!!! Csak ajánlani tudom!!!", rating: "5", date: "8 hónapja" },
    { name: "Judit Palkó",    text: "Gyönyörű bútorok, szakértelem, korrekt és precíz munka, segítőkész csapat!", rating: "5", date: "4 hónapja" },
    { name: "Mihály Stampf",  text: "Korrekt, megbízható precíz munka. Ajánlom!", rating: "5", date: "egy éve" },
    { name: "Máté Temlén",    text: "Nagyon igényes, profi munka!", rating: "5", date: "6 hónapja" },
    { name: "Anita Ács",      text: "", rating: "5", date: "egy éve" },
    { name: "Mónika Bartha",  text: "", rating: "5", date: "3 hónapja" },
    { name: "Friskó Kata",    text: "", rating: "5", date: "2 hónapja" },
  ] as Review[],
};

export const REVIEWS_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "reviews", label: "Vélemények", type: "array", itemFields: [
    { key: "name",   label: "Név",                    type: "text" },
    { key: "text",   label: "Vélemény szövege",       type: "textarea" },
    { key: "rating", label: "Értékelés (1–5)",        type: "text" },
    { key: "date",   label: "Dátum (pl. egy éve)",    type: "text" },
  ]},
];

export const REVIEWS_MODULE_ID = "global:reviews";

function StarRating({ rating }: { rating: string }) {
  const n = Math.min(5, Math.max(1, parseInt(rating) || 5));
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < n ? "#f59e0b" : "#d1d5db"} className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Initials({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const letters = parts.length >= 2 ? (parts[0][0] ?? "") + (parts[parts.length - 1][0] ?? "") : name.trim().slice(0, 2);
  const colors = ["bg-[#7d6142]", "bg-[#b8924a]", "bg-[#5a7a3a]", "bg-[#4a6a8a]", "bg-[#8a4a6a]"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
      {letters.toUpperCase()}
    </div>
  );
}

export function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="border border-gray-100 p-5 shadow-sm bg-white">
      <div className="flex items-center gap-3 mb-3">
        <Initials name={r.name} />
        <div>
          <p className="text-sm font-semibold text-[#1c1c1c]">{r.name}</p>
          <p className="text-xs text-gray-400">Vélemény forrása: Google</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <StarRating rating={r.rating} />
        <span className="text-xs text-gray-400">{r.date}</span>
      </div>
      {r.text && <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>}
    </div>
  );
}

export default async function ReviewsSection({
  isAdmin,
  showAll = false,
}: {
  isAdmin: boolean;
  showAll?: boolean;
}) {
  const stored = await getModuleConfig(REVIEWS_MODULE_ID);
  const cfg = { ...REVIEWS_DEFAULT, ...(stored as typeof REVIEWS_DEFAULT) };
  const all = cfg.reviews?.length ? cfg.reviews : REVIEWS_DEFAULT.reviews;
  const reviews = showAll ? all : all.slice(0, 3);

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          {cfg.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </div>
      {isAdmin && (
        <EditBtn moduleId={REVIEWS_MODULE_ID} config={{ ...cfg, reviews: all }} schema={REVIEWS_SCHEMA} />
      )}
    </section>
  );
}
