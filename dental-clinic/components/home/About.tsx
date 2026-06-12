"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "../ui/Counter";
import "./About.css";

export default function AboutSection() {
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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
          <div className={`about-slide-left ${isVisible ? "about-visible" : ""}`}>
            <div className="relative">
              <div className="about-image relative h-[360px] overflow-hidden rounded-[28px] md:h-[560px] md:rounded-[36px]">
                <Image
                  src="/images/img2.jpg"
                  alt="Sident Dental Clinic"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative mx-4 -mt-14 rounded-[24px] bg-white p-5 shadow-xl md:absolute md:-bottom-8 md:left-8 md:right-8 md:mx-0 md:mt-0 md:rounded-[28px] md:p-6 md:shadow-2xl">
                <div className="grid grid-cols-2 gap-4 text-center md:gap-6">
                  <div>
                    <div className="text-3xl font-light text-[#052f5e] md:text-4xl">
                      <span className="md:hidden">10k+</span>
                      <span className="hidden md:inline">
                        <Counter end={10} suffix="k+" />
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] text-slate-500 md:text-xs">
                      Pacientë të kënaqur
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-light text-[#052f5e] md:text-4xl">
                      <span className="md:hidden">15+</span>
                      <span className="hidden md:inline">
                        <Counter end={15} suffix="+" />
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] text-slate-500 md:text-xs">
                      Vite përvojë
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`about-slide-right pt-2 md:pt-0 ${
              isVisible ? "about-visible" : ""
            }`}
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#87A5C0] md:text-xs md:tracking-[0.35em]">
              Rreth Sident
            </p>

            <h2 className="text-3xl font-light leading-tight text-slate-900 md:text-6xl">
              Kujdes dentar modern,
              <br />
              <span className="text-[#052f5e]">me qasje njerëzore.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:mt-6 md:text-base md:leading-8">
              Sident Dental Clinic është krijuar për të ofruar më shumë se një
              trajtim dentar — një përvojë të qetë, të sigurt dhe profesionale
              për çdo pacient.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:mt-5 md:text-base md:leading-8">
              Me teknologji bashkëkohore, ekip të përkushtuar dhe kujdes të
              personalizuar, ne fokusohemi në parandalim, trajtime estetike dhe
              restauruese që ndihmojnë në ruajtjen e shëndetit oral dhe
              rikthimin e vetëbesimit.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 md:mt-8">
              <div className="rounded-2xl border border-slate-200 bg-[#fbfdfe] p-5 transition active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-lg">
                <h3 className="text-sm font-semibold text-[#052f5e]">
                  Kujdes i personalizuar
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Çdo trajtim planifikohet sipas nevojave të pacientit.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#fbfdfe] p-5 transition active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-lg">
                <h3 className="text-sm font-semibold text-[#052f5e]">
                  Ambient i rehatshëm
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Hapësirë e qetë, mikpritëse dhe e sigurt për çdo vizitë.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-[#052f5e] px-7 py-3 text-sm font-bold text-white transition active:scale-95 active:bg-[#00408a] md:mt-10 md:hover:bg-[#00408a]"
            >
              Mëso më shumë
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}