import Image from "next/image";
import Link from "next/link";

export default function TechnologySection() {
  return (
    <section className="bg-[#fbfdfe] px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="relative">
          <div className="relative h-[550px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/img10.jpg"
              alt="Sident Clinic"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 rounded-[24px] bg-white p-6 shadow-xl">
            <div className="text-3xl font-light text-[#052f5e]">
              15+
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Vite Eksperiencë
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            Teknologjia Jonë
          </p>

          <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-6xl">
            Teknologji Moderne
            <br />
            <span className="text-[#052f5e]">
              për Rezultate të Shkëlqyera
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Në Sident Dental Clinic investojmë vazhdimisht në pajisje
            moderne dhe teknologji të avancuar për të ofruar trajtime
            më të sigurta, më komode dhe më precize për pacientët tanë.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-medium text-[#052f5e]">
                Diagnostikim Preciz
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Pajisje moderne për analiza dhe diagnostikim të saktë.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-medium text-[#052f5e]">
                Ambient Steril
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Standardet më të larta të higjienës dhe sigurisë.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-medium text-[#052f5e]">
                Pajisje Moderne
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Teknologji bashkëkohore për trajtime më efikase.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-medium text-[#052f5e]">
                Kujdes Profesional
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Ekip i përkushtuar për përvojën më të mirë të pacientit.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#052f5e] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#00408a]"
          >
            Rezervo Termin
          </Link>
        </div>
      </div>
    </section>
  );
}