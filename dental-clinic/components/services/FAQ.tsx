"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "FAQ",
    title: "Pyetje të",
    highlight: "Shpeshta",
    description:
      "Përgjigje për pyetjet që pacientët tanë bëjnë më shpesh rreth trajtimeve dhe vizitave në klinikë.",

    faqs: [
      {
        question: "Sa shpesh duhet të bëj kontrollë dentare?",
        answer:
          "Rekomandohet një kontrollë çdo 6 muaj për të monitoruar shëndetin oral dhe për të parandaluar problemet dentare.",
      },
      {
        question: "A është i dhimbshëm zbardhimi i dhëmbëve?",
        answer:
          "Zbardhimi profesional është një procedurë e sigurt dhe zakonisht pa dhimbje. Disa pacientë mund të përjetojnë ndjeshmëri të lehtë dhe të përkohshme.",
      },
      {
        question: "Sa zgjat vendosja e implanteve dentare?",
        answer:
          "Kohëzgjatja ndryshon sipas rastit, por procesi zakonisht zhvillohet në disa faza për të garantuar rezultat optimal dhe afatgjatë.",
      },
      {
        question: "Kur duhet të fillojë trajtimi ortodontik?",
        answer:
          "Vlerësimi ortodontik mund të bëhet që në moshë të hershme, por trajtimi përcaktohet sipas nevojave individuale të pacientit.",
      },
      {
        question: "A pranoni pacientë të të gjitha moshave?",
        answer:
          "Po, klinika jonë ofron shërbime dentare për fëmijë, adoleshentë dhe të rritur.",
      },
    ],
  },

  en: {
    eyebrow: "FAQ",
    title: "Frequently",
    highlight: "Asked Questions",
    description:
      "Answers to the questions our patients ask most frequently about treatments and clinic visits.",

    faqs: [
      {
        question: "How often should I have a dental check-up?",
        answer:
          "We recommend having a dental check-up every six months to monitor your oral health and prevent dental problems.",
      },
      {
        question: "Is teeth whitening painful?",
        answer:
          "Professional teeth whitening is a safe procedure and is usually painless. Some patients may experience mild, temporary sensitivity.",
      },
      {
        question: "How long does dental implant treatment take?",
        answer:
          "The duration depends on each case, but treatment is usually completed in several stages to ensure the best long-term results.",
      },
      {
        question: "When should orthodontic treatment begin?",
        answer:
          "An orthodontic evaluation can be performed at an early age, while treatment is planned according to each patient's individual needs.",
      },
      {
        question: "Do you treat patients of all ages?",
        answer:
          "Yes. Our clinic provides dental care for children, teenagers, and adults.",
      },
    ],
  },
};

export default function FAQSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#fbfdfe] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            {t.title}
            <br />
            <span className="text-[#052f5e]">{t.highlight}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500">
            {t.description}
          </p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-light text-[#052f5e]">
                  {faq.question}
                </span>

                <span className="text-2xl text-[#052f5e]">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}