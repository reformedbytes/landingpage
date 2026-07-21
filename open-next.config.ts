import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * This site has no revalidation — every page is fully static, rebuilt
 * only on deploy. The static-assets cache serves prerendered output
 * straight from Workers Assets instead of re-running page logic (and
 * external fetches like the Goodreads call in lib/goodreads.ts) on
 * every uncached request.
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
