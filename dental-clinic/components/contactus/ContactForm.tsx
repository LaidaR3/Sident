import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-xl md:grid-cols-[45%_55%]">
        <div className="bg-[#052f5e] p-8 text-white md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-200">
            Rezervo Termin
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Gati për një buzëqeshje më të shëndetshme?
          </h2>

          <p className="mt-6 text-sm leading-7 text-blue-100">
            Na kontaktoni për të rezervuar vizitën tuaj ose për të marrë më
            shumë informacione rreth trajtimeve tona dentare.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-blue-200">Telefoni</p>
              <Link href="tel:+38344123456" className="mt-1 block text-lg">
                +383 44 123 456
              </Link>
            </div>

            <div>
              <p className="text-blue-200">Email</p>
              <Link href="mailto:info@sident.com" className="mt-1 block text-lg">
                info@sident.com
              </Link>
            </div>

            <div>
              <p className="text-blue-200">Orari i Punës</p>
              <p className="mt-1 text-lg">Hënë - Premte: 09:00 - 18:00</p>
              <p className="text-blue-100">E Shtunë: 10:00 - 14:00</p>
            </div>

            <div>
              <p className="text-blue-200">Lokacioni</p>
              <p className="mt-1 text-lg">Prishtinë, Kosovë</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
            Na Shkruani
          </p>

          <h3 className="text-3xl font-light text-[#052f5e]">
            Dërgoni kërkesën tuaj
          </h3>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Emri dhe mbiemri"
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />

              <input
                type="tel"
                placeholder="Numri i telefonit"
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />
            </div>

            <input
              type="email"
              placeholder="Email adresa"
              className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            <select
              className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm text-slate-500 outline-none transition focus:border-[#052f5e]"
              defaultValue=""
            >
              <option value="" disabled>
                Zgjidhni shërbimin
              </option>
              <option>Kontrollë Dentare</option>
              <option>Zbardhim i Dhëmbëve</option>
              <option>Ortodonci</option>
              <option>Restaurime Dentare</option>
            </select>

            <textarea
              rows={5}
              placeholder="Mesazhi juaj"
              className="w-full resize-none rounded-[24px] border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#052f5e] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#00408a]"
            >
              Dërgo Kërkesën
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}