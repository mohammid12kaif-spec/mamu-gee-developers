import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">
              Mamu Gee Developer Pvt. Ltd.
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Trusted real estate developer in Greater Noida offering
              premium residential plots, villas, commercial spaces,
              and investment opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
             <li><Link href="/">Home</Link></li>
             <li><Link href="/about">About</Link></li>
             <li><Link href="/projects">Projects</Link></li>
             <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Contact
            </h4>

            <p className="text-gray-400">
              📞 +91 99117 37738
            </p>

            <p className="mt-2 text-gray-400">
              📧 amirmukhiya033@gmail.com
            </p>

            <p className="mt-2 text-gray-400">
              📍 Haldoni, Greater Noida,
              Uttar Pradesh - 201306
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Mamu Gee Developer Pvt. Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}