export default function MapSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#87A5C0]">
            Lokacioni
          </p>

          <h2 className="text-4xl font-light text-slate-900 md:text-6xl">
            Na vizitoni në
            <br />
            <span className="text-[#052f5e]">klinikën tonë</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=Prishtina,Kosovo&output=embed"
            className="h-[520px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}