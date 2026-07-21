import { Container } from "@/components/ui/container";
import { FeaturedQuote } from "@/components/quotes/featured-quote";
import { Reveal } from "@/components/motion/reveal";
import { getQuoteOfWeek } from "@/lib/quote-of-week";

export function QuoteOfWeek() {
  const quote = getQuoteOfWeek();

  return (
    <section className="border-y border-accent/20 py-28 sm:py-36">
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
