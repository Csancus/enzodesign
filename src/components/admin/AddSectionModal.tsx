"use client";
import { useState } from "react";
import { SECTION_TYPES } from "@/lib/sectionTypes";

export default function AddSectionModal({
  pageId,
  afterIndex,
  onClose,
  onAdded,
}: {
  pageId: string;
  afterIndex: number;
  onClose: () => void;
  onAdded: () => void;
}) {
  const [loading, setLoading] = useState<string | null>(null);

  async function add(type: string) {
    setLoading(type);
    await fetch(`/api/admin/page-layout?page=${pageId}&action=add&type=${type}&afterIndex=${afterIndex}`, {
      method: "POST",
    });
    setLoading(null);
    onAdded();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200]" onClick={onClose}>
      <div className="bg-white w-full max-w-sm shadow-2xl flex flex-col max-h-[90dvh]" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 pb-3 flex-shrink-0">
          <h2 className="text-base font-bold text-[#1c1c1c]">Szekció hozzáadása</h2>
        </div>
        <div className="overflow-y-auto flex-1 px-6 space-y-2">
          {SECTION_TYPES.map((st) => (
            <button
              key={st.type}
              onClick={() => add(st.type)}
              disabled={!!loading}
              className="w-full text-left px-4 py-2.5 border border-gray-200 text-sm hover:bg-[#b8924a] hover:text-white hover:border-[#b8924a] transition-colors disabled:opacity-50"
            >
              {loading === st.type ? "..." : st.label}
            </button>
          ))}
        </div>
        <div className="p-6 pt-3 flex-shrink-0">
          <button onClick={onClose} className="w-full border border-gray-300 py-2 text-sm text-gray-600 hover:bg-gray-50">
            Mégse
          </button>
        </div>
      </div>
    </div>
  );
}
