"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  "/images/img17.jpg",
  "/images/img8.jpg",
  "/images/img3.jpg",
  "/images/img19.jpg",
  "/images/img10.jpg",
];

const translations = {
  sq: {
    eyebrow: "Galeria",
    title: "Pamje nga",
    highlight: "Sident",
    alt: "Sident Dental Clinic",
  },

  en: {
    eyebrow: "Gallery",
    title: "Inside",
    highlight: "Sident",
    alt: "Sident Dental Clinic",
  },
};

export default function MiniCarousel() {
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <section className="bg-[#f7fbff] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#00408a]">
              {text.eyebrow}
            </p>

            <h2 className="text-3xl font-light text-slate-900 md:text-4xl">
              {text.title}{" "}
              <span className="font-semibold text-[#00408a]">
                {text.highlight}
              </span>
            </h2>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((img, index) => (
            <div
              key={img}
              className={`relative shrink-0 overflow-hidden rounded-[28px] shadow-sm ${
                index === 0 ? "h-72 w-[420px]" : "h-72 w-[260px]"
              }`}
            >
              <Image
                src={img}
                alt={text.alt}
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}