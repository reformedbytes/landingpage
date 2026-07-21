import { defineQuery } from "next-sanity";

// ~1100 chars/minute (~220 wpm at ~5 chars/word), minimum 1 minute.
const READING_MINUTES_PROJECTION = `math::max([1, round(length(pt::text(body)) / 1100)])`;

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    "date": publishedAt,
    tags,
    "readingMinutes": ${READING_MINUTES_PROJECTION},
  }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    excerpt,
    "date": publishedAt,
    tags,
    "readingMinutes": ${READING_MINUTES_PROJECTION},
    body,
  }
`);
