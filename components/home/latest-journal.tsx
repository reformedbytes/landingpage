import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArticlePreviewCard } from "@/components/journal/article-preview-card";
import { Reveal } from "@/components/motion/reveal";
import { latestJournalEntries } from "@/lib/data/journal";

export function LatestJournal() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Writing"
            title="Latest from the Journal"
            description="Engineering notes, project write-ups, and reflections on craft."
            className="mb-0"
          />
          <Button href="/journal" variant="secondary" size="sm" className="shrink-0">
            Read journal
          </Button>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestJournalEntries.map((entry, i) => (
            <Reveal key={entry.slug} delay={i * 0.06}>
              <ArticlePreviewCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
