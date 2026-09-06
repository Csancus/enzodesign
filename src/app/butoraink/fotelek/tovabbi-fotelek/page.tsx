import type { Metadata } from "next";
import ProductPageTemplate from "@/components/ProductPageTemplate";
export const metadata: Metadata = {
  title: "További Kárpitozott Fotelek – karfás modellek",
  description: "Karfás és egyedi kárpitozott fotelek gyűjteménye. Tömörfa szerkezet, nagy kopásállóságú szövetek – egyedi méretben, közvetlen gyártótól, Nagykanizsáról.",
  alternates: { canonical: "https://www.enzodesign.hu/butoraink/fotelek/tovabbi-fotelek" },
  openGraph: {
    title: "További Kárpitozott Fotelek – karfás modellek | Enzo Design",
    description: "Karfás fotelek gyűjteménye. Tömörfa szerkezet, nagy kopásállóságú szövetek, egyedi méretben.",
    url: "https://www.enzodesign.hu/butoraink/fotelek/tovabbi-fotelek",
    images: [{ url: "/images/fotelek-w2.webp", width: 1920, height: 800 }],
  },
};
export default function Page() {
  return (
    <ProductPageTemplate
      pageId="tovabbi-fotelek"
      name="További Fotelek"
      tagline="Egyedi megoldások"
      description="A fotelek kínálata a kényelem és a stílus tökéletes egyensúlyát kínálja, legyen szó elegánsan gombozott vagy letisztultan sima kivitelről. A gombozott háttámlájú modellek klasszikus bájt és meghittséget visznek a térbe, miközben a finom részletek és prémium anyagok időtlen eleganciát sugároznak. A sima, modern vonalvezetésű fotelek pedig a kortárs dizájn híveinek kedveznek: letisztultságuk és strukturált megjelenésük visszafogott, mégis gáláns karaktert kölcsönöz a helyiségnek. Akár egy könyvsarok meghitt elemeként, akár egy nappali hangsúlyos pontjaként, a fotel mindig a pihenés stílusos szimbóluma marad.\n\nA személyre szabhatóság nálunk nem csak üres ígéret! Termékeinket rengeteg méretben és extrákkal is elkészítjük, több száz típusú bevonóanyag közül válogathatsz. Ehhez vedd fel velünk a kapcsolatot!"
      image="/images/fotelek-a1.webp"
      gallery={["/images/fotelek-a1.webp", "/images/fotelek-a2.webp", "/images/fotelek-a3.webp", "/images/fotelek-a4.webp", "/images/fotelek-a5.webp", "/images/fotelek-a6.webp", "/images/fotelek-a7.webp", "/images/fotelek-a9.webp", "/images/fotelek-a10.webp", "/images/fotelek-a11.webp", "/images/fotelek-a12.webp", "/images/fotelek-a13.webp", "/images/fotelek-a14.webp", "/images/fotelek-a15.webp", "/images/fotelek-a16.webp", "/images/fotelek-a17.webp", "/images/fotelek-brighton.webp", "/images/fotelek-cleo.webp", "/images/fotelek-rover.jpg", "/images/fotelek-wales.webp", "/images/fotelek-dsc1.webp", "/images/fotelek-dsc2.webp", "/images/fotelek-dsc3.webp", "/images/fotelek-fb1.jpg", "/images/fotelek-img1.webp", "/images/fotelek-w2.webp", "/images/fotelek-w3.webp", "/images/fotelek-w5.webp", "/images/fotelek-w6.webp"]}
      pricing={{ fotel: { alap: 82820 } }}
      features={["50.000 martindale-es szövet", "Tömörfa váz", "Prémium szivacs", "Prémium rugó"]}
      breadcrumb={[{ label: "Főoldal", href: "/" }, { label: "Bútoraink", href: "/butoraink" }, { label: "Fotelek", href: "/butoraink/fotelek" }, { label: "További Fotelek", href: "/butoraink/fotelek/tovabbi-fotelek" }]}
    />
  );
}
