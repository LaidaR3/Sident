"use client";

import Image from "next/image";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img10.jpg",
];

export default function MiniCarousel() {
  return (
    <section className="bg-[#f7fbff] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#00408a]">
              Galeria
            </p>
            <h2 className="text-3xl font-light text-slate-900 md:text-4xl">
              Pamje nga <span className="font-semibold text-[#00408a]">Sident</span>
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
                alt="Sident Dental Clinic"
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