"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  sq: {
    eyebrow: "Na Kontaktoni",
    title: "Gati për një buzëqeshje më të shëndetshme?",
    description:
      "Na kontaktoni për të rezervuar vizitën tuaj ose për të marrë më shumë informacione rreth trajtimeve tona dentare.",

    phone: "Telefoni",
    email: "Email",
    hours: "Orari i Punës",
    location: "Lokacioni",

    weekday: "Hënë - Premte: 13:00 - 20:00",
    saturday: "E Shtunë: 12:00 - 17:00",
    city: "Prishtinë, Kosovë",

    formEyebrow: "Na Shkruani",
    formTitle: "Dërgoni kërkesën tuaj",

    fullName: "Emri dhe mbiemri",
    phonePlaceholder: "Numri i telefonit",
    emailPlaceholder: "Email adresa",

    reason: "Arsyeja e kontaktit",

    reasons: [
      "Rezervim termini",
      "Informacion rreth trajtimeve",
      "Çmimet",
      "Konsultë",
      "Tjetër",
    ],

    message: "Mesazhi juaj",
    submit: "Dërgo Kërkesën",
    sending: "Duke dërguar...",

    success: "Kërkesa juaj u dërgua me sukses!",
    error: "Diçka shkoi keq. Ju lutemi provoni përsëri.",
  },

  en: {
    eyebrow: "Contact Us",
    title: "Ready for a healthier smile?",
    description:
      "Contact us to schedule your visit or to receive more information about our dental treatments.",

    phone: "Phone",
    email: "Email",
    hours: "Working Hours",
    location: "Location",

    weekday: "Monday - Friday: 13:00 - 20:00",
    saturday: "Saturday: 12:00 - 17:00",
    city: "Prishtina, Kosovo",

    formEyebrow: "Write to Us",
    formTitle: "Send your request",

    fullName: "Full name",
    phonePlaceholder: "Phone number",
    emailPlaceholder: "Email address",

    reason: "Reason for contacting us",

    reasons: [
      "Book an appointment",
      "Treatment information",
      "Pricing",
      "Consultation",
      "Other",
    ],

    message: "Your message",
    submit: "Send Request",
    sending: "Sending...",

    success: "Your request was sent successfully!",
    error: "Something went wrong. Please try again.",
  },
};

export default function AppointmentContact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#fbfdfe] px-6 py-24 text-slate-800 md:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-xl md:grid-cols-[45%_55%]">

        {/* LEFT SIDE */}
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
                className="mt-1 block text-lg transition-colors duration-500 hover:text-blue-200"
              >
                +383 44 160 605
              </Link>
            </div>

            <div>
              <p className="text-blue-200">{t.email}</p>

              <Link
                href="mailto:klinikasident@gmail.com"
                className="mt-1 block break-all text-lg transition-colors duration-500 hover:text-blue-200"
              >
                klinikasident@gmail.com
              </Link>
            </div>

            <div>
              <p className="text-blue-200">{t.hours}</p>

              <p className="mt-1 text-lg">{t.weekday}</p>
              <p className="text-blue-100">{t.saturday}</p>
            </div>

            <div>
              <p className="text-blue-200">{t.location}</p>
              <p className="mt-1 text-lg">{t.city}</p>
            </div>
          </div>
        </div>

        {/* FORM */}
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
                placeholder={t.phonePlaceholder}
                className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              placeholder={t.emailPlaceholder}
              className="w-full rounded-full border border-slate-200 px-5 py-4 text-sm outline-none transition focus:border-[#052f5e]"
            />

            {/* REASON */}
            <div className="relative">
              <select
                name="service"
                required
                defaultValue=""
                className="w-full appearance-none rounded-full border border-slate-200 bg-white py-4 pl-5 pr-14 text-sm text-slate-500 outline-none transition focus:border-[#052f5e]"
              >
                <option value="" disabled>
                  {t.reason}
                </option>

                {t.reasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
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
              disabled={isSubmitting}
              className="w-full rounded-full bg-[#052f5e] px-7 py-4 text-sm font-bold text-white transition-colors duration-500 hover:bg-[#00408a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? t.sending : t.submit}
            </button>

            {success && (
              <p className="text-center text-sm font-medium text-green-600">
                {t.success}
              </p>
            )}

            {error && (
              <p className="text-center text-sm font-medium text-red-600">
                {t.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}