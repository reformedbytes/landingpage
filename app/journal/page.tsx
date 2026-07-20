import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JournalFilter } from "@/components/journal/journal-filter";
import { journalEntries, getAllJournalTags } from "@/lib/data/journal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Journal",
  description:
    "Engineering notes, project write-ups, and reflections on craft, stewardship, and technology.",
  path: "/journal",
});

export default function JournalPage() {
  const tags = getAllJournalTags();

  return (
    <Container className="py-20 sm:py-24">
      <SectionHeading
        level="h1"
        eyebrow="Writing"
        title="Journal"
        description="An engineering journal — notes on AI, RF, infrastructure, and the craft of building things well."
      />
      <JournalFilter entries={journalEntries} tags={tags} />
    </Container>
  );
}
