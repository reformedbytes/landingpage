import { BookMarked } from "lucide-react";
import type { ReadingItem } from "@/lib/data/reading";

export function ReadingCard({ item }: { item: ReadingItem }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
      <div className="flex h-12 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-subtle">
        <BookMarked size={16} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-base font-medium text-foreground">
          {item.title}
        </h3>
        <p className="text-sm text-muted">{item.author}</p>
        {item.note && (
          <p className="mt-1 text-sm leading-relaxed text-subtle">
            {item.note}
          </p>
        )}
      </div>
    </div>
  );
}
