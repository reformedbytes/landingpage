import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuotesFilter } from "@/components/quotes/quotes-filter";
import { quotes, type QuoteCategory } from "@/lib/data/quotes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Quotes",
  description:
    "A collection of favorite quotations on theology, leadership, engineering, wisdom, craftsmanship, and work.",
  path: "/quotes",
});

const categories: QuoteCategory[] = [
  "Theology",
  "Leadership",
  "Engineering",
  "Wisdom",
  "Craftsmanship",
  "Work",
];

export default function QuotesPage() {
  return (
    <Container className="py-20 sm:py-24">
      <SectionHeading
        level="h1"
        eyebrow="Collected"
        title="Quotes"
        description="Words worth returning to — on theology, leadership, engineering, wisdom, craftsmanship, and work."
      />
      <QuotesFilter quotes={quotes} categories={categories} />
    </Container>
  );
}
