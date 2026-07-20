import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Callout } from "@/components/ui/callout";
import { Reveal } from "@/components/motion/reveal";

export function CurrentWork() {
  return (
    <section className="border-y border-border/60 bg-surface/30 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Right Now" title="Current Work" />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <Callout label="In Progress">
              Rebuilding the Sonos Dashboard's zone grouping UI to feel less
              like a remote and more like a control surface.
            </Callout>
          </Reveal>
          <Reveal delay={0.06}>
            <Callout label="In Progress">
              Extending the SDR Lab to decode a wider range of utility
              telemetry protocols.
            </Callout>
          </Reveal>
          <Reveal delay={0.12}>
            <Callout label="Exploring">
              Prototyping a lightweight self-hosted alternative to a few SaaS
              tools I've outgrown.
            </Callout>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
