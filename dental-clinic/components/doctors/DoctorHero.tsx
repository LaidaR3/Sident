export default function DoctorsHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img14.jpg')] bg-cover bg-center" />

      
      <div className="absolute inset-0 bg-black/70" />


      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
          Ekipi Ynë
        </p>

        <h1 className="text-5xl font-light leading-tight md:text-7xl">
          Njihuni me
          <br />
          Doktorët Tanë
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-blue-100">
          Një ekip profesionistësh të përkushtuar për kujdes dentar cilësor,
          trajtime moderne dhe përvojë të sigurt për çdo pacient.
        </p>
      </div>
    </section>
  );
}