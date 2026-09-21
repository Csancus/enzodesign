import Link from "next/link";

/**
 * Bizalomépítő blokk a termék-szándékú oldalakra: mi van az ár mögött.
 * Csak a site-on máshol is szereplő, ellenőrzött állítások: tömörfa váz, min. 50 000 martindale,
 * rugózás + szivacs, kézi összeszerelés, 3 év garancia (kárpit, rugózás, szerkezet) + 10 év váz.
 */
const ITEMS = [
  {
    badge: "10 év",
    title: "Tömörfa váz, nem forgácslap",
    text: "A váz egybefüggő tömörfa elemekből készül, nem MDF-ből vagy forgácslapból. Ez adja a formatartást és a 10 év vázgaranciát: egy jó tömörfa váz 20–30 évig szolgál.",
  },
  {
    badge: "50 000",
    title: "Martindale: mennyit bír a szövet",
    text: "A martindale-szám azt mutatja, hány dörzsölést bír ki a kárpit szálszakadás nélkül. Otthoni használatra 15–25 000-et tartanak elegendőnek, 30 000 felett már közületi kategória. Nálunk a minimum 50 000, üzleti megrendelésre 100 000 feletti is kérhető.",
  },
  {
    badge: "Kézi",
    title: "Rugózás, szivacs, kézi kárpitozás",
    text: "Rugórendszer és prémium szivacs az ülőrészben, kézzel feszített kárpit, kézzel gombolt háttámla a Chesterfieldnél. Minden elkészült bútort a nagykanizsai üzemben kézzel ellenőrzünk, mielőtt útnak indul.",
  },
  {
    badge: "3+10",
    title: "Garancia, ami mögött saját üzem áll",
    text: "3 év garancia a kárpitra, a rugózásra és minden szerkezeti elemre, 10 év a tömörfa vázra. Mivel a bútor a saját üzemünkben készül, évek múlva is vállalunk javítást és átkárpitozást.",
  },
];

export default function QualitySection({ heading = "Ami az ár mögött van: váz, kárpit, garancia" }: { heading?: string }) {
  return (
    <section className="py-16 bg-[#f5f0ea]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
          {heading}
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
          Két kanapé kívülről ugyanúgy nézhet ki. A különbség a vázban, a kárpit kopásállóságában és abban van, ki áll a garancia mögött.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it) => (
            <div key={it.title} className="bg-white border border-gray-200 p-6 flex flex-col">
              <p className="text-[#b8924a] text-2xl font-bold tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>
                {it.badge}
              </p>
              <h3 className="text-base font-bold text-[#1c1c1c] mt-1">{it.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-x-5 gap-y-1">
          <Link href="/butoraink/karpitoszovetek" className="text-[#b8924a] underline">100+ szövet és valódi bőr, minta postán →</Link>
          <Link href="/butorgyartas" className="text-[#b8924a] underline">Így készül a bútor a nagykanizsai üzemben →</Link>
          <Link href="/vasarloi-visszajelzesek" className="text-[#b8924a] underline">Vásárlói vélemények →</Link>
        </p>
      </div>
    </section>
  );
}
