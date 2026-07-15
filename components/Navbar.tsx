"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 md:px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <Image
            src="/logo.png"
            alt="Mamu Gee Developers"
            width={90}
            height={90}
            className="h-12 w-auto object-contain md:h-20"
            priority
          />

          <div>
            <p className="text-xs font-semibold text-white md:text-sm">
              Amir Mukhiya
            </p>

            <p className="text-[10px] text-yellow-400 md:text-xs">
              Managing Director
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-white md:flex">
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>

          <a href="#projects" className="hover:text-yellow-400">
            Projects
          </a>

          <a href="#gallery" className="hover:text-yellow-400">
            Gallery
          </a>

          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+919911737738"
          className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400 md:px-5 md:text-base"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}