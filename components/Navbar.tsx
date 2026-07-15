"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mamu Gee Developers"
              width={60}
              height={60}
              className="h-12 w-auto md:h-16"
              priority
            />

            <div>
              <p className="text-sm font-semibold text-white">
                Amir Mukhiya
              </p>

              <p className="text-xs text-yellow-400">
                Managing Director
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-white">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>

          {/* Desktop Call Button */}
          <a
            href="tel:+919911737738"
            className="hidden md:block rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-black hover:bg-yellow-400"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-[72px] left-0 z-40 w-full bg-black/95 text-white md:hidden">
          <nav className="flex flex-col p-6 text-lg">

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="border-b border-gray-700 py-4"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="border-b border-gray-700 py-4"
            >
              Projects
            </a>

            <a
              href="#gallery"
              onClick={() => setOpen(false)}
              className="border-b border-gray-700 py-4"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="border-b border-gray-700 py-4"
            >
              Contact
            </a>

            <a
              href="tel:+919911737738"
              className="mt-6 rounded-lg bg-yellow-500 py-3 text-center font-bold text-black"
            >
              📞 Call Now
            </a>

          </nav>
        </div>
      )}
    </>
  );
}