import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-slate-900">
            Politika e Privatësisë
          </h1>

          <div className="space-y-10 leading-8 text-slate-600">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Hyrje
              </h2>

              <p>
                Sident Dental Clinic respekton privatësinë tuaj dhe është e
                përkushtuar për mbrojtjen e të dhënave personale që na dërgoni
                përmes faqes sonë.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Të dhënat që mbledhim
              </h2>

              <p>
                Kur na kontaktoni ose kërkoni një termin, ne mund të mbledhim:
              </p>

              <ul className="mt-4 space-y-2 pl-6">
                <li>• Emrin dhe mbiemrin.</li>
                <li>• Numrin e telefonit.</li>
                <li>• Adresën e emailit.</li>
                <li>• Mesazhin ose kërkesën që na dërgoni.</li>
                <li>• Shërbimin dentar për të cilin jeni të interesuar.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Si i përdorim të dhënat
              </h2>

              <p>Të dhënat tuaja përdoren vetëm për:</p>

              <ul className="mt-4 space-y-2 pl-6">
                <li>• Përgjigje ndaj pyetjeve dhe kërkesave tuaja.</li>
                <li>• Rezervimin ose konfirmimin e termineve.</li>
                <li>• Komunikimin lidhur me shërbimet tona.</li>
                <li>• Përmirësimin e përvojës së përdoruesve në faqe.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Ndarja e të dhënave
              </h2>

              <p>
                Ne nuk i shesim, nuk i japim me qira dhe nuk i ndajmë të dhënat
                tuaja personale me palë të treta, përveç rasteve kur kërkohet me
                ligj ose kur është e nevojshme për ofrimin e shërbimit.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Siguria e të dhënave
              </h2>

              <p>
                Ne marrim masa të arsyeshme teknike dhe organizative për të
                mbrojtur të dhënat personale nga qasja e paautorizuar, humbja,
                keqpërdorimi ose ndryshimi.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Cookies dhe palët e treta
              </h2>

              <p>
                Faqja jonë mund të përdorë cookies, Google Maps ose shërbime të
                tjera të palëve të treta. Për më shumë informata, lexoni
                Politikën tonë të Cookies.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Të drejtat tuaja
              </h2>

              <p>
                Ju mund të kërkoni qasje, korrigjim ose fshirje të të dhënave
                tuaja personale duke na kontaktuar përmes informacionit të
                publikuar në faqen tonë.
              </p>
            </section>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500">
                Përditësuar së fundmi: Qershor 2026
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            ← Kthehu në faqen kryesore
          </Link>
        </div>
      </div>
    </main>
  );
}