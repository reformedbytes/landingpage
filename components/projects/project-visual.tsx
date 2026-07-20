import { Flame, TrendingUp, Speaker, Coffee, Cpu, Radio, Sparkles, type LucideIcon } from "lucide-react";
import type { ProjectIcon } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const icons: Record<ProjectIcon, LucideIcon> = {
  flame: Flame,
  "trending-up": TrendingUp,
  speaker: Speaker,
  coffee: Coffee,
  cpu: Cpu,
  radio: Radio,
  sparkles: Sparkles,
};

export function ProjectVisual({
  icon,
  className,
}: {
  icon: ProjectIcon;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-2",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 80% at 30% 20%, hsl(var(--accent) / 0.14), transparent 65%)",
        }}
      />
      <Icon size={32} className="relative text-accent/70" />
    </div>
  );
}
