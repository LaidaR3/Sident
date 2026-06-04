import Image from "next/image";
import Link from "next/link";
import Counter from "../ui/Counter";

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="relative grid grid-cols-[0.9fr_1.1fr] gap-4">
          <div className="space-y-4 pt-10">
            <div className="relative h-[280px] overflow-hidden ">
              <Image
                src="/images/img2.jpg"
                alt="Klinika dentare"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[170px] overflow-hidden ">
              <Image
                src="/images/img3.jpg"
                alt="Trajtim dentar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative h-[390px] overflow-hidden top-20 ">
            <Image
              src="/images/img1.jpg"
              alt="Kujdes dentar"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -left-4 top-0 rounded-2xl bg-white px-5 py-4 shadow-xl">
            <div className="text-2xl font-semibold text-[#00408a]">
              <Counter end={10} suffix="k+" />
            </div>
            <p className="text-xs text-slate-500">Pacientë të kënaqur</p>
          </div>

          <div className="absolute bottom-0 left-[38%] rounded-2xl bg-white px-6 py-5 shadow-xl">
            <div className="text-3xl font-semibold text-[#00408a]">
              <Counter end={15} suffix="+" />
            </div>
            <p className="text-xs text-slate-500">Vite përvojë</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            Rreth Sident
          </p>

          <h2 className="text-3xl font-light leading-tight text-slate-900 md:text-5xl">
            Kujdes i rehatshëm për çdo buzëqeshje.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Ofrimi i trajtimeve moderne dentare me qasje të butë dhe profesionale,
            duke ndihmuar pacientët të ndihen të sigurt, të qetë dhe të kujdesur
            në çdo vizitë.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            <li>✓ Trajtime moderne dhe të personalizuara</li>
            <li>✓ Ambient i qetë dhe mikpritës</li>
            <li>✓ Kujdes profesional për të gjitha moshat</li>
          </ul>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[#00408a] px-7 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
          >
            Mëso më shumë
          </Link>
        </div>
      </div>
    </section>
  );
}