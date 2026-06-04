import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Adatkezelési Szabályzat – Enzo Design",
  description: "Enzo Design adatkezelési tájékoztató – GDPR-kompatibilis adatkezelési szabályzat.",
};

export default async function AdatkezelesiPage() {
  return (
    <>
      <PageHero moduleId="adatkezelesi-szabalyzat:hero" defaults={{ title: "Adatkezelési Szabályzat" }} />
      <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-sm text-gray-400 mb-10">Hatályos: 2025. március 27-től</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">1. Bevezetés</h2>
            <p>
              Jelen adatkezelési szabályzat célja, hogy rögzítse az ENZO DESIGN Kereskedelmi és Szolgáltató
              Korlátolt Felelősségű Társaság (székhely: 8800 Nagykanizsa, Egry József utca 7.,
              cégjegyzékszám: 20 09 074638, adószám: 25186851-2-20, e-mail: info@enzodesign.hu;
              a továbbiakban: „Társaság" vagy „Adatkezelő") által alkalmazott adatvédelmi és adatkezelési elveket,
              valamint az adatkezelő által nyújtott szolgáltatások során alkalmazott adatkezelési gyakorlatot.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">2. Az adatkezelő adatai</h2>
            <p>
              <strong>Cégnév:</strong> ENZO DESIGN Kereskedelmi és Szolgáltató Kft.<br />
              <strong>Székhely:</strong> 8800 Nagykanizsa, Egry József utca 7.<br />
              <strong>Cégjegyzékszám:</strong> 20 09 074638<br />
              <strong>Adószám:</strong> 25186851-2-20<br />
              <strong>E-mail cím:</strong> info@enzodesign.hu<br />
              <strong>Fő tevékenység:</strong> 3109 – Egyéb bútor gyártása<br />
              <strong>Alapítás éve:</strong> 2015
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">3. A kezelt személyes adatok köre</h2>
            <p className="mb-2">Az adatkezelő a weboldalán keresztül az alábbi személyes adatokat gyűjti és kezeli:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Teljes név</li>
              <li>E-mail cím</li>
              <li>Telefonszám</li>
              <li>Lakcím (szállítási és/vagy számlázási célból)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">4. Az adatkezelés célja</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Online megrendelések kezelése, teljesítése</li>
              <li>Ügyfélkapcsolat fenntartása</li>
              <li>Számlázás, szállítás lebonyolítása</li>
              <li>Jogszabályban előírt kötelezettségek teljesítése</li>
              <li>Hírlevélküldés kizárólag hozzájárulás esetén</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">5. Az adatkezelés jogalapja</h2>
            <p className="mb-2">Az adatkezelés a következő GDPR rendelkezések alapján történik:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Szerződés teljesítése (GDPR 6. cikk (1) b))</li>
              <li>Jogi kötelezettség teljesítése (pl. számlázás – GDPR 6. cikk (1) c))</li>
              <li>Érintett hozzájárulása (marketing, hírlevél – GDPR 6. cikk (1) a))</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">6. Az adatkezelés időtartama</h2>
            <p>
              A megrendelésekhez kapcsolódó adatokat a szerződés teljesítésétől számított 8 évig őrizzük meg,
              a számviteli törvény előírásainak megfelelően.
            </p>
            <p className="mt-2">
              Hozzájáruláson alapuló adatkezelés esetén az adatokat az érintett hozzájárulásának visszavonásáig kezeljük.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">7. Adattovábbítás, adatfeldolgozók</h2>
            <p className="mb-2">Az adatkezelő az alábbi esetekben továbbíthat adatokat harmadik fél részére:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Szállítást végző futárszolgálatok részére a teljesítés érdekében (pl. név, cím, telefonszám)</li>
              <li>Könyvelőiroda részére a számlázáshoz kapcsolódó adatok</li>
              <li>Tárhelyszolgáltató, amely a weboldal működtetését biztosítja</li>
            </ul>
            <p className="mt-2">
              Minden adatfeldolgozóval az Adatkezelő írásbeli szerződéses kapcsolatban áll,
              és garantálja a GDPR-nak megfelelő adatkezelést.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">8. Az érintettek jogai</h2>
            <p className="mb-2">Az érintett kérelmezheti:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tájékoztatás kérését személyes adatai kezeléséről</li>
              <li>Adatainak helyesbítését</li>
              <li>Adatkezelés korlátozását vagy törlését</li>
              <li>Tiltakozhat az adatkezelés ellen</li>
              <li>Adathordozhatósághoz való jogát</li>
            </ul>
            <p className="mt-3">
              Jogorvoslati lehetőségként panasszal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):<br />
              Cím: 1055 Budapest, Falk Miksa utca 9-11.<br />
              Web:{" "}
              <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-[#7d6142] underline">
                www.naih.hu
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1c1c1c] mb-3">9. Adatbiztonság</h2>
            <p>
              Az adatkezelő megfelelő technikai és szervezési intézkedésekkel gondoskodik a személyes adatok
              biztonságáról, különös tekintettel azok jogosulatlan hozzáférés, megváltoztatás, továbbítás,
              nyilvánosságra hozatal vagy törlés elleni védelmére.
            </p>
          </section>

          <p className="text-sm text-gray-400 border-t pt-6">
            Hatályos: 2025. március 27-től
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
