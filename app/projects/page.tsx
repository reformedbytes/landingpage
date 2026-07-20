import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/data/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Software projects and engineering experiments from Reformed Bytes — AI, RF, automation, and infrastructure.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Container className="py-20 sm:py-24">
      <SectionHeading
        level="h1"
        eyebrow="Lab Index"
        title="Projects"
        description="Engineering experiments, tools, and infrastructure — some shipped, some still taking shape."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
