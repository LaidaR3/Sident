import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Konsultimi",
    text: "Dëgjojmë shqetësimet tuaja dhe kuptojmë çfarë rezultati dëshironi.",
  },
  {
    number: "02",
    title: "Diagnostikimi",
    text: "Bëjmë kontrollin dentar dhe vlerësimin për një plan të saktë trajtimi.",
  },
  {
    number: "03",
    title: "Plani i Trajtimit",
    text: "Ju shpjegojmë hapat, kohën dhe mënyrën më të mirë të trajtimit.",
  },
  {
    number: "04",
    title: "Trajtimi Final",
    text: "Realizojmë trajtimin me kujdes, rehati dhe profesionalizëm.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#CAD7E3] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00408a] md:text-xs md:tracking-[0.35em]">
            Procesi ynë
          </p>

          <h2 className="text-3xl font-light leading-tight text-slate-900 md:text-5xl">
            Nga vizita e parë deri te{" "}
            <span className="font-semibold text-[#00408a]">
              buzëqeshja finale
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:mt-6 md:text-base md:leading-8">
            Çdo hap është i organizuar qartë, që trajtimi juaj të jetë i lehtë,
            i sigurt dhe pa stres.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#00408a] px-7 py-3 text-sm font-semibold text-white transition active:scale-95 active:bg-[#052f5e] md:mt-9 md:px-8 md:py-4 md:hover:-translate-y-1 md:hover:bg-[#052f5e]"
          >
            Rezervo Terminin
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-[#00408a]/20 md:left-6" />

          <div className="space-y-6 md:space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-14 md:pl-16">
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#00408a] text-xs font-bold text-white shadow-lg md:h-12 md:w-12 md:text-sm">
                  {step.number}
                </div>

                <div className="mobile-slide-up rounded-[22px] bg-white p-5 shadow-sm transition active:scale-[0.98] md:rounded-[28px] md:p-7 md:hover:-translate-y-1 md:hover:shadow-lg">                  <h3 className="text-lg font-semibold text-[#052f5e] md:text-xl">
                  {step.title}
                </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}