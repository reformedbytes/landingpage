import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Docker",
  "Cloudflare",
  "Whisper",
  "PostgreSQL",
  "Raspberry Pi",
  "SDR",
];

export function TechStack() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-subtle">
            Technologies
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="font-mono text-sm text-muted transition-colors hover:text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
