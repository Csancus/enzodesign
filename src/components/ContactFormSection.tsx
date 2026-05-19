import ContactForm from "./ContactForm";

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">Kapcsolatfelvétel</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Rendelés és kapcsolat
          </h2>
          <p className="text-gray-500 text-sm">
            Töltse ki az űrlapot és 24 órán belül visszahívjuk!
          </p>
        </div>
        <div className="bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
