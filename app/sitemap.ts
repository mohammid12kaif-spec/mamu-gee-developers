import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mamu-gee-developer.com",
      lastModified: new Date(),
    },
    {
      url: "https://mamu-gee-developer.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://mamu-gee-developer.com/about",
      lastModified: new Date(),
    },
  ];
}