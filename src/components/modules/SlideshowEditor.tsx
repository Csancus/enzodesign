"use client";
import { useState, useRef } from "react";
import Image from "next/image";

type SlideImage = { src: string; alt: string };

export default function SlideshowEditor({
  moduleId,
  images,
  onClose,
  onSave,
}: {
  moduleId: string;
  images: SlideImage[];
  onClose: () => void;
  onSave: (images: SlideImage[]) => void;
}) {
  const [list, setList] = useState<SlideImage[]>(images);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError(null);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      if (res.ok) {
        const { src } = await res.json();
        const alt = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
        setList((prev) => [...prev, { src, alt }]);
      } else {
        const body = await res.json().catch(() => ({}));
        setUploadError(body.error ?? `Feltöltési hiba (${res.status})`);
      }
    } catch {
      setUploadError("Hálózati hiba");
    }
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  function move(i: number, dir: -1 | 1) {
    setList((prev) => {
      const a = [...prev];
      const j = i + dir;
      if (j < 0 || j >= a.length) return a;
      [a[i], a[j]] = [a[j], a[i]];
      return a;
    });
  }

  async function handleSave() {
    setSaving(true);
    await fetch(`/api/admin/modules?id=${encodeURIComponent(moduleId)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ images: list }),
    });
    setSaving(false);
    onSave(list);
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-[#1c1c1c] mb-4">Slideshow szerkesztése</h2>

        {list.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">Nincsenek képek</p>
        )}

        <div className="space-y-3 mb-4">
          {list.map((img, i) => (
            <div key={img.src + i} className="flex items-center gap-3 border border-gray-200 p-2">
              <div className="relative w-20 h-14 flex-shrink-0 bg-gray-100">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
              <input
                type="text"
                value={img.alt}
                onChange={(e) =>
                  setList((prev) =>
                    prev.map((it, j) => (j === i ? { ...it, alt: e.target.value } : it))
                  )
                }
                className="flex-1 text-xs border border-gray-200 px-2 py-1.5 outline-none focus:border-[#b8924a] min-w-0"
                placeholder="Alt szöveg (SEO)"
              />
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="text-xs text-gray-500 hover:text-[#b8924a] disabled:opacity-20 px-1"
                >
                  ↑
                </button>
                <button
                  onClick={() => move(i, 1)}
                  disabled={i === list.length - 1}
                  className="text-xs text-gray-500 hover:text-[#b8924a] disabled:opacity-20 px-1"
                >
                  ↓
                </button>
              </div>
              <button
                onClick={() => setList((prev) => prev.filter((_, j) => j !== i))}
                className="text-xs text-red-400 hover:text-red-600 px-1 flex-shrink-0"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="w-full border-2 border-dashed border-gray-300 py-3 text-sm text-gray-500 hover:border-[#b8924a] hover:text-[#b8924a] transition-colors mb-2 disabled:opacity-50"
        >
          {uploading ? "Feltöltés folyamatban..." : "+ Kép hozzáadása"}
        </button>
        {uploadError && (
          <p className="text-xs text-red-500 mb-3 text-center">{uploadError}</p>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-2 text-sm text-gray-600 hover:bg-gray-50"
          >
            Mégse
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-[#b8924a] hover:bg-[#a07840] text-white py-2 text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {saving ? "Mentés..." : "Mentés"}
          </button>
        </div>
      </div>
    </div>
  );
}
