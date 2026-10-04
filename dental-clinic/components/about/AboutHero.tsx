"use client";

import Link from "next/link";
import Image from "next/image";
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
    alt: "Sident Dental Clinic",
  },

  en: {
    eyebrow: "About Sident",
    title1: "Modern Dental Care",
    title2: "with a Professional Approach",
    description:
      "A clinic built on trust, modern technology, and personalized care for every smile.",
    book: "Book Appointment",
    services: "Our Services",
    alt: "Sident Dental Clinic",
  },
};

export default function AboutHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-center text-white md:min-h-[100dvh]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/img11.jpg"
          alt={t.alt}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[50%_center]
            sm:object-center
            md:object-center
          "
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/65" />

      {/* GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/35
          via-black/15
          to-black/75
          md:from-black/10
          md:via-transparent
          md:to-black/30
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-5
          pb-24
          pt-28
          sm:px-8
          md:min-h-[100dvh]
          md:px-10
          md:pb-20
          md:pt-28
        "
      >
        <p
          className="
            hero-fade-up
            mb-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.34em]
            text-blue-200
            sm:text-[11px]
            md:mb-5
            md:text-xs
            md:tracking-[0.4em]
          "
        >
          {t.eyebrow}
        </p>

        <h1
          className="
            hero-fade-up
            hero-delay-200
            max-w-[410px]
            text-[36px]
            font-light
            leading-[1.08]
            tracking-[-0.025em]
            sm:max-w-[560px]
            sm:text-[48px]
            md:max-w-4xl
            md:text-7xl
          "
        >
          <span className="block">{t.title1}</span>

          <span className="mt-1 block text-blue-100">
            {t.title2}
          </span>
        </h1>

        <p
          className="
            hero-fade-up
            hero-delay-400
            mx-auto
            mt-6
            max-w-[350px]
            text-[14px]
            leading-[1.8]
            text-white/85
            sm:max-w-[520px]
            sm:text-[15px]
            md:mt-8
            md:max-w-2xl
            md:text-base
            md:leading-8
          "
        >
          {t.description}
        </p>

        {/* BUTTONS */}
        <div
          className="
            hero-fade-up
            hero-delay-600
            mt-8
            flex
            w-full
            max-w-[400px]
            flex-col
            gap-3
            sm:max-w-[520px]
            sm:flex-row
            sm:justify-center
            md:mt-10
          "
        >
          {/* <Link
            href="/contact"
            className="
              flex
              min-h-[54px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-white
              px-7
              text-[14px]
              font-semibold
              text-[#052f5e]
              transition-all
              duration-300
              active:scale-[0.98]
              sm:w-auto
              sm:min-w-[190px]
              md:hover:-translate-y-1
              md:hover:bg-blue-100
            "
          >
            {t.book}
          </Link> */}

          {/* <Link
            href="/services"
            className="
              flex
              min-h-[54px]
              w-full
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-black/10
              px-7
              text-[14px]
              font-semibold
              text-white
              backdrop-blur-[2px]
              transition-all
              duration-300
              active:scale-[0.98]
              sm:w-auto
              sm:min-w-[190px]
              md:hover:-translate-y-1
              md:hover:bg-white
              md:hover:text-[#052f5e]
            "
          >
            {t.services}
          </Link> */}
        </div>
      </div>


      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:bottom-8">
        <div className="hero-scroll flex h-10 w-6 justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}