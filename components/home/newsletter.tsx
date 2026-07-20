import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Newsletter() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-8 py-12 text-center">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Occasional dispatches
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            A short, infrequent note when there&apos;s something worth
            sharing — new projects, journal entries, or a quote worth
            sitting with. No noise, no schedule.
          </p>
          <form className="mt-2 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 flex-1 rounded-full border border-border bg-surface-2 px-4 text-sm text-foreground placeholder:text-subtle focus-visible:outline-none"
            />
            <Button type="submit" size="md">
              Subscribe
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
