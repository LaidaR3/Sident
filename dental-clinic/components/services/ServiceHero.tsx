"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./ServiceHero.css";

const translations = {
  sq: {
    eyebrow: "Shërbimet Tona",
    titleFirst: "Trajtime Moderne",
    titleSecond: "për Çdo Buzëqeshje",
    description:
      "Kombinojmë ekspertizën profesionale, teknologjinë moderne dhe kujdesin e personalizuar për të ofruar trajtime dentare të sigurta, efektive dhe të përshtatura për nevojat tuaja.",
    alt: "Shërbimet dentare Sident",
  },

  en: {
    eyebrow: "Our Services",
    titleFirst: "Modern Treatments",
    titleSecond: "for Every Smile",
    description:
      "We combine professional expertise, modern technology, and personalized care to provide safe, effective dental treatments tailored to your individual needs.",
    alt: "Sident dental services",
  },
};

export default function ServicesHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-center text-white md:min-h-[100dvh]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/img7.jpg"
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
          <span className="block">{t.titleFirst}</span>
          <span className="mt-1 block">{t.titleSecond}</span>
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
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:bottom-8">
        <div className="hero-scroll flex h-10 w-6 justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-sm">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}