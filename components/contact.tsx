"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !phone || !message) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("inquiries")
      .insert([
        {
          name,
          phone,
          email,
          project,
          message,
        },
      ]);

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    const whatsappMessage = `
*New Inquiry*

Name: ${name}
Phone: ${phone}
Email: ${email}
Project: ${project}

Message:
${message}
`;

    const whatsappURL = `https://wa.me/919911737738?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    alert("Inquiry submitted successfully!");

    setName("");
    setPhone("");
    setEmail("");
    setProject("");
    setMessage("");

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-bold uppercase tracking-[4px] text-yellow-400">
            Contact Us
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Get In Touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <div>

            <h3 className="mb-6 text-3xl font-bold">
              MAMU GEE Developer Pvt. Ltd.
            </h3>

            <div className="space-y-5 text-lg">

              <p>
                📞 <strong>Phone:</strong> +91 99117 37738
              </p>

              <p>
                📧 <strong>Email:</strong> amirmukhiya033@gmail.com
              </p>

              <p>
                📍 <strong>Office:</strong><br />
                Office No.141,<br />
                Haldoni, Kulesra,<br />
                Gautam Buddha Nagar,<br />
                Uttar Pradesh - 201306
              </p>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="tel:+919911737738"
                className="rounded-lg bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919911737738"
                target="_blank"
                className="rounded-lg border border-yellow-500 px-6 py-3 transition hover:bg-yellow-500 hover:text-black"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <div>

           <form
  onSubmit={handleSubmit}
  className="space-y-5 rounded-2xl bg-white p-8 text-black shadow-xl"
>
                      <input
                type="text"
                placeholder="Full Name *"
                className="w-full rounded-lg border p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full rounded-lg border p-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                placeholder="Interested Project"
                className="w-full rounded-lg border p-3"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />

              <textarea
                rows={5}
                placeholder="Your Message *"
                className="w-full rounded-lg border p-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-yellow-500 py-3 text-lg font-bold text-black transition hover:bg-yellow-400"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </form>

          </div>

        </div>

                <div className="mt-16 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Haldoni,Kulesra,Gautam%20Buddha%20Nagar&output=embed"
            className="h-[450px] w-full"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}