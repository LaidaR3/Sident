"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

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
        <Link
          href="/"
          className="relative h-16 w-[170px] shrink-0 md:h-20 md:w-[230px]"
        >
          <Image
            src="/images/logo.png"
            alt="Sident Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-[#b8d7f3]"
                  : "text-white/85 hover:text-[#b8d7f3]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop language buttons */}
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => changeLanguage("sq")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              language === "sq"
                ? "bg-white text-[#052f5e]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            SQ
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              language === "en"
                ? "bg-white text-[#052f5e]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            EN
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-6 rounded-[24px] border border-white/10 bg-[#052f5e] p-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-white/10 text-[#b8d7f3]"
                    : "text-white/90 active:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
              <button
                type="button"
                onClick={() => {
                  changeLanguage("sq");
                  setOpen(false);
                }}
                className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                  language === "sq"
                    ? "bg-white text-[#052f5e]"
                    : "border border-white/20 text-white"
                }`}
              >
                Shqip
              </button>

              <button
                type="button"
                onClick={() => {
                  changeLanguage("en");
                  setOpen(false);
                }}
                className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-white text-[#052f5e]"
                    : "border border-white/20 text-white"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}