import Image from "next/image";

const galleryImages = [
  {
    src: "/images/img10.jpg",
    title: "Recepsioni",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/img7.jpg",
    title: "Dhoma e Trajtimit",
    className: "",
  },
  {
    src: "/images/img9.jpg",
    title: "Pajisje Moderne",
    className: "",
  },
  {
    src: "/images/img8.jpg",
    title: "Ambienti i Klinikës",
    className: "",
  },
  {
    src: "/images/img1.jpg",
    title: "Kujdes Profesional",
    className: "md:col-span-2",
  },
];

export default function ClinicGallery() {
  return (
    <section className="bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
              Galeria Jonë
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Klinika Jonë

              <br />
              <span className="text-[#052f5e]">Një Hapësirë e Krijuar për Rehatinë Tuaj</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Një ambient modern, i pastër dhe i pajisur me teknologji
            bashkëkohore për të garantuar komoditet dhe siguri për çdo pacient.
          </p>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-[28px] bg-slate-100 shadow-sm ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052f5e]/70 via-[#052f5e]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-100">
                  Sident Clinic
                </p>
                <h3 className="mt-2 text-2xl font-light text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}