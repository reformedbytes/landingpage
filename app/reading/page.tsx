import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReadingCard } from "@/components/reading/reading-card";
import { Reveal } from "@/components/motion/reveal";
import { recommendedReading } from "@/lib/data/reading";
import { getGoodreadsReading } from "@/lib/goodreads";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Reading",
  description:
    "A curated bookshelf — currently reading, recently finished, and recommended books on theology, engineering, and craft.",
  path: "/reading",
});

const categories = [
  "Currently Reading",
  "Recently Finished",
  "Recommended",
] as const;

export default async function ReadingPage() {
  const goodreadsReading = await getGoodreadsReading();
  const reading = [...goodreadsReading, ...recommendedReading];

  return (
    <Container className="py-20 sm:py-24">
      <SectionHeading
        level="h1"
        eyebrow="Bookshelf"
        title="Reading"
        description="Theology, engineering, biography, history — a running record of what's shaping my thinking."
      />
      <div className="flex flex-col gap-14">
        {categories.map((category) => {
          const items = reading.filter((item) => item.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="mb-5 font-display text-xl font-medium text-foreground">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 2) * 0.06}>
                    <ReadingCard item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
