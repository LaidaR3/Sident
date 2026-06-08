"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["Kontrolle", "Estetike", "Restauruese", "Ortodonci"];

const servicesByCategory = {
  Kontrolle: [
    {
      title: "Kontrolla Dentare",
      image: "/images/img2.jpg",
      duration: "30-45 minuta",
      text: "Kontrolla dentare ndihmon në zbulimin e hershëm të problemeve dhe ruajtjen e shëndetit oral afatgjatë.",
      benefits: [
        "Vlerësim i plotë i shëndetit oral",
        "Parandalim i problemeve dentare",
        "Këshilla të personalizuara për kujdesin ditor",
      ],
    },
    {
      title: "Pastrim Profesional",
      image: "/images/img3.jpg",
      duration: "45-60 minuta",
      text: "Pastrim profesional për largimin e gurëzave, pllakës bakteriale dhe njollave sipërfaqësore.",
      benefits: [
        "Dhëmbë më të pastër dhe më të freskët",
        "Parandalim i inflamacionit të mishrave",
        "Përmirësim i higjienës orale",
      ],
    },
  ],

  Estetike: [
    {
      title: "Zbardhimi i Dhëmbëve",
      image: "/images/img7.jpg",
      duration: "45-60 minuta",
      text: "Trajtim estetik i sigurt që ndihmon në rikthimin e shkëlqimit natyral të buzëqeshjes.",
      benefits: [
        "Rezultate të dukshme",
        "Procedurë e sigurt",
        "Buzëqeshje më e ndritshme",
      ],
    },
    {
      title: "Smile Design",
      image: "/images/img8.jpg",
      duration: "Sipas planit individual",
      text: "Planifikim estetik i buzëqeshjes duke marrë parasysh formën, ngjyrën dhe harmoninë e dhëmbëve.",
      benefits: [
        "Pamje më harmonike",
        "Trajtim i personalizuar",
        "Rezultat natyral dhe elegant",
      ],
    },
  ],

  Restauruese: [
    {
      title: "Kurora & Ura Dentare",
      image: "/images/img1.jpg",
      duration: "2-3 vizita",
      text: "Zgjidhje restauruese për rikthimin e funksionit dhe estetikës së dhëmbëve të dëmtuar ose që mungojnë.",
      benefits: [
        "Pamje natyrale",
        "Përmirësim i përtypjes",
        "Zgjidhje e qëndrueshme",
      ],
    },
    {
      title: "Implante Dentare",
      image: "/images/img9.jpg",
      duration: "Sipas rastit",
      text: "Zëvendësim modern për dhëmbët që mungojnë, me stabilitet dhe ndjesi të afërt me dhëmbët natyralë.",
      benefits: [
        "Stabilitet afatgjatë",
        "Pamje natyrale",
        "Komoditet gjatë të folurit dhe përtypjes",
      ],
    },
  ],

  Ortodonci: [
    {
      title: "Aparate Fikse",
      image: "/images/img5.jpg",
      duration: "Sipas planit ortodontik",
      text: "Trajtim ortodontik për drejtimin e dhëmbëve dhe përmirësimin e kafshimit.",
      benefits: [
        "Drejtim gradual i dhëmbëve",
        "Përmirësim i funksionit oral",
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
        "Plan trajtimi i personalizuar",
      ],
    },
  ],
};

export default function ServicesDetails() {
  const [activeCategory, setActiveCategory] = useState("Kontrolle");

  const activeServices =
    servicesByCategory[activeCategory as keyof typeof servicesByCategory];

  return (
    <section className="bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10">
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
              className={`rounded-full border px-6 py-3 text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#052f5e] bg-[#052f5e] text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#052f5e] hover:text-[#052f5e]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {activeServices.map((service, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={service.title}
                className={`grid overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm md:grid-cols-2`}
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="relative h-[360px] md:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
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

                    {/* <Link
                      href="/appointment"
                      className="rounded-full bg-[#052f5e] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#00408a]"
                    >
                      Rezervo Termin
                    </Link> */}
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