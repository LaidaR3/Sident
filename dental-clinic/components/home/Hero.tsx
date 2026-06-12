import Link from "next/link";
import Image from "next/image";

const tags = [
  "Kontrolle Dentare",
  "Pastrimi i Dhëmbëve",
  "Mbushje Dentare",
  "Kurora Dentare",
  "Retainere",
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <Image
          src="/images/img1.jpg"
          alt="Dental treatment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/20" />

        <div className="relative z-20 flex min-h-screen items-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 md:text-xs">
              Kujdes Dentar Modern
            </p>

            <h1 className="max-w-3xl text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Stomatologji Moderne
              <br />
              <span className="font-semibold">
                Me Kujdes Profesional.
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#00408a] md:px-4 md:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[#00408a] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0056b8]"
              >
                Cakto terminin
              </Link>

              <Link
                href="/services"
                className="inline-flex justify-center rounded-full border border-white px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-sky-900"
              >
                Shiko shërbimet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}