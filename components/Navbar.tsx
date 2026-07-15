"use client";


import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

       {/* Logo */}
<Link href="/" className="flex items-center gap-4">
  <Image
    src="/logo.png"
    alt="Mamu Gee Developers"
    width={90}
    height={90}
    className="h-20 w-auto object-contain"
    priority
  />

 <div className="ml-4">
  <p className="text-white text-sm font-semibold">
    Amir Mukhiya
  </p>
  <p className="text-yellow-400 text-xs">
    Managing Director
  </p>
</div>
</Link>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>

          <a href="#gallery" className="hover:text-yellow-400 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+919911737738"
          className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Call Now
        </a>

      </div>
    </header>
  );
}