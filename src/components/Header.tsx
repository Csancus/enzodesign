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
  const navItems = buildNavItems(dynamicPages);

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
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href="tel:+36303778983"
            className="bg-[#b8924a] hover:bg-[#a07840] text-white text-sm font-semibold px-4 py-2 transition-colors"
          >
            +36303778983
          </a>
          <Link
            href="/kapcsolat-es-rendeles"
            className="bg-[#7d6142] hover:bg-[#6a5138] text-white text-sm font-bold uppercase tracking-wide px-5 py-2 transition-colors"
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
        <div className="xl:hidden bg-white border-t border-gray-200 pb-4">
          <div className="max-w-7xl mx-auto px-4">
            <a
              href="tel:+36303778983"
              className="block py-3 text-[#b8924a] font-semibold border-b border-gray-100"
            >
              +36303778983
            </a>
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm text-[#1c1c1c] border-b border-gray-100 hover:text-[#b8924a]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 bg-gray-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block py-2 text-xs text-gray-600 border-b border-gray-100 hover:text-[#b8924a]"
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
