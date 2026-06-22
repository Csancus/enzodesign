"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/context/AdminContext";

function genCaptcha() {
  const a = Math.floor(Math.random() * 90) + 10; // 10–99
  const b = Math.floor(Math.random() * 9) + 1;   // 1–9
  return { a, b };
}

export default function LoginDialog() {
  const { isAdmin, setAdmin } = useAdmin();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [pw, setPw] = useState("");
  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (open) setCaptcha(genCaptcha());
  }, [open]);

  function handleClose() {
    setOpen(false);
    setEmail("");
    setPw("");
    setCaptchaAnswer("");
    setError("");
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (parseInt(captchaAnswer) !== captcha.a + captcha.b) {
      setError("Hibás összeg – próbáld újra");
      setCaptcha(genCaptcha());
      setCaptchaAnswer("");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pw, captchaA: captcha.a, captchaB: captcha.b, captchaAnswer: parseInt(captchaAnswer) }),
    });
    setLoading(false);
    if (res.ok) {
      setAdmin(true);
      handleClose();
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error === "Too many attempts. Try again later." ? "Túl sok próbálkozás – várj 15 percet" : "Hibás adatok");
      setCaptcha(genCaptcha());
      setCaptchaAnswer("");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAdmin(false);
    router.refresh();
  }

  if (isAdmin) {
    return (
      <button onClick={handleLogout} className="text-xs text-[#b8924a] hover:text-white mt-2 transition-colors">
        Admin kijelentkezés
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[10px] text-gray-700 hover:text-[#b8924a] mt-3 opacity-20 hover:opacity-80 transition-all select-none"
      >
        Admin
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]" onClick={handleClose}>
          <form
            onSubmit={handleLogin}
            className="bg-white p-8 w-full max-w-xs shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-[#1c1c1c] mb-5">Admin belépés</h2>

            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="Email cím"
              autoFocus
              required
              className="w-full border border-gray-300 px-3 py-2.5 text-sm mb-3 outline-none focus:border-[#b8924a]"
            />
            <div className="relative mb-3">
              <input
                type={showPw ? "text" : "password"}
                value={pw}
                onChange={(e) => { setPw(e.target.value); setError(""); }}
                placeholder="Jelszó"
                required
                className="w-full border border-gray-300 px-3 py-2.5 pr-10 text-sm outline-none focus:border-[#b8924a]"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                tabIndex={-1}
              >
                {showPw ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.364-3.364A16.9 16.9 0 0121 12c0 3-4 7-9 7a9.8 9.8 0 01-4.243-.943M3 3l18 18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="mb-3">
              <label className="block text-xs text-gray-500 mb-1">
                Mennyi {captcha.a} + {captcha.b}?
              </label>
              <input
                type="number"
                value={captchaAnswer}
                onChange={(e) => { setCaptchaAnswer(e.target.value); setError(""); }}
                placeholder="Írd be az összeget"
                required
                className="w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#b8924a]"
              />
            </div>

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
