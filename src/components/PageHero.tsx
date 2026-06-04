import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  label?: string;
  imageSrc?: string;
};

export default function PageHero({ title, subtitle, label, imageSrc }: Props) {
  return (
    <section className="relative bg-[#f5f0ea] py-24 text-center overflow-hidden">
      {imageSrc && (
        <Image src={imageSrc} alt={title} fill className="object-cover opacity-10" priority />
      )}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {label && (
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">{label}</p>
        )}
        <h1
          className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-600 text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
