import type { Quote } from "@/lib/data/quotes";

export function FeaturedQuote({ quote }: { quote: Quote }) {
  return (
    <figure className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
      <span
        aria-hidden
        className="font-display text-5xl leading-none text-accent/50"
      >
        &ldquo;
      </span>
      <blockquote className="font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
        {quote.text}
      </blockquote>
      <figcaption className="text-sm text-muted">
        — {quote.author}
        {quote.source && <span className="text-subtle"> · {quote.source}</span>}
      </figcaption>
    </figure>
  );
}
