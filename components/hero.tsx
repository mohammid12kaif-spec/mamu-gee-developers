"use client";

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
    <section className="relative h-screen overflow-hidden">
     
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
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6 pt-16 md:pt-24"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-[6px] text-yellow-400 text-lg">
          Welcome To
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
          MAMU GEE
        </h1>

        <h2 className="mt-2 text-xl md:text-4xl font-light">
          Developer Pvt. Ltd.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl text-gray-200">
          Premium Flats • Luxury Villas • Commercial Properties
        </p>

       <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
  <button className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-bold text-black transition hover:scale-105 sm:w-1/2">
    View Projects
  </button>

  <a
    href="tel:+919911737738"
    className="flex w-full items-center justify-center rounded-xl border-2 border-white px-6 py-4 text-white transition hover:bg-white hover:text-black sm:w-1/2"
  >
    Call Now
  </a>
</div>

        <div className="mt-10 md:mt-16 rounded-2xl border border-white/20 bg-white/10 p-4 md:p-6 backdrop-blur-md">
          <div className="grid grid-cols-3 gap-3 md:gap-8 text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">100+</h3>
              <p>Happy Families</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">20+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}