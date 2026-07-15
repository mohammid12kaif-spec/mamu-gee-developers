"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Project = {
  id: number;
  title: string;
  location: string;
  price: string;
  status: string;
};

export default function ProjectsPage() {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      const { data: sessionData } = await supabase.auth.getSession();

      if (!sessionData.session) {
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        alert(error.message);
        return;
      }

      setProjects(data || []);
      setLoading(false);
    };

    initialize();
  }, [router]);

 async function deleteProject(id: number) {
  const confirmDelete = confirm(
    "Delete this project and all its images?"
  );

  if (!confirmDelete) return;

  // Get all project images
  const { data: images, error: imageFetchError } = await supabase
    .from("project_images")
    .select("*")
    .eq("project_id", id);

  if (imageFetchError) {
    alert(imageFetchError.message);
    return;
  }

  // Delete images from Storage
  if (images && images.length > 0) {
    const fileNames = images.map((img) =>
      decodeURIComponent(img.image_url.split("/").pop() || "")
    );

    const { error: storageError } = await supabase.storage
      .from("projects")
      .remove(fileNames);

    if (storageError) {
      console.log(storageError);
    }

    // Delete image records
    const { error: imageDeleteError } = await supabase
      .from("project_images")
      .delete()
      .eq("project_id", id);

    if (imageDeleteError) {
      alert(imageDeleteError.message);
      return;
    }
  }

  // Delete project
  const { error: projectError } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (projectError) {
    alert(projectError.message);
    return;
  }

  // Refresh project list
  const { data } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  setProjects(data || []);

  alert("✅ Project deleted successfully!");
}

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
       <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-bold">Manage Projects</h1>

          <Link
            href="/admin/projects/add"
            className="w-full sm:w-auto rounded-xl bg-black px-6 py-3 text-center text-white hover:bg-yellow-500 hover:text-black"
          >
            + Add Project
          </Link>
        </div>

       <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <table className="min-w-[850px] w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b">
                  <td className="p-4">{project.title}</td>
                  <td className="p-4">{project.status}</td>
                  <td className="p-4">{project.price}</td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/admin/projects/edit/${project.id}`}
                        className="rounded-lg bg-yellow-500 px-4 py-2 text-black hover:bg-yellow-600"
                      >
                        Edit
                      </Link>

                      <Link
                        href={`/admin/projects/gallery/${project.id}`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                      >
                        Gallery
                      </Link>

                      <button
                        onClick={() => deleteProject(project.id)}
                        className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}