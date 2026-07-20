import Link from "next/link";
import { navItems } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-6 py-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-base text-foreground">
            Reformed<span className="text-accent">Bytes</span>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Reformed Bytes. All rights reserved.</p>
          <p>Built with craftsmanship, curiosity, and conviction.</p>
        </div>
      </div>
    </footer>
  );
}
