"use client";

import { useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <img
        src={selectedImage}
        alt={title}
        className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
      />

      {/* Thumbnail Images */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`h-32 w-full cursor-pointer rounded-xl object-cover shadow-md transition duration-300 hover:scale-105 ${
              selectedImage === image
                ? "ring-4 ring-yellow-500"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}