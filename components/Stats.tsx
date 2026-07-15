"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    title: "Projects Completed",
  },
  {
    number: "500+",
    title: "Happy Families",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Customer Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-white"
        >
          Our Achievements
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl bg-white p-8 text-center shadow-xl"
            >
              <h3 className="text-5xl font-bold text-yellow-500">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg font-semibold text-gray-700">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}