import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Adatkezelési Szabályzat – Enzo Design",
  description: "Enzo Design adatkezelési tájékoztató – GDPR-kompatibilis adatkezelési szabályzat.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="adatkezelesi-szabalyzat"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Adatkezelési Szabályzat",
          },
        },
        {
          type: "text-block",
          config: {
            body: "Hatályos: 2025. március 27-től\n\n**1. Bevezetés**\n\nJelen adatkezelési szabályzat célja, hogy rögzítse az ENZO DESIGN Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság (székhely: 8800 Nagykanizsa, Egry József utca 7., cégjegyzékszám: 20 09 074638, adószám: 25186851-2-20, e-mail: info@enzodesign.hu; a továbbiakban: \u201ETársaság\" vagy \u201EAdatkezelő\") által alkalmazott adatvédelmi és adatkezelési elveket, valamint az adatkezelő által nyújtott szolgáltatások során alkalmazott adatkezelési gyakorlatot.\n\n**2. Az adatkezelő adatai**\n\nCégnév: ENZO DESIGN Kereskedelmi és Szolgáltató Kft.\nSzékhely: 8800 Nagykanizsa, Egry József utca 7.\nCégjegyzékszám: 20 09 074638\nAdószám: 25186851-2-20\nE-mail cím: info@enzodesign.hu\nFő tevékenység: 3109 – Egyéb bútor gyártása\nAlapítás éve: 2015\n\n**3. A kezelt személyes adatok köre**\n\nAz adatkezelő a weboldalán keresztül az alábbi személyes adatokat gyűjti és kezeli:\n• Teljes név\n• E-mail cím\n• Telefonszám\n• Lakcím (szállítási és/vagy számlázási célból)\n\n**4. Az adatkezelés célja**\n\n• Online megrendelések kezelése, teljesítése\n• Ügyfélkapcsolat fenntartása\n• Számlázás, szállítás lebonyolítása\n• Jogszabályban előírt kötelezettségek teljesítése\n• Hírlevélküldés kizárólag hozzájárulás esetén\n\n**5. Az adatkezelés jogalapja**\n\nAz adatkezelés a következő GDPR rendelkezések alapján történik:\n• Szerződés teljesítése (GDPR 6. cikk (1) b))\n• Jogi kötelezettség teljesítése (pl. számlázás – GDPR 6. cikk (1) c))\n• Érintett hozzájárulása (marketing, hírlevél – GDPR 6. cikk (1) a))\n\n**6. Az adatkezelés időtartama**\n\nA megrendelésekhez kapcsolódó adatokat a szerződés teljesítésétől számított 8 évig őrizzük meg, a számviteli törvény előírásainak megfelelően.\n\nHozzájáruláson alapuló adatkezelés esetén az adatokat az érintett hozzájárulásának visszavonásáig kezeljük.\n\n**7. Adattovábbítás, adatfeldolgozók**\n\nAz adatkezelő az alábbi esetekben továbbíthat adatokat harmadik fél részére:\n• Szállítást végző futárszolgálatok részére a teljesítés érdekében (pl. név, cím, telefonszám)\n• Könyvelőiroda részére a számlázáshoz kapcsolódó adatok\n• Tárhelyszolgáltató, amely a weboldal működtetését biztosítja\n\nMinden adatfeldolgozóval az Adatkezelő írásbeli szerződéses kapcsolatban áll, és garantálja a GDPR-nak megfelelő adatkezelést.\n\n**8. Az érintettek jogai**\n\nAz érintett kérelmezheti:\n• Tájékoztatás kérését személyes adatai kezeléséről\n• Adatainak helyesbítését\n• Adatkezelés korlátozását vagy törlését\n• Tiltakozhat az adatkezelés ellen\n• Adathordozhatósághoz való jogát\n\nJogorvoslati lehetőségként panasszal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):\nCím: 1055 Budapest, Falk Miksa utca 9-11.\nWeb: www.naih.hu\n\n**9. Adatbiztonság**\n\nAz adatkezelő megfelelő technikai és szervezési intézkedésekkel gondoskodik a személyes adatok biztonságáról, különös tekintettel azok jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal vagy törlés elleni védelmére.\n\nHatályos: 2025. március 27-től",
          },
        },
      ]}
    />
  );
}
