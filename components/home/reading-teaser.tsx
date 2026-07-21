import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { getGoodreadsReading } from "@/lib/goodreads";

const TEASER_LIMIT = 3;

export async function ReadingTeaser() {
  const reading = await getGoodreadsReading();
  const currentlyReading = reading
    .filter((item) => item.category === "Currently Reading")
    .slice(0, TEASER_LIMIT);

  if (currentlyReading.length === 0) return null;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="On the Nightstand"
            title="Currently Reading"
            description="A running record of what's shaping my thinking right now — theology, engineering, history."
            className="mb-0"
          />
          <Button href="/reading" variant="secondary" size="sm" className="shrink-0">
            Full bookshelf
          </Button>
        </Reveal>

        <div className="flex flex-col divide-y divide-border/60 border-y border-border/60">
          {currentlyReading.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-display text-base text-foreground">
                {item.title}
              </span>
              <span className="text-sm text-muted">{item.author}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
