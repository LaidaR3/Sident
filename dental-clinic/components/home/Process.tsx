import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Konsultimi",
    text: "Degjojme shqetesimet tuaja dhe kuptojme cfare rezultati deshironi.",
  },
  {
    number: "02",
    title: "Diagnostikimi",
    text: "Bejme kontrollin dentar dhe vleresimin per nje plan te sakte trajtimi.",
  },
  {
    number: "03",
    title: "Plani i Trajtimit",
    text: "Ju shpjegojme hapat, kohen dhe menyren me te mire te trajtimit.",
  },
  {
    number: "04",
    title: "Trajtimi Final",
    text: "Realizojme trajtimin me kujdes, rehati dhe profesionalizem.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#CAD7E3] px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#00408a]">
            Procesi yne
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-5xl">
            Nga vizita e pare deri te{" "}
            <span className="font-semibold text-[#00408a]">
              buzeqeshja finale
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Cdo hap eshte i organizuar qarte, qe trajtimi juaj te jete i lehte,
            i sigurt dhe pa stres.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#00408a] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#052f5e]"
          >
            Rezervo Terminin
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-[#00408a]/20" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-16">
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#00408a] text-sm font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <div className="rounded-[28px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-[#052f5e]">
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