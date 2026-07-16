import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/about";
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
      <main>
        <About />
        <Contact />
        <Whatsapp />
      </main>
    </>
  );
}