"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./DoctorProfile.css";

const translations = {
  sq: {
    eyebrow: "Profilet e Doktorëve",
    titleFirst: "Eksperiencë, kujdes",
    titleSecond: "dhe përkushtim profesional",
    description:
      "Njihuni më afër me ekipin tonë dhe specializimet që ndihmojnë në ofrimin e kujdesit dentar të sigurt, modern dhe të personalizuar.",
    specializationsLabel: "Specializime",

    doctors: [
      {
        name: "Prof. Dr. Sinan Rusinovci",
        role: "Kirurg Maksilofacial",
        image: "/images/img4.jpg",
        description:
          "Me përvojë të gjatë në kirurgjinë maksilofaciale, Prof. Dr. Sinan Rusinovci ofron diagnostikim profesional dhe trajtime të avancuara me fokus në sigurinë dhe mirëqenien e pacientit.",
        focus:
          "Qasja e tij kombinon ekspertizën klinike, planifikimin e kujdesshëm dhe teknologjinë moderne për rezultate të sigurta dhe afatgjata.",
        stats: [
          "10+ vite përvojë",
          "3000+ pacientë",
          "Kirurgji maksilofaciale",
          "Trajtime të avancuara",
        ],
        specializations: [
          "Kirurgji maksilofaciale",
          "Diagnostikim",
          "Kirurgji orale",
          "Planifikim kirurgjik",
        ],
      },
      {
        name: "Dr. Enis Beka",
        role: "Kirurg Oral",
        image: "/images/img5.jpg",
        description:
          "Dr. Enis Beka ofron trajtime kirurgjikale orale me qasje profesionale, të sigurt dhe të përshtatur sipas nevojave të pacientit.",
        focus:
          "Përmes planifikimit të detajuar dhe teknikave bashkëkohore, ai synon procedura sa më të rehatshme dhe rikuperim të sigurt.",
        stats: [
          "8+ vite përvojë",
          "Kirurgji orale",
          "Ekstraksione",
          "Trajtime kirurgjikale",
        ],
        specializations: [
          "Kirurgji orale",
          "Ekstraksione",
          "Apikoektomi",
          "Rikuperim i sigurt",
        ],
      },
      {
        name: "Dr. Arbëreshë Pnishi - Berisha",
        role: "Ortodonte",
        image: "/images/img6.jpg",
        description:
          "E specializuar në trajtime ortodontike moderne, Dr. Arbëreshë Pnishi - Berisha ndihmon pacientët në drejtimin e dhëmbëve dhe përmirësimin e kafshimit.",
        focus:
          "Çdo plan trajtimi përshtatet sipas nevojave individuale të pacientit, me fokus në rezultate të qëndrueshme dhe buzëqeshje harmonike.",
        stats: [
          "8+ vite përvojë",
          "Aparate fikse",
          "Aparate transparente",
          "Planifikim ortodontik",
        ],
        specializations: [
          "Ortodonci",
          "Drejtim i dhëmbëve",
          "Kafshim korrekt",
          "Retainer",
        ],
      },
      {
        name: "Dr. Blerta Rusinovci",
        role: "Stomatologe",
        image: "/images/img6.jpg",
        description:
          "Dr. Blerta Rusinovci ofron kujdes stomatologjik të përgjithshëm, diagnostikim dhe trajtime parandaluese e restauruese.",
        focus:
          "Qasja e saj e kujdesshme dhe e personalizuar ndihmon pacientët të ndihen të sigurt dhe të qetë gjatë çdo vizite.",
        stats: [
          "Kujdes stomatologjik",
          "Kontrolle dentare",
          "Trajtime parandaluese",
          "Restaurime dentare",
        ],
        specializations: [
          "Stomatologji e përgjithshme",
          "Parandalim oral",
          "Diagnostikim",
          "Restaurime",
        ],
      },
      {
        name: "Floreta Jusufi",
        role: "Asistente Dentare",
        image: "/images/img6.jpg",
        description:
          "Floreta Jusufi mbështet ekipin mjekësor gjatë trajtimeve dhe kujdeset për organizimin, higjienën dhe komoditetin e pacientit.",
        focus:
          "Me qasje të kujdesshme dhe profesionale, ajo kontribuon në një përvojë të sigurt, të organizuar dhe të rehatshme për çdo pacient.",
        stats: [
          "Asistencë klinike",
          "Përgatitje e materialeve",
          "Higjienë dhe sterilizim",
          "Kujdes ndaj pacientit",
        ],
        specializations: [
          "Asistencë dentare",
          "Sterilizim",
          "Organizim klinik",
          "Komoditet i pacientit",
        ],
      },
    ],
  },

  en: {
    eyebrow: "Doctor Profiles",
    titleFirst: "Experience, care",
    titleSecond: "and professional dedication",
    description:
      "Get to know our team and the areas of expertise that help us provide safe, modern, and personalized dental care.",
    specializationsLabel: "Specializations",

    doctors: [
      {
        name: "Prof. Dr. Sinan Rusinovci",
        role: "Maxillofacial Surgeon",
        image: "/images/img4.jpg",
        description:
          "With extensive experience in maxillofacial surgery, Prof. Dr. Sinan Rusinovci provides professional diagnosis and advanced treatments focused on patient safety and well-being.",
        focus:
          "His approach combines clinical expertise, careful planning, and modern technology to achieve safe and long-lasting results.",
        stats: [
          "10+ years of experience",
          "3000+ patients",
          "Maxillofacial surgery",
          "Advanced treatments",
        ],
        specializations: [
          "Maxillofacial surgery",
          "Diagnosis",
          "Oral surgery",
          "Surgical planning",
        ],
      },
      {
        name: "Dr. Enis Beka",
        role: "Oral Surgeon",
        image: "/images/img5.jpg",
        description:
          "Dr. Enis Beka provides oral surgical treatments through a professional, safe, and patient-centered approach.",
        focus:
          "Through detailed planning and modern techniques, he aims to provide comfortable procedures and a safe recovery.",
        stats: [
          "8+ years of experience",
          "Oral surgery",
          "Extractions",
          "Surgical treatments",
        ],
        specializations: [
          "Oral surgery",
          "Extractions",
          "Apicoectomy",
          "Safe recovery",
        ],
      },
      {
        name: "Dr. Arbëreshë Pnishi - Berisha",
        role: "Orthodontist",
        image: "/images/img6.jpg",
        description:
          "Specialized in modern orthodontic treatments, Dr. Arbëreshë Pnishi - Berisha helps patients straighten their teeth and improve bite alignment.",
        focus:
          "Every treatment plan is tailored to the patient’s individual needs, with a focus on long-lasting results and a balanced smile.",
        stats: [
          "8+ years of experience",
          "Fixed braces",
          "Clear aligners",
          "Orthodontic planning",
        ],
        specializations: [
          "Orthodontics",
          "Teeth alignment",
          "Bite correction",
          "Retainers",
        ],
      },
      {
        name: "Dr. Blerta Rusinovci",
        role: "Dentist",
        image: "/images/img6.jpg",
        description:
          "Dr. Blerta Rusinovci provides general dental care, diagnosis, and preventive and restorative treatments.",
        focus:
          "Her careful and personalized approach helps patients feel safe and comfortable during every visit.",
        stats: [
          "General dental care",
          "Dental checkups",
          "Preventive treatments",
          "Dental restorations",
        ],
        specializations: [
          "General dentistry",
          "Oral prevention",
          "Diagnosis",
          "Restorations",
        ],
      },
      {
        name: "Floreta Jusufi",
        role: "Dental Assistant",
        image: "/images/img6.jpg",
        description:
          "Floreta Jusufi supports the clinical team during treatments and helps maintain organization, hygiene, and patient comfort.",
        focus:
          "Through a careful and professional approach, she contributes to a safe, organized, and comfortable experience for every patient.",
        stats: [
          "Clinical assistance",
          "Material preparation",
          "Hygiene and sterilization",
          "Patient care",
        ],
        specializations: [
          "Dental assistance",
          "Sterilization",
          "Clinical organization",
          "Patient comfort",
        ],
      },
    ],
  },
};

export default function DoctorsProfiles() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.index
          );

          if (entry.isIntersecting) {
            setVisibleItems((previous) =>
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

    const currentItems = itemRefs.current;

    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="profiles"
      className="scroll-mt-24 bg-white px-6 py-24 text-slate-800 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="doctors-header mb-20 max-w-3xl">
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

          <p className="mt-6 text-sm leading-7 text-slate-500">
            {t.description}
          </p>
        </div>

        <div className="space-y-32">
          {t.doctors.map((doctor, index) => {
            const reverse = index % 2 !== 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={`${doctor.name}-${doctor.role}`}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                <div
                  className={`doctor-image-slide ${
                    reverse
                      ? "md:order-2 doctor-slide-right"
                      : "doctor-slide-left"
                  } ${isVisible ? "doctor-visible" : ""}`}
                >
                  <div className="relative h-[560px] overflow-hidden rounded-[36px] bg-slate-100">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className={`doctor-content-slide ${
                    reverse
                      ? "md:order-1 doctor-slide-left"
                      : "doctor-slide-right"
                  } ${isVisible ? "doctor-visible" : ""}`}
                >
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
                    {doctor.role}
                  </p>

                  <h3 className="text-4xl font-light text-[#052f5e] md:text-5xl">
                    {doctor.name}
                  </h3>

                  <p className="mt-6 text-base leading-8 text-slate-600">
                    {doctor.description}
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-500">
                    {doctor.focus}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {doctor.stats.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-[#fbfdfe] px-5 py-4 text-sm font-medium text-[#052f5e]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                      {t.specializationsLabel}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {doctor.specializations.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#052f5e]/10 px-4 py-2 text-xs font-medium text-[#052f5e]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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