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

/**
 * Each project family gets its own muted hue (same saturation/lightness
 * formula as the site accent, just a different hue) so the placeholder
 * visuals read as distinct product lines rather than one repeated icon
 * recolored identically across every card.
 */
const hues: Record<ProjectIcon, number> = {
  flame: 12, // terracotta
  "trending-up": 152, // sage / muted emerald
  speaker: 265, // slate violet
  coffee: 32, // brass (matches site accent)
  cpu: 205, // slate blue
  radio: 175, // muted teal
  sparkles: 220, // neutral slate
};

export function ProjectVisual({
  icon,
  category,
  className,
}: {
  icon: ProjectIcon;
  category?: string;
  className?: string;
}) {
  const Icon = icons[icon];
  const hue = hues[icon];
  const tint = `hsl(${hue} 45% 58%)`;

  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-2",
        className
      )}
    >
      {/* fine blueprint-style dot grid, tinted per project */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `radial-gradient(hsl(${hue} 40% 60% / 0.35) 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />
      {/* soft directional glow behind the mark */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 70% at 28% 22%, hsl(${hue} 45% 58% / 0.16), transparent 65%)`,
        }}
      />

      {category && (
        <span
          className="absolute left-3 top-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em]"
          style={{ color: tint }}
        >
          {category}
        </span>
      )}

      <div
        className="relative flex h-11 w-11 items-center justify-center rounded-lg border"
        style={{
          borderColor: `hsl(${hue} 40% 58% / 0.35)`,
          backgroundColor: `hsl(${hue} 45% 58% / 0.12)`,
        }}
      >
        <Icon size={20} style={{ color: tint }} />
      </div>
    </div>
  );
}
