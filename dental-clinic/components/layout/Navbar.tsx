"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="relative mx-auto flex max-w-7xl items-center px-6 py-4 text-white md:px-10">
        <Link href="/" className="relative h-20 w-[230px]">
          <Image
            src="/images/logo.png"
            alt="Sident Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-[#b8d7f3]"
                  : "text-white/85 hover:text-[#b8d7f3]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md md:hidden"
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
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#b8d7f3]"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}