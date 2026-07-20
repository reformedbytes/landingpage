import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Callout } from "@/components/ui/callout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Why Reformed Bytes exists — engineering interests, faith, and the conviction that technology is a gift to be used wisely.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-24">
      <SectionHeading level="h1" eyebrow="About" title="About Reformed Bytes" />
      <div className="max-w-prose space-y-6 text-base leading-relaxed text-muted">
        <p>
          Reformed Bytes is my collection of software projects, engineering
          experiments, and writing.
        </p>
        <p>
          I work with RF infrastructure and utility communications, enjoy
          building AI-powered tools and Raspberry Pi projects, and believe
          technology is one way we exercise creativity and stewardship.
        </p>
        <p>
          The name Reformed Bytes reflects both my passion for engineering
          and my conviction that faith shapes how we approach our work, our
          craft, and our service to others.
        </p>
        <Callout label="Why this site exists">
          This is a long-term home for the things I build and think about —
          projects, documentation, writing, quotes, and reading — meant to
          grow slowly and stay useful for years, not just a launch-week
          portfolio.
        </Callout>
      </div>
    </Container>
  );
}
