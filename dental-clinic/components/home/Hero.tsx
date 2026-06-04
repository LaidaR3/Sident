import Link from "next/link";
import Image from "next/image";

const tags = [
  "Dental Checkups",
  "Teeth Cleaning",
  "Tooth Filling",
  "Crown Treatment",
  "Retainers",
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-screen w-full overflow-hidden bg-black text-white">
        <Image
          src="/images/img1.jpg"
          alt="Dental treatment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

        <div className="relative z-20 flex h-full flex-col justify-between px-6 py-8 md:px-10">
          <div />

          <div className="grid items-end gap-10 pb-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/80">
                Modern Dental Care
              </p>

              <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
                Modern Dentistry
                <br />
                <span className="font-semibold">
                  With Gentle Care.
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex rounded-full bg-[#42679E] px-7 py-3 text-white transition-all duration-300 hover:bg-green-500"
                >
                  Hover Test
                </Link>

                <Link
                  href="/services"
                  className="inline-flex rounded-full border border-white px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-sky-900"
                >
                  View Services →
                </Link>
              </div>
            </div>

            <div className="max-w-sm md:ml-auto md:text-right">
              <div className="mb-5 inline-flex rounded-2xl bg-white/20 px-5 py-3 text-2xl font-light backdrop-blur-md">
                10k+
              </div>

              <p className="text-sm leading-6 text-white/85">
                Expert dental care for healthy, confident smiles at every age,
                delivered with comfort, precision, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}