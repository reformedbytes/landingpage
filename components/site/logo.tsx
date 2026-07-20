import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-display text-lg font-medium tracking-tight text-foreground transition-colors hover:text-accent"
    >
      Reformed<span className="text-accent">Bytes</span>
    </Link>
  );
}
