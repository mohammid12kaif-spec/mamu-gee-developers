"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  title: string;
  location: string;
  price: string;
  status: string;
  description: string;
};

type ProjectImage = {
  image_url: string;
};

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<ProjectImage[]>([]);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      setProject(data);

      const { data: imageData } = await supabase
        .from("project_images")
        .select("*")
        .eq("project_id", id);

      setImages(imageData || []);
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <p className="mt-3">📍 {project.location}</p>

      <p className="mt-2 text-2xl font-bold text-yellow-600">
        ₹ {project.price}
      </p>

      <p className="mt-6">{project.description}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.image_url}
            alt={project.title}
            width={800}
            height={600}
            className="h-64 w-full rounded-xl object-cover"
          />
        ))}
      </div>
    </main>
  );
}