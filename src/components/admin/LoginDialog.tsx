"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/context/AdminContext";

export default function LoginDialog() {
  const { isAdmin, setAdmin } = useAdmin();
  const [open, setOpen] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setLoading(false);
    if (res.ok) {
      setAdmin(true);
      setOpen(false);
      setPw("");
      router.refresh();
    } else {
      setError("Hibás jelszó");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAdmin(false);
    router.refresh();
  }

  if (isAdmin) {
    return (
      <button
        onClick={handleLogout}
        className="text-xs text-[#b8924a] hover:text-white mt-2 transition-colors"
      >
        Admin kijelentkezés
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-gray-500 hover:text-[#b8924a] mt-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        Admin
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
          onClick={() => setOpen(false)}
        >
          <form
            onSubmit={handleLogin}
            className="bg-white p-8 w-full max-w-xs shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-[#1c1c1c] mb-5">Admin belépés</h2>
            <input
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setError(""); }}
              placeholder="Jelszó"
              autoFocus
              className="w-full border border-gray-300 px-3 py-2.5 text-sm mb-3 outline-none focus:border-[#b8924a]"
            />
            {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#b8924a] hover:bg-[#a07840] text-white py-2.5 text-sm font-semibold transition-colors"
            >
              {loading ? "..." : "Belépés"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
