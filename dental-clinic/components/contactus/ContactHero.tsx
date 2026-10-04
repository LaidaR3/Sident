"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./ContactHero.css";

const translations = {
  sq: {
    eyebrow: "Kontakt",
    titleFirst: "Jemi këtu për",
    titleSecond: "t’ju ndihmuar",
    description:
      "Na kontaktoni për pyetje, informacione rreth shërbimeve ose për të kërkuar një termin në klinikën tonë.",
    alt: "Klinika dentare Sident",
  },

  en: {
    eyebrow: "Contact",
    titleFirst: "We are here",
    titleSecond: "to help you",
    description:
      "Contact us with any questions, to learn more about our services, or to request an appointment at our clinic.",
    alt: "Sident dental clinic",
  },
};

export default function ContactHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="
        relative
        h-[100svh]
        min-h-[650px]
        w-full
        overflow-hidden
        text-center
        text-white

        md:h-[100dvh]
        md:min-h-[700px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/img17.jpg"
          alt={t.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-center"
        />
      </div>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/50
          md:bg-black/60
        "
      />

      {/* GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/30
          via-black/5
          to-black/65

          md:from-black/15
          md:via-transparent
          md:to-black/35
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center

          px-5
          pb-20
          pt-28

          sm:px-8

          md:px-10
          md:pb-20
          md:pt-28
        "
      >
        {/* EYEBROW */}
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

        {/* TITLE */}
        <h1
          className="
            hero-fade-up
            hero-delay-200

            mx-auto
            max-w-[410px]

            text-[36px]
            font-light
            leading-[1.08]
            tracking-[-0.025em]

            sm:max-w-[560px]
            sm:text-[48px]

            md:max-w-4xl
            md:text-7xl
            md:leading-[1.08]
          "
        >
          <span className="block">
            {t.titleFirst}
          </span>

          <span className="mt-1 block">
            {t.titleSecond}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            hero-fade-up
            hero-delay-400

            mx-auto
            mt-6
            max-w-[350px]

            text-[14px]
            font-normal
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
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          -translate-x-1/2

          md:bottom-8
        "
      >
        <div
          className="
            hero-scroll
            flex
            h-10
            w-6
            justify-center
            rounded-full
            border
            border-white/40
            bg-black/10
            backdrop-blur-sm
          "
        >
          <div
            className="
              mt-2
              h-1.5
              w-1.5
              rounded-full
              bg-white
            "
          />
        </div>
      </div>
    </section>
  );
}