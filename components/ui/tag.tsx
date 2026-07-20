import * as React from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  active = false,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-border bg-transparent text-subtle hover:border-accent/30 hover:text-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
