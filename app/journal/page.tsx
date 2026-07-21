import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { JournalFilter } from "@/components/journal/journal-filter";
import { getJournalEntries, getAllJournalTags } from "@/lib/data/journal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Journal",
  description:
    "Engineering notes, project write-ups, and reflections on craft, stewardship, and technology.",
  path: "/journal",
});

export default async function JournalPage() {
  const entries = await getJournalEntries();
  const tags = getAllJournalTags(entries);

  return (
    <Container className="py-20 sm:py-24">
      <SectionHeading
        level="h1"
        eyebrow="Writing"
        title="Journal"
        description="An engineering journal — notes on AI, RF, infrastructure, and the craft of building things well."
      />
      <JournalFilter entries={entries} tags={tags} />
    </Container>
  );
}
