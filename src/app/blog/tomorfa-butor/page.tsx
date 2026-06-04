import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás? – Enzo Design",
  description: "Miért érdemes tömörfa bútort választani? Tévhitek, előnyök és miért tartósabb, mint az MDF vagy forgácslap.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:tomorfa-butor"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "left",
            title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?",
            body: "Sokan azt gondolják, hogy a tömörfa bútorok a múlt relikviái, és a modern lakberendezés már nem rájuk épít. De ez tévhit. A tömörfa nemcsak örök divat, hanem a minőség, a fenntarthatóság és a stílus egyik legfőbb képviselője.\n\n**Mi az a tömörfa?**\n\nEllentétben az MDF vagy forgácslap anyagokkal, a tömörfa valódi, egybefüggő fatömbökből áll. Természetes, strapabíró és egyedi erezetmintája miatt minden darab megismételhetetlen. Az Enzo Design bútoraiban kizárólag tömörfa vázat alkalmazunk – ez az alapja a 10 éves vázgaranciánknak.\n\n**Tévhitek a tömörfa bútorokról**\n\nSokan gondolják, hogy drága vagy régimódi. Valójában azonban az Enzo Design olyan szerkezeti megoldásokat alkalmaz, amelyek kortárs megjelenést és jó ár-érték arányt nyújtanak. A tömörfa váz nem látszik a kárpitozás alatt, de az élettartamban megmutatkozik.\n\n**Miért érdemes tömörfát választani?**\n\nA tartósság az első szempont: egy jó minőségű tömörfa vázú kárpitozott bútor generációkon át kiszolgál. Természetes anyag, nem tartalmaz mesterséges ragasztóanyagokat. Esztétikailag is megállja a helyét – meleg, otthonos hatást kelt, és bármilyen designhoz illeszkedik, kortárs szövetekkel és minimál stílussal is harmonizál.\n\n**Befektetés, ami megtérül**\n\nEgy tömörfából készült bútor nem csak 5–10 évre szól, hanem 20–30 évre is. Ha jól választasz, a bútor az otthonod értékét is növeli. Az Enzo Design esetében ez tömörfa váz + prémium kárpit + kézi összeszerelés kombinációját jelenti – mindhárom tényező együtt garantálja a hosszú élettartamot.",
          },
        },
        {
          type: "cta",
          config: {
            title: "Nézze meg tömörfa vázú bútoraink kínálatát!",
            buttonText: "Megnézem a bútorokat",
            buttonHref: "/butoraink",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
