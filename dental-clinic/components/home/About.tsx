import Image from "next/image";
import Link from "next/link";
import Counter from "../ui/Counter";

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-[36px] md:h-[560px]">
              <Image
                src="/images/img2.jpg"
                alt="Sident Dental Clinic"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 left-8 right-8 rounded-[28px] bg-white p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-light text-[#052f5e]">
                    <Counter end={10} suffix="k+" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Pacientë të kënaqur
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-light text-[#052f5e]">
                    <Counter end={15} suffix="+" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Vite përvojë</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 md:pt-0">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
              Rreth Sident
            </p>

            <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
              Kujdes dentar modern,
              <br />
              <span className="text-[#052f5e]">me qasje njerëzore.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Sident Dental Clinic është krijuar për të ofruar më shumë se një
              trajtim dentar — një përvojë të qetë, të sigurt dhe profesionale
              për çdo pacient.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Me teknologji bashkëkohore, ekip të përkushtuar dhe kujdes të
              personalizuar, ne fokusohemi në parandalim, trajtime estetike dhe
              restauruese që ndihmojnë në ruajtjen e shëndetit oral dhe
              rikthimin e vetëbesimit.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#fbfdfe] p-5">
                <h3 className="text-sm font-semibold text-[#052f5e]">
                  Kujdes i personalizuar
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Çdo trajtim planifikohet sipas nevojave të pacientit.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#fbfdfe] p-5">
                <h3 className="text-sm font-semibold text-[#052f5e]">
                  Ambient i rehatshëm
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Hapësirë e qetë, mikpritëse dhe e sigurt për çdo vizitë.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex rounded-full bg-[#052f5e] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#00408a] active:scale-95 active:bg-[#00408a]"
            >
              Mëso më shumë
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}