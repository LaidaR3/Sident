const steps = [
  {
    number: "01",
    title: "Konsulta",
    text: "Diskutojmë nevojat, shqetësimet dhe pritshmëritë tuaja për trajtimin.",
  },
  {
    number: "02",
    title: "Diagnostikimi",
    text: "Realizojmë kontrollin dhe vlerësimin profesional për të identifikuar zgjidhjen më të përshtatshme.",
  },
  {
    number: "03",
    title: "Plani i Trajtimit",
    text: "Përgatisim një plan të personalizuar bazuar në nevojat dhe objektivat tuaja.",
  },
  {
    number: "04",
    title: "Trajtimi",
    text: "Kryejmë trajtimin me teknologji moderne dhe kujdes maksimal ndaj pacientit.",
  },
];

export default function TreatmentProcess() {
  return (
    <section className="bg-[#CAD7E3] px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#052f5e]/60">
            Procesi Ynë
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            Nga konsultimi
            <br />
            <span className="text-[#052f5e]">
              deri te rezultati final
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
            Një proces i thjeshtë, transparent dhe i fokusuar në
            komoditetin dhe rezultatet më të mira për pacientin.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#052f5e]/20 md:block" />

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/60 text-2xl font-light text-[#052f5e] backdrop-blur-sm">
                  {step.number}
                </div>

                <div className="mt-8 rounded-[30px] border border-white/40 bg-white/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 hover:shadow-xl">
                  <h3 className="text-2xl font-light text-[#052f5e]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
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