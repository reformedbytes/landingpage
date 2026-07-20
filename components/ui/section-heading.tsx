import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  level = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
}) {
  const Heading = level;
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      )}
      <Heading className="font-display text-2xl font-medium text-foreground sm:text-3xl">
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
