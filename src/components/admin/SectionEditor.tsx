"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import type { FieldDef } from "@/types/cms";

type Config = Record<string, unknown>;

function ImageField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      if (res.ok) {
        const { src } = await res.json();
        onChange(src);
      } else {
        const body = await res.json().catch(() => ({}));
        setUploadError(body.error ?? `Hiba (${res.status})`);
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Ismeretlen hiba");
    } finally {
      setUploading(false);
      if (ref.current) ref.current.value = "";
    }
  }

  return (
    <div className="flex items-center gap-3">
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="w-24 h-16 flex-shrink-0 object-cover bg-gray-100" />
      )}
      <div className="flex-1 min-w-0">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Kép URL vagy tölts fel"
          className="w-full border border-gray-200 px-2 py-1.5 text-xs text-gray-900 bg-white outline-none focus:border-[#b8924a] mb-1"
        />
        <input ref={ref} type="file" accept="image/*" onChange={upload} className="hidden" />
        <button
          onClick={() => ref.current?.click()}
          disabled={uploading}
          className="text-xs text-[#b8924a] hover:underline disabled:opacity-50"
        >
          {uploading ? "Feltöltés..." : "Feltöltés"}
        </button>
        {uploadError && <p className="text-xs text-red-500 mt-0.5">{uploadError}</p>}
      </div>
    </div>
  );
}

const ROUTE_OPTIONS: { group: string; routes: { label: string; value: string }[] }[] = [
  {
    group: "Kanapék",
    routes: [
      { label: "Kanapék (főoldal)", value: "/butoraink/kanapek" },
      { label: "Old's Club kanapék", value: "/butoraink/kanapek/olds-club-kanapek" },
      { label: "Ivone kanapék", value: "/butoraink/kanapek/ivone-kanapek" },
      { label: "Design kanapék", value: "/butoraink/kanapek/design-kanapek" },
      { label: "Chesterfield kanapék", value: "/butoraink/kanapek/chesterfield-kanapek" },
      { label: "New York kanapék", value: "/butoraink/kanapek/new-york-kanapek" },
      { label: "Joker kanapék", value: "/butoraink/kanapek/joker-kanapek" },
      { label: "Cannes kanapék", value: "/butoraink/kanapek/cannes-kanapek" },
    ],
  },
  {
    group: "Fotelek",
    routes: [
      { label: "Fotelek (főoldal)", value: "/butoraink/fotelek" },
      { label: "Old's Club fotel", value: "/butoraink/fotelek/olds-club-fotel" },
      { label: "Ivone fotel", value: "/butoraink/fotelek/ivone-fotel" },
      { label: "Design fotel", value: "/butoraink/fotelek/design-fotel" },
      { label: "Chesterfield fotel", value: "/butoraink/fotelek/chesterfield-fotel" },
      { label: "New York fotel", value: "/butoraink/fotelek/new-york-fotel" },
      { label: "Joker fotel", value: "/butoraink/fotelek/joker-fotel" },
      { label: "További fotelek", value: "/butoraink/fotelek/tovabbi-fotelek" },
    ],
  },
  {
    group: "Franciaágyak, székek, egyéb bútorok",
    routes: [
      { label: "Franciaágyak", value: "/butoraink/franciaagyak" },
      { label: "Szék, zsámoly, falvédő", value: "/butoraink/szek-zsamoly-falvedo" },
      { label: "Egyedi bútor", value: "/butoraink/egyedi-butor" },
      { label: "Bútoraink (főoldal)", value: "/butoraink" },
    ],
  },
  {
    group: "Kollekciók",
    routes: [
      { label: "Old's Club kollekció", value: "/olds-club-kollekcio" },
      { label: "Ivone kollekció", value: "/ivone-kollekcio" },
      { label: "Chesterfield oldal", value: "/chesterfield" },
    ],
  },
  {
    group: "Általános oldalak",
    routes: [
      { label: "Üzleti bútor", value: "/karpitozott-butor-uzleti-ugyfeleknek" },
      { label: "Kapcsolat és rendelés", value: "/kapcsolat-es-rendeles" },
      { label: "Butorgyártás", value: "/butorgyartas" },
      { label: "Főoldal", value: "/" },
    ],
  },
];

function UrlField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-1.5">
      <select
        value={value}
        onChange={(e) => { if (e.target.value) onChange(e.target.value); }}
        className="w-full border border-gray-200 px-2 py-1.5 text-xs text-gray-700 bg-white outline-none focus:border-[#b8924a]"
      >
        <option value="">— válassz oldalt —</option>
        {ROUTE_OPTIONS.map((g) => (
          <optgroup key={g.group} label={g.group}>
            {g.routes.map((r) => (
              <option key={r.value} value={r.value}>{r.label} ({r.value})</option>
            ))}
          </optgroup>
        ))}
      </select>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="vagy írj be egyedi URL-t"
        className="w-full border border-gray-200 px-2 py-1.5 text-xs text-gray-900 bg-white outline-none focus:border-[#b8924a]"
      />
    </div>
  );
}

function FieldInput({ field, value, onChange, nested }: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
  nested?: boolean;
}) {
  if (field.type === "image") {
    return <ImageField value={(value as string) ?? ""} onChange={onChange as (v: string) => void} />;
  }
  if (field.type === "url") {
    return <UrlField value={(value as string) ?? ""} onChange={onChange as (v: string) => void} />;
  }
  if (field.type === "note") {
    const href = (value as string) ?? "";
    return (
      <div className="text-xs text-[#7d6142] bg-[#f5f0e8] border border-[#e8ddd0] rounded px-3 py-2 leading-relaxed">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-[#b8924a] break-all">
            {href}
          </a>
        ) : (
          <span className="text-gray-500">—</span>
        )}
      </div>
    );
  }
  if (field.type === "boolean") {
    const on = value === true || value === "true";
    return (
      <button
        type="button"
        onClick={() => onChange(!on)}
        className="flex items-center gap-2 text-xs text-gray-700"
      >
        <span
          className={`w-9 h-5 rounded-full transition-colors relative ${on ? "bg-[#b8924a]" : "bg-gray-300"}`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${on ? "left-[1.15rem]" : "left-0.5"}`}
          />
        </span>
        {on ? "Bekapcsolva" : "Kikapcsolva"}
      </button>
    );
  }
  if (field.type === "textarea") {
    return (
      <textarea
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        rows={nested ? 4 : 8}
        className="w-full border border-gray-200 px-2 py-1.5 text-xs text-gray-900 bg-white outline-none focus:border-[#b8924a] resize-y min-h-[5rem]"
      />
    );
  }
  if (field.type === "array") {
    const items = Array.isArray(value) ? (value as Config[]) : [];
    return (
      <ArrayField
        items={items}
        itemFields={field.itemFields}
        addLabel={field.addLabel}
        onChange={onChange as (v: Config[]) => void}
        nested
      />
    );
  }
  return (
    <input
      type="text"
      value={(value as string) ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-200 px-2 py-1.5 text-xs text-gray-900 bg-white outline-none focus:border-[#b8924a]"
    />
  );
}

function ArrayField({
  items,
  itemFields,
  addLabel,
  onChange,
  nested,
}: {
  items: Config[];
  itemFields: FieldDef[];
  addLabel?: string;
  onChange: (v: Config[]) => void;
  nested?: boolean;
}) {
  function update(i: number, key: string, value: unknown) {
    const next = items.map((item, j) => (j === i ? { ...item, [key]: value } : item));
    onChange(next);
  }

  function move(i: number, dir: -1 | 1) {
    const next = [...items];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  function remove(i: number) {
    onChange(items.filter((_, j) => j !== i));
  }

  function add() {
    const blank: Config = {};
    itemFields.forEach((f) => { blank[f.key] = f.type === "array" ? [] : ""; });
    onChange([...items, blank]);
  }

  const wrapCls = nested
    ? "border border-dashed border-gray-300 p-2 bg-white space-y-2"
    : "space-y-3";
  const itemCls = nested
    ? "border border-gray-200 p-2 bg-gray-50"
    : "border border-gray-200 p-3 bg-gray-50";

  return (
    <div className={wrapCls}>
      {items.map((item, i) => (
        <div key={i} className={itemCls}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400 font-medium">#{i + 1}</span>
            <div className="flex gap-1">
              <button onClick={() => move(i, -1)} disabled={i === 0} className="text-xs text-gray-400 hover:text-[#b8924a] disabled:opacity-20 px-1">↑</button>
              <button onClick={() => move(i, 1)} disabled={i === items.length - 1} className="text-xs text-gray-400 hover:text-[#b8924a] disabled:opacity-20 px-1">↓</button>
              <button onClick={() => remove(i)} className="text-xs text-red-400 hover:text-red-600 px-1">✕</button>
            </div>
          </div>
          {itemFields.map((f) => (
            <div key={f.key} className="mb-2">
              <label className="block text-xs text-gray-500 mb-0.5">{f.label}</label>
              <FieldInput
                field={f}
                value={item[f.key]}
                onChange={(v) => update(i, f.key, v)}
                nested
              />
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={add}
        className="w-full border-2 border-dashed border-gray-300 py-2 text-xs text-gray-500 hover:border-[#b8924a] hover:text-[#b8924a] transition-colors"
      >
        + {addLabel ?? "Hozzáadás"}
      </button>
    </div>
  );
}

export default function SectionEditor({
  moduleId,
  initialConfig,
  schema,
  onClose,
}: {
  moduleId: string;
  initialConfig: Config;
  schema: FieldDef[];
  onClose: () => void;
}) {
  const [config, setConfig] = useState<Config>(initialConfig);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const router = useRouter();

  function set(key: string, value: unknown) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  async function save() {
    setSaving(true);
    setSaveError(null);
    try {
      // "note" fields are read-only info — never persist them
      const noteKeys = new Set(schema.filter((f) => f.type === "note").map((f) => f.key));
      const payload = Object.fromEntries(Object.entries(config).filter(([k]) => !noteKeys.has(k)));
      const res = await fetch(`/api/admin/modules?id=${encodeURIComponent(moduleId)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setSaveError(body.error ?? `Mentési hiba (${res.status})`);
        return;
      }
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Ismeretlen hiba");
      return;
    } finally {
      setSaving(false);
    }
    onClose();
    router.refresh();
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200]" onClick={onClose}>
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-[#1c1c1c] mb-5">Szekció szerkesztése</h2>

        <div className="space-y-5">
          {schema.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">{field.label}</label>
              <FieldInput field={field} value={config[field.key]} onChange={(v) => set(field.key, v)} />
            </div>
          ))}
        </div>

        {saveError && (
          <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2">{saveError}</p>
        )}
        <div className="flex gap-3 mt-4">
          <button onClick={onClose} className="flex-1 border border-gray-300 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
            Mégse
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="flex-1 bg-[#b8924a] hover:bg-[#a07840] text-white py-2.5 text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {saving ? "Mentés..." : "Mentés"}
          </button>
        </div>
      </div>
    </div>
  );
}
