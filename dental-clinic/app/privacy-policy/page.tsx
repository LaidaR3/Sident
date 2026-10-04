"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    title: "Politika e Privatësisë",

    introTitle: "Hyrje",
    intro:
      "Klinika Dentale Sident respekton privatësinë tuaj dhe është e përkushtuar për mbrojtjen e të dhënave personale që na dërgoni përmes faqes sonë.",

    dataTitle: "Të dhënat që mbledhim",
    dataIntro:
      "Kur na kontaktoni ose kërkoni një termin, ne mund të mbledhim:",
    dataItems: [
      "Emrin dhe mbiemrin.",
      "Numrin e telefonit.",
      "Adresën e emailit.",
      "Mesazhin ose kërkesën që na dërgoni.",
      "Shërbimin dentar për të cilin jeni të interesuar.",
    ],

    useTitle: "Si i përdorim të dhënat",
    useIntro: "Të dhënat tuaja përdoren vetëm për:",
    useItems: [
      "Përgjigje ndaj pyetjeve dhe kërkesave tuaja.",
      "Rezervimin ose konfirmimin e termineve.",
      "Komunikimin lidhur me shërbimet tona.",
      "Përmirësimin e përvojës së përdoruesve në faqe.",
    ],

    sharingTitle: "Ndarja e të dhënave",
    sharing:
      "Ne nuk i shesim, nuk i japim me qira dhe nuk i ndajmë të dhënat tuaja personale me palë të treta, përveç rasteve kur kërkohet me ligj ose kur është e nevojshme për ofrimin e shërbimit.",

    securityTitle: "Siguria e të dhënave",
    security:
      "Ne marrim masa të arsyeshme teknike dhe organizative për të mbrojtur të dhënat personale nga qasja e paautorizuar, humbja, keqpërdorimi ose ndryshimi.",

    cookiesTitle: "Cookies dhe palët e treta",
    cookies:
      "Faqja jonë mund të përdorë cookies, Google Maps ose shërbime të tjera të palëve të treta. Për më shumë informata, lexoni Politikën tonë të Cookies.",

    rightsTitle: "Të drejtat tuaja",
    rights:
      "Ju mund të kërkoni qasje, korrigjim ose fshirje të të dhënave tuaja personale duke na kontaktuar përmes informacionit të publikuar në faqen tonë.",

    updated: "Përditësuar së fundmi: Qershor 2026",
    back: "← Kthehu në faqen kryesore",
  },

  en: {
    title: "Privacy Policy",

    introTitle: "Introduction",
    intro:
      "Sident Dental Clinic respects your privacy and is committed to protecting the personal information you provide through our website.",

    dataTitle: "Information We Collect",
    dataIntro:
      "When you contact us or request an appointment, we may collect:",
    dataItems: [
      "Your first and last name.",
      "Your phone number.",
      "Your email address.",
      "The message or request you send us.",
      "The dental service you are interested in.",
    ],

    useTitle: "How We Use Your Information",
    useIntro: "Your information is used only for:",
    useItems: [
      "Responding to your questions and requests.",
      "Booking or confirming appointments.",
      "Communicating with you regarding our services.",
      "Improving the user experience on our website.",
    ],

    sharingTitle: "Sharing Your Information",
    sharing:
      "We do not sell, rent, or share your personal information with third parties, except where required by law or where necessary to provide our services.",

    securityTitle: "Data Security",
    security:
      "We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration.",

    cookiesTitle: "Cookies and Third Parties",
    cookies:
      "Our website may use cookies, Google Maps, or other third-party services. For more information, please read our Cookie Policy.",

    rightsTitle: "Your Rights",
    rights:
      "You may request access to, correction of, or deletion of your personal information by contacting us using the contact information provided on our website.",

    updated: "Last updated: June 2026",
    back: "← Back to homepage",
  },
};

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <main className="min-h-screen bg-[#f4f8fb]">
      {/* DARK TOP AREA - makes navbar and logo visible */}
      <div className="h-28 bg-[#031f3f] md:h-32" />

      <div className="mx-auto max-w-4xl px-6 pb-24">
        <div className="-mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-[#052f5e]">
            {text.title}
          </h1>

          <div className="space-y-10 leading-8 text-slate-600">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.introTitle}
              </h2>

              <p>{text.intro}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.dataTitle}
              </h2>

              <p>{text.dataIntro}</p>

              <ul className="mt-4 space-y-2 pl-6">
                {text.dataItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.useTitle}
              </h2>

              <p>{text.useIntro}</p>

              <ul className="mt-4 space-y-2 pl-6">
                {text.useItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.sharingTitle}
              </h2>

              <p>{text.sharing}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.securityTitle}
              </h2>

              <p>{text.security}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.cookiesTitle}
              </h2>

              <p>{text.cookies}</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.rightsTitle}
              </h2>

              <p>{text.rights}</p>
            </section>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500">
                {text.updated}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[#052f5e]/20 bg-white px-5 py-3 text-sm font-medium text-[#052f5e] shadow-sm transition hover:bg-[#052f5e] hover:text-white"
          >
            {text.back}
          </Link>
        </div>
      </div>
    </main>
  );
}