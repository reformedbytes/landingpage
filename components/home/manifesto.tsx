import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Manifesto() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            This is a personal record, not a company. Old books get read
            closely — Calvin, Owen, the Confessions — and new things get
            built carefully: software, dashboards, homelab experiments, the
            occasional SDR project. Reading and building, held to the same
            standard.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
