import Navbar from "@/components/Navbar";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/whychooseus";
import Stats from "@/components/Stats";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Whatsapp from "@/components/whatsapp";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Testimonials />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Whatsapp />
      <Footer />
      </main>
    </>
  );
}