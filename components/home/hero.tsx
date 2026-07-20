"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : i * 0.08,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(var(--accent) / 0.08), transparent 70%)",
        }}
      />
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-6">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            Reformed Bytes
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl font-medium leading-[1.1] text-foreground sm:text-5xl md:text-6xl"
          >
            Engineering thoughtful software.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            Building intelligent systems for AI, RF, automation, and
            infrastructure. Technology shaped by craftsmanship and
            conviction.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center gap-3"
          >
            <Button href="/projects">
              Explore Projects
              <ArrowRight size={16} />
            </Button>
            <Button href="/journal" variant="secondary">
              Read Journal
            </Button>
            <Button href="/quotes" variant="ghost">
              View Quotes
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
