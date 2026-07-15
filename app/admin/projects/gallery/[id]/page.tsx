"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type ProjectImage = {
  id: number;
  image_url: string;
};

export default function GalleryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);

  const [newImages, setNewImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  async function fetchImages() {
  const { data, error } = await supabase
    .from("project_images")
    .select("*")
    .eq("project_id", id)
    .order("id", { ascending: false });

  if (error) {
    alert(error.message);
    return;
  }

  setImages(data || []);
  setLoading(false);
}

async function uploadImages() {
  if (newImages.length === 0) {
    alert("Please select at least one image.");
    return;
  }

  setUploading(true);

  for (const image of newImages) {
    const fileName = `${Date.now()}-${image.name}`;

    const { error: uploadError } = await supabase.storage
      .from("projects")
      .upload(fileName, image);

    if (uploadError) {
      alert(uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("projects")
      .getPublicUrl(fileName);

    const { error: dbError } = await supabase
      .from("project_images")
      .insert([
        {
          project_id: Number(id),
          image_url: data.publicUrl,
        },
      ]);

    if (dbError) {
      alert(dbError.message);
      setUploading(false);
      return;
    }
  }

  setNewImages([]);
  await fetchImages();

  alert("✅ Images uploaded successfully!");

  setUploading(false);
}

async function deleteImage(imageId: number, imageUrl: string) {
  const confirmDelete = confirm("Delete this image?");

  if (!confirmDelete) return;

  // Extract filename from the public URL
  const fileName = imageUrl.split("/").pop();

  if (fileName) {
    await supabase.storage
      .from("projects")
      .remove([decodeURIComponent(fileName)]);
  }

  const { error } = await supabase
    .from("project_images")
    .delete()
    .eq("id", imageId);

  if (error) {
    alert(error.message);
    return;
  }

  await fetchImages();

  alert("✅ Image deleted successfully!");
}

useEffect(() => {
  const loadImages = async () => {
    await fetchImages();
  };

  loadImages();
}, [id]); 

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold">
          Manage Gallery
        </h1>

        <div className="mb-8 rounded-xl border bg-gray-50 p-6">
  <label className="mb-3 block font-semibold">
    Upload New Images
  </label>

  <input
    type="file"
    multiple
    accept="image/*"
    className="w-full rounded-lg border p-3"
    onChange={(e) => {
      if (e.target.files) {
        setNewImages(Array.from(e.target.files));
      }
    }}
  />

  <button
    onClick={uploadImages}
    disabled={uploading}
    className="mt-4 rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
  >
    {uploading ? "Uploading..." : "Upload Images"}
  </button>
</div>

       <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
  {images.map((img) => (
    <div
      key={img.id}
      className="overflow-hidden rounded-xl border shadow"
    >
      <Image
        src={img.image_url}
        alt="Project"
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />

      <div className="p-3">
        <button
          onClick={() => deleteImage(img.id, img.image_url)}
          className="w-full rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
        >
          Delete Image
        </button>
      </div>
    </div>
  ))}
</div>

        {images.length === 0 && (
          <p className="text-center text-gray-500">
            No images found.
          </p>
        )}
      </div>
    </main>
  );
}