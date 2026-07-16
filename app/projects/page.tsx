import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/contact";
import Whatsapp from "@/components/whatsapp";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore residential plots, villas, and premium real estate projects by Mamu Gee Developers in Greater Noida, Haldoni, and nearby areas.",

  alternates: {
    canonical: "https://mamu-gee-developer.com/projects",
  },

  openGraph: {
    title: "Our Projects | Mamu Gee Developers",
    description:
      "Browse our latest residential and commercial real estate projects in Greater Noida.",
    url: "https://mamu-gee-developer.com/projects",
    siteName: "Mamu Gee Developers",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
        <Contact />
        <Whatsapp />
      </main>
    </>
  );
}
