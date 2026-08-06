"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "Historia Jonë",
    title1: "Një klinikë e ndërtuar",
    title2: "mbi besim dhe kujdes.",

    paragraph1:
      "Sident Dental Clinic u krijua me qëllimin për të sjellë një qasje më të rehatshme, më moderne dhe më njerëzore në kujdesin dentar. Që nga fillimi, fokusi ynë ka qenë të krijojmë një ambient ku pacientët ndihen të mirëpritur, të sigurt dhe të dëgjuar.",

    paragraph2:
      "Me kalimin e viteve, klinika është zhvilluar duke investuar në teknologji bashkëkohore, pajisje moderne dhe metoda të avancuara trajtimi. Çdo vizitë planifikohet me kujdes, duke u bazuar në nevojat individuale të pacientit dhe në standarde të larta profesionale.",

    values: [
      "Qasje e butë",
      "Teknologji moderne",
      "Besim afatgjatë",
    ],

    imageAlt: "Historia e Sident Dental Clinic",

    experience:
      "vite përkushtim në ofrimin e kujdesit dentar profesional.",
  },

  en: {
    eyebrow: "Our Story",
    title1: "A clinic built",
    title2: "on trust and care.",

    paragraph1:
      "Sident Dental Clinic was founded with the vision of bringing a more comfortable, modern, and patient-centered approach to dental care. From the very beginning, our goal has been to create an environment where every patient feels welcomed, safe, and listened to.",

    paragraph2:
      "Over the years, our clinic has continued to grow by investing in modern technology, advanced equipment, and innovative treatment methods. Every visit is carefully planned according to each patient's individual needs while maintaining the highest professional standards.",

    values: [
      "Gentle approach",
      "Modern technology",
      "Long-term trust",
    ],

    imageAlt: "The story of Sident Dental Clinic",

    experience:
      "years of dedication to providing professional dental care.",
  },
};

export default function StorySection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-white px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            {t.title1}
            <br />
            <span className="text-[#052f5e]">{t.title2}</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {t.paragraph1}
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            {t.paragraph2}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {t.values.map((value, index) => (
              <div
                key={value}
                className="border-l border-slate-200 pl-5"
              >
                <h3 className="text-3xl font-light text-[#052f5e]">
                  {String(index + 1).padStart(2, "0")}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[560px] overflow-hidden rounded-[36px]">
            <Image
              src="/images/img19.jpg"
              alt={t.imageAlt}
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-[28px] bg-[#052f5e] p-7 text-white shadow-2xl md:block">
            <p className="text-4xl font-light">15+</p>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              {t.experience}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}