import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/contact";
import Whatsapp from "@/components/whatsapp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mamu Gee Developers, a trusted real estate company in Greater Noida offering residential plots, villas, and premium property investment opportunities.",
  alternates: {
    canonical: "https://mamu-gee-developer.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28">

        {/* Hero */}
        <section className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold">
              About Mamu Gee Developers
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Building trust through premium real estate developments in
              Greater Noida with quality, transparency, and customer-first
              service.
            </p>
          </div>
        </section>

        {/* Company */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Who We Are
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              Mamu Gee Developers is committed to delivering premium residential
              plots and real estate opportunities in Greater Noida and nearby
              areas. Our goal is to provide secure investments, transparent
              transactions, and developments that create long-term value for our
              customers.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-600">
                Our Vision
              </h3>

              <p className="mt-4 text-gray-700">
                To become one of the most trusted real estate developers in
                India by delivering quality projects and building lasting
                relationships with our customers.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-yellow-600">
                Our Mission
              </h3>

              <p className="mt-4 text-gray-700">
                To provide legally secure, high-quality developments while
                maintaining complete transparency, integrity, and customer
                satisfaction.
              </p>
            </div>

          </div>
        </section>
{/* Managing Director */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div className="flex justify-center">
      <img
        src="/director.png"
        alt="Managing Director - Amir Mukhiya"
        className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
      />
    </div>

    <div>
      <p className="text-yellow-600 font-semibold uppercase tracking-wider">
        Managing Director
      </p>

      <h2 className="text-4xl font-bold mt-2">
        Amir Mukhiya
      </h2>

      <p className="mt-6 text-gray-700 leading-8">
        At Mamu Gee Developers, our mission is to provide secure,
        transparent, and high-quality real estate opportunities.
        We believe every customer deserves honest guidance and
        properties that create long-term value for their family
        and future.
      </p>

      <p className="mt-6 font-semibold text-lg">
        — Amir Mukhiya
      </p>
    </div>

  </div>
</section>
        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-12">

              <div className="rounded-xl bg-white shadow-lg p-6 text-center">
                <h3 className="font-bold text-xl">Trusted</h3>
                <p className="mt-3 text-gray-600">
                  Transparent and reliable property solutions.
                </p>
              </div>

              <div className="rounded-xl bg-white shadow-lg p-6 text-center">
                <h3 className="font-bold text-xl">Prime Locations</h3>
                <p className="mt-3 text-gray-600">
                  Carefully selected projects with future growth potential.
                </p>
              </div>

              <div className="rounded-xl bg-white shadow-lg p-6 text-center">
                <h3 className="font-bold text-xl">Legal Assurance</h3>
                <p className="mt-3 text-gray-600">
                  Verified documentation for peace of mind.
                </p>
              </div>

              <div className="rounded-xl bg-white shadow-lg p-6 text-center">
                <h3 className="font-bold text-xl">Customer Support</h3>
                <p className="mt-3 text-gray-600">
                  Dedicated assistance before and after your purchase.
                </p>
              </div>

            </div>

          </div>
        </section>

        <Contact />
        <Whatsapp />

      </main>
    </>
  );
}