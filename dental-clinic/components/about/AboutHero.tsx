"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import "./AboutHero.css";

const translations = {
  sq: {
    eyebrow: "Rreth Sident",
    title1: "Kujdes Dentar Modern",
    title2: "me Qasje Profesionale",
    description:
      "Një klinikë e ndërtuar mbi besimin, teknologjinë moderne dhe kujdesin e personalizuar për çdo buzëqeshje.",
    book: "Rezervo Termin",
    services: "Shërbimet",
  },

  en: {
    eyebrow: "About Sident",
    title1: "Modern Dental Care",
    title2: "with a Professional Approach",
    description:
      "A clinic built on trust, modern technology, and personalized care for every smile.",
    book: "Book Appointment",
    services: "Our Services",
  },
};

export default function AboutHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img11.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-5xl pt-24">
        <p className="hero-fade-up mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
          {t.eyebrow}
        </p>

        <h1 className="hero-fade-up hero-delay-200 text-5xl font-light leading-tight md:text-7xl">
          {t.title1}
          <br />
          <span className="text-blue-100">{t.title2}</span>
        </h1>

        <p className="hero-fade-up hero-delay-400 mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
          {t.description}
        </p>

        <div className="hero-fade-up hero-delay-600 mt-10 flex justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#052f5e] transition hover:bg-blue-100"
          >
            {t.book}
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#052f5e]"
          >
            {t.services}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="hero-scroll flex h-10 w-6 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}