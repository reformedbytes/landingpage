import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CurrentWork } from "@/components/home/current-work";
import { LatestJournal } from "@/components/home/latest-journal";
import { QuoteOfWeek } from "@/components/home/quote-of-week";
import { TechStack } from "@/components/home/tech-stack";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CurrentWork />
      <LatestJournal />
      <QuoteOfWeek />
      <TechStack />
      <Newsletter />
    </>
  );
}
