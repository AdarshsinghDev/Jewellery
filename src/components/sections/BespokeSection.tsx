"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * BESPOKE SECTION
 * Concept: a full-bleed image with the text column sitting in white space
 * alongside — NOT text over the image (AI default).
 * Image stays to the right, type breathes on warm canvas to the left.
 */
export default function BespokeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });

  const imgY = useTransform(scrollYProgress, [0,1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      id="bespoke"
      className="relative bg-canvas overflow-hidden"
      aria-labelledby="bespoke-h"
    >
      <div className="grid md:grid-cols-2 min-h-[80vh]">

        {/* ── Left: text — warm surface, no image behind ─────── */}
        <div className="bg-bronze-blush flex items-center px-8 md:px-16 lg:px-24 py-24 md:py-40">
          <div className="max-w-sm">
            <Reveal>
              <span className="label text-bronze-mid flex items-center gap-3 mb-8">
                <span className="w-5 h-px bg-bronze-warm/50" />
                Commission
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 id="bespoke-h" className="fluid-title font-serif font-semibold text-ink leading-tight mb-2">
                Something made
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <h2 className="fluid-title font-serif italic font-normal text-bronze-warm leading-tight mb-10">
                only for you.
              </h2>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="body-copy mb-5">
                We accept a limited number of bespoke commissions each season.
                A conversation begins. Then silence, craft, and finally — a piece
                that could only have been made for you.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="body-copy mb-12">
                The process takes 12–16 weeks. By correspondence, or by
                appointment in Paris, Tokyo or Milan.
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="ink" size="lg" href="#commission">
                  Begin a Conversation
                </Button>
                <a
                  href="#atelier"
                  className="inline-flex items-center gap-3 label text-bronze-mid
                             hover:text-ink transition-colors duration-300 group self-center"
                >
                  Learn the Process
                  <span className="block w-5 h-px bg-bronze-warm/50
                                   group-hover:w-8 group-hover:bg-ink
                                   transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Right: tall image with parallax ─────────────────── */}
        <div className="relative hidden md:block img-zoom overflow-hidden">
          <motion.div style={{ y: imgY }} className="absolute inset-[-6%]">
            <Image
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1000&q=90&fm=webp&fit=crop"
              alt="Indo Nordic bespoke commission — goldsmith drawing custom jewelry sketch by hand"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
