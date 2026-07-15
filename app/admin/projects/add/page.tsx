"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const router = useRouter();

  const [checkingSession, setCheckingSession] = useState(true);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Ongoing");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/admin/login");
        return;
      }

      setCheckingSession(false);
    };

    checkSession();
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);

  // Create Project
  const { data: project, error } = await supabase
    .from("projects")
    .insert([
      {
        title,
        location,
        price,
        status,
        description,
      },
    ])
    .select()
    .single();

  if (error) {
    alert(error.message);
    setLoading(false);
    return;
  }

  // Upload all selected images
  for (const image of images) {
    const fileName = `${Date.now()}-${image.name}`;

    const { error: uploadError } = await supabase.storage
      .from("projects")
      .upload(fileName, image);

    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }

    const { data } = supabase.storage
      .from("projects")
      .getPublicUrl(fileName);

    const { error: imageError } = await supabase
      .from("project_images")
      .insert([
        {
          project_id: project.id,
          image_url: data.publicUrl,
        },
      ]);

    if (imageError) {
      alert(imageError.message);
      setLoading(false);
      return;
    }
  }

  setLoading(false);

  alert("✅ Project Added Successfully!");

  router.push("/admin/projects");
}
  if (checkingSession) {
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
          Add New Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Project Title"
            className="w-full rounded-lg border p-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full rounded-lg border p-3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Price"
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
            placeholder="Description"
            rows={5}
            className="w-full rounded-lg border p-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div>
            <label className="mb-2 block font-semibold">
              Project Image
            </label>

          <input
  type="file"
  multiple
  accept="image/*"
  className="w-full rounded-lg border p-3"
  onChange={(e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  }}
/>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black py-3 text-white hover:bg-yellow-500 hover:text-black"
          >
            {loading ? "Saving..." : "Save Project"}
          </button>

        </form>

      </div>
    </main>
  );
}