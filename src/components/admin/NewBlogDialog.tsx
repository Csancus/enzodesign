"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";

const CATEGORIES = [
  { value: "", label: "Általános" },
  { value: "chesterfield", label: "Chesterfield" },
  { value: "fotel", label: "Fotel" },
  { value: "kanape", label: "Kanapé" },
  { value: "egyedi", label: "Egyedi bútor" },
];

export default function NewBlogDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("3 perc");
  const [image, setImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleTitleChange(val: string) {
    setTitle(val);
    setSlug(slugify(val));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slug) { setError("Az URL slug nem lehet üres."); return; }
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/blog-posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, excerpt, category, readTime, image }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Hiba történt a mentés során.");
      setSaving(false);
      return;
    }
    onClose();
    router.push(`/blog/${slug}`);
    router.refresh();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[400] overflow-y-auto py-8" onClick={onClose}>
      <div className="bg-white w-full max-w-md p-6 shadow-2xl my-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-base font-bold text-[#1c1c1c] mb-1">Új blog cikk</h2>
        <p className="text-xs text-gray-400 mb-5">A cikk szerkeszthető lesz az oldalon admin módban.</p>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Cím</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
              placeholder="pl. Chesterfield fotel választási útmutató"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">URL slug</label>
            <div className="flex items-center border border-gray-300 focus-within:border-[#b8924a]">
              <span className="px-3 py-2 text-xs text-gray-400 bg-gray-50 border-r border-gray-300 whitespace-nowrap">/blog/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="flex-1 px-3 py-2 text-sm focus:outline-none"
                placeholder="url-slug"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Kivonat (blog listán jelenik meg)</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a] resize-none"
              placeholder="Rövid összefoglaló a cikkről..."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Kategória</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Olvasási idő</label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
                placeholder="3 perc"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Borítókép URL (elhagyható)</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a]"
              placeholder="/images/valami.webp"
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold py-2.5 text-sm transition-colors disabled:opacity-50"
            >
              {saving ? "Létrehozás..." : "Cikk létrehozása"}
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
