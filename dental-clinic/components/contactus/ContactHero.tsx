import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img15.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="hero-fade-up mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
          Kontakt
        </p>

        <h1 className="hero-fade-up hero-delay-200 text-5xl font-light leading-tight md:text-7xl">
          Jemi këtu për
          <br />
          t’ju ndihmuar
        </h1>

        <p className="hero-fade-up hero-delay-400 mx-auto mt-8 max-w-2xl text-base leading-8 text-blue-100">
          Na kontaktoni për pyetje, informacione rreth shërbimeve ose për të
          kërkuar një termin në klinikën tonë.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="hero-scroll flex h-10 w-6 justify-center rounded-full border border-white/40">
          <div className="mt-2 h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}