import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { QuoteOfWeek } from "@/components/home/quote-of-week";
import { ReadingTeaser } from "@/components/home/reading-teaser";
import { LatestJournal } from "@/components/home/latest-journal";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <QuoteOfWeek />
      <ReadingTeaser />
      <LatestJournal />
      <FeaturedProjects />
      <Newsletter />
    </>
  );
}
