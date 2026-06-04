import Link from "next/link";

const categories = ["General", "Aesthetic", "Restorative", "Orthodontics"];

const services = [
    {
        label: "General",
        title: "Dental Checkups",
        text: "Gentle exams focused on prevention and long-term oral health.",
    },
    {
        label: "Aesthetic",
        title: "Teeth Whitening",
        text: "Safe whitening for a cleaner, brighter, and more confident smile.",
    },
    {
        label: "General",
        title: "Teeth Cleaning",
        text: "Professional cleaning for a fresher and healthier smile.",
    },
    {
        label: "Restorative",
        title: "Crowns & Bridges",
        text: "Natural-looking restorations that improve comfort and appearance.",
    },
    
];

export default function ServicesSection() {
    return (
        <section className="bg-[#fbfdfe] px-6 py-20 text-slate-800 md:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-10 max-w-4xl text-center">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
                        Our Treatments
                    </p>

                    <h2 className="text-4xl font-light leading-tight md:text-6xl">
                        Your Smile
                        <br />
                        <span className="text-[#243856]">Impacts Your Confidence</span>
                    </h2>

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {categories.map((item, index) => (
                            <span
                                key={item}
                                className={`rounded-full border px-5 py-2 text-xs transition-all duration-300 ${index === 1
                                    ? "bg-[#243856] text-white"
                                    : "border-slate-200 bg-white text-slate-500 hover:border-[#243856]/30 hover:text-[#243856]"
                                    }`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="
group relative min-h-[340px]
overflow-hidden rounded-[20px]
border border-slate-200
bg-white
p-7
shadow-sm
transition-all duration-500
hover:-translate-y-3
hover:border-[#243856]/20
hover:bg-[#243856]
hover:shadow-2xl
"
                        >
                            <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#243856]/50 blur-3xl" />
                            </div>

                            <div className="absolute right-4 top-4 text-7xl font-light text-[#243856] transition duration-500 group-hover:text-[#CAD7E3]/60">
                                0{index + 1}
                            </div>

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <span className="rounded-full bg-[#CAD7E3]/40 px-3 py-1 text-[10px] font-semibold text-[#243856]">
                                        {service.label}
                                    </span>

                                    <h3 className="mt-6 text-2xl font-light text-slate-950 transition duration-300 group-hover:text-[#243856]">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        {service.text}
                                    </p>
                                </div>

                                <Link
                                    href="/services"
                                    className="mt-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-xl text-slate-500 transition-all duration-500 group-hover:bg-[#243856] group-hover:text-white"
                                >
                                    <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                        ↗
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}