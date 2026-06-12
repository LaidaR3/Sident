"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./ServicesDetails.css";

const categories = ["Kontrolle", "Estetike", "Restauruese", "Ortodonci"];

const servicesByCategory = {
  Kontrolle: [
    {
      title: "Kontrolla Dentare",
      image: "/images/img2.jpg",
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
      image: "/images/img3.jpg",
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
      image: "/images/img2.jpg",
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
      image: "/images/img10.jpg",
      duration: "20-30 minuta",
      text: "Këshillim i personalizuar për kujdesin e përditshëm oral dhe zgjedhjen e trajtimeve më të përshtatshme.",
      benefits: [
        "Udhëzime të personalizuara",
        "Planifikim i kujdesit oral",
        "Parandalim i problemeve të ardhshme",
      ],
    },
  ],

  Estetike: [
    {
      title: "Zbardhimi i Dhëmbëve",
      image: "/images/img7.jpg",
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
      image: "/images/img9.jpg",
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
      image: "/images/img9.jpg",
      duration: "Sipas planit individual",
      text: "Planifikim estetik i buzëqeshjes duke marrë parasysh formën, ngjyrën dhe harmoninë e dhëmbëve.",
      benefits: [
        "Plan i personalizuar",
        "Pamje harmonike",
        "Rezultat natyral dhe elegant",
      ],
    },
  ],

  Restauruese: [
    {
      title: "Kurora Dentare",
      image: "/images/img1.jpg",
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
      image: "/images/img2.jpg",
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
      image: "/images/img3.jpg",
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
      image: "/images/img4.jpg",
      duration: "1-2 vizita",
      text: "Restaurime precize për forcimin dhe ruajtjen e strukturës së dhëmbit.",
      benefits: [
        "Restaurim i qëndrueshëm",
        "Forcim i strukturës së dhëmbit",
        "Përshtatje precize",
      ],
    },
  ],

  Ortodonci: [
    {
      title: "Aparate Fikse",
      image: "/images/img12.jpg",
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
      image: "/images/img6.jpg",
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
      image: "/images/img7.jpg",
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
      image: "/images/img8.jpg",
      duration: "Sipas rastit",
      text: "Ruajtje e rezultatit pas trajtimit ortodontik për stabilitet afatgjatë.",
      benefits: [
        "Ruajtje e rezultatit",
        "Parandalim i rikthimit të dhëmbëve",
        "Komoditet në përdorim",
      ],
    },
  ],
};

type ServicesDetailsProps = {
  initialCategory?: string;
};

export default function ServicesDetails({
  initialCategory,
}: ServicesDetailsProps) {
  const validCategory =
    initialCategory && categories.includes(initialCategory)
      ? initialCategory
      : "Kontrolle";

  const [activeCategory, setActiveCategory] = useState(validCategory);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeServices =
    servicesByCategory[activeCategory as keyof typeof servicesByCategory];

  useEffect(() => {
  setVisibleCards([]);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number((entry.target as HTMLElement).dataset.index);

        if (entry.isIntersecting) {
          setVisibleCards((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  const currentCards = cardRefs.current;

  currentCards.forEach((card) => {
    if (card) observer.observe(card);
  });

  return () => observer.disconnect();
}, [activeCategory]);

  return (
    <section
      id="services-details"
      className="scroll-mt-24 bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
              Kategoritë e Shërbimeve
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Zgjidhni trajtimin
              <br />
              <span className="text-[#052f5e]">që ju përshtatet</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Çdo shërbim ofrohet me kujdes profesional, teknologji moderne dhe
            plan të personalizuar sipas nevojave të pacientit.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm transition-all duration-300 active:scale-95 ${activeCategory === category
                  ? "border-[#052f5e] bg-[#052f5e] text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#052f5e] hover:text-[#052f5e]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div key={activeCategory} className="space-y-8">
          {activeServices.map((service, index) => {
            const reverse = index % 2 !== 0;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
  key={`${activeCategory}-${service.title}`}
  ref={(el) => {
    cardRefs.current[index] = el;
  }}
  data-index={index}
  className={`service-detail-card ${
    reverse ? "service-slide-right" : "service-slide-left"
  } ${
    visibleCards.includes(index) ? "service-visible" : ""
  } grid overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm md:grid-cols-2`}
>
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="service-detail-image relative h-[360px] md:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-8 md:p-12 ${reverse ? "md:order-1" : ""
                    }`}
                >
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#87A5C0]">
                    {activeCategory}
                  </p>

                  <h3 className="text-4xl font-light text-[#052f5e]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {service.text}
                  </p>

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      Përfitimet
                    </p>

                    <ul className="space-y-3 text-sm text-slate-600">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <span className="rounded-full bg-[#052f5e]/10 px-5 py-3 text-xs font-semibold text-[#052f5e]">
                      Kohëzgjatja: {service.duration}
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