"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./WhyChooseUs.css";

const items = [
  {
    title: "Teknologji Moderne",
    text: "Përdorim pajisje dhe teknologji bashkëkohore për trajtime më të sakta dhe më komode.",
  },
  {
    title: "Kujdes i Personalizuar",
    text: "Çdo plan trajtimi përshtatet sipas nevojave, dëshirave dhe shëndetit të pacientit.",
  },
  {
    title: "Komoditet në Çdo Vizitë",
    text: "Një ambient i qetë dhe mikpritës që ju bën të ndiheni rehat gjatë çdo trajtimi.",
  },
  {
    title: "Rezultate Natyrale",
    text: "Fokusohemi në buzëqeshje të shëndetshme, estetike dhe me pamje natyrale.",
  },
];

export default function WhyChooseUs() {
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
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#CAD7E3] px-5 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-14">
          <div>
            <p
              className={`why-slide-left mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#243856]/60 md:mb-5 md:tracking-[0.35em] ${
                isVisible ? "why-visible" : ""
              }`}
            >
              Pse të na zgjidhni ne
            </p>

            <h2
              className={`why-slide-left why-delay-100 max-w-2xl text-3xl font-light leading-tight text-[#243856] md:text-[4rem] md:leading-[1.15] ${
                isVisible ? "why-visible" : ""
              }`}
            >
              Kujdes profesional
              <br />
              për buzëqeshjen tuaj.
            </h2>

            <div className="mt-8 border-t border-[#243856]/15 md:mt-12">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className={`why-slide-left why-item group border-b border-[#243856]/15 py-5 transition-all duration-500 md:py-7 ${
                    index === 0
                      ? "why-delay-200"
                      : index === 1
                      ? "why-delay-300"
                      : index === 2
                      ? "why-delay-400"
                      : "why-delay-500"
                  } ${isVisible ? "why-visible" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4 md:gap-8">
                    <div className="flex gap-4 md:gap-6">
                      <span className="pt-1 text-xs text-[#243856]/40 transition md:text-sm md:group-hover:text-[#243856]">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="text-xl font-light text-[#243856] md:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-7 text-[#243856]/65">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/40 text-sm text-[#243856] transition active:scale-90 md:opacity-0 md:group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`why-slide-right why-delay-400 why-image relative h-[420px] overflow-hidden rounded-[28px] md:h-[620px] md:rounded-[40px] ${
              isVisible ? "why-visible" : ""
            }`}
          >
            <Image
              src="/images/img3.jpg"
              alt="Dental care"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}