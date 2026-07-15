export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-bold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-6">
              MAMU GEE Developer Pvt. Ltd.
            </h3>

            <div className="space-y-4 text-lg">

              <p>
                📞 <strong>Phone:</strong> +91 99117 37738
              </p>

              <p>
                📧 <strong>Email:</strong> amirmukhiya033@gmail.com
              </p>

              <p>
                📍 <strong>Office:</strong><br />
                Office No. 141,<br />
                Haldoni, Kulesra,<br />
                Gautam Buddha Nagar,<br />
                Uttar Pradesh - 201306
              </p>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="tel:+91 9911737738"
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/91 9911737738"
                target="_blank"
                className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <div>
            <iframe
              src="https://www.google.com/maps?q=Haldoni,Kulesra,Gautam%20Buddha%20Nagar&output=embed"
              className="w-full h-[450px] rounded-xl"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}