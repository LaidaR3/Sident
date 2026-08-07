"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "Kujdes Dentar Modern",
    title: "Stomatologji Moderne",
    highlight: "Me Kujdes Profesional.",

    tags: [
      "Kontrolle Dentare",
      "Pastrimi i Dhëmbëve",
      "Mbushje Dentare",
      "Kurora Dentare",
      "Retainere",
    ],

    appointment: "Cakto terminin",
    services: "Shiko shërbimet",
    alt: "Trajtim dentar",
  },

  en: {
    eyebrow: "Modern Dental Care",
    title: "Modern Dentistry",
    highlight: "With Professional Care.",

    tags: [
      "Dental Checkups",
      "Teeth Cleaning",
      "Dental Fillings",
      "Dental Crowns",
      "Retainers",
    ],

    appointment: "Book Appointment",
    services: "View Services",
    alt: "Dental treatment",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-x-hidden">
      <div className="relative min-h-[100dvh] w-full max-w-full overflow-hidden bg-black text-white">
        <Image
          src="/images/img18.jpg"
          alt={t.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-[55%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/85 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/20" />

        <div className="relative z-20 flex min-h-[100dvh] w-full max-w-full items-end overflow-hidden px-5 pb-12 pt-24 md:px-10 md:pb-16 md:pt-28">
          <div className="w-full max-w-4xl animate-fade-up">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.28em] text-white/80 sm:text-[10px] md:mb-4 md:text-xs md:tracking-[0.3em]">
              {t.eyebrow}
            </p>

            <h1 className="max-w-3xl text-[34px] font-light leading-[1.08] sm:text-5xl md:text-6xl">
              {t.title}
              <br />
              <span className="font-semibold">{t.highlight}</span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-8 md:gap-3">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md transition-all duration-300 active:bg-white active:text-[#00408a] md:px-4 md:text-xs md:hover:bg-white md:hover:text-[#00408a]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex w-full justify-center rounded-full bg-[#00408a] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98] active:bg-[#0056b8] sm:w-auto md:hover:-translate-y-1 md:hover:bg-[#0056b8]"
              >
                {t.appointment}
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full justify-center rounded-full border border-white px-7 py-3 text-sm font-bold text-white transition-all duration-300 active:scale-[0.98] active:bg-white active:text-sky-900 sm:w-auto md:hover:-translate-y-1 md:hover:bg-white md:hover:text-sky-900"
              >
                {t.services}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}