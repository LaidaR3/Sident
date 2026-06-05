import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#031f3f] px-6 pt-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-light">Sident</h3>

            <p className="mt-5 text-sm leading-7 text-blue-100">
              Kujdes dentar profesional në një ambient modern, të sigurt dhe
              mikpritës për çdo pacient.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Menu
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link href="/">Ballina</Link></li>
              <li><Link href="/about">Rreth Nesh</Link></li>
              <li><Link href="/services">Shërbimet</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Shërbimet
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>Kontrolla Dentare</li>
              <li>Zbardhimi i Dhëmbëve</li>
              <li>Ortodonci</li>
              <li>Restaurime Dentare</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Kontakt
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>+383 44 123 456</li>
              <li>info@sident.com</li>
              <li>Prishtinë, Kosovë</li>
              <li>Hënë - Premte: 09:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 py-6 text-sm text-blue-100 md:flex-row">
          <p>© 2026 Sident Dental Clinic. Të gjitha të drejtat e rezervuara.</p>

          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}