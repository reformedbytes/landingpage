import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

type BrandLockupProps = {
  className?: string;
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
        d="M32 24.25c-4.6-4.1-9.15-4.7-14-3.05v21.1c5.5-1.4 9.9-.35 14 4.1m0-22.15c4.6-4.1 9.15-4.7 14-3.05v21.1c-5.5-1.4-9.9-.35-14 4.1"
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
        d="M20.75 24.5v13.75c3.7-.45 7.5.9 11.25 4.05m11.25-17.8v13.75c-3.7-.45-7.5.9-11.25 4.05"
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

export function BrandLockup({ className }: BrandLockupProps) {
  return (
    <div className={cn("flex flex-col items-start gap-4", className)}>
      <LogoMark className="h-14 w-14 sm:h-16 sm:w-16" />
      <div>
        <p className="font-display text-3xl font-medium leading-none tracking-tight text-foreground sm:text-4xl">
          Reformed<span className="text-accent">Bytes</span>
        </p>
        <p className="mt-3 font-mono text-[0.65rem] font-medium uppercase tracking-[0.32em] text-subtle sm:text-xs">
          Faith. Truth. Technology.
        </p>
      </div>
    </div>
  );
}
