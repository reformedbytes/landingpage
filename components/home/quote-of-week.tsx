import { Container } from "@/components/ui/container";
import { FeaturedQuote } from "@/components/quotes/featured-quote";
import { Reveal } from "@/components/motion/reveal";
import { getQuoteOfWeek } from "@/lib/quote-of-week";

export function QuoteOfWeek() {
  const quote = getQuoteOfWeek();

  return (
    <section className="border-y border-border/60 bg-surface/30 py-20 sm:py-28">
      <Container>
        <Reveal>
          <span className="mb-10 block text-center text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Quote of the Week
          </span>
          <FeaturedQuote quote={quote} />
        </Reveal>
      </Container>
    </section>
  );
}
