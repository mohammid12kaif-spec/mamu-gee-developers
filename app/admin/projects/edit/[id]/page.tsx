"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Ongoing");
  const [description, setDescription] = useState("");

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
        .eq("id", id)
        .single();

      if (error) {
        alert(error.message);
        router.push("/admin/projects");
        return;
      }

      setTitle(data.title);
      setLocation(data.location);
      setPrice(data.price);
      setStatus(data.status);
      setDescription(data.description);

      setLoading(false);
    };

    initialize();
  }, [id, router]);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const { error } = await supabase
      .from("projects")
      .update({
        title,
        location,
        price,
        status,
        description,
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Project Updated Successfully!");

    router.push("/admin/projects");
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
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-3xl font-bold">
          Edit Project
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">

          <input
            type="text"
            className="w-full rounded-lg border p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            className="w-full rounded-lg border p-3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            type="text"
            className="w-full rounded-lg border p-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <select
            className="w-full rounded-lg border p-3"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Upcoming</option>
          </select>

          <textarea
            rows={5}
            className="w-full rounded-lg border p-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-lg bg-black py-3 text-white hover:bg-yellow-500 hover:text-black"
          >
            {saving ? "Updating..." : "Update Project"}
          </button>

        </form>
      </div>
    </main>
  );
}