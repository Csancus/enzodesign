import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatkezelési Szabályzat",
  description: "Enzo Design adatkezelési tájékoztató – GDPR-kompatibilis adatkezelési szabályzat.",
};

export default function AdatkezelesiPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          Adatkezelési Szabályzat
        </h1>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">1. Az adatkezelő</h2>
            <p>
              <strong>Enzo Design Kft.</strong><br />
              8800 Nagykanizsa, Egry József utca 7.<br />
              Email: info@enzodesign.hu<br />
              Tel: +36 30 377 8983<br />
              Alapítás: 2015
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">2. Kezelt személyes adatok</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Teljes név</li>
              <li>E-mail cím</li>
              <li>Telefonszám</li>
              <li>Lakcím (szállítási és/vagy számlázási célból)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">3. Az adatkezelés célja</h2>
            <p>
              Az adatokat az alábbi célokból kezeljük: megrendelések feldolgozása, ügyfélkapcsolat tartása,
              szállítás megszervezése, számlázás. Hozzájárulás esetén hírlevél küldése.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">4. Az adatkezelés jogalapja</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Szerződésteljesítés (GDPR 6. cikk (1) b) pont)</li>
              <li>Jogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont)</li>
              <li>Önkéntes hozzájárulás (GDPR 6. cikk (1) a) pont)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">5. Adatmegőrzési idő</h2>
            <p>
              Megrendelési adatok: 8 év (számviteli előírások szerint).<br />
              Marketing adatok: a hozzájárulás visszavonásáig.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">6. Adattovábbítás</h2>
            <p>
              Az adatok az alábbi partnereknek kerülhetnek átadásra: futárszolgálatok, könyvelőiroda,
              tárhelyszolgáltató. Minden partner GDPR-kompatibilis szerződéssel rendelkezik.
              Harmadik országba nem továbbítunk adatot.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">7. Az érintett jogai</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hozzáférés joga</li>
              <li>Helyesbítés joga</li>
              <li>Törlés joga ("elfeledtetéshez való jog")</li>
              <li>Az adatkezelés korlátozásának joga</li>
              <li>Adathordozhatóság joga</li>
              <li>Tiltakozás joga</li>
            </ul>
            <p className="mt-3">
              Kérelmét az info@enzodesign.hu e-mail-címre küldheti. Panasszal fordulhat a Nemzeti
              Adatvédelmi és Információszabadság Hatósághoz (naih.hu).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">8. Cookie-k (sütik)</h2>
            <p>
              Weboldalunk alapvető működési cookie-kat használ. Analitikai vagy marketing célú
              cookie-k telepítéséhez az Ön hozzájárulása szükséges.
            </p>
          </section>

          <p className="text-sm text-gray-400 border-t pt-6">
            Utolsó módosítás: 2025. január 1.
          </p>
        </div>
      </div>
    </section>
  );
}
