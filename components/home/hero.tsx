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
    <section className="border-b border-border/60 py-28 sm:py-40">
      <Container>
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl md:text-7xl"
          >
            Scripture and software, worked with the same care.
          </motion.h1>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            A personal study in reading, theology, and building things worth
            building.
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-2"
          >
            <Button href="/journal">
              Read the Journal
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
