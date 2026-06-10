import Image from "next/image";

const items = [
    {
        title: "Teknologji Moderne",
        text: "Përdorim pajisje dhe teknologji bashkëkohore për trajtime më të sakta dhe më komode.",
    },
    {
        title: "Kujdes i Personalizuar",
        text: "Çdo plan trajtimi përshtatet sipas nevojave, dëshirave dhe shëndetit të pacientit.",
    },
    {
        title: "Komoditet në Çdo Vizitë",
        text: "Një ambient i qetë dhe mikpritës që ju bën të ndiheni rehat gjatë çdo trajtimi.",
    },
    {
        title: "Rezultate Natyrale",
        text: "Fokusohemi në buzëqeshje të shëndetshme, estetike dhe me pamje natyrale.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#CAD7E3] px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                    <div>
                        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#243856]/60">
                            Pse të na zgjidhni ne
                        </p>

                        <h2 className="max-w-2xl text-3xl font-light leading-[1.15] text-[#243856] md:text-[4rem]">
                            Kujdes profesional
                            <br />
                            për buzëqeshjen tuaj.
                        </h2>
                        <div className="mt-12 border-t border-[#243856]/15">
                            {items.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="group border-b border-[#243856]/15 py-7 transition-all duration-500 hover:pl-4"
                                >
                                    <div className="flex items-start justify-between gap-8">
                                        <div className="flex gap-6">
                                            <span className="pt-1 text-sm text-[#243856]/40 transition group-hover:text-[#243856]">
                                                0{index + 1}
                                            </span>

                                            <div>
                                                <h3 className="text-2xl font-light text-[#243856]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 max-w-xl text-sm leading-7 text-[#243856]/65">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>

                                        <span className="translate-x-[-8px] text-2xl text-[#243856] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[620px] overflow-hidden rounded-[40px]">
                        <Image
                            src="/images/img3.jpg"
                            alt="Dental care"
                            fill
                            className="object-cover transition duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}