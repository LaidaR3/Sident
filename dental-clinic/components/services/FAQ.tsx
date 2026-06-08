"use client";

import { useState } from "react";

const faqs = [
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
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#fbfdfe] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            FAQ
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            Pyetje të
            <br />
            <span className="text-[#052f5e]">Shpeshta</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500">
            Përgjigje për pyetjet që pacientët tanë bëjnë më shpesh
            rreth trajtimeve dhe vizitave në klinikë.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
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