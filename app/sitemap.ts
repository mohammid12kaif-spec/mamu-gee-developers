import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mamugeedevelopers.com",
      lastModified: new Date(),
    },
    {
      url: "https://mamugeedevelopers.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mamugeedevelopers.com/about",
      lastModified: new Date(),
    },
  ];
}