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
    <section className="relative min-h-[100svh] overflow-hidden text-center text-white md:min-h-[100dvh]">
      <div className="absolute inset-0 bg-black">
 <Image
  src="/images/img1.jpg"
  alt={t.alt}
  fill
  priority
  sizes="100vw"
  className="
    object-cover
    object-[50%_center]
    sm:object-[52%_center]
    md:object-center
  "
/>
</div>

      <div className="absolute inset-0 bg-black/55 md:bg-black/65" />

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

      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-6xl
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
            text-[34px]
            font-light
            leading-[1.08]
            tracking-[-0.025em]
            sm:max-w-[520px]
            sm:text-[43px]
            md:max-w-none
            md:text-7xl
            md:leading-[1.08]
          "
        >
          <span className="block">{t.titleFirst}</span>

          <span className="mt-1 block font-semibold">
            {t.titleSecond}
          </span>
        </h1>

        <div
          className="
            hero-fade-up
            hero-delay-400
            mx-auto
            mt-7
            flex
            max-w-[400px]
            flex-wrap
            justify-center
            gap-2
            sm:max-w-[520px]
            md:mt-9
            md:max-w-3xl
            md:gap-3
          "
        >
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-white/15
                px-3.5
                py-2
                text-[10px]
                font-semibold
                leading-none
                text-white
                shadow-sm
                backdrop-blur-md
                transition-all
                duration-300
                sm:px-4
                sm:py-2.5
                sm:text-[11px]
                md:text-xs
                md:hover:border-white
                md:hover:bg-white
                md:hover:text-[#00408a]
              "
            >
              {tag}
            </span>
          ))}
        </div>

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
          <Link
            href="/contact"
            className="
              flex
              min-h-[54px]
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#0756a5]
              px-7
              text-[14px]
              font-semibold
              text-white
              shadow-lg
              shadow-black/20
              transition-all
              duration-300
              active:scale-[0.98]
              sm:w-auto
              sm:min-w-[190px]
              md:hover:-translate-y-1
              md:hover:bg-[#0865c2]
            "
          >
            {t.appointment}
          </Link>

          <Link
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
          </Link>
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