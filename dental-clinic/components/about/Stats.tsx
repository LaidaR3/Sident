"use client";

import { useEffect, useRef, useState } from "react";
import Counter from "../ui/Counter";
import "./StatsSection.css";

export default function StatsSection() {
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
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      end: 15,
      suffix: "+",
      label: "Vite Eksperiencë",
    },
    {
      end: 10,
      suffix: "K+",
      label: "Pacientë të Kënaqur",
    },
    {
      end: 20,
      suffix: "K+",
      label: "Trajtime të Realizuara",
    },
    {
      end: 100,
      suffix: "%",
      label: "Përkushtim ndaj Cilësisë",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#052f5e] px-6 py-28 text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`stats-header text-center ${
            isVisible ? "stats-visible" : ""
          }`}
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-200">
            Në Shifra
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Besimi i pacientëve
            <br />
            në çdo buzëqeshje
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stats-card text-center ${
                isVisible ? "stats-visible" : ""
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <h3 className="text-6xl font-light md:text-7xl">
                {isVisible && (
                  <Counter end={stat.end} suffix={stat.suffix} />
                )}
              </h3>

              <div className="stats-line mx-auto mt-5 h-px w-12 bg-blue-300" />

              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}