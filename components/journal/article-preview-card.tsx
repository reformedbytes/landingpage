import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import type { JournalEntry } from "@/lib/data/journal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticlePreviewCard({ entry }: { entry: JournalEntry }) {
  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-2"
    >
      <div className="flex items-center justify-between gap-4 text-xs text-subtle">
        <time dateTime={entry.date}>{formatDate(entry.date)}</time>
        <span>{entry.readingMinutes} min read</span>
      </div>

      <h3 className="font-display text-lg font-medium text-foreground">
        {entry.title}
      </h3>

      <p className="text-sm leading-relaxed text-muted">{entry.excerpt}</p>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-subtle transition-colors group-hover:text-accent"
        />
      </div>
    </Link>
  );
}
