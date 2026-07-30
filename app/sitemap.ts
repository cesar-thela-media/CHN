import type { MetadataRoute } from "next";
import { getAllInsightSlugs } from "@/lib/insights";
import { getAllServiceSlugs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/buyers",
    "/partners",
    "/services",
    ...getAllServiceSlugs().map((s) => `/services/${s}`),
    "/insights",
    ...getAllInsightSlugs().map((s) => `/insights/${s}`),
    "/contact",
    "/privacy",
    "/terms",
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "" || path === "/services" || path === "/insights"
        ? "weekly"
        : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/services/") || path.startsWith("/insights/")
          ? 0.65
          : 0.7,
  }));
}
