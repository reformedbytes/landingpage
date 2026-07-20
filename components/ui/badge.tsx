import * as React from "react";
import { cn } from "@/lib/utils";

type Status = "active" | "in-progress" | "planned" | "archived";

const statusLabel: Record<Status, string> = {
  active: "Active",
  "in-progress": "In Progress",
  planned: "Planned",
  archived: "Archived",
};

const statusDot: Record<Status, string> = {
  active: "bg-emerald-400",
  "in-progress": "bg-accent",
  planned: "bg-muted",
  archived: "bg-subtle",
};

export function StatusBadge({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])}
        aria-hidden
      />
      {statusLabel[status]}
    </span>
  );
}

export function TechBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-xs text-subtle",
        className
      )}
    >
      {children}
    </span>
  );
}
