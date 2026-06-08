import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            Historia Jonë
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Një klinikë e ndërtuar
            <br />
            <span className="text-[#052f5e]">mbi besim dhe kujdes.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Sident Dental Clinic u krijua me qëllimin për të sjellë një qasje
            më të rehatshme, më moderne dhe më njerëzore në kujdesin dentar.
            Që nga fillimi, fokusi ynë ka qenë të krijojmë një ambient ku
            pacientët ndihen të mirëpritur, të sigurt dhe të dëgjuar.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Me kalimin e viteve, klinika është zhvilluar duke investuar në
            teknologji bashkëkohore, pajisje moderne dhe metoda të avancuara
            trajtimi. Çdo vizitë planifikohet me kujdes, duke u bazuar në
            nevojat individuale të pacientit dhe në standarde të larta
            profesionale.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="border-l border-slate-200 pl-5">
              <h3 className="text-3xl font-light text-[#052f5e]">01</h3>
              <p className="mt-2 text-sm text-slate-500">Qasje e butë</p>
            </div>

            <div className="border-l border-slate-200 pl-5">
              <h3 className="text-3xl font-light text-[#052f5e]">02</h3>
              <p className="mt-2 text-sm text-slate-500">Teknologji moderne</p>
            </div>

            <div className="border-l border-slate-200 pl-5">
              <h3 className="text-3xl font-light text-[#052f5e]">03</h3>
              <p className="mt-2 text-sm text-slate-500">Besim afatgjatë</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[560px] overflow-hidden rounded-[36px]">
            <Image
              src="/images/img12.jpg"
              alt="Historia e Sident Dental Clinic"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-[28px] bg-[#052f5e] p-7 text-white shadow-2xl md:block">
            <p className="text-4xl font-light">15+</p>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              vite përkushtim në ofrimin e kujdesit dentar profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}