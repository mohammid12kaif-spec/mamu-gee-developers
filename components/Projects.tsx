"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  title: string;
  location: string;
  price: string;
  status: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });

      console.log("Projects:", data);
      console.log("Error:", error);

      if (error) {
        console.log(error);
        return;
      }

      setProjects(data || []);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Our Projects
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Explore our latest residential and commercial developments.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="p-6">
                <span className="inline-block bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
                  {project.status}
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  📍 {project.location}
                </p>

                <p className="text-yellow-600 font-bold mt-2">
                  {project.price}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 block w-full rounded-xl bg-black py-3 text-center text-white hover:bg-yellow-500 hover:text-black"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}