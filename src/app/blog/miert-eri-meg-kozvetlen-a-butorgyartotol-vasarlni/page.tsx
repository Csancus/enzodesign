import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni? – Enzo Design",
  description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni bútort – ár, egyediség, minőség és közvetlen kommunikáció.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "left",
            title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?",
            body: "A bútorvásárlás nem csupán esztétikai döntés, hanem hosszú távú befektetés is. Amikor bútort keresel otthonodba vagy irodádba, érdemes elgondolkodnod azon, hogy miért lehet jobb döntés egyenesen a gyártótól rendelni.\n\n**1. Elkerülheted a felárat**\n\nA bútorboltok gyakran tartalmazzák a disztribúciós és raktározási költségeket az áraikban. Az Enzo Design közvetlenül a végfogyasztóval dolgozik, így ezek a rejtett költségek teljesen elmaradnak – versenyképes árat kapsz prémium minőségért.\n\n**2. Egyediség, amit nem kapsz meg a boltokban**\n\nBoltban csak azt kapod, ami van. A gyártónál viszont lehetőséged van teljesen egyedi, személyre szabott bútorok rendelésére. Akár egy fotó alapján is elkészítjük azt, amit megálmodtál – saját méretben, szöveted és színed szerint.\n\n**3. Hosszabb élettartam**\n\nAz Enzo Design bútorai tömörfa szerkezettel és nagy kopásállóságú szövettel készülnek, amelyek garantálják az időtállóságot. 3 év termékgaranciával és 10 év vázgaranciával adjuk ki a bútorait – ez ritka a piacon.\n\n**4. Közvetlen kommunikáció**\n\nNem kell üzeneteket közvetíteni egy eladón keresztül. Közvetlen kapcsolatban lehetsz a tervezőkkel és kivitelezőkkel, ami sokkal hatékonyabb és gyorsabb folyamattá teszi a rendelést. Kérdés esetén 2 napon belül árajánlatot adunk.\n\n**5. Magyar munka támogatása**\n\nA hazai gyártás támogatása nemcsak gazdasági, hanem erkölcsi döntés is. Az Enzo Design Nagykanizsán, közel 20 éve gyárt egyedi kárpitozott bútorokat – helyi szakemberek munkájával, prémium anyagokból.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendeljön közvetlenül a gyártótól!",
            buttonText: "Megnézem a bútorokat",
            buttonHref: "/butoraink",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
