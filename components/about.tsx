import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <p className="text-yellow-500 font-bold uppercase tracking-[4px]">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Building Dreams Across Greater Noida
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Mamu Gee Developer is a trusted real estate company delivering
            premium residential plots and investment opportunities in
            Greater Noida. We focus on transparency, quality, and customer
            satisfaction in every project.
          </p>

          <div className="mt-8 space-y-3">
            <p>✅ Trusted Real Estate Developer</p>
            <p>✅ Prime Locations in Greater Noida</p>
            <p>✅ Legal & Transparent Documentation</p>
            <p>✅ Customer-First Approach</p>
          </div>

          <Link
            href="/about"
            className="inline-block mt-10 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400 transition"
          >
            Learn More →
          </Link>
        </div>

        <div>
         <Image
           src="/hero.jpeg"
           alt="Mamu Gee Developer Project"
           width={700}
           height={500}
           className="rounded-2xl shadow-2xl w-full h-auto"
           />
        </div>

      </div>
    </section>
  );
}