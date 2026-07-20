import type { Metadata } from "next";

export const siteUrl = "https://reformedbytes.com";

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Reformed Bytes",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
