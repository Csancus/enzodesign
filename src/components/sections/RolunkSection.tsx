import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Bútorbolt Nagykanizsán – Egyedi kárpitozott bútorok",
  desc1: "20 éves tapasztalattal rendelkező magyar bútorgyártó cég vagyunk. Célunk minőségi, tömörfa-szerkezettel és nagy kopásállóságú szövettel borított bútorokat készíteni, elérhető áron. Üzleteinkben megveheti bútorait és azonnal hazaviheti. A minőség, az elérhető ár és a garancia hármasával kínáljuk bútorainkat.",
  desc2: "Mivel gyártók vagyunk, nincs extra reklámköltségünk. Közvetlenül a fogyasztónak, reális áron értékesítünk – így a feljebbi minőséget más vállalkozásoknál megszokott árakon kaphatja meg.",
  image: "",
  videoSrc: "/videos/rolunk.mp4",
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "desc1", label: "Első bekezdés", type: "textarea" },
  { key: "desc2", label: "Második bekezdés", type: "textarea" },
  { key: "image", label: "Kerek kép", type: "image" },
  { key: "videoSrc", label: "Videó útvonal (pl. /videos/rolunk.mp4, üres = nincs)", type: "text" },
];

export default async function RolunkSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative py-14 text-white text-center" style={{ backgroundColor: "#7a7a3a" }}>
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">{cfg.title}</h2>
        <p className="text-sm leading-relaxed mb-3 opacity-90">{cfg.desc1}</p>
        <p className="text-sm leading-relaxed mb-5 opacity-90">{cfg.desc2}</p>
        {cfg.image && (
          <div className="relative w-20 h-20 mx-auto mb-6 overflow-hidden rounded">
            <Image src={cfg.image} alt="Enzo Design" fill className="object-cover" />
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {[
            { label: "Ingyenes szállítás", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
            { label: "Minőség ellenőrzés", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { label: "Garancia", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
            { label: "Személyes vásárlás", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> },
          ].map((item) => (
            <div key={item.label} className="text-center">
              {item.svg}
              <div className="text-xs opacity-90 leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
        {cfg.videoSrc && (
          <div className="mt-8 max-w-2xl mx-auto">
            <video
              src={cfg.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-sm object-cover"
            />
          </div>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
