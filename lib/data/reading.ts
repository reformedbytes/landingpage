export interface ReadingItem {
  title: string;
  author: string;
  note?: string;
  category: "Currently Reading" | "Recently Finished" | "Recommended";
}

/**
 * All categories, including Recommended, are pulled live from Goodreads
 * at build time — see lib/goodreads.ts.
 */
