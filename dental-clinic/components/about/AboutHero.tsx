import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img11.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-[#052f5e]/70" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto max-w-5xl pt-24">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
          Rreth Sident
        </p>

        <h1 className="text-5xl font-light leading-tight md:text-7xl">
          Kujdes Dentar Modern
          <br />
          <span className="text-blue-100">me Qasje Profesionale</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
          Një klinikë e ndërtuar mbi besimin, teknologjinë moderne dhe kujdesin
          e personalizuar për çdo buzëqeshje.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-white px-7 py-3 text-sm font-bold text-[#052f5e] transition hover:bg-blue-100"
          >
            Rezervo Termin
          </Link>

          <Link
            href="/services"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#052f5e]"
          >
            Shërbimet
          </Link>
        </div>
      </div>
    </section>
  );
}