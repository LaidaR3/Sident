import Image from "next/image";
import Link from "next/link";
import Counter from "../ui/Counter";

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden rounded-[1rem]">
          <Image
            src="/images/img2.jpg"
            alt="Dental clinic"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            About Sident
          </p>

          <h2 className="text-3xl font-light leading-tight text-slate-900 md:text-5xl">
            Comfortable care for every smile.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            We provide modern dental treatments with a gentle approach, helping
            patients feel confident, relaxed, and cared for during every visit.
          </p>
 <div className="mt-8 grid gap-4 sm:grid-cols-3">
  <div>
    <Counter end={10} suffix="k+" />
    <p className="text-sm text-slate-500">Happy patients</p>
  </div>

  <div>
    <Counter end={15} suffix="+" />
    <p className="text-sm text-slate-500">Years experience</p>
  </div>
            <div>
              <h3 className="text-3xl font-semibold text-slate-900">24/7</h3>
              <p className="text-sm text-slate-500">Patient support</p>
            </div>
          </div>

        

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[#42679E] px-7 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}