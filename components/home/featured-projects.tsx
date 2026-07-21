import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A sample of what's actively being built in the lab — engineering experiments, tools, and infrastructure."
            className="mb-0"
          />
          <Button href="/projects" variant="secondary" size="sm" className="shrink-0">
            All projects
          </Button>
        </Reveal>

        <p className="mb-8 text-sm text-subtle">
          Right now: rebuilding the Sonos Dashboard&apos;s zone grouping UI,
          and extending the SDR Lab to decode a wider range of utility
          telemetry protocols.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
