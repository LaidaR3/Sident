"use client";

import { useState } from "react";
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
    selectService: "Arsyeja e kontaktit",
    message: "Mesazhi juaj",
    submit: "Dërgo Kërkesën",


    services: [
      "Rezervim termini",
      "Informacion rreth trajtimeve",
      "Çmimet",
      "Konsultë",
      "Tjetër",
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
    selectService: "Reason for contacting us",
    message: "Your message",
    submit: "Send Request",

    services: [
      "Book an appointment",
      "Treatment information",
      "Pricing",
      "Consultation",
      "Other",
    ],
  },
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Form error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                name="fullName"
                required
                placeholder={t.fullName}
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder={t.phoneNumber}
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              placeholder={t.emailAddress}
              className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            <div className="relative">
              <select
                name="service"
                required
                defaultValue=""
                className="w-full appearance-none rounded-full border border-slate-200 bg-white py-4 pl-5 pr-14 text-sm text-slate-500 outline-none transition focus:border-[#052f5e]"
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

              <svg
                className="pointer-events-none absolute right-6 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M6 8l4 4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder={t.message}
              className="w-full resize-none rounded-[24px] border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#052f5e] px-7 py-4 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98] active:bg-[#00408a] md:hover:bg-[#00408a]"
            >
              {loading
                ? language === "sq"
                  ? "Duke dërguar..."
                  : "Sending..."
                : t.submit}
            </button>

            {success && (
              <p className="text-center text-sm font-medium text-green-600">
                {language === "sq"
                  ? "Kërkesa juaj u dërgua me sukses!"
                  : "Your request was sent successfully!"}
              </p>
            )}

            {error && (
              <p className="text-center text-sm font-medium text-red-600">
                {language === "sq"
                  ? "Ndodhi një gabim. Ju lutemi provoni përsëri."
                  : "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}