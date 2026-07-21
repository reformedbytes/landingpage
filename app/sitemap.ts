import type { MetadataRoute } from "next";
import { getJournalEntries } from "@/lib/data/journal";
import { projects } from "@/lib/data/projects";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/projects",
    "/journal",
    "/quotes",
    "/reading",
    "/about",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const journalEntries = await getJournalEntries();
  const journalRoutes = journalEntries.map((entry) => ({
    url: `${siteUrl}/journal/${entry.slug}`,
    lastModified: new Date(entry.date),
  }));

  const projectRoutes = projects
    .filter((p) => p.status !== "planned")
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    }));

  return [...staticRoutes, ...journalRoutes, ...projectRoutes];
}
