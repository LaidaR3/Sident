"use client";

import { useEffect, useRef, useState } from "react";
import "./MissionVision.css";

const cards = [
  {
    number: "01",
    label: "Misioni",
    title: "Kujdes i Personalizuar",
    text: "Të ofrojmë kujdes dentar profesional, të sigurt dhe të personalizuar për çdo pacient, duke kombinuar ekspertizën, teknologjinë moderne dhe përkushtimin njerëzor.",
  },
  {
    number: "02",
    label: "Vizioni",
    title: "Standarde Moderne",
    text: "Të jemi një nga klinikat dentare më të besuara, duke vendosur standarde të larta në cilësi, inovacion dhe përvojën e pacientit.",
  },
  {
    number: "03",
    label: "Vlerat",
    title: "Besim & Integritet",
    text: "Profesionalizëm, integritet, kujdes ndaj pacientit, siguri dhe përmirësim i vazhdueshëm në çdo shërbim që ofrojmë.",
  },
];

export default function MissionVision() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
         rootMargin: "-100px 0px",
    threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#CAD7E3] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mission-header mb-16 text-center ${
            isVisible ? "mission-visible" : ""
          }`}
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#052f5e]/60">
            Misioni & Vizioni
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            Parimet mbi të cilat
            <br />
            <span className="text-[#052f5e]">ndërtojmë besimin</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
            Çdo vendim, trajtim dhe përvojë në klinikën tonë bazohet
            në profesionalizëm, kujdes dhe përkushtim ndaj pacientëve.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.number}
              className={`mission-card group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white/70 hover:shadow-2xl ${
                isVisible ? "mission-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/30 blur-xl transition duration-500 group-hover:scale-150" />

              <div className="absolute right-6 top-2 text-7xl font-light text-[#052f5e]/10 transition duration-500 group-hover:text-[#052f5e]/20">
                {card.number}
              </div>

              <div className="relative z-10 top-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#052f5e]/60">
                  {card.label}
                </p>

                <h3 className="text-3xl font-light text-[#052f5e]">
                  {card.title}
                </h3>

                <div className="mission-line mt-5 h-[2px] w-12 bg-[#052f5e]" />

                <p className="mt-6 text-sm leading-7 text-slate-700">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}