import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kapcsolat és Rendelés",
  description: "Lépjen kapcsolatba az Enzo Designnal. Töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

export default function KapcsolatPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Lépjen kapcsolatba velünk</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolat, rendelés
          </h1>
          <p className="mt-4 text-gray-300">
            Töltse ki az alábbi űrlapot és 24 órán belül visszahívjuk!
          </p>
        </div>
      </section>

      {/* ELÉRHETŐSÉGEK + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Elérhetőségek */}
          <div>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Elérhetőségeink
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#7d6142] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Telefon</p>
                  <a href="tel:+36303778983" className="text-lg font-semibold text-[#1c1c1c] hover:text-[#7d6142] transition-colors">
                    +36 30 377 8983
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#7d6142] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Email</p>
                  <a href="mailto:info@enzodesign.hu" className="text-lg font-semibold text-[#1c1c1c] hover:text-[#7d6142] transition-colors">
                    info@enzodesign.hu
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#7d6142] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Cím</p>
                  <p className="text-[#1c1c1c] font-semibold">Enzo Design Kft.</p>
                  <p className="text-gray-600">8800 Nagykanizsa, Egry József utca 7.</p>
                </div>
              </div>
            </div>

            {/* Rendelés menete */}
            <div className="mt-10 bg-[#f5f0e8] p-6">
              <h3 className="text-lg font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Rendelés menete
              </h3>
              <ol className="space-y-3">
                {[
                  "Töltse ki a kapcsolatfelvételi űrlapot vagy hívjon minket",
                  "Egyeztetjük az igényeket (típus, szín, méret)",
                  "Előlegbekérő szerződés küldése (50% előleg)",
                  "Gyártás: 4–6 hét",
                  "Szállítás az első biztonságos ajtóig",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#7d6142] text-white text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Garancia */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-[#1c1c1c] text-white p-5 text-center">
                <div className="text-2xl font-bold text-[#b8924a]">3 év</div>
                <div className="text-xs uppercase tracking-wide mt-1">Termékgarancia</div>
              </div>
              <div className="bg-[#1c1c1c] text-white p-5 text-center">
                <div className="text-2xl font-bold text-[#b8924a]">10 év</div>
                <div className="text-xs uppercase tracking-wide mt-1">Vázgarancia</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Rendelési űrlap
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Töltsd ki a kapcsolatfelvételi űrlapot és néhány héten belül nálad lehet álmaid bútora!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* TÉRKÉP */}
      <section className="h-80 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.455!2d16.98832!3d46.46307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768b62b3e5b3a4f%3A0x7f2e2d9e1b3c4d5e!2sEgry%20J%C3%B3zsef%20u.%207%2C%20Nagykanizsa%2C%208800%20Hungary!5e0!3m2!1shu!2shu!4v1700000000000!5m2!1shu!2shu"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Enzo Design helyszín"
        />
      </section>
    </>
  );
}
