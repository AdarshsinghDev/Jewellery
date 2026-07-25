"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

/**
 * MANIFESTO — rebuilt to eliminate empty space
 * Layout:
 *   Row 1: Large headline (full width) + editorial image side by side
 *   Row 2: 3-column text grid fills the space below
 *   Row 3: Pull quote full width
 */
export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const imgY      = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      id="about"
      className="bg-canvas py-24 md:py-40 overflow-hidden relative"
      aria-labelledby="manifesto-h"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* ── ROW 1: Headline left + image right ─────────────────── */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-20 items-end">

          {/* Headline block — left 7 cols */}
          <div className="md:col-span-7">
            <Reveal className="mb-4">
              <span className="label text-bronze-mid flex items-center gap-3">
                <span className="block w-5 h-px bg-bronze-warm/50" />
                Philosophy
              </span>
            </Reveal>

            <div className="overflow-hidden mb-1">
              <motion.h2
                id="manifesto-h"
                initial={{ y: "104%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="fluid-title font-serif italic font-normal text-bronze-mid leading-none"
              >
                Jewelry is not
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "104%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="fluid-title font-serif font-semibold text-ink leading-none"
              >
                decoration.
              </motion.h2>
            </div>

            <Reveal delay={0.18}>
              <p className="lede text-dim max-w-[500px]">
                It is the architecture of the self — a quiet statement
                that needs no audience. At Indo Nordic, we begin with silence
                and shape it into something that endures.
              </p>
            </Reveal>

            {/* Animated rule */}
            <div className="h-px bg-tint overflow-hidden mt-10 max-w-[400px]">
              <motion.div
                style={{ scaleX: lineScale, originX: 0 }}
                className="h-full bg-bronze-warm"
              />
            </div>
          </div>

          {/* Image — right 5 cols, tall portrait */}
          <motion.div
            style={{ y: imgY }}
            className="md:col-span-5 relative h-[50vw] md:h-[480px] img-zoom overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=90&fm=webp&fit=crop"
              alt="Indo Nordic — close-up gemstone ring with warm bokeh, editorial macro photography"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            {/* Subtle caption */}
            <div className="absolute bottom-4 left-5">
              <span className="label text-white/60">Lumière — Detail</span>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 2: 3-column content grid ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20 border-t border-tint pt-12">

          {/* Col 1 — stats */}
          <Reveal delay={0.05}>
            <div className="space-y-8">
              <div>
                <div className="label text-ghost mb-1.5">Founded</div>
                <div className="font-serif italic text-2xl text-ink">2010, Paris</div>
              </div>
              <div>
                <div className="label text-ghost mb-1.5">Ateliers</div>
                <div className="font-serif italic text-xl text-dim leading-loose">
                  Paris · Tokyo · Milan
                </div>
              </div>
              <div>
                <div className="label text-ghost mb-1.5">Pieces crafted</div>
                <div className="font-serif italic text-2xl text-ink">2,400+</div>
              </div>
            </div>
          </Reveal>

          {/* Col 2 — first body paragraph */}
          <Reveal delay={0.12}>
            <div>
              <p className="body-copy mb-5">
                Every piece passes through the hands of a single artisan from
                concept to completion. No assembly line. No delegation. Only the
                unhurried pursuit of something that will outlast its maker.
              </p>
              <p className="body-copy">
                We source every gram of gold, every gemstone, with complete
                transparency — because luxury without ethics is merely vanity.
              </p>
            </div>
          </Reveal>

          {/* Col 3 — second editorial paragraph + image */}
          <Reveal delay={0.2}>
            <div>
              <p className="body-copy mb-8">
                The atelier operates on a simple principle: a piece is finished
                when the light behaves as intended — not when the calendar says so.
                Time is the only material we never compromise.
              </p>
              <div className="relative aspect-square img-zoom overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=88&fm=webp&fit=crop"
                  alt="Indo Nordic — delicate gold wire earrings, negative space study"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 22vw"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── ROW 3: Pull quote — full width ─────────────────────── */}
        <Reveal delay={0.1}>
          <div className="border-t border-tint pt-12 grid md:grid-cols-12 gap-8">
            <blockquote className="md:col-span-8 md:col-start-3 text-center">
              <p className="font-serif italic text-2xl md:text-3xl text-ink leading-snug mb-6">
                &ldquo;We do not make jewelry.<br />We make heirlooms.&rdquo;
              </p>
              <footer className="label text-ghost">
                — Élise Maurin, Founder & Creative Director
              </footer>
            </blockquote>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
