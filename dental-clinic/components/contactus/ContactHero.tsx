"use client";

import { useLanguage } from "@/context/LanguageContext";
import "./ContactHero.css";

const translations = {
  sq: {
    eyebrow: "Kontakt",
    titleFirst: "Jemi këtu për",
    titleSecond: "t’ju ndihmuar",
    description:
      "Na kontaktoni për pyetje, informacione rreth shërbimeve ose për të kërkuar një termin në klinikën tonë.",
  },

  en: {
    eyebrow: "Contact",
    titleFirst: "We are here",
    titleSecond: "to help you",
    description:
      "Contact us with any questions, to learn more about our services, or to request an appointment at our clinic.",
  },
};

export default function ContactHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img17.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="hero-fade-up mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
          {t.eyebrow}
        </p>

        <h1 className="hero-fade-up hero-delay-200 text-5xl font-light leading-tight md:text-7xl">
          {t.titleFirst}
          <br />
          {t.titleSecond}
        </h1>

        <p className="hero-fade-up hero-delay-400 mx-auto mt-8 max-w-2xl text-base leading-8 text-blue-100">
          {t.description}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="hero-scroll flex h-10 w-6 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}