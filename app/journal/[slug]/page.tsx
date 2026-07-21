import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { journalEntries, getJournalEntryBySlug } from "@/lib/data/journal";
import { pageMetadata, siteUrl } from "@/lib/seo";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntryBySlug(slug);
  if (!entry) return {};
  return pageMetadata({
    title: entry.title,
    description: entry.excerpt,
    path: `/journal/${entry.slug}`,
    type: "article",
  });
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntryBySlug(slug);
  if (!entry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.excerpt,
    datePublished: entry.date,
    dateModified: entry.date,
    author: {
      "@type": "Person",
      name: "Reformed Bytes",
    },
    url: `${siteUrl}/journal/${entry.slug}`,
    keywords: entry.tags.join(", "),
  };

  return (
    <Container className="py-20 sm:py-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Button href="/journal" variant="ghost" size="sm" className="mb-8 -ml-3">
        <ArrowLeft size={14} />
        All journal entries
      </Button>

      <article className="mx-auto max-w-prose">
        <div className="mb-6 flex items-center gap-4 text-xs text-subtle">
          <time dateTime={entry.date}>{formatDate(entry.date)}</time>
          <span>{entry.readingMinutes} min read</span>
        </div>

        <h1 className="mb-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          {entry.title}
        </h1>

        <div className="mb-10 flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="prose prose-invert max-w-none space-y-5 [&>p]:leading-relaxed">
          {entry.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
