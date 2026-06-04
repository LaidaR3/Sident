import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 text-white">
        <Link href="/" className="text-3xl font-bold">
          
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/doctors">Doctors</Link>
          <Link href="/appointment">Appointment</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/appointment"
          className="rounded-full  px-6 py-3  text-white"
        >
          Book Visit
        </Link>
      </nav>
    </header>
  );
}