export default function StatsSection() {
  const stats = [
    {
      number: "15+",
      label: "Vite Eksperiencë",
    },
    {
      number: "10K+",
      label: "Pacientë të Kënaqur",
    },
    {
      number: "20K+",
      label: "Trajtime të Realizuara",
    },
    {
      number: "100%",
      label: "Përkushtim ndaj Cilësisë",
    },
  ];

  return (
    <section className="bg-[#052f5e] px-6 py-28 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-200">
            Në Shifra
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Besimi i pacientëve
            <br />
            në çdo buzëqeshje
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-6xl font-light text-white md:text-7xl">
                {stat.number}
              </h3>

              <div className="mx-auto mt-5 h-px w-12 bg-blue-300" />

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