"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";
import "./TeamSection.css";

import "swiper/css";
import "swiper/css/navigation";

const translations = {
  sq: {
    eyebrow: "Ekipi Ynë",
    title: "Njihuni me specialistët tanë",
    description:
      "Një ekip profesionistësh të përkushtuar për kujdes dentar cilësor, teknologji moderne dhe përvojë të rehatshme për çdo pacient.",
    readMore: "Lexo më shumë",

    doctors: [
      {
        name: "Prof. Dr. Sinan Rusinovci",
        role: "Kirurg Maksilofacial",
        image: "/images/img4.jpg",
        text: "Diagnostikim dhe trajtim kirurgjikal i semundjeve, demtimeve dhe anomalive te gojes, nofullave dhe regjionit te fytyres.",
      },
      {
        name: "Dr. Enis Beka",
        role: "Kirurg Oral",
        image: "/images/img5.jpg",
        text: "Trajtime kirurgjikale orale, duke perfshire nxjerrjen e dhembeve, nderhyrjet ne indet orale dhe procedura te tjera kirurgjikale.",
      },
      {
        name: "Dr. Arbereshe Pnishi-Berisha",
        role: "Ortodonte",
        image: "/images/img6.jpg",
        text: "Diagnostikim dhe trajtim i crregullimeve te pozicionit te dhembeve dhe nofullave per nje kafshim funksional dhe buzeqeshje harmonike.",
      },
      {
        name: "Dr. Blerta Rusinovci",
        role: "Stomatologe",
        image: "/images/img4.jpg",
        text: "Kontrolle stomatologjike, diagnostikim, trajtime parandaluese dhe restauruese per ruajtjen e shendetit oral.",
      },
      {
        name: "Dr. Floreta Jusufi",
        role: "Asistente Stomatologjike",
        image: "/images/img4.jpg",
        text: "Asistence profesionale gjate trajtimeve stomatologjike dhe kujdes per komoditetin dhe sigurine e pacienteve.",
      },
    ],
  },

  en: {
    eyebrow: "Our Team",
    title: "Meet our dental specialists",
    description:
      "A dedicated team of professionals focused on high-quality dental care, modern technology, and a comfortable experience for every patient.",
    readMore: "Read more",

    doctors: [
      {
        name: "Prof. Dr. Sinan Rusinovci",
        role: "Maxillofacial Surgeon",
        image: "/images/img4.jpg",
        text: "Diagnosis and surgical treatment of diseases, injuries, and abnormalities affecting the mouth, jaws, and facial region.",
      },
      {
        name: "Dr. Enis Beka",
        role: "Oral Surgeon",
        image: "/images/img5.jpg",
        text: "Oral surgical treatments, including tooth extractions, procedures involving oral tissues, and other surgical interventions.",
      },
      {
        name: "Dr. Arbereshe Pnishi-Berisha",
        role: "Orthodontist",
        image: "/images/img6.jpg",
        text: "Diagnosis and treatment of tooth and jaw alignment issues to achieve a functional bite and a harmonious smile.",
      },
      {
        name: "Dr. Blerta Rusinovci",
        role: "General Dentist",
        image: "/images/img4.jpg",
        text: "Dental examinations, diagnosis, preventive care, and restorative treatments focused on maintaining long-term oral health.",
      },
      {
        name: "Dr. Floreta Jusufi",
        role: "Dental Assistant",
        image: "/images/img4.jpg",
        text: "Professional assistance during dental procedures while helping ensure patient comfort, safety, and quality care.",
      },
    ],
  },
};

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];

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
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#052f5e] px-6 py-20 text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`team-header mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end ${isVisible ? "team-visible" : ""
            }`}
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-200">
              {t.eyebrow}
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              {t.title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-blue-100">
            {t.description}
          </p>
        </div>

        <div
          className={`team-slider relative ${isVisible ? "team-visible" : ""
            }`}
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >
            {t.doctors.map((doctor, index) => (
              <SwiperSlide key={`${doctor.role}-${index}`}>
                <div className="team-card grid min-h-[360px] overflow-hidden rounded-[28px] bg-white text-[#052f5e] shadow-xl md:grid-cols-[45%_55%]">
                  <div className="relative min-h-[320px] md:min-h-full">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                      {doctor.role}
                    </p>

                    <h3 className="text-3xl font-light">{doctor.name}</h3>

                    <p className="mt-5 text-sm leading-7 text-slate-500">
                      {doctor.text}
                    </p>

                    <Link
                      href="/doctors#profiles"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#052f5e] transition hover:gap-3"
                    >
                      {/* {t.readMore}
                      <span>→</span> */}
                    </Link>

                    <div className="mt-8 h-px w-16 bg-[#052f5e]/20" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label={
              language === "sq" ? "Specialisti i mëparshëm" : "Previous specialist"
            }
            className="team-prev absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#052f5e] shadow-xl"
          >
            ←
          </button>

          <button
            type="button"
            aria-label={
              language === "sq" ? "Specialisti tjetër" : "Next specialist"
            }
            className="team-next absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#052f5e] shadow-xl"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}