export default function ServicesHero() {
    return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center text-white md:px-10">
      <div className="absolute inset-0 bg-[url('/images/img7.jpg')] bg-cover bg-center" />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 mx-auto max-w-4xl">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-blue-200">
                    Shërbimet Tona
                </p>

                <h1 className="text-5xl font-light leading-tight md:text-7xl">
                    Trajtime Moderne
                    <br />
                    për Çdo Buzëqeshje
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-blue-100">
                    Kombinojmë ekspertizën profesionale, teknologjinë moderne dhe
                    kujdesin e personalizuar për të ofruar trajtime dentare të sigurta,
                    efektive dhe të përshtatura për nevojat tuaja.
                </p>
            </div>
        </section>
    );
}