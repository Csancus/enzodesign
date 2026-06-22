"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { DynamicPage } from "@/lib/dynamicPages";

const NAV_ITEMS = [
  { label: "Főoldal", href: "/" },
  { label: "Akciók", href: "/akcio" },
  {
    label: "Bútoraink",
    href: "/butoraink",
    children: [
      { label: "Bútorválasztó", href: "/butorvalaszto" },
      { label: "Kanapék", href: "/butoraink/kanapek" },
      { label: "Fotelek", href: "/butoraink/fotelek" },
      { label: "Franciaágyak", href: "/butoraink/franciaagyak" },
      { label: "Szék, zsámoly, falvédő", href: "/butoraink/szek-zsamoly-falvedo" },
      { label: "Egyedi bútor", href: "/butoraink/egyedi-butor" },
      { label: "Leggyakoribb bútoraink", href: "/butoraink" },
      { label: "Kárpitszövetek, színek", href: "/butoraink/karpitoszovetek" },
    ],
  },
  {
    label: "Chesterfield",
    href: "/chesterfield",
    children: [
      { label: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete" },
      { label: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
      { label: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
      { label: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
    ],
  },
  { label: "Rendelés menete", href: "/rendeles-menete" },
  { label: "Vélemények", href: "/vasarloi-visszajelzesek" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Üzleti bútor", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

function buildNavItems(dynamicPages: DynamicPage[]): NavItem[] {
  const navPages = dynamicPages.filter((p) => p.addedToNav);
  const items: NavItem[] = NAV_ITEMS.map((item) => {
    const children = [
      ...(item.children ?? []),
      ...navPages
        .filter((p) => p.navParent === item.href)
        .map((p) => ({ label: p.title, href: p.slug })),
    ];
    return children.length > 0 ? { ...item, children } : item;
  });
  const topLevel = navPages.filter((p) => !p.navParent);
  topLevel.forEach((p) => items.push({ label: p.title, href: p.slug }));
  return items;
}

export default function Header({ dynamicPages = [] }: { dynamicPages?: DynamicPage[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const navItems = buildNavItems(dynamicPages);

  function toggleAccordion(label: string) {
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-[#b8924a] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/images/logo.webp" alt="Enzo Design" width={48} height={37} className="object-contain" />
          <span className="text-sm font-bold text-[#1c1c1c] hidden sm:inline">EnzoDesign</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-0 text-sm">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-4 inline-block text-[#1c1c1c] hover:text-[#b8924a] transition-colors text-sm whitespace-nowrap font-medium"
              >
                {item.label}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md min-w-[180px] z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[#1c1c1c] hover:text-[#b8924a] text-center border-b border-gray-100 last:border-0 transition-colors whitespace-nowrap"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: phone + Rendelés */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:+36303778983"
            className="bg-[#b8924a] hover:bg-[#a07840] text-white text-sm font-semibold px-3 py-2 transition-colors"
          >
            <span className="hidden sm:inline">+36303778983</span>
            <svg className="sm:hidden w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <Link
            href="/kapcsolat-es-rendeles"
            className="hidden md:block bg-[#7d6142] hover:bg-[#6a5138] text-white text-sm font-bold uppercase tracking-wide px-5 py-2 transition-colors"
          >
            Rendelés
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden flex flex-col gap-1.5 p-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-0.5 bg-[#1c1c1c] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1c1c1c] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1c1c1c] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 flex flex-col" style={{ maxHeight: "calc(100svh - 3.5rem)" }}>
          <div className="overflow-y-auto flex-1 px-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center border-b border-gray-100">
                  <Link
                    href={item.href}
                    className="flex-1 py-3 text-sm text-[#1c1c1c] hover:text-[#b8924a] font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="px-3 py-3 text-gray-400 hover:text-[#b8924a]"
                      aria-label="Almenü megnyitása"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-200 ${openAccordions.has(item.label) ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.children && openAccordions.has(item.label) && (
                  <div className="bg-gray-50 border-b border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block pl-5 pr-3 py-2.5 text-xs text-gray-600 border-b border-gray-100 last:border-0 hover:text-[#b8924a]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200 bg-white flex-shrink-0">
            <Link
              href="/kapcsolat-es-rendeles"
              className="block bg-[#7d6142] text-white text-center py-3 font-bold uppercase tracking-wider"
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
