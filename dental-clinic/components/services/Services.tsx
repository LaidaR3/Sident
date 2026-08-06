"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./ServicesDetails.css";

type CategoryKey =
  | "checkups"
  | "cosmetic"
  | "restorative"
  | "orthodontics";

type Service = {
  title: string;
  image: string;
  duration: string;
  text: string;
  benefits: string[];
};

type TranslationContent = {
  eyebrow: string;
  titleFirst: string;
  titleSecond: string;
  description: string;
  benefitsLabel: string;
  durationLabel: string;
  categoryLabels: Record<CategoryKey, string>;
  servicesByCategory: Record<CategoryKey, Service[]>;
};

const categoryKeys: CategoryKey[] = [
  "checkups",
  "cosmetic",
  "restorative",
  "orthodontics",
];

const translations: Record<"sq" | "en", TranslationContent> = {
  sq: {
    eyebrow: "Kategoritë e Shërbimeve",
    titleFirst: "Zgjidhni trajtimin",
    titleSecond: "që ju përshtatet",
    description:
      "Çdo shërbim ofrohet me kujdes profesional, teknologji moderne dhe plan të personalizuar sipas nevojave të pacientit.",
    benefitsLabel: "Përfitimet",
    durationLabel: "Kohëzgjatja",

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
          image: "/images/img19.jpg",
          duration: "30-45 minuta",
          text: "Kontrollë e detajuar për vlerësimin e shëndetit oral, zbulimin e hershëm të problemeve dhe parandalimin e komplikimeve dentare.",
          benefits: [
            "Vlerësim i plotë i dhëmbëve",
            "Zbulim i hershëm i problemeve",
            "Këshilla për kujdesin ditor",
          ],
        },
        {
          title: "Pastrimi Profesional",
          image: "/images/img18.jpg",
          duration: "45-60 minuta",
          text: "Pastrim profesional për largimin e gurëzave, pllakës bakteriale dhe njollave sipërfaqësore.",
          benefits: [
            "Dhëmbë më të pastër",
            "Frymëmarrje më e freskët",
            "Parandalim i inflamacionit të mishrave",
          ],
        },
        {
          title: "Kontrolla e Mishrave",
          image: "/images/img21.jpg",
          duration: "30-45 minuta",
          text: "Vlerësim profesional i shëndetit të mishrave për të parandaluar inflamacionin, gjakderdhjen dhe problemet periodontale.",
          benefits: [
            "Kontroll i gjendjes së mishrave",
            "Parandalim i sëmundjeve periodontale",
            "Udhëzime për higjienë orale",
          ],
        },
        {
          title: "Këshillim Oral",
          image: "/images/img3.jpg",
          duration: "20-30 minuta",
          text: "Këshillim i personalizuar për kujdesin e përditshëm oral dhe zgjedhjen e trajtimeve më të përshtatshme.",
          benefits: [
            "Udhëzime të personalizuara",
            "Planifikim i kujdesit oral",
            "Parandalim i problemeve të ardhshme",
          ],
        },
      ],

      cosmetic: [
        {
          title: "Zbardhimi i Dhëmbëve",
          image: "/images/img17.jpg",
          duration: "45-60 minuta",
          text: "Trajtim i sigurt estetik për një buzëqeshje më të bardhë, më të pastër dhe më të ndritshme.",
          benefits: [
            "Buzëqeshje më e ndritshme",
            "Procedurë e sigurt",
            "Rezultate të dukshme",
          ],
        },
        {
          title: "Faseta Dentare",
          image: "/images/img8.jpg",
          duration: "2-3 vizita",
          text: "Faseta estetike për përmirësimin e formës, ngjyrës dhe harmonisë së dhëmbëve.",
          benefits: [
            "Pamje më estetike",
            "Korrigjim i formës së dhëmbëve",
            "Rezultat natyral",
          ],
        },
        {
          title: "Bonding Estetik",
          image: "/images/img26.jpg",
          duration: "30-60 minuta",
          text: "Zgjidhje e shpejtë estetike për korrigjimin e defekteve të vogla, hapësirave ose dëmtimeve sipërfaqësore.",
          benefits: [
            "Trajtim i shpejtë",
            "Përmirësim estetik",
            "Ruajtje e strukturës natyrale",
          ],
        },
        {
          title: "Smile Design",
          image: "/images/img25.jpg",
          duration: "Sipas planit individual",
          text: "Planifikim estetik i buzëqeshjes duke marrë parasysh formën, ngjyrën dhe harmoninë e dhëmbëve.",
          benefits: [
            "Plan i personalizuar",
            "Pamje harmonike",
            "Rezultat natyral dhe elegant",
          ],
        },
      ],

      restorative: [
        {
          title: "Kurora Dentare",
          image: "/images/img33.jpg",
          duration: "2-3 vizita",
          text: "Restaurime me pamje natyrale për dhëmbë të dëmtuar, duke përmirësuar funksionin dhe estetikën.",
          benefits: [
            "Pamje natyrale",
            "Përmirësim i përtypjes",
            "Mbrojtje e dhëmbit të dëmtuar",
          ],
        },
        {
          title: "Ura Dentare",
          image: "/images/img31.jpg",
          duration: "2-3 vizita",
          text: "Zëvendësim i dhëmbëve që mungojnë me zgjidhje të qëndrueshme dhe estetike.",
          benefits: [
            "Zëvendësim i dhëmbëve që mungojnë",
            "Përmirësim i funksionit oral",
            "Pamje natyrale",
          ],
        },
        {
          title: "Mbushje Dentare",
          image: "/images/img29.jpg",
          duration: "30-60 minuta",
          text: "Mbushje estetike për trajtimin e dhëmbëve të dëmtuar ose të prishur.",
          benefits: [
            "Trajtim i kariesit",
            "Ruajtje e dhëmbit natyral",
            "Pamje estetike",
          ],
        },
        {
          title: "Inlay & Onlay",
          image: "/images/img32.jpg",
          duration: "1-2 vizita",
          text: "Restaurime precize për forcimin dhe ruajtjen e strukturës së dhëmbit.",
          benefits: [
            "Restaurim i qëndrueshëm",
            "Forcim i strukturës së dhëmbit",
            "Përshtatje precize",
          ],
        },
      ],

      orthodontics: [
        {
          title: "Aparate Fikse",
          image: "/images/img27.jpg",
          duration: "Sipas planit ortodontik",
          text: "Trajtim ortodontik për drejtimin e dhëmbëve dhe përmirësimin e kafshimit.",
          benefits: [
            "Drejtim gradual i dhëmbëve",
            "Përmirësim i kafshimit",
            "Rezultat i qëndrueshëm",
          ],
        },
        {
          title: "Aparate Transparente",
          image: "/images/img24.jpg",
          duration: "Sipas planit ortodontik",
          text: "Zgjidhje diskrete dhe moderne për drejtimin e dhëmbëve me komoditet më të madh.",
          benefits: [
            "Pamje më diskrete",
            "Komoditet gjatë përdorimit",
            "Plan i personalizuar",
          ],
        },
        {
          title: "Konsultë Ortodontike",
          image: "/images/img28.jpg",
          duration: "30-45 minuta",
          text: "Vlerësim profesional për përcaktimin e planit më të mirë ortodontik sipas nevojave të pacientit.",
          benefits: [
            "Analizë e pozitës së dhëmbëve",
            "Plan trajtimi i përshtatur",
            "Këshillim profesional",
          ],
        },
        {
          title: "Retainer",
          image: "/images/img22.jpg",
          duration: "Sipas rastit",
          text: "Ruajtje e rezultatit pas trajtimit ortodontik për stabilitet afatgjatë.",
          benefits: [
            "Ruajtje e rezultatit",
            "Parandalim i rikthimit të dhëmbëve",
            "Komoditet në përdorim",
          ],
        },
      ],
    },
  },

  en: {
    eyebrow: "Service Categories",
    titleFirst: "Choose the treatment",
    titleSecond: "that suits your needs",
    description:
      "Every service is provided with professional care, modern technology, and a personalized plan tailored to each patient’s needs.",
    benefitsLabel: "Benefits",
    durationLabel: "Duration",

    categoryLabels: {
      checkups: "Checkups",
      cosmetic: "Cosmetic",
      restorative: "Restorative",
      orthodontics: "Orthodontics",
    },

    servicesByCategory: {
      checkups: [
        {
          title: "Dental Checkup",
          image: "/images/img19.jpg",
          duration: "30-45 minutes",
          text: "A detailed examination to assess oral health, identify problems early, and prevent dental complications.",
          benefits: [
            "Complete dental health assessment",
            "Early detection of dental problems",
            "Personalized daily care advice",
          ],
        },
        {
          title: "Professional Cleaning",
          image: "/images/img18.jpg",
          duration: "45-60 minutes",
          text: "Professional cleaning to remove tartar, bacterial plaque, and surface stains.",
          benefits: [
            "Cleaner teeth",
            "Fresher breath",
            "Prevention of gum inflammation",
          ],
        },
        {
          title: "Gum Examination",
          image: "/images/img21.jpg",
          duration: "30-45 minutes",
          text: "A professional gum health assessment to help prevent inflammation, bleeding, and periodontal problems.",
          benefits: [
            "Assessment of gum health",
            "Prevention of periodontal disease",
            "Oral hygiene guidance",
          ],
        },
        {
          title: "Oral Care Consultation",
          image: "/images/img3.jpg",
          duration: "20-30 minutes",
          text: "Personalized guidance for daily oral care and choosing the most suitable dental treatments.",
          benefits: [
            "Personalized recommendations",
            "Oral care planning",
            "Prevention of future dental problems",
          ],
        },
      ],

      cosmetic: [
        {
          title: "Teeth Whitening",
          image: "/images/img17.jpg",
          duration: "45-60 minutes",
          text: "A safe cosmetic treatment for a whiter, cleaner, and brighter smile.",
          benefits: [
            "A brighter smile",
            "Safe procedure",
            "Visible results",
          ],
        },
        {
          title: "Dental Veneers",
          image: "/images/img8.jpg",
          duration: "2-3 visits",
          text: "Cosmetic veneers designed to improve the shape, color, and harmony of the teeth.",
          benefits: [
            "Improved appearance",
            "Correction of tooth shape",
            "Natural-looking results",
          ],
        },
        {
          title: "Cosmetic Bonding",
          image: "/images/img26.jpg",
          duration: "30-60 minutes",
          text: "A quick cosmetic solution for correcting small imperfections, gaps, or surface damage.",
          benefits: [
            "Quick treatment",
            "Improved aesthetics",
            "Preservation of natural tooth structure",
          ],
        },
        {
          title: "Smile Design",
          image: "/images/img25.jpg",
          duration: "Based on the individual plan",
          text: "Personalized smile planning based on tooth shape, color, proportion, and overall harmony.",
          benefits: [
            "Personalized treatment plan",
            "Balanced appearance",
            "Natural and elegant results",
          ],
        },
      ],

      restorative: [
        {
          title: "Dental Crowns",
          image: "/images/img33.jpg",
          duration: "2-3 visits",
          text: "Natural-looking restorations for damaged teeth that improve both function and appearance.",
          benefits: [
            "Natural appearance",
            "Improved chewing ability",
            "Protection of the damaged tooth",
          ],
        },
        {
          title: "Dental Bridges",
          image: "/images/img31.jpg",
          duration: "2-3 visits",
          text: "A durable and aesthetic solution for replacing missing teeth.",
          benefits: [
            "Replacement of missing teeth",
            "Improved oral function",
            "Natural appearance",
          ],
        },
        {
          title: "Dental Fillings",
          image: "/images/img29.jpg",
          duration: "30-60 minutes",
          text: "Cosmetic fillings used to treat damaged or decayed teeth.",
          benefits: [
            "Treatment of tooth decay",
            "Preservation of the natural tooth",
            "Aesthetic appearance",
          ],
        },
        {
          title: "Inlays & Onlays",
          image: "/images/img32.jpg",
          duration: "1-2 visits",
          text: "Precise restorations that strengthen and preserve the natural tooth structure.",
          benefits: [
            "Durable restoration",
            "Strengthening of the tooth structure",
            "Precise fit",
          ],
        },
      ],

      orthodontics: [
        {
          title: "Fixed Braces",
          image: "/images/img27.jpg",
          duration: "Based on the orthodontic plan",
          text: "Orthodontic treatment designed to straighten teeth and improve bite alignment.",
          benefits: [
            "Gradual tooth alignment",
            "Improved bite",
            "Long-lasting results",
          ],
        },
        {
          title: "Clear Aligners",
          image: "/images/img24.jpg",
          duration: "Based on the orthodontic plan",
          text: "A discreet and modern solution for straightening teeth with greater comfort.",
          benefits: [
            "More discreet appearance",
            "Comfort during use",
            "Personalized treatment plan",
          ],
        },
        {
          title: "Orthodontic Consultation",
          image: "/images/img28.jpg",
          duration: "30-45 minutes",
          text: "A professional evaluation to determine the most suitable orthodontic treatment plan for the patient.",
          benefits: [
            "Assessment of tooth alignment",
            "Personalized treatment plan",
            "Professional guidance",
          ],
        },
        {
          title: "Retainers",
          image: "/images/img22.jpg",
          duration: "Depending on the case",
          text: "Retention following orthodontic treatment to maintain long-term stability.",
          benefits: [
            "Maintenance of treatment results",
            "Prevention of tooth movement",
            "Comfort during use",
          ],
        },
      ],
    },
  },
};

const categoryAliases: Record<string, CategoryKey> = {
  checkups: "checkups",
  kontrolle: "checkups",
  Checkups: "checkups",
  Kontrolle: "checkups",

  cosmetic: "cosmetic",
  estetike: "cosmetic",
  Cosmetic: "cosmetic",
  Estetike: "cosmetic",

  restorative: "restorative",
  restauruese: "restorative",
  Restorative: "restorative",
  Restauruese: "restorative",

  orthodontics: "orthodontics",
  ortodonci: "orthodontics",
  Orthodontics: "orthodontics",
  Ortodonci: "orthodontics",
};

type ServicesDetailsProps = {
  initialCategory?: string;
};

export default function ServicesDetails({
  initialCategory,
}: ServicesDetailsProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const startingCategory =
    initialCategory && categoryAliases[initialCategory]
      ? categoryAliases[initialCategory]
      : "checkups";

  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>(startingCategory);

  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeServices = t.servicesByCategory[activeCategory];
  const activeCategoryLabel = t.categoryLabels[activeCategory];

  useEffect(() => {
    setVisibleCards([]);
    cardRefs.current = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.index
          );

          if (entry.isIntersecting) {
            setVisibleCards((previous) =>
              previous.includes(index)
                ? previous
                : [...previous, index]
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    const timer = window.setTimeout(() => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.observe(card);
        }
      });
    }, 0);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeCategory, language]);

  return (
    <section
      id="services-details"
      className="scroll-mt-24 bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
              {t.eyebrow}
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              {t.titleFirst}
              <br />
              <span className="text-[#052f5e]">
                {t.titleSecond}
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            {t.description}
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categoryKeys.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm transition-all duration-300 active:scale-95 ${
                activeCategory === category
                  ? "border-[#052f5e] bg-[#052f5e] text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#052f5e] hover:text-[#052f5e]"
              }`}
            >
              {t.categoryLabels[category]}
            </button>
          ))}
        </div>

        <div key={`${language}-${activeCategory}`} className="space-y-8">
          {activeServices.map((service, index) => {
            const reverse = index % 2 !== 0;
            const visible = visibleCards.includes(index);

            return (
              <div
                key={`${activeCategory}-${service.title}`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-index={index}
                className={`service-detail-card ${
                  reverse
                    ? "service-slide-right"
                    : "service-slide-left"
                } ${
                  visible ? "service-visible" : ""
                } grid overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm md:grid-cols-2`}
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="service-detail-image relative h-[360px] md:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-8 md:p-12 ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#87A5C0]">
                    {activeCategoryLabel}
                  </p>

                  <h3 className="text-4xl font-light text-[#052f5e]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {service.text}
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      {t.benefitsLabel}
                    </p>

                    <ul className="space-y-3 text-sm text-slate-600">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2"
                        >
                          <span
                            aria-hidden="true"
                            className="font-semibold text-[#052f5e]"
                          >
                            ✓
                          </span>

                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <span className="rounded-full bg-[#052f5e]/10 px-5 py-3 text-xs font-semibold text-[#052f5e]">
                      {t.durationLabel}: {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}