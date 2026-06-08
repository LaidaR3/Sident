import Image from "next/image";

const doctors = [
  {
    name: "Dr. Emri Mbiemri",
    role: "Stomatolog i Përgjithshëm",
    image: "/images/img4.jpg",
    intro:
      "Me përvojë në stomatologjinë e përgjithshme, Dr. Emri Mbiemri fokusohet në diagnostikimin e hershëm, trajtimet parandaluese dhe kujdesin afatgjatë të shëndetit oral.",
    description:
      "Qasja e tij e butë dhe profesionale ndihmon pacientët të ndihen të sigurt gjatë çdo vizite, duke krijuar një përvojë të rehatshme dhe të personalizuar.",
    tags: ["10+ vite përvojë", "Kontrolla dentare", "Trajtime restauruese"],
  },
  {
    name: "Dr. Emri Mbiemri",
    role: "Ortodont",
    image: "/images/img5.jpg",
    intro:
      "E specializuar në trajtime ortodontike moderne, Dr. Emri Mbiemri ndihmon pacientët të përmirësojnë funksionin dhe estetikën e buzëqeshjes.",
    description:
      "Përmes planeve të personalizuara dhe teknikave bashkëkohore, ajo synon rezultate natyrale, të qëndrueshme dhe një proces trajtimi sa më komod.",
    tags: ["8+ vite përvojë", "Aparate fikse", "Aparate transparente"],
  },
  {
    name: "Dr. Emri Mbiemri",
    role: "Kirurg Oral",
    image: "/images/img6.jpg",
    intro:
      "Me përvojë në kirurgjinë orale, Dr. Emri Mbiemri ofron trajtime të avancuara me fokus në sigurinë dhe mirëqenien e pacientit.",
    description:
      "Ai kombinon ekspertizën klinike me teknologjinë moderne për të siguruar procedura efektive, komode dhe rikuperim sa më të lehtë.",
    tags: ["12+ vite përvojë", "Kirurgji orale", "Trajtime të avancuara"],
  },
];

export default function DoctorsSection() {
  return (
    <section className="bg-white px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            Ekipi Profesional
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Njihuni me specialistët
            <br />
            <span className="text-[#052f5e]">që kujdesen për ju</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Çdo anëtar i ekipit tonë sjell përvojë, përkushtim dhe qasje të
            personalizuar për të ofruar kujdes dentar cilësor dhe të sigurt.
          </p>
        </div>

        <div className="space-y-32">
          {doctors.map((doctor, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={`${doctor.name}-${doctor.role}`}
                className={`grid items-center gap-12 ${
                  reverse
                    ? "md:grid-cols-[1.1fr_0.9fr]"
                    : "md:grid-cols-[0.9fr_1.1fr]"
                }`}
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="relative h-[550px] overflow-hidden rounded-[36px] bg-slate-100">
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

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {doctor.intro}
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-500">
                    {doctor.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {doctor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#052f5e]/10 px-4 py-2 text-xs font-medium text-[#052f5e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-full bg-slate-200" />

                  <p className="mt-6 text-sm leading-7 text-slate-500">
                    Në çdo trajtim fokusohemi në komoditetin, sigurinë dhe
                    rezultatet afatgjata për pacientët tanë.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}