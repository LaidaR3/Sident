"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { CiMenuBurger } from "react-icons/ci";

const navigation = {
  sq: [
    { href: "/", label: "Ballina" },
    { href: "/about", label: "Rreth Nesh" },
    { href: "/services", label: "Shërbimet" },
    { href: "/doctors", label: "Stafi ynë" },
    { href: "/contact", label: "Kontakti" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/doctors", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { language, changeLanguage } = useLanguage();

  const navLinks = navigation[language];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="relative mx-auto flex max-w-7xl items-center px-6 py-4 text-white md:px-10">
        {/* LOGO */}
        <Link
          href="/"
          className="relative mt-4 flex h-16 w-[180px] shrink-0 items-center overflow-visible md:h-20 md:w-[240px]"
        >
          <Image
            src="/images/logo.png"
            alt="Sident Dental Clinic"
            fill
            priority
            sizes="(max-width: 768px) 180px, 240px"
            className="origin-left scale-[1.7] object-contain object-left md:scale-[2]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors duration-300 ${isActive(link.href)
                  ? "text-[#b8d7f3]"
                  : "text-white/85 hover:text-[#b8d7f3]"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP LANGUAGE */}
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => changeLanguage("sq")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${language === "sq"
                ? "bg-white text-[#052f5e]"
                : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            SQ
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${language === "en"
                ? "bg-white text-[#052f5e]"
                : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            EN
          </button>
        </div>

        {/* MOBILE HAMBURGER */}

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`ml-auto h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition md:hidden ${open ? "hidden" : "flex"
            }`}
        >
          <CiMenuBurger className="h-6 w-6" />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${open
            ? "pointer-events-auto bg-black/55 backdrop-blur-[2px]"
            : "pointer-events-none bg-transparent"
          }`}
        onClick={() => setOpen(false)}
      >
        {/* DRAWER */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 flex h-[100dvh] w-[82%] max-w-[360px] flex-col bg-[#052f5e] px-7 pb-8 pt-7 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* DRAWER TOP */}
          {/* DRAWER TOP */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="relative h-16 w-36 overflow-visible"
            >
              <Image
                src="/images/logo.png"
                alt="Sident Dental Clinic"
                fill
                className="origin-left scale-[1.8] object-contain object-left"
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl font-light text-white transition hover:bg-white/20"
            >
              ×
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          <div className="mt-10 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative border-b border-white/10 py-5 text-[17px] transition-colors duration-200 ${isActive(link.href)
                    ? "font-semibold text-white"
                    : "font-normal text-white/65 active:text-white"
                  }`}
              >
                {isActive(link.href) && (
                  <span className="absolute -left-7 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-[#b8d7f3]" />
                )}

                {link.label}
              </Link>
            ))}
          </div>

          {/* LANGUAGE SWITCHER */}
          <div className="mt-auto border-t border-white/15 pt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
              {language === "sq" ? "Gjuha" : "Language"}
            </p>

            <div className="flex rounded-full bg-white/10 p-1">
              <button
                type="button"
                onClick={() => {
                  changeLanguage("sq");
                  setOpen(false);
                }}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${language === "sq"
                    ? "bg-white text-[#052f5e] shadow-sm"
                    : "text-white/65"
                  }`}
              >
                SQ
              </button>

              <button
                type="button"
                onClick={() => {
                  changeLanguage("en");
                  setOpen(false);
                }}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${language === "en"
                    ? "bg-white text-[#052f5e] shadow-sm"
                    : "text-white/65"
                  }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}