"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    title: "Politika e Cookies",

    whatTitle: "Çfarë janë Cookies?",
    whatText:
      "Cookies janë skedarë të vegjël tekstualë që ruhen në pajisjen tuaj kur vizitoni faqen tonë. Ato përdoren për të përmirësuar funksionalitetin e faqes, për të ruajtur preferencat tuaja dhe për të ofruar një përvojë më të mirë përdorimi.",

    usageTitle: "Përdorimi i Cookies",
    usageIntro:
      "Faqja e Sident Dental Clinic mund të përdorë cookies për:",
    usageItems: [
      "Ruajtjen e preferencave të përdoruesve.",
      "Përmirësimin e performancës së faqes.",
      "Analizimin e trafikut dhe përdorimit të faqes.",
      "Sigurimin e funksionimit korrekt të shërbimeve online.",
    ],

    thirdPartyTitle: "Shërbimet e Palëve të Treta",
    thirdPartyText:
      "Faqja mund të përdorë shërbime të palëve të treta si Google Maps ose Google Analytics. Këto shërbime mund të vendosin cookies sipas politikave të tyre përkatëse të privatësisë.",

    managementTitle: "Menaxhimi i Cookies",
    managementText:
      "Ju mund të kontrolloni ose fshini cookies në çdo kohë përmes cilësimeve të shfletuesit tuaj. Çaktivizimi i disa cookies mund të ndikojë në funksionalitetin e faqes.",

    updated: "Përditësuar së fundmi: Qershor 2026",
    back: "← Kthehu në faqen kryesore",
  },

  en: {
    title: "Cookie Policy",

    whatTitle: "What Are Cookies?",
    whatText:
      "Cookies are small text files stored on your device when you visit our website. They are used to improve website functionality, remember your preferences, and provide a better user experience.",

    usageTitle: "How We Use Cookies",
    usageIntro:
      "The Sident Dental Clinic website may use cookies for:",
    usageItems: [
      "Remembering user preferences.",
      "Improving website performance.",
      "Analyzing website traffic and usage.",
      "Ensuring the proper functioning of online services.",
    ],

    thirdPartyTitle: "Third-Party Services",
    thirdPartyText:
      "The website may use third-party services such as Google Maps or Google Analytics. These services may place cookies in accordance with their respective privacy policies.",

    managementTitle: "Managing Cookies",
    managementText:
      "You can control or delete cookies at any time through your browser settings. Disabling certain cookies may affect the functionality of the website.",

    updated: "Last updated: June 2026",
    back: "← Back to homepage",
  },
};

export default function CookiePolicyPage() {
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <main className="min-h-screen bg-[#f4f8fb]">
     
      <div className="h-28 bg-[#031f3f] md:h-32" />

      <div className="mx-auto max-w-4xl px-6 pb-24">
        <div className="-mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-[#052f5e]">
            {text.title}
          </h1>

          <div className="space-y-10 leading-8 text-slate-600">
        
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.whatTitle}
              </h2>

              <p>{text.whatText}</p>
            </section>

            
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.usageTitle}
              </h2>

              <p>{text.usageIntro}</p>

              <ul className="mt-4 space-y-2 pl-6">
                {text.usageItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

          
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.thirdPartyTitle}
              </h2>

              <p>{text.thirdPartyText}</p>
            </section>

        
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-[#052f5e]">
                {text.managementTitle}
              </h2>

              <p>{text.managementText}</p>
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