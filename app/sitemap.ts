import type { MetadataRoute } from "next";
import { getAllServiceSlugs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/buyers",
    "/partners",
    "/services",
    ...getAllServiceSlugs().map((s) => `/services/${s}`),
    "/contact",
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: "2026-08-03",
    changeFrequency: path === "" || path === "/services" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/services/") || path.startsWith("/insights/")
          ? 0.65
          : 0.7,
  }));
}
