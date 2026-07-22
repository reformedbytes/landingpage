import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className={cn("h-9 w-9 shrink-0 text-foreground", className)}
      fill="none"
    >
      <path
        d="M20.5 9.5c-5.25 0-6.25 4.25-6.25 8.25v4.5c0 4.5-4.25 4.75-4.25 9.75s4.25 5.25 4.25 9.75v4.5c0 4 1 8.25 6.25 8.25"
        stroke="currentColor"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
      <path
        d="M43.5 9.5c5.25 0 6.25 4.25 6.25 8.25v4.5c0 4.5 4.25 4.75 4.25 9.75s-4.25 5.25-4.25 9.75v4.5c0 4-1 8.25-6.25 8.25"
        stroke="currentColor"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
      <path
        d="M32 25c-3.2-3.1-6.65-3.65-10.25-2.5v18.8c4.05-.85 7.4.25 10.25 3.35m0-19.65c3.2-3.1 6.65-3.65 10.25-2.5v18.8c-4.05-.85-7.4.25-10.25 3.35"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 24.25V46.4"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        opacity="0.78"
      />
      <path
        d="M24 25.7v12.25c2.75-.15 5.5 1.05 8 3.55m8-15.8v12.25c-2.75-.15-5.5 1.05-8 3.55"
        stroke="hsl(var(--accent))"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
    </svg>
  );
}

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent",
        className
      )}
      aria-label="Reformed Bytes home"
    >
      <LogoMark className="h-9 w-9" />
      <span className="flex flex-col">
        <span className="font-display text-lg font-medium leading-none tracking-tight">
          Reformed<span className="text-accent">Bytes</span>
        </span>
        {showTagline && (
          <span className="mt-1 font-mono text-[0.58rem] font-medium uppercase leading-none tracking-[0.24em] text-subtle">
            Faith. Truth. Technology.
          </span>
        )}
      </span>
    </Link>
  );
}
