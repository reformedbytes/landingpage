import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StatusBadge, TechBadge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/projects/project-visual";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects
    .filter((p) => p.status !== "planned")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.status === "planned") notFound();

  return (
    <Container className="py-20 sm:py-24">
      <Button href="/projects" variant="ghost" size="sm" className="mb-8 -ml-3">
        <ArrowLeft size={14} />
        All projects
      </Button>

      <div className="mx-auto max-w-3xl">
        <ProjectVisual icon={project.icon} category={project.category} className="mb-8" />

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl font-medium text-foreground sm:text-4xl">
            {project.name}
          </h1>
          <StatusBadge status={project.status} />
        </div>

        <p className="mb-6 text-lg leading-relaxed text-muted">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        )}

        <div className="space-y-5 border-t border-border/60 pt-8 text-base leading-relaxed text-muted">
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {project.liveUrl && (
          <div className="mt-10">
            <Button href={project.liveUrl} variant="secondary">
              Visit live site
              <ArrowUpRight size={14} />
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
