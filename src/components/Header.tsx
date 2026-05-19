"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Főoldal", href: "/" },
  { label: "Fától a kanapéig", href: "/rolunk" },
  { label: "Népszerű bútoraink", href: "/butoraink" },
  { label: "Egyedi bútorok", href: "/butoraink/egyedi-butor" },
  { label: "Akciók", href: "/akcio" },
  {
    label: "Bútoraink",
    href: "/butoraink",
    children: [
      { label: "Bútorválasztó", href: "/butorvalaszto" },
      { label: "Kanapék", href: "/butoraink/kanapek" },
      { label: "Fotelek", href: "/butoraink/fotelek" },
      { label: "Franciaágyak", href: "/butoraink/franciaagyak" },
      { label: "Székek, zsámolyok", href: "/butoraink/szek-zsamoly-falvedo" },
      { label: "Egyedi bútor", href: "/butoraink/egyedi-butor" },
      { label: "Kárpitszövetek", href: "/butoraink/karpitszovetek" },
    ],
  },
  {
    label: "Chesterfield",
    href: "/chesterfield",
    children: [
      { label: "Eredete", href: "/chesterfield/a-chesterfield-kanape-eredete" },
      { label: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
      { label: "Anyagok és gyártás", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
      { label: "A modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
    ],
  },
  { label: "Kapcsolat", href: "/kapcsolat-es-rendeles" },
  { label: "Rendelés menete", href: "/butoraink/butorrendeles" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Üzleti bútor", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#1c1c1c] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/images/logo.png" alt="Enzo Design" width={52} height={40} className="object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 text-sm">
          {NAV_ITEMS.slice(0, 8).map((item) => (
            <div
              key={item.href + item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 hover:text-[#b8924a] transition-colors whitespace-nowrap text-xs font-medium tracking-wide uppercase"
              >
                {item.label}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-[#1c1c1c] border border-[#333] min-w-48 z-50 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-xs hover:bg-[#7d6142] hover:text-white transition-colors border-b border-[#333] last:border-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+36303778983" className="text-sm text-[#b8924a] font-semibold hover:text-white transition-colors">
            +36 30 377 8983
          </a>
          <Link
            href="/kapcsolat-es-rendeles"
            className="bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
          >
            Rendelés
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#1c1c1c] border-t border-[#333] pb-4">
          <div className="max-w-7xl mx-auto px-4">
            <a
              href="tel:+36303778983"
              className="block py-3 text-[#b8924a] font-semibold border-b border-[#333]"
            >
              +36 30 377 8983
            </a>
            {NAV_ITEMS.map((item) => (
              <div key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm border-b border-[#333] hover:text-[#b8924a]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 bg-[#111]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-xs text-gray-400 border-b border-[#2a2a2a] hover:text-[#b8924a]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/kapcsolat-es-rendeles"
              className="block mt-4 bg-[#7d6142] text-white text-center py-3 font-bold uppercase tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              Rendelés
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
