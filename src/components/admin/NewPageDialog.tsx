"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";
import { SECTION_TYPES } from "@/lib/sectionTypes";

const PARENT_OPTIONS = [
  { label: "Gyökér (/)", value: "" },
  { label: "Bútoraink (/butoraink)", value: "/butoraink" },
  { label: "Chesterfield (/chesterfield)", value: "/chesterfield" },
];

const NAV_PARENT_OPTIONS = [
  { label: "Önálló (főmenü)", value: "" },
  { label: "Bútoraink alatt", value: "/butoraink" },
  { label: "Chesterfield alatt", value: "/chesterfield" },
];

export default function NewPageDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [localSlug, setLocalSlug] = useState("");
  const [parentPath, setParentPath] = useState("");
  const [addedToNav, setAddedToNav] = useState(false);
  const [navParent, setNavParent] = useState("");
  const [selectedSections, setSelectedSections] = useState<string[]>(["text-block"]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleTitleChange(val: string) {
    setTitle(val);
    setLocalSlug(slugify(val));
  }

  function toggleSection(type: string) {
    setSelectedSections((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  const fullSlug = parentPath ? `${parentPath}/${localSlug}` : `/${localSlug}`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!localSlug) { setError("Az URL slug nem lehet üres."); return; }
    if (selectedSections.length === 0) { setError("Legalább egy szekciót válassz ki."); return; }
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug: fullSlug,
        addedToNav,
        navParent: addedToNav && navParent ? navParent : null,
        initialSections: selectedSections,
      }),
    });
    if (!res.ok) {
      setError("Hiba történt a mentés során.");
      setSaving(false);
      return;
    }
    onClose();
    router.push(fullSlug);
    router.refresh();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[400] overflow-y-auto py-8" onClick={onClose}>
      <div className="bg-white w-full max-w-md p-6 shadow-2xl my-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-base font-bold text-[#1c1c1c] mb-5">Új oldal létrehozása</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Oldal neve</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
              placeholder="pl. Kanapé akció"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">URL elhelyezése</label>
            <select
              value={parentPath}
              onChange={(e) => setParentPath(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
            >
              {PARENT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">URL slug</label>
            <input
              type="text"
              value={localSlug}
              onChange={(e) => setLocalSlug(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
              placeholder="url-slug"
              required
            />
            <p className="text-xs text-gray-400 mt-1">Teljes URL: <span className="font-mono">{fullSlug || "/"}</span></p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">Kezdeti szekciók (sorrendben)</label>
            <div className="border border-gray-200 rounded-sm divide-y divide-gray-100">
              {SECTION_TYPES.map((st) => (
                <label key={st.type} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={selectedSections.includes(st.type)}
                    onChange={() => toggleSection(st.type)}
                    className="w-4 h-4 accent-[#b8924a]"
                  />
                  <span className="text-sm text-[#1c1c1c]">{st.label}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">Admin módban bármikor hozzáadhatsz / törölhetsz / cserélhetsz szekciókat.</p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="addedToNav"
              checked={addedToNav}
              onChange={(e) => setAddedToNav(e.target.checked)}
              className="w-4 h-4 accent-[#b8924a]"
            />
            <label htmlFor="addedToNav" className="text-sm text-[#1c1c1c]">Fejléc menübe kerüljön</label>
          </div>

          {addedToNav && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Melyik menü alá</label>
              <select
                value={navParent}
                onChange={(e) => setNavParent(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
              >
                {NAV_PARENT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          )}

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold py-2.5 text-sm transition-colors disabled:opacity-50"
            >
              {saving ? "Mentés..." : "Létrehozás"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
            >
              Mégse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
