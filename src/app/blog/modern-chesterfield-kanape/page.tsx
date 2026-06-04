import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Modern Chesterfield kanapé – Enzo Design",
  description: "A Chesterfield kanapé nem csak elegáns, hanem rendkívül sokoldalú is – hogyan illik modern enteriőrbe?",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="blog:modern-chesterfield-kanape"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "Modern Chesterfield kanapé",
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
            imagePosition: "left",
            title: "Modern Chesterfield kanapé",
            body: "Sokan azt gondolják, hogy a Chesterfield kanapé csak klasszikus, ódivatú enteriőrbe illik. Ez azonban tévhit – a Chesterfield az egyik legjobban alkalmazkodó bútortípus, amely modern lakásban is otthon van.\n\nA kulcs az anyagválasztás. Míg a hagyományos bőr bevonat valóban inkább klasszikus hangulatot teremt, egy szürke bársony vagy sötétkék sennilé szövetű Chesterfield kanapé tökéletesen illeszkedik egy modern, skandináv stílusú nappaliba is.\n\n**A forma időtlen, az anyag rugalmas**\n\nAz Enzo Design Chesterfield kollekcióban több mint 100 szövet- és bőrfajtából lehet választani. A mélyen gombolt háttámla és az ívelt kartámaszok az eredeti formát tartják – de a szín, az anyag és a méret szabadon testreszabható.\n\nLegyen szó kétszemélyes kanapéról, háromszemelyesről vagy sarokkanapéról – a Chesterfield minden konfigurációban rendelhető, 399.810 Ft-tól.\n\n\u201EBizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak.\" – Bernlef",
          },
        },
        {
          type: "cta",
          config: {
            title: "Rendelje meg Chesterfield kanapéját!",
            buttonText: "Árak és kollekció",
            buttonHref: "/butoraink/kanapek/chesterfield-kanapek",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
