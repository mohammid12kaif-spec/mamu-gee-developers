import Navbar from "@/components/Navbar";
import About from "@/components/about";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/whychooseus";
import Stats from "@/components/Stats";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Whatsapp from "@/components/whatsapp";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
       
      <About />
      <Projects />
      <WhyChooseUs />
      <Stats />
      <Gallery />
      <Contact />
      <Whatsapp />
      </main>
    </>
  );
}