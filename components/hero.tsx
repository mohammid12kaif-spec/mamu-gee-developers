"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  "/slider/1.jpeg",
  "/slider/2.jpeg",
  "/slider/3.jpeg",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
     
     <Swiper
       modules={[Autoplay]}
       autoplay={{
       delay: 3000,
       disableOnInteraction: false,
  }}
  loop={true}
  className="h-screen"
>
  {slides.map((image, index) => (
    <SwiperSlide key={index}>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </SwiperSlide>
  ))}
</Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

      {/* Hero Content */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6 pt-24 md:pt-28"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       <p className="uppercase tracking-[6px] text-yellow-400 text-lg font-semibold">
  Trusted Real Estate Developer
</p>

<h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
  Mamu Gee Developer
</h1>

<h2 className="mt-4 text-2xl md:text-4xl font-bold text-yellow-400">
  Building Dreams in Greater Noida
</h2>

<p className="mx-auto mt-8 max-w-3xl text-lg md:text-2xl text-gray-200 leading-8">
  Premium residential plots, villas, and investment opportunities with transparent documentation and trusted service.
</p>
       <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
 <Link
  href="/projects"
  className="flex w-full items-center justify-center rounded-xl bg-yellow-500 px-6 py-4 font-bold text-black transition hover:scale-105 sm:w-1/2"
>
  Explore Projects
</Link>

  <a
    href="tel:+919911737738"
    className="flex w-full items-center justify-center rounded-xl border-2 border-white px-6 py-4 text-white transition hover:bg-white hover:text-black sm:w-1/2"
  >
    Call Now
  </a>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-200">
  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
    📍 Greater Noida
  </span>

  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
    ✔ Transparent Documentation
  </span>

  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
    🏡 Premium Developments
  </span>
</div>

      </motion.div>
    </section>
  );
}