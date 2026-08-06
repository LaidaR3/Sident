"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "Ekspertiza Jonë",
    titleFirst: "Fushat tona të",
    titleSecond: "specializimit",
    description:
      "Ekipi ynë kombinon përvojën klinike me teknologjinë moderne për të ofruar trajtime të avancuara në fusha të ndryshme të stomatologjisë.",

    specializations: [
      {
        title: "Stomatologji e Përgjithshme",
        text: "Kontrolle rutinë, diagnostikim dhe trajtime parandaluese për ruajtjen e shëndetit oral.",
      },
      {
        title: "Ortodonci",
        text: "Drejtimi i dhëmbëve dhe përmirësimi i kafshimit me zgjidhje moderne ortodontike.",
      },
      {
        title: "Kirurgji Orale",
        text: "Procedura kirurgjikale të realizuara me kujdes, siguri dhe teknologji moderne.",
      },
      {
        title: "Implantologji",
        text: "Zëvendësim afatgjatë i dhëmbëve që mungojnë me rezultate natyrale dhe funksionale.",
      },
      {
        title: "Estetikë Dentare",
        text: "Përmirësimi i formës, ngjyrës dhe harmonisë së buzëqeshjes për rezultate elegante.",
      },
      {
        title: "Restaurime Dentare",
        text: "Kurora, ura dhe trajtime restauruese për rikthimin e funksionit dhe estetikës.",
      },
    ],
  },

  en: {
    eyebrow: "Our Expertise",
    titleFirst: "Our areas of",
    titleSecond: "specialization",
    description:
      "Our team combines clinical experience with modern technology to provide advanced treatments across different areas of dentistry.",

    specializations: [
      {
        title: "General Dentistry",
        text: "Routine checkups, diagnosis, and preventive treatments to maintain long-term oral health.",
      },
      {
        title: "Orthodontics",
        text: "Teeth alignment and bite correction using modern orthodontic solutions.",
      },
      {
        title: "Oral Surgery",
        text: "Surgical procedures performed with care, safety, and modern technology.",
      },
      {
        title: "Implantology",
        text: "Long-term replacement of missing teeth with natural-looking and functional results.",
      },
      {
        title: "Cosmetic Dentistry",
        text: "Improving the shape, color, and harmony of the smile for elegant, natural-looking results.",
      },
      {
        title: "Dental Restorations",
        text: "Crowns, bridges, and restorative treatments designed to restore function and appearance.",
      },
    ],
  },
};

export default function Specializations() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#CAD7E3] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#052f5e]/60">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            {t.titleFirst}
            <br />
            <span className="text-[#052f5e]">{t.titleSecond}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.specializations.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/40 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 active:scale-[0.98] active:bg-white/70 md:hover:-translate-y-2 md:hover:bg-white/70 md:hover:shadow-xl"
            >
              <h3 className="text-2xl font-light text-[#052f5e]">
                {item.title}
              </h3>

              <div className="mt-4 h-[2px] w-12 bg-[#052f5e]" />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}