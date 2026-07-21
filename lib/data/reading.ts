export interface ReadingItem {
  title: string;
  author: string;
  note?: string;
  category: "Currently Reading" | "Recently Finished" | "Recommended";
}

/**
 * Currently Reading / Recently Finished are pulled live from Goodreads
 * at build time — see lib/goodreads.ts. Recommended stays hand-curated
 * here since it's editorial, not a Goodreads shelf status.
 */
export const recommendedReading: ReadingItem[] = [
  {
    title: "The Soul of a New Machine",
    author: "Tracy Kidder",
    category: "Recommended",
  },
  {
    title: "A Philosophy of Software Design",
    author: "John Ousterhout",
    category: "Recommended",
  },
];
