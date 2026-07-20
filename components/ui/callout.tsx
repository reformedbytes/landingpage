import * as React from "react";
import { cn } from "@/lib/utils";

export function Callout({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border-l-2 border-accent bg-surface/60 px-5 py-4 text-sm leading-relaxed text-muted",
        className
      )}
    >
      {label && (
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent">
          {label}
        </p>
      )}
      {children}
    </div>
  );
}
