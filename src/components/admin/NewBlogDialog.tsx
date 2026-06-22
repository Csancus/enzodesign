"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";
import Image from "next/image";

const CATEGORIES = [
  { value: "", label: "Általános" },
  { value: "chesterfield", label: "Chesterfield" },
  { value: "fotel", label: "Fotel" },
  { value: "kanape", label: "Kanapé" },
  { value: "egyedi", label: "Egyedi bútor" },
];

async function uploadFile(file: File): Promise<string | null> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  if (!res.ok) return null;
  const { src } = await res.json();
  return src;
}

export default function NewBlogDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("3 perc");
  const [coverImage, setCoverImage] = useState("");
  const [articleImages, setArticleImages] = useState<string[]>([]);
  const [coverUploading, setCoverUploading] = useState(false);
  const [articlesUploading, setArticlesUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const coverRef = useRef<HTMLInputElement>(null);
  const articlesRef = useRef<HTMLInputElement>(null);

  function handleTitleChange(val: string) {
    setTitle(val);
    setSlug(slugify(val));
  }

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverUploading(true);
    setUploadError("");
    const src = await uploadFile(file);
    if (src) setCoverImage(src);
    else setUploadError("A borítókép feltöltése sikertelen.");
    setCoverUploading(false);
    e.target.value = "";
  }

  async function handleArticleImages(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setArticlesUploading(true);
    setUploadError("");
    for (const file of files) {
      const src = await uploadFile(file);
      if (src) setArticleImages((prev) => [...prev, src]);
      else setUploadError("Egy vagy több kép feltöltése sikertelen.");
    }
    setArticlesUploading(false);
    e.target.value = "";
  }

  function removeArticleImage(idx: number) {
    setArticleImages((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!slug) { setError("Az URL slug nem lehet üres."); return; }
    setSaving(true);
    setError("");
    const res = await fetch("/api/admin/blog-posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, excerpt, category, readTime, coverImage, articleImages }),
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
      <div className="bg-white w-full max-w-lg p-6 shadow-2xl my-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-base font-bold text-[#1c1c1c] mb-1">Új blog cikk</h2>
        <p className="text-xs text-gray-400 mb-5">A cikk szerkeszthető lesz az oldalon admin módban.</p>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
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

          {/* Slug */}
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

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Kivonat (blog listán jelenik meg)</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b8924a] resize-none"
              placeholder="Rövid összefoglaló a cikkről..."
            />
          </div>

          {/* Category + ReadTime */}
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

          {/* Cover image upload */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Borítókép</label>
            <input ref={coverRef} type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
            {coverImage ? (
              <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                <Image src={coverImage} alt="Borítókép" fill className="object-cover" />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 hover:bg-black/80"
                >
                  Törlés
                </button>
              </div>
            ) : (
              <button
                type="button"
                disabled={coverUploading}
                onClick={() => coverRef.current?.click()}
                className="w-full border-2 border-dashed border-gray-300 hover:border-[#b8924a] py-5 text-xs text-gray-400 hover:text-[#b8924a] transition-colors disabled:opacity-50"
              >
                {coverUploading ? "Feltöltés..." : "+ Kép hozzáadása"}
              </button>
            )}
          </div>

          {/* Article images */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Képek a cikkbe
              <span className="font-normal text-gray-400 ml-1">– a szöveg közé kerülnek automatikusan</span>
            </label>
            <input ref={articlesRef} type="file" accept="image/*" multiple className="hidden" onChange={handleArticleImages} />
            {articleImages.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mb-2">
                {articleImages.map((src, idx) => (
                  <div key={idx} className="relative aspect-square bg-gray-100 overflow-hidden group">
                    <Image src={src} alt="" fill className="object-cover" />
                    <button
                      type="button"
                      onClick={() => removeArticleImage(idx)}
                      className="absolute inset-0 bg-black/50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              type="button"
              disabled={articlesUploading}
              onClick={() => articlesRef.current?.click()}
              className="w-full border-2 border-dashed border-gray-300 hover:border-[#b8924a] py-3 text-xs text-gray-400 hover:text-[#b8924a] transition-colors disabled:opacity-50"
            >
              {articlesUploading ? "Feltöltés..." : `+ Képek hozzáadása${articleImages.length > 0 ? ` (${articleImages.length} kép)` : ""}`}
            </button>
          </div>

          {(uploadError || error) && (
            <p className="text-red-500 text-xs">{uploadError || error}</p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving || coverUploading || articlesUploading}
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
