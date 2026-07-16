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
        loop
        className="h-screen"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center text-white pt-14 md:pt-20"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Small Heading */}
        <p className="uppercase tracking-[3px] sm:tracking-[6px] text-yellow-400 text-xs sm:text-sm md:text-lg font-semibold">
          Trusted Real Estate Developer
        </p>

        {/* Main Heading */}
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          Mamu Gee
          <span className="block">Developer</span>
        </h1>

        {/* Sub Heading */}
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
          Building Dreams in Greater Noida
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base md:text-xl text-gray-200 leading-7">
          Premium residential plots, villas, and investment opportunities
          with transparent documentation and trusted service.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="flex w-full items-center justify-center rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:scale-105 sm:w-1/2"
          >
            Explore Projects
          </Link>

          <a
            href="tel:+919911737738"
            className="flex w-full items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-white transition hover:bg-white hover:text-black sm:w-1/2"
          >
            Call Now
          </a>
        </div>

        {/* Feature Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm md:text-base text-gray-200">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
            📍 Greater Noida
          </span>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
            ✔ Transparent Documentation
          </span>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
            🏡 Premium Developments
          </span>
        </div>
      </motion.div>
    </section>
  );
}