export default function MissionVision() {
  return (
    <section className="bg-[#CAD7E3] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#052f5e]/60">
            Misioni & Vizioni
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            Parimet mbi të cilat
            <br />
            <span className="text-[#052f5e]">
              ndërtojmë besimin
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
            Çdo vendim, trajtim dhe përvojë në klinikën tonë bazohet
            në profesionalizëm, kujdes dhe përkushtim ndaj pacientëve.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white/70 hover:shadow-2xl">
            <div className="absolute right-6 top-2 text-7xl font-light text-[#052f5e]/10">
              01
            </div>

            <div className="relative z-10 top-4">
              <p className="mb-3 text-[10px]  font-bold uppercase tracking-[0.25em] text-[#052f5e]/60">
                Misioni
              </p>

              <h3 className="text-3xl font-light text-[#052f5e]">
                Kujdes i Personalizuar
              </h3>

              <div className="mt-5 h-[2px] w-12 bg-[#052f5e]" />

              <p className="mt-6 text-sm leading-7 text-slate-700">
                Të ofrojmë kujdes dentar profesional, të sigurt dhe të
                personalizuar për çdo pacient, duke kombinuar ekspertizën,
                teknologjinë moderne dhe përkushtimin njerëzor.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white/70 hover:shadow-2xl">
            <div className="absolute right-6 top-2 text-7xl font-light text-[#052f5e]/10">
              02
            </div>

            <div className="relative z-10 top-4">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#052f5e]/60">
                Vizioni
              </p>

              <h3 className="text-3xl font-light text-[#052f5e]">
                Standarde Moderne
              </h3>

              <div className="mt-5 h-[2px] w-12 bg-[#052f5e]" />

              <p className="mt-6 text-sm leading-7 text-slate-700">
                Të jemi një nga klinikat dentare më të besuara, duke
                vendosur standarde të larta në cilësi, inovacion dhe
                përvojën e pacientit.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:bg-white/70 hover:shadow-2xl">
            <div className="absolute right-6 top-2 text-7xl font-light text-[#052f5e]/10">
              03
            </div>

            <div className="relative z-10 top-4">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#052f5e]/60">
                Vlerat
              </p>

              <h3 className="text-3xl font-light text-[#052f5e]">
                Besim & Integritet
              </h3>

              <div className="mt-5 h-[2px] w-12 bg-[#052f5e]" />

              <p className="mt-6 text-sm leading-7 text-slate-700">
                Profesionalizëm, integritet, kujdes ndaj pacientit,
                siguri dhe përmirësim i vazhdueshëm në çdo shërbim që
                ofrojmë.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}