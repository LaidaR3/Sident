"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./TechFacilities.css";

const facilities = [
  {
    title: "Pajisje Moderne",
    text: "Teknologji bashkëkohore për trajtime më të sakta, më të sigurta dhe më efikase.",
  },
  {
    title: "Ambient Steril",
    text: "Higjienë dhe sterilizim sipas standardeve të larta për sigurinë e çdo pacienti.",
  },
  {
    title: "Diagnostikim Preciz",
    text: "Vlerësim i kujdesshëm dhe plan trajtimi i personalizuar për çdo rast.",
  },
  {
    title: "Komoditet Maksimal",
    text: "Hapësirë e qetë dhe mikpritëse për një përvojë sa më të rehatshme.",
  },
];

export default function TechnologyFacilities() {
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
        threshold: 0.45,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`tech-header mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end ${
            isVisible ? "tech-visible" : ""
          }`}
        >
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
              Teknologji & Ambient
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Një hapësirë moderne
              <br />
              <span className="text-[#052f5e]">për kujdes të sigurt</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-500 md:ml-auto">
            Klinika jonë është projektuar për të ofruar rehati, pastërti dhe
            siguri në çdo vizitë, duke kombinuar ambientin modern me teknologji
            të avancuar dentare.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div
            className={`tech-image relative h-[560px] overflow-hidden rounded-[36px] ${
              isVisible ? "tech-visible" : ""
            }`}
          >
            <Image
              src="/images/img13.jpg"
              alt="Teknologji dhe ambient i klinikës"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-5">
            {facilities.map((item, index) => (
              <div
                key={item.title}
                className={`tech-card rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isVisible ? "tech-visible" : ""
                }`}
                style={{
                  transitionDelay: `${index * 0.12}s`,
                }}
              >
                <h3 className="text-xl font-light text-[#052f5e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}