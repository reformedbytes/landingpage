import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge, TechBadge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/projects/project-visual";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isPlanned = project.status === "planned";

  const content = (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <ProjectVisual icon={project.icon} category={project.category} className="mb-5" />
        <CardHeader className="mb-3 flex-row items-start justify-between gap-4">
          <CardTitle>{project.name}</CardTitle>
          <StatusBadge status={project.status} />
        </CardHeader>
        <CardDescription>{project.description}</CardDescription>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        )}

        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          {isPlanned ? "Coming soon" : "View project"}
          {!isPlanned && <ArrowUpRight size={14} />}
        </span>
      </div>
    </Card>
  );

  if (isPlanned) {
    return content;
  }

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      {content}
    </Link>
  );
}
