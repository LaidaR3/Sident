"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    description:
      "Kujdes dentar profesional në një ambient modern, të sigurt dhe mikpritës për çdo pacient.",

    menuTitle: "Menu",
    home: "Ballina",
    about: "Rreth Nesh",
    services: "Shërbimet",
    contact: "Kontakti",

    servicesTitle: "Shërbimet",
    dentalCheckup: "Kontrolla Dentare",
    teethWhitening: "Zbardhimi i Dhëmbëve",
    orthodontics: "Ortodonci",
    dentalRestorations: "Restaurime Dentare",

    contactTitle: "Kontakt",
    location: "Prishtinë, Kosovë",
    workingHours: "Hënë - Premte: 13:00 - 20:00",
    saturdayHours: "E Shtunë: 12:00 - 17:00",

    copyright:
      "© 2026 Sident Dental Clinic. Të gjitha të drejtat e rezervuara.",

    privacyPolicy: "Politika e Privatësisë",
    cookiePolicy: "Politika e Cookies",
  },

  en: {
    description:
      "Professional dental care in a modern, safe, and welcoming environment for every patient.",

    menuTitle: "Menu",
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",

    servicesTitle: "Services",
    dentalCheckup: "Dental Checkups",
    teethWhitening: "Teeth Whitening",
    orthodontics: "Orthodontics",
    dentalRestorations: "Dental Restorations",

    contactTitle: "Contact",
    location: "Prishtina, Kosovo",
    workingHours: "Monday - Friday: 13:00 - 20:00",
    saturdayHours: "Saturday: 12:00 - 17:00",

    copyright: "© 2026 Sident Dental Clinic. All rights reserved.",

    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const text = translations[language];

  return (
    <footer className="bg-[#031f3f] px-6 pt-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-light">Sident</h3>

            <p className="mt-5 text-sm leading-7 text-blue-100">
              {text.description}
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              {text.menuTitle}
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  {text.home}
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  {text.about}
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  {text.services}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  {text.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              {text.servicesTitle}
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>{text.dentalCheckup}</li>
              <li>{text.teethWhitening}</li>
              <li>{text.orthodontics}</li>
              <li>{text.dentalRestorations}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              {text.contactTitle}
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <a
                  href="tel:+38344160605"
                  className="transition-colors hover:text-white"
                >
                  +383 44 160 605
                </a>
              </li>

              <li>
                <a
                  href="mailto:klinikasident@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  klinikasident@gmail.com
                </a>
              </li>

              <li>{text.location}</li>
              <li>{text.workingHours}</li>
              <li>{text.saturdayHours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 py-6 text-sm text-blue-100 md:flex-row md:items-center">
          <p>{text.copyright}</p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              {text.privacyPolicy}
            </Link>

            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-white"
            >
              {text.cookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}