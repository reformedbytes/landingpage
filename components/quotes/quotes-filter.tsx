"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { QuoteCard } from "@/components/quotes/quote-card";
import { Reveal } from "@/components/motion/reveal";
import type { Quote, QuoteCategory } from "@/lib/data/quotes";

export function QuotesFilter({
  quotes,
  categories,
}: {
  quotes: Quote[];
  categories: QuoteCategory[];
}) {
  const [active, setActive] = React.useState<QuoteCategory | null>(null);
  const [query, setQuery] = React.useState("");

  const filtered = quotes.filter((quote) => {
    const matchesCategory = active ? quote.tags.includes(active) : true;
    const q = query.trim().toLowerCase();
    const matchesQuery = q
      ? quote.text.toLowerCase().includes(q) ||
        quote.author.toLowerCase().includes(q)
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="mb-6">
        <div className="relative max-w-sm">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search quotes or authors…"
            aria-label="Search quotes or authors"
            className="h-11 w-full rounded-full border border-border bg-surface-2 pl-10 pr-4 text-sm text-foreground placeholder:text-subtle focus-visible:outline-none"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={active === null}
          onClick={() => setActive(null)}
        >
          <Tag active={active === null}>All</Tag>
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            <Tag active={active === category}>{category}</Tag>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-subtle">No quotes match your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((quote, i) => (
            <Reveal key={quote.id} delay={(i % 2) * 0.06}>
              <QuoteCard quote={quote} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
