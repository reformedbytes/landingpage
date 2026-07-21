import type { PortableTextBlock } from "next-sanity";
import { sanityClient } from "@/lib/sanity/client";
import {
  POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
} from "@/lib/sanity/queries";

export interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  tags: string[];
  readingMinutes: number;
}

export interface JournalEntryWithBody extends JournalEntry {
  body: PortableTextBlock[];
}

export async function getJournalEntries(): Promise<JournalEntry[]> {
  return sanityClient.fetch(POSTS_QUERY);
}

export async function getLatestJournalEntries(
  count = 3
): Promise<JournalEntry[]> {
  const entries = await getJournalEntries();
  return entries.slice(0, count); // POSTS_QUERY already orders by date desc
}

export async function getJournalEntryBySlug(
  slug: string
): Promise<JournalEntryWithBody | null> {
  return sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
}

export async function getJournalSlugs(): Promise<string[]> {
  const results: { slug: string }[] = await sanityClient.fetch(
    POST_SLUGS_QUERY
  );
  return results.map((r) => r.slug);
}

export function getAllJournalTags(entries: JournalEntry[]): string[] {
  return Array.from(new Set(entries.flatMap((e) => e.tags ?? []))).sort();
}
