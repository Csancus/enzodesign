"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

const HIDDEN_PATHS = ["/szamok", "/admin", "/kapcsolat-es-rendeles"];
const SHOW_AFTER_PX = 400;

/**
 * Mobil ragadós sáv: telefonszám (hívás) + Ajánlatkérés. Csak lg alatt, csak görgetés után,
 * és eltűnik, amíg az űrlap (#rendeles, a Kapcsolat-szekció) vagy a lábléc látszik,
 * hogy ne takarja a Küldés gombot. Mindkét gomb mérve a /szamok oldalon.
 */
export default function MobileCtaBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Az oldalak szerveren renderelt szekciói – kliens-navigáció után újra keresünk.
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("#rendeles, form[data-contact-form], footer"),
    );
    if (targets.length === 0) return;
    const seen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) seen.add(e.target);
          else seen.delete(e.target);
        }
        setFormVisible(seen.size > 0);
      },
      { rootMargin: "0px 0px -56px 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  if (HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;

  const visible = scrolled && !formVisible;

  return (
    <div
      aria-hidden={!visible}
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="grid grid-cols-2 gap-px bg-[#1c1c1c] shadow-[0_-4px_16px_rgba(0,0,0,0.18)] pb-[env(safe-area-inset-bottom)]">
        <a
          href="tel:+36303778983"
          onClick={() => track("telefon_klikk", "Mobil sáv")}
          className="flex items-center justify-center gap-2 bg-[#b8924a] text-white font-bold text-sm tracking-wide py-3.5 active:bg-[#a07840] whitespace-nowrap"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z" />
          </svg>
          <span className="tabular-nums">+36 30 377 8983</span>
        </a>
        <Link
          href="/kapcsolat-es-rendeles"
          onClick={() => track("ajanlatkeres_gomb", "Mobil sáv")}
          className="flex items-center justify-center gap-2 bg-[#7d6142] text-white font-bold text-sm uppercase tracking-wider py-3.5 active:bg-[#6a5238]"
        >
          Ajánlatkérés
        </Link>
      </div>
    </div>
  );
}
