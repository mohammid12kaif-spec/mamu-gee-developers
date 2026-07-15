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
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6 pt-24"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-[6px] text-yellow-400 text-lg">
          Welcome To
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
          MAMU GEE
        </h1>

        <h2 className="text-2xl md:text-4xl mt-2 font-light">
          Developer Pvt. Ltd.
        </h2>

        <p className="mt-8 text-xl text-gray-200 max-w-2xl mx-auto">
          Premium Flats • Luxury Villas • Commercial Properties
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            View Projects
          </button>

          <a
            href="tel:+919911737738"
            className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            Call Now
          </a>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
              <p>Happy Families</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">20+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}