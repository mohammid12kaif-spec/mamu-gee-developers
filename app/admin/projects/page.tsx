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
      // Check if admin is logged in
      const { data: sessionData } = await supabase.auth.getSession();

      if (!sessionData.session) {
        router.replace("/admin/login");
        return;
      }

      // Fetch projects
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
    const confirmDelete = confirm("Delete this project?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    // Refresh projects after delete
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });

    setProjects(data || []);
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
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">Manage Projects</h1>

          <Link
            href="/admin/projects/add"
            className="rounded-xl bg-black px-6 py-3 text-white hover:bg-yellow-500 hover:text-black"
          >
            + Add Project
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <table className="w-full">
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

                  <td className="p-4 text-center">
                    <Link
                      href={`/admin/projects/edit/${project.id}`}
                      className="mr-3 inline-block rounded-lg bg-yellow-500 px-4 py-2 text-black hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
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