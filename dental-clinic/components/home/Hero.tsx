"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./Hero.css";

const translations = {
  sq: {
    eyebrow: "Kujdes Dentar Modern",
    titleFirst: "Stomatologji Moderne",
    titleSecond: "Me Kujdes Profesional.",

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
    titleFirst: "Modern Dentistry",
    titleSecond: "With Professional Care.",

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
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 text-center text-white md:px-10">
      {/* Background image */}
      <Image
        src="/images/img18.jpg"
        alt={t.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] md:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl pt-20 md:pt-24">
        <p className="hero-fade-up mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200 md:text-xs">
          {t.eyebrow}
        </p>

        <h1 className="hero-fade-up hero-delay-200 text-4xl font-light leading-tight sm:text-5xl md:text-7xl">
          {t.titleFirst}
          <br />

          <span className="font-semibold">
            {t.titleSecond}
          </span>
        </h1>

        {/* Tags */}
        <div className="hero-fade-up hero-delay-400 mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 md:gap-3">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/15 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md transition-all duration-300 active:bg-white active:text-[#00408a] md:px-4 md:text-xs md:hover:bg-white md:hover:text-[#00408a]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="hero-fade-up hero-delay-600 mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex w-full justify-center rounded-full bg-[#00408a] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98] active:bg-[#0056b8] sm:w-auto md:hover:-translate-y-1 md:hover:bg-[#0056b8]"
          >
            {t.appointment}
          </Link>

          <Link
            href="/services"
            className="inline-flex w-full justify-center rounded-full border border-white/60 px-7 py-3 text-sm font-bold text-white transition-all duration-300 active:scale-[0.98] active:bg-white active:text-[#052f5e] sm:w-auto md:hover:-translate-y-1 md:hover:bg-white md:hover:text-[#052f5e]"
          >
            {t.services}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="hero-scroll flex h-10 w-6 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}