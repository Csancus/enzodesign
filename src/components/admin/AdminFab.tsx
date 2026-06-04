"use client";
import { useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import NewPageDialog from "./NewPageDialog";

export default function AdminFab() {
  const { isAdmin } = useAdmin();
  const [menuOpen, setMenuOpen] = useState(false);
  const [newPageOpen, setNewPageOpen] = useState(false);
  const [reseedBusy, setReseedBusy] = useState(false);

  if (!isAdmin) return null;

  async function handleReseed() {
    if (!confirm("Visszaállítja az összes oldal alapértelmezett tartalmát? A blob-ban tárolt egyedi módosítások törlődnek.")) return;
    setReseedBusy(true);
    setMenuOpen(false);
    try {
      await fetch("/api/admin/reseed-pages", { method: "POST" });
      window.location.reload();
    } finally {
      setReseedBusy(false);
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col items-end gap-2">
        {menuOpen && (
          <div className="bg-white shadow-xl border border-gray-200 rounded-sm overflow-hidden mb-1">
            <button
              onClick={() => { setMenuOpen(false); setNewPageOpen(true); }}
              className="block w-full text-left px-5 py-3 text-sm text-[#1c1c1c] hover:bg-[#b8924a] hover:text-white transition-colors whitespace-nowrap"
            >
              + Új oldal
            </button>
            <button
              onClick={handleReseed}
              disabled={reseedBusy}
              className="block w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-600 hover:text-white transition-colors whitespace-nowrap disabled:opacity-50"
            >
              {reseedBusy ? "Visszaállítás..." : "↺ Tartalom visszaállítása"}
            </button>
          </div>
        )}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="w-12 h-12 bg-[#7d6142] hover:bg-[#b8924a] text-white text-2xl font-bold shadow-lg transition-colors flex items-center justify-center"
          aria-label="Admin menü"
        >
          {menuOpen ? "×" : "+"}
        </button>
      </div>

      {newPageOpen && (
        <NewPageDialog onClose={() => setNewPageOpen(false)} />
      )}
    </>
  );
}
