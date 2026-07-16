"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "10+ Years Experience",
    description: "Trusted real estate developer with years of successful projects.",
    icon: "🏗️",
  },
  {
    title: "20+ Projects",
    description: "Residential and commercial developments completed successfully.",
    icon: "🏢",
  },
  {
    title: "500+ Happy Families",
    description: "Helping families find their dream homes.",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Quality Construction",
    description: "Premium materials and modern construction techniques.",
    icon: "🛠️",
  },
  {
    title: "Prime Locations",
    description: "Projects located in fast-growing and well-connected areas.",
    icon: "📍",
  },
  {
    title: "Affordable Pricing",
    description: "Luxury living with competitive pricing.",
    icon: "💰",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Why Choose Mamu Gee Developer
        </motion.h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We are committed to building quality homes and commercial spaces
          with modern designs, excellent locations, and customer satisfaction.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}