"use client";

import * as React from "react";
import { Tag } from "@/components/ui/tag";
import { ArticlePreviewCard } from "@/components/journal/article-preview-card";
import { Reveal } from "@/components/motion/reveal";
import type { JournalEntry } from "@/lib/data/journal";

export function JournalFilter({
  entries,
  tags,
}: {
  entries: JournalEntry[];
  tags: string[];
}) {
  const [active, setActive] = React.useState<string | null>(null);

  const filtered = active
    ? entries.filter((entry) => entry.tags.includes(active))
    : entries;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={active === null}
          onClick={() => setActive(null)}
        >
          <Tag active={active === null}>All</Tag>
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={active === tag}
            onClick={() => setActive(tag)}
          >
            <Tag active={active === tag}>{tag}</Tag>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-subtle">No entries with this tag yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry, i) => (
            <Reveal key={entry.slug} delay={(i % 3) * 0.06}>
              <ArticlePreviewCard entry={entry} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
