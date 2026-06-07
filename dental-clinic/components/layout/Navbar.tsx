import Link from "next/link";
import Image from "next/image";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointment", label: "Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white md:px-10">
        <Link href="/" className="relative h-24 w-56">
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
      </nav>
    </header>
  );
}