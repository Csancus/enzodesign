"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AddSectionModal from "./AddSectionModal";
import ChangeSectionModal from "./ChangeSectionModal";

export default function SectionAdminOverlay({
  children,
  pageId,
  sectionId,
  sectionIndex,
  totalSections,
}: {
  children: React.ReactNode;
  pageId: string;
  sectionId: string;
  sectionIndex: number;
  totalSections: number;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const router = useRouter();

  async function move(dir: -1 | 1) {
    await fetch(`/api/admin/page-layout?page=${pageId}&section=${encodeURIComponent(sectionId)}&action=move&dir=${dir}`, { method: "POST" });
    router.refresh();
  }

  async function remove() {
    if (!confirm("Törlöd ezt a szekciót?")) return;
    await fetch(`/api/admin/page-layout?page=${pageId}&section=${encodeURIComponent(sectionId)}&action=delete`, { method: "POST" });
    router.refresh();
  }

  return (
    <div className="relative group/section">
      {children}

      {/* Top admin bar - visible on hover */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-3 py-1.5 bg-black/60 opacity-0 group-hover/section:opacity-100 transition-opacity z-20 pointer-events-none group-hover/section:pointer-events-auto">
        <span className="text-[10px] text-gray-300 uppercase tracking-wider">{sectionId}</span>
        <div className="flex items-center gap-1">
          <button onClick={() => move(-1)} disabled={sectionIndex === 0} className="text-white text-xs px-1.5 py-0.5 hover:bg-white/20 disabled:opacity-30">↑</button>
          <button onClick={() => move(1)} disabled={sectionIndex >= totalSections - 1} className="text-white text-xs px-1.5 py-0.5 hover:bg-white/20 disabled:opacity-30">↓</button>
          <button onClick={() => setShowChange(true)} className="text-yellow-300 hover:text-yellow-100 text-xs px-1.5 py-0.5 hover:bg-white/20">⟳ Csere</button>
          <button onClick={remove} className="text-red-300 hover:text-red-100 text-xs px-1.5 py-0.5 hover:bg-white/20 ml-1">✕ Törlés</button>
        </div>
      </div>

      {/* Add section below button */}
      <div className="flex justify-center opacity-0 group-hover/section:opacity-100 transition-opacity z-20 relative">
        <button
          onClick={() => setShowAdd(true)}
          className="absolute -bottom-4 bg-[#b8924a] hover:bg-[#a07840] text-white text-xs px-4 py-1 shadow-md transition-colors z-10"
        >
          + Szekció ide
        </button>
      </div>

      {showAdd && (
        <AddSectionModal
          pageId={pageId}
          afterIndex={sectionIndex}
          onClose={() => setShowAdd(false)}
          onAdded={() => { setShowAdd(false); router.refresh(); }}
        />
      )}

      {showChange && (
        <ChangeSectionModal
          pageId={pageId}
          sectionId={sectionId}
          onClose={() => setShowChange(false)}
          onChanged={() => { setShowChange(false); router.refresh(); }}
        />
      )}
    </div>
  );
}
