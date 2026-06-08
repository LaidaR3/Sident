"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white md:px-10">
        <Link href="/" className="relative h-16 w-[170px]">
          <Image
            src="/images/logo.png"
            alt="Sident Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors duration-300 hover:text-[#b8d7f3]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/appointment"
          className="hidden rounded-full bg-white px-6 py-3 text-sm font-bold text-[#00408a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00408a] hover:text-white md:inline-flex"
        >
          Book Visit
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl backdrop-blur-md md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mx-6 rounded-[24px] bg-[#052f5e] p-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/90"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#00408a]"
            >
              Book Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}