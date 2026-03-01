import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://tigattech.com";

const routes = [
  "",
  "/about",
  "/services",
  "/process",
  "/works",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
