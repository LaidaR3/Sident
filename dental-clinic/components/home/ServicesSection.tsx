"use client";

import { useState } from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useLanguage } from "@/context/LanguageContext";

type CategoryKey =
  | "checkups"
  | "cosmetic"
  | "restorative"
  | "orthodontics";

type Service = {
  title: string;
  text: string;
};

const categoryKeys: CategoryKey[] = [
  "checkups",
  "cosmetic",
  "restorative",
  "orthodontics",
];

const translations: Record<
  "sq" | "en",
  {
    eyebrow: string;
    title: string;
    highlight: string;
    categoryLabels: Record<CategoryKey, string>;
    servicesByCategory: Record<CategoryKey, Service[]>;
  }
> = {
  sq: {
    eyebrow: "Trajtimet Tona",
    title: "Buzëqeshja Juaj",
    highlight: "Ndikon në Vetëbesimin Tuaj",

    categoryLabels: {
      checkups: "Kontrolle",
      cosmetic: "Estetike",
      restorative: "Restauruese",
      orthodontics: "Ortodonci",
    },

    servicesByCategory: {
      checkups: [
        {
          title: "Kontrolla Dentare",
          text: "Kontrolle të rregullta për parandalimin dhe ruajtjen e shëndetit oral afatgjatë.",
        },
        {
          title: "Pastrimi Profesional",
          text: "Pastrim profesional për një buzëqeshje më të freskët dhe më të shëndetshme.",
        },
        {
          title: "Kontrolla e Mishrave",
          text: "Vlerësim i shëndetit të mishrave dhe parandalim i problemeve periodontale.",
        },
        {
          title: "Këshillim Oral",
          text: "Udhëzime profesionale për kujdes më të mirë të dhëmbëve në përditshmëri.",
        },
      ],

      cosmetic: [
        {
          title: "Zbardhimi i Dhëmbëve",
          text: "Trajtim i sigurt për një buzëqeshje më të bardhë, më të pastër dhe më të ndritshme.",
        },
        {
          title: "Faseta Dentare",
          text: "Faseta estetike për përmirësimin e formës, ngjyrës dhe pamjes së dhëmbëve.",
        },
        {
          title: "Bonding Estetik",
          text: "Zgjidhje e shpejtë për korrigjimin e defekteve të vogla estetike.",
        },
        {
          title: "Smile Design",
          text: "Planifikim estetik për një buzëqeshje harmonike dhe natyrale.",
        },
      ],

      restorative: [
        {
          title: "Kurora Dentare",
          text: "Restaurime me pamje natyrale që përmirësojnë funksionin dhe estetikën.",
        },
        {
          title: "Ura Dentare",
          text: "Zëvendësim i dhëmbëve që mungojnë me zgjidhje të qëndrueshme.",
        },
        {
          title: "Mbushje Dentare",
          text: "Mbushje estetike për trajtimin e dhëmbëve të dëmtuar ose të prishur.",
        },
        {
          title: "Inlay & Onlay",
          text: "Restaurime precize për forcimin dhe ruajtjen e strukturës së dhëmbit.",
        },
      ],

      orthodontics: [
        {
          title: "Aparate Fikse",
          text: "Trajtim ortodontik për drejtimin e dhëmbëve dhe përmirësimin e kafshimit.",
        },
        {
          title: "Aparate Transparente",
          text: "Zgjidhje diskrete për drejtimin e dhëmbëve me komoditet më të madh.",
        },
        {
          title: "Konsultë Ortodontike",
          text: "Vlerësim profesional për përcaktimin e planit më të mirë ortodontik.",
        },
        {
          title: "Retainer",
          text: "Ruajtje e rezultatit pas trajtimit ortodontik për stabilitet afatgjatë.",
        },
      ],
    },
  },

  en: {
    eyebrow: "Our Treatments",
    title: "Your Smile",
    highlight: "Shapes Your Confidence",

    categoryLabels: {
      checkups: "Checkups",
      cosmetic: "Cosmetic",
      restorative: "Restorative",
      orthodontics: "Orthodontics",
    },

    servicesByCategory: {
      checkups: [
        {
          title: "Dental Checkups",
          text: "Regular examinations for prevention and long-term oral health.",
        },
        {
          title: "Professional Cleaning",
          text: "Professional cleaning for a fresher and healthier smile.",
        },
        {
          title: "Gum Examination",
          text: "Evaluation of gum health and prevention of periodontal problems.",
        },
        {
          title: "Oral Care Guidance",
          text: "Professional advice for better daily care of your teeth.",
        },
      ],

      cosmetic: [
        {
          title: "Teeth Whitening",
          text: "A safe treatment for a whiter, cleaner, and brighter smile.",
        },
        {
          title: "Dental Veneers",
          text: "Cosmetic veneers that improve the shape, color, and appearance of your teeth.",
        },
        {
          title: "Cosmetic Bonding",
          text: "A quick solution for correcting minor cosmetic imperfections.",
        },
        {
          title: "Smile Design",
          text: "Cosmetic planning for a harmonious and natural-looking smile.",
        },
      ],

      restorative: [
        {
          title: "Dental Crowns",
          text: "Natural-looking restorations that improve both function and appearance.",
        },
        {
          title: "Dental Bridges",
          text: "A durable solution for replacing missing teeth.",
        },
        {
          title: "Dental Fillings",
          text: "Cosmetic fillings for treating damaged or decayed teeth.",
        },
        {
          title: "Inlays & Onlays",
          text: "Precise restorations that strengthen and preserve the tooth structure.",
        },
      ],

      orthodontics: [
        {
          title: "Fixed Braces",
          text: "Orthodontic treatment for straightening teeth and improving bite alignment.",
        },
        {
          title: "Clear Aligners",
          text: "A discreet and comfortable solution for straightening teeth.",
        },
        {
          title: "Orthodontic Consultation",
          text: "A professional evaluation to determine the most suitable orthodontic plan.",
        },
        {
          title: "Retainers",
          text: "Maintaining orthodontic results and ensuring long-term stability.",
        },
      ],
    },
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("checkups");

  const activeServices = t.servicesByCategory[activeCategory];
  const activeCategoryLabel = t.categoryLabels[activeCategory];

  return (
    <section className="bg-[#fbfdfe] px-5 py-16 text-slate-800 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
            {t.eyebrow}
          </p>

          <h2 className="text-3xl font-light leading-tight md:text-6xl">
            {t.title}
            <br />
            <span className="text-[#052f5e]">{t.highlight}</span>
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categoryKeys.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-xs transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#00408a] bg-[#00408a] text-white"
                    : "border-slate-200 bg-white text-slate-500"
                }`}
              >
                {t.categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activeServices.map((service, index) => (
            <div
              key={`${activeCategory}-${service.title}`}
              className="group relative min-h-[300px] overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 active:-translate-y-2 active:scale-[0.98] active:bg-[#052f5e] md:min-h-[340px] md:p-7 md:hover:-translate-y-3 md:hover:border-[#243856]/20 md:hover:bg-[#052f5e] md:hover:shadow-2xl"
            >
              <div className="absolute right-4 top-3 text-6xl font-light text-[#acc7e6] transition duration-500 group-active:text-[#CAD7E3]/60 md:text-7xl md:group-hover:text-[#CAD7E3]/60">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="rounded-full bg-[#CAD7E3]/40 px-3 py-1 text-[10px] font-semibold text-[#243856] transition duration-300 group-active:bg-white/20 group-active:text-white md:group-hover:bg-white/20 md:group-hover:text-white">
                    {activeCategoryLabel}
                  </span>

                  <h3 className="mt-6 text-2xl font-light text-slate-950 transition duration-300 group-active:text-white md:group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500 transition duration-300 group-active:text-slate-200 md:group-hover:text-slate-200">
                    {service.text}
                  </p>
                </div>

                <Link
                  href={`/services?category=${activeCategory}#services-details`}
                  aria-label={service.title}
                  className="mt-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-xl text-slate-500 transition-all duration-500 active:scale-90 group-active:bg-white group-active:text-[#243856] md:group-hover:bg-white md:group-hover:text-[#243856]"
                >
                  <IoArrowForwardOutline className="-rotate-45 transition-transform duration-500 group-active:translate-x-1 group-active:-translate-y-1 md:group-hover:translate-x-1 md:group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}