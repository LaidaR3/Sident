"use client";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "Lokacioni",
    title: "Na vizitoni në",
    highlight: "klinikën tonë",
  },

  en: {
    eyebrow: "Location",
    title: "Visit us at",
    highlight: "our clinic",
  },
};

export default function MapSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-light text-slate-900 md:text-6xl">
            {t.title}
            <br />
            <span className="text-[#052f5e]">
              {t.highlight}
            </span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=42.6819376,21.1786204&z=17&output=embed"
            className="h-[520px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}