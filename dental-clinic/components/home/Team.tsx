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
        name: "Dr. Emri Mbiemri",
        role: "Stomatolog i Përgjithshëm",
        image: "/images/img4.jpg",
        text: "Kujdes dentar i përgjithshëm, diagnostikim dhe trajtime parandaluese.",
      },
      {
        name: "Dr. Emri Mbiemri",
        role: "Ortodont",
        image: "/images/img5.jpg",
        text: "Specialiste në drejtimin e dhëmbëve dhe krijimin e buzëqeshjeve të harmonizuara.",
      },
      {
        name: "Dr. Emri Mbiemri",
        role: "Kirurg Oral",
        image: "/images/img6.jpg",
        text: "Trajtime kirurgjikale orale me qasje të sigurt dhe profesionale.",
      },
      {
        name: "Dr. Emri Mbiemri",
        role: "Endodont",
        image: "/images/img4.jpg",
        text: "Trajtime të kanalit të rrënjës me kujdes dhe precizion.",
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
        name: "Dr. First Name Last Name",
        role: "General Dentist",
        image: "/images/img4.jpg",
        text: "General dental care, diagnosis, and preventive treatments.",
      },
      {
        name: "Dr. First Name Last Name",
        role: "Orthodontist",
        image: "/images/img5.jpg",
        text: "Specialized in straightening teeth and creating well-balanced smiles.",
      },
      {
        name: "Dr. First Name Last Name",
        role: "Oral Surgeon",
        image: "/images/img6.jpg",
        text: "Oral surgical treatments provided with a safe and professional approach.",
      },
      {
        name: "Dr. First Name Last Name",
        role: "Endodontist",
        image: "/images/img4.jpg",
        text: "Root canal treatments performed with care and precision.",
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
          className={`team-header mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end ${
            isVisible ? "team-visible" : ""
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
          className={`team-slider relative ${
            isVisible ? "team-visible" : ""
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
                      {t.readMore}
                      <span>→</span>
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