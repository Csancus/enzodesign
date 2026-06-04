import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorgyártás",
  description: "A bútorgyártás komplex, precíz folyamat. Megismerheti az Enzo Design gyártástechnológiáját.",
};

export default function Page() {
  return (
    <PageBuilderPage
      pageId="butorgyartas"
      defaultSections={[
        {
          type: "hero-light",
          config: {
            title: "A bútorgyártás világa – ahol a funkcionalitás találkozik az esztétikummal",
            subtitle: "A bútorok otthonaink, irodáink és közösségi tereink alapvető részei – nem csupán használati tárgyak, hanem a tér és az életminőség formálói.",
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
          },
        },
        {
          type: "card-grid",
          config: {
            title: "Bútorgyártás témái",
            columns: "3",
            cards: [
              { name: "Bútortervezés", tagline: "CAD modellezés, ergonómia, fenntarthatóság.", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butorgyartas/tervezes" },
              { name: "Alapanyagok", tagline: "Tömörfa, kárpit, szövet – mi számít a minőségben?", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butorgyartas/anyagok" },
              { name: "A bútorgyártás menete", tagline: "Tervezéstől a kész darabig – hogyan készül egy bútor?", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butorgyartas/butorgyartas-folyamata" },
            ],
          },
        },
        {
          type: "image-text",
          config: {
            image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
            imagePosition: "right",
            title: "Kézműves precizitás modern technológiával",
            body: "A bútorgyártás komplex, precíz folyamat, ahol minden fázis hatással van a végső minőségre. A munkafolyamat a tervezéstől indul, és az anyagbeszerzésen, alkatrészelőkészítésen, összeszerelésen, kárpitozáson át vezet a kész darabig.\n\nAutomatizált berendezéseket (CNC marók, lézervágók) és hagyományos kézimunkát egyaránt alkalmazunk – a részletmunka, kárpitozás és végső kikészítés kézzel történik.\n\n\u201EEgy jól megmunkált sarok, feszesen húzott kárpit, precízen illeszkedő elemek – ezek mind hozzájárulnak a bútor karakteréhez és tartósságához.\"",
          },
        },
        {
          type: "text-block",
          config: {
            body: "\u201EBizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak.\" – Bernlef",
            align: "center",
            bgColor: "#f5f0e8",
          },
        },
        { type: "contact" },
      ]}
    />
  );
}
