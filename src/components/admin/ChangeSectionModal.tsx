"use client";
import { useState } from "react";
import { SECTION_TYPES } from "@/lib/sectionTypes";

export default function ChangeSectionModal({
  pageId,
  sectionId,
  onClose,
  onChanged,
}: {
  pageId: string;
  sectionId: string;
  onClose: () => void;
  onChanged: () => void;
}) {
  const [loading, setLoading] = useState<string | null>(null);

  async function replace(type: string) {
    setLoading(type);
    await fetch(
      `/api/admin/page-layout?page=${pageId}&section=${encodeURIComponent(sectionId)}&action=replace&type=${type}`,
      { method: "POST" }
    );
    setLoading(null);
    onChanged();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200]" onClick={onClose}>
      <div className="bg-white w-full max-w-sm p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-base font-bold text-[#1c1c1c] mb-4">Szekció cseréje</h2>
        <div className="space-y-2">
          {SECTION_TYPES.map((st) => (
            <button
              key={st.type}
              onClick={() => replace(st.type)}
              disabled={!!loading}
              className="w-full text-left px-4 py-2.5 border border-gray-200 text-sm hover:bg-[#b8924a] hover:text-white hover:border-[#b8924a] transition-colors disabled:opacity-50"
            >
              {loading === st.type ? "..." : st.label}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 w-full border border-gray-300 py-2 text-sm text-gray-600 hover:bg-gray-50">
          Mégse
        </button>
      </div>
    </div>
  );
}
