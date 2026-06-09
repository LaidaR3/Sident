export default function ContactHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img15.jpg')] bg-cover bg-center" />

      
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
          Kontakt
        </p>

        <h1 className="text-5xl font-light leading-tight md:text-7xl">
          Jemi këtu për
          <br />
          t’ju ndihmuar
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-blue-100">
          Na kontaktoni për pyetje, informacione rreth shërbimeve ose për të
          kërkuar një termin në klinikën tonë.
        </p>
      </div>
    </section>
  );
}