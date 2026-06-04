import Link from "next/link";
import Image from "next/image";
import LoginDialog from "@/components/admin/LoginDialog";

const NAV = [
  {
    heading: "Általános",
    links: [
      { label: "Főoldal", href: "/" },
      { label: "Rólunk", href: "/rolunk" },
      { label: "Akciók", href: "/akcio" },
      { label: "Bútorválasztó", href: "/butorvalaszto" },
      { label: "Üzleti bútor", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
      { label: "Rendelés menete", href: "/rendeles-menete" },
      { label: "Kapcsolat", href: "/kapcsolat-es-rendeles" },
      { label: "Adatkezelési tájékoztató", href: "/adatkezelesi-szabalyzat" },
    ],
  },
  {
    heading: "Kanapék",
    links: [
      { label: "Összes kanapé", href: "/butoraink/kanapek" },
      { label: "Chesterfield kanapék", href: "/butoraink/kanapek/chesterfield-kanapek" },
      { label: "Old's Club kanapék", href: "/butoraink/kanapek/olds-club-kanapek" },
      { label: "Ivone kanapék", href: "/butoraink/kanapek/ivone-kanapek" },
      { label: "Design kanapék", href: "/butoraink/kanapek/design-kanapek" },
      { label: "New York kanapék", href: "/butoraink/kanapek/new-york-kanapek" },
      { label: "Joker kanapék", href: "/butoraink/kanapek/joker-kanapek" },
      { label: "Cannes sarokkanapé", href: "/butoraink/kanapek/cannes-kanapek" },
    ],
  },
  {
    heading: "Fotelek & Egyéb",
    links: [
      { label: "Összes fotel", href: "/butoraink/fotelek" },
      { label: "Chesterfield fotel", href: "/butoraink/fotelek/chesterfield-fotel" },
      { label: "Old's Club fotel", href: "/butoraink/fotelek/olds-club-fotel" },
      { label: "Ivone fotel", href: "/butoraink/fotelek/ivone-fotel" },
      { label: "Design fotel", href: "/butoraink/fotelek/design-fotel" },
      { label: "New York fotel", href: "/butoraink/fotelek/new-york-fotel" },
      { label: "Joker fotel", href: "/butoraink/fotelek/joker-fotel" },
      { label: "További fotelek", href: "/butoraink/fotelek/tovabbi-fotelek" },
      { label: "Franciaágyak", href: "/butoraink/franciaagyak" },
      { label: "Szék, zsámoly, falvédő", href: "/butoraink/szek-zsamoly-falvedo" },
      { label: "Egyedi bútor", href: "/butoraink/egyedi-butor" },
      { label: "Kárpitszövetek", href: "/butoraink/karpitoszovetek" },
    ],
  },
  {
    heading: "Kollekciók",
    links: [
      { label: "Chesterfield kollekció", href: "/chesterfield-kollekcio" },
      { label: "Old's Club kollekció", href: "/olds-club-kollekcio" },
      { label: "Ivone kollekció", href: "/ivone-kollekcio" },
      { label: "New York kollekció", href: "/new-york-kollekcio" },
      { label: "Joker kollekció", href: "/joker-kollekcio" },
      { label: "Design bútorok", href: "/design-butorok" },
    ],
  },
  {
    heading: "Chesterfield",
    links: [
      { label: "Chesterfield főoldal", href: "/chesterfield" },
      { label: "A kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete" },
      { label: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
      { label: "Anyagok és technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
      { label: "Modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
    ],
  },
  {
    heading: "Bútorgyártás",
    links: [
      { label: "Bútorgyártás főoldal", href: "/butorgyartas" },
      { label: "Gyártás folyamata", href: "/butorgyartas/butorgyartas-folyamata" },
      { label: "Tervezés", href: "/butorgyartas/tervezes" },
      { label: "Anyagok", href: "/butorgyartas/anyagok" },
    ],
  },
  {
    heading: "Blog",
    links: [
      { label: "Összes cikk", href: "/blog" },
      { label: "Ágyas Chesterfield kanapé", href: "/blog/agyazhato-chesterfield-kanape" },
      { label: "Bőr fotel", href: "/blog/bor-fotel" },
      { label: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
      { label: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
      { label: "Kanapé Zalaegerszegen", href: "/blog/kanape-zalaegerszegen" },
      { label: "Melyik Chesterfield illik hozzád", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
      { label: "Miért éri meg a gyártótól?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
      { label: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
      { label: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
      { label: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top: logo + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-10">
          {/* Logo + info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Image src="/images/logo.webp" alt="Enzo Design" width={80} height={60} className="object-contain mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/enzodesignbutor" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#b8924a] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.instagram.com/enzodesign2015" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#b8924a] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.tiktok.com/@enzodesignbutor" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-[#b8924a] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.21 8.21 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" /></svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map((group) => (
            <div key={group.heading} className="col-span-1">
              <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">{group.heading}</h3>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#b8924a] transition-colors text-xs leading-snug block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Elérhetőség */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Elérhetőség</h3>
            <address className="not-italic text-xs text-gray-400 space-y-1.5">
              <p>Enzo Design Kft.</p>
              <p>8800 Nagykanizsa,<br />Egry József utca 7.</p>
              <p><a href="tel:+36303778983" className="hover:text-[#b8924a] transition-colors">+36 30 377 8983</a></p>
              <p><a href="mailto:info@enzodesign.hu" className="hover:text-[#b8924a] transition-colors">info@enzodesign.hu</a></p>
            </address>
            <div className="mt-4 text-xs text-gray-500 space-y-1">
              <p>Gyártási idő: <span className="text-gray-300">4–6 hét</span></p>
              <p>Garancia: <span className="text-gray-300">3 év / 10 év váz</span></p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] pt-6 text-center">
          <p className="text-xs text-gray-500">© 2015–2025 Enzo Design. Minden jog fenntartva.</p>
          <LoginDialog />
        </div>
      </div>
    </footer>
  );
}
