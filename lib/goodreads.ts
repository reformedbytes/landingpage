import type { ReadingItem } from "@/lib/data/reading";

/** goodreads.com/user/show/33449473-drew-miller */
const GOODREADS_USER_ID = "33449473";

const RECENTLY_FINISHED_LIMIT = 4;

interface GoodreadsBook {
  title: string;
  author: string;
  readAt?: string;
  review?: string;
}

function extractTag(xml: string, tag: string): string | undefined {
  const match = xml.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`)
  );
  if (!match) return undefined;
  const value = (match[1] ?? match[2] ?? "").replace(/\s+/g, " ").trim();
  return value.length ? value : undefined;
}

function parseItems(xml: string): string[] {
  return xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
}

/**
 * Goodreads' public API was retired in 2020; the shelf RSS feeds
 * (undocumented but still live) are the only key-free way to read a
 * public profile. If Goodreads changes or drops this, shelves just
 * fetch empty rather than failing the build.
 */
async function fetchShelf(shelf: string): Promise<GoodreadsBook[]> {
  try {
    const res = await fetch(
      `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=${shelf}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "application/rss+xml, application/xml, text/xml, */*",
        },
      }
    );
    if (!res.ok) {
      console.warn(`Goodreads: shelf "${shelf}" returned ${res.status}`);
      return [];
    }
    const xml = await res.text();
    return parseItems(xml).map((item) => ({
      title: extractTag(item, "title") ?? "Untitled",
      author: extractTag(item, "author_name") ?? "Unknown",
      readAt: extractTag(item, "user_read_at"),
      review: extractTag(item, "user_review"),
    }));
  } catch (err) {
    console.warn(`Goodreads: fetch failed for shelf "${shelf}"`, err);
    return [];
  }
}

function toReadingItem(book: GoodreadsBook, category: ReadingItem["category"]): ReadingItem {
  return {
    title: book.title,
    author: book.author,
    note: book.review,
    category,
  };
}

/**
 * Fetched at build time (this runs in a static Server Component), so
 * the list refreshes on each deploy, not live per-visit.
 */
export async function getGoodreadsReading(): Promise<ReadingItem[]> {
  const [currentlyReading, read] = await Promise.all([
    fetchShelf("currently-reading"),
    fetchShelf("read"),
  ]);

  const recentlyFinished = read
    .filter((b) => b.readAt)
    .sort((a, b) => new Date(b.readAt!).getTime() - new Date(a.readAt!).getTime())
    .slice(0, RECENTLY_FINISHED_LIMIT);

  return [
    ...currentlyReading.map((b) => toReadingItem(b, "Currently Reading")),
    ...recentlyFinished.map((b) => toReadingItem(b, "Recently Finished")),
  ];
}
