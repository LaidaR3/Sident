import Image from "next/image";

const doctors = [
  {
    name: "Dr. Emri Mbiemri",
    role: "Stomatolog i Përgjithshëm",
    image: "/images/img4.jpg",
    description:
      "Me përvojë të gjatë në stomatologjinë e përgjithshme, Dr. Emri Mbiemri fokusohet në diagnostikimin e hershëm, kujdesin parandalues dhe trajtimet restauruese. Qasja e tij profesionale dhe e kujdesshme ndihmon pacientët të ndihen të sigurt dhe të qetë gjatë çdo vizite.",
    focus:
      "Fokusi i tij është të krijojë një përvojë të rehatshme për pacientin, duke ofruar trajtime të personalizuara dhe zgjidhje afatgjata për shëndetin oral.",
    stats: ["10+ vite përvojë", "3000+ pacientë", "Kontrolla dentare", "Trajtime restauruese"],
    specializations: ["Parandalim oral", "Diagnostikim", "Restaurime", "Kujdes familjar"],
  },
  {
    name: "Dr. Emri Mbiemri",
    role: "Ortodont",
    image: "/images/img5.jpg",
    description:
      "E specializuar në trajtime ortodontike moderne, Dr. Emri Mbiemri ndihmon pacientët të përmirësojnë funksionin, kafshimin dhe estetikën e buzëqeshjes së tyre. Çdo plan trajtimi përshtatet sipas nevojave individuale të pacientit.",
    focus:
      "Përmes teknikave bashkëkohore dhe kujdesit të detajuar, ajo synon rezultate natyrale, të qëndrueshme dhe një proces trajtimi sa më komod.",
    stats: ["8+ vite përvojë", "Aparate fikse", "Aparate transparente", "Planifikim ortodontik"],
    specializations: ["Ortodonci", "Smile alignment", "Kafshim korrekt", "Retainer"],
  },
  {
    name: "Dr. Emri Mbiemri",
    role: "Kirurg Oral",
    image: "/images/img6.jpg",
    description:
      "Me përvojë në kirurgjinë orale, Dr. Emri Mbiemri ofron trajtime të avancuara me fokus në sigurinë, komoditetin dhe mirëqenien e pacientit. Çdo procedurë realizohet me kujdes maksimal dhe planifikim profesional.",
    focus:
      "Ai kombinon ekspertizën klinike me teknologjinë moderne për të siguruar procedura efektive, rikuperim më të lehtë dhe rezultate të qëndrueshme.",
    stats: ["12+ vite përvojë", "Kirurgji orale", "Ekstraksione", "Trajtime të avancuara"],
    specializations: ["Kirurgji orale", "Implante", "Ekstraksione", "Rikuperim i sigurt"],
  },
];

export default function DoctorsProfiles() {
  return (
    <section className="bg-white px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            Profilet e Doktorëve
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Eksperiencë, kujdes
            <br />
            <span className="text-[#052f5e]">dhe përkushtim profesional</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Njihuni më afër me ekipin tonë dhe specializimet që ndihmojnë në
            ofrimin e kujdesit dentar të sigurt, modern dhe të personalizuar.
          </p>
        </div>

        <div className="space-y-32">
          {doctors.map((doctor, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={`${doctor.name}-${doctor.role}`}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="relative h-[560px] overflow-hidden rounded-[36px] bg-slate-100">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className={reverse ? "md:order-1" : ""}>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
                    {doctor.role}
                  </p>

                  <h3 className="text-4xl font-light text-[#052f5e] md:text-5xl">
                    {doctor.name}
                  </h3>

                  <p className="mt-6 text-base leading-8 text-slate-600">
                    {doctor.description}
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-500">
                    {doctor.focus}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {doctor.stats.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-[#fbfdfe] px-5 py-4 text-sm font-medium text-[#052f5e]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                      Specializime
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {doctor.specializations.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#052f5e]/10 px-4 py-2 text-xs font-medium text-[#052f5e]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}