import Link from "next/link";
import Image from "next/image";

const tags = [
    "Kontrolle Dentare",
    "Pastrimi i Dhembeve",
    "Mbushje Dentare",
    "Kurora Dentare",
    "Retainere",
];

export default function Hero() {
    return (
        <section className="relative">
            <div className="relative h-screen w-full overflow-hidden bg-black text-white">
                <Image
                    src="/images/img1.jpg"
                    alt="Dental treatment"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

                <div className="relative z-20 flex h-full flex-col justify-between px-6 py-8 md:px-10">
                    <div />

                    <div className="grid items-end gap-10 pb-6 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/80">
                                Kujdes Dentar Modern
                            </p>

                            <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
                                Stomatologji Moderne
                                <br />
                                <span className="font-semibold">
                                    Me Kujdes Profesional.
                                </span>
                            </h1>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/appointment"
                                    className="inline-flex rounded-full bg-[#00408a] px-7 py-3 text-white transition-all duration-300 hover:bg-green-500"
                                >
                                    Cakto terminin
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex rounded-full border border-white px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-sky-900"
                                >
                                    Shiko sherbimet
                                </Link>
                            </div>
                        </div>

                        <div className="max-w-sm md:ml-auto md:text-right">
                            

                            {/* <p className="text-sm leading-6 text-white/85">
  Kujdes dentar profesional per buzeqeshje te shendetshme dhe plot vetebesim,
  i ofruar me rehati, saktesi dhe besim.
</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}