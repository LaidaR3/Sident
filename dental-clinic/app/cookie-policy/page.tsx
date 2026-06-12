import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-slate-900">
            Politika e Cookies
          </h1>

          <div className="space-y-10 leading-8 text-slate-600">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Çfarë janë Cookies?
              </h2>

              <p>
                Cookies janë skedarë të vegjël tekstualë që ruhen në pajisjen
                tuaj kur vizitoni faqen tonë. Ato përdoren për të përmirësuar
                funksionalitetin e faqes, për të ruajtur preferencat tuaja dhe
                për të ofruar një përvojë më të mirë përdorimi.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Përdorimi i Cookies
              </h2>

              <p>
                Faqja e Sident Dental Clinic mund të përdorë cookies për:
              </p>

              <ul className="mt-4 space-y-2 pl-6">
                <li>• Ruajtjen e preferencave të përdoruesve.</li>
                <li>• Përmirësimin e performancës së faqes.</li>
                <li>• Analizimin e trafikut dhe përdorimit të faqes.</li>
                <li>• Sigurimin e funksionimit korrekt të shërbimeve online.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Shërbimet e Palëve të Treta
              </h2>

              <p>
                Faqja mund të përdorë shërbime të palëve të treta si Google Maps
                ose Google Analytics. Këto shërbime mund të vendosin cookies
                sipas politikave të tyre përkatëse të privatësisë.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                Menaxhimi i Cookies
              </h2>

              <p>
                Ju mund të kontrolloni ose fshini cookies në çdo kohë përmes
                cilësimeve të shfletuesit tuaj. Çaktivizimi i disa cookies mund
                të ndikojë në funksionalitetin e faqes.
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