"use client";

import { useState } from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const categories = ["Kontrolle", "Estetike", "Restauruese", "Ortodonci"];

const servicesByCategory = {
  Kontrolle: [
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

  Estetike: [
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

  Restauruese: [
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

  Ortodonci: [
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
};

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("Kontrolle");

  const activeServices =
    servicesByCategory[activeCategory as keyof typeof servicesByCategory];

  return (
    <section className="bg-[#fbfdfe] px-5 py-16 text-slate-800 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
            Trajtimet Tona
          </p>

          <h2 className="text-3xl font-light leading-tight md:text-6xl">
            Buzëqeshja Juaj
            <br />
            <span className="text-[#052f5e]">
              Ndikon në Vetëbesimin Tuaj
            </span>
          </h2>

<div className="mt-8 flex flex-wrap justify-center gap-2">
  {categories.map((item) => (
    <button
      key={item}
      type="button"
      onTouchStart={() => setActiveCategory(item)}
      onClick={() => setActiveCategory(item)}
      className={`rounded-full border px-5 py-2 text-xs transition-all duration-300 ${
        activeCategory === item
          ? "border-[#00408a] bg-[#00408a] text-white"
          : "border-slate-200 bg-white text-slate-500"
      }`}
    >
      {item}
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
                    {activeCategory}
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