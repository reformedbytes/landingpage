import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2026-07-20",
  // Content only changes on redeploy (no ISR/webhooks on this site), so
  // build-time fetches go straight to the API rather than the CDN cache.
  useCdn: false,
});
