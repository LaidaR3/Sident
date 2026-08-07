"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "Rezervo Termin",
    title: "Gati për një buzëqeshje më të shëndetshme?",
    description:
      "Na kontaktoni për të rezervuar vizitën tuaj ose për të marrë më shumë informacione rreth trajtimeve tona dentare.",

    phone: "Telefoni",
    email: "Email",
    workingHours: "Orari i Punës",
    location: "Lokacioni",

    weekday: "Hënë - Premte: 13:00 - 20:00",
    saturday: "E Shtunë: 12:00 - 17:00",
    city: "Prishtinë, Kosovë",

    formEyebrow: "Na Shkruani",
    formTitle: "Dërgoni kërkesën tuaj",

    fullName: "Emri dhe mbiemri",
    phoneNumber: "Numri i telefonit",
    emailAddress: "Email adresa",
    selectService: "Zgjidhni shërbimin",
    message: "Mesazhi juaj",
    submit: "Dërgo Kërkesën",

    services: [
      "Kontrollë Dentare",
      "Zbardhim i Dhëmbëve",
      "Ortodonci",
      "Restaurime Dentare",
    ],
  },

  en: {
    eyebrow: "Book an Appointment",
    title: "Ready for a healthier smile?",
    description:
      "Contact us to schedule your visit or to receive more information about our dental treatments.",

    phone: "Phone",
    email: "Email",
    workingHours: "Working Hours",
    location: "Location",

    weekday: "Monday - Friday: 13:00 - 20:00",
    saturday: "Saturday: 12:00 - 17:00",
    city: "Prishtina, Kosovo",

    formEyebrow: "Write to Us",
    formTitle: "Send your request",

    fullName: "Full name",
    phoneNumber: "Phone number",
    emailAddress: "Email address",
    selectService: "Select a service",
    message: "Your message",
    submit: "Send Request",

    services: [
      "Dental Checkup",
      "Teeth Whitening",
      "Orthodontics",
      "Dental Restorations",
    ],
  },
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-xl md:grid-cols-[45%_55%]">
        <div className="bg-[#052f5e] p-8 text-white md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-blue-200">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            {t.title}
          </h2>

          <p className="mt-6 text-sm leading-7 text-blue-100">
            {t.description}
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div>
              <p className="text-blue-200">{t.phone}</p>

              <Link
                href="tel:+38344160605"
                className="mt-1 block text-lg transition hover:text-blue-200"
              >
                +383 44 160 605
              </Link>
            </div>

            <div>
              <p className="text-blue-200">{t.email}</p>

              <Link
                href="mailto:klinikasident@gmail.com"
                className="mt-1 block break-all text-lg transition hover:text-blue-200"
              >
                klinikasident@gmail.com
              </Link>
            </div>

            <div>
              <p className="text-blue-200">{t.workingHours}</p>
              <p className="mt-1 text-lg">{t.weekday}</p>
              <p className="text-blue-100">{t.saturday}</p>
            </div>

            <div>
              <p className="text-blue-200">{t.location}</p>
              <p className="mt-1 text-lg">{t.city}</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
            {t.formEyebrow}
          </p>

          <h3 className="text-3xl font-light text-[#052f5e]">
            {t.formTitle}
          </h3>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder={t.fullName}
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />

              <input
                type="tel"
                name="phone"
                placeholder={t.phoneNumber}
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder={t.emailAddress}
              className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            <select
              name="service"
              defaultValue=""
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-4 text-sm text-slate-500 outline-none transition focus:border-[#052f5e]"
            >
              <option value="" disabled>
                {t.selectService}
              </option>

              {t.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder={t.message}
              className="w-full resize-none rounded-[24px] border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#052f5e] px-7 py-4 text-sm font-bold text-white transition active:scale-[0.98] active:bg-[#00408a] md:hover:bg-[#00408a]"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}