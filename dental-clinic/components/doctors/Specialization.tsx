const specializations = [
  {
    title: "Stomatologji e Përgjithshme",
    text: "Kontrolle rutinë, diagnostikim dhe trajtime parandaluese për ruajtjen e shëndetit oral.",
  },
  {
    title: "Ortodonci",
    text: "Drejtimi i dhëmbëve dhe përmirësimi i kafshimit me zgjidhje moderne ortodontike.",
  },
  {
    title: "Kirurgji Orale",
    text: "Procedura kirurgjikale të realizuara me kujdes, siguri dhe teknologji moderne.",
  },
  {
    title: "Implantologji",
    text: "Zëvendësim afatgjatë i dhëmbëve që mungojnë me rezultate natyrale dhe funksionale.",
  },
  {
    title: "Estetikë Dentare",
    text: "Përmirësimi i formës, ngjyrës dhe harmonisë së buzëqeshjes për rezultate elegante.",
  },
  {
    title: "Restaurime Dentare",
    text: "Kurora, ura dhe trajtime restauruese për rikthimin e funksionit dhe estetikës.",
  },
];

export default function Specializations() {
  return (
    <section className="bg-[#CAD7E3] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#052f5e]/60">
            Ekspertiza Jonë
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            Fushat tona të
            <br />
            <span className="text-[#052f5e]">specializimit</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
            Ekipi ynë kombinon përvojën klinike me teknologjinë moderne
            për të ofruar trajtime të avancuara në fusha të ndryshme të
            stomatologjisë.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {specializations.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/40 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 hover:shadow-xl"
            >
              <h3 className="text-2xl font-light text-[#052f5e]">
                {item.title}
              </h3>

              <div className="mt-4 h-[2px] w-12 bg-[#052f5e]" />

              <p className="mt-6 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}