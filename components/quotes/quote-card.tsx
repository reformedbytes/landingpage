import { Tag } from "@/components/ui/tag";
import type { Quote } from "@/lib/data/quotes";

export function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <blockquote className="font-display text-lg italic leading-relaxed text-foreground">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">
          — {quote.author}
          {quote.source && (
            <span className="text-subtle"> · {quote.source}</span>
          )}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {quote.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
