"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

/**
 * EDITORIAL SPREAD
 * ── Concept: a magazine double-page spread opened flat
 * ── Left image bleeds slightly off-canvas top
 * ── Right image is shorter and offset down
 * ── Middle column is pure type — no border, no card, just space
 * ── Anti-AI: no equal-height cards, no grid that could be a template
 */
export default function EditorialSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });

  const leftY   = useTransform(scrollYProgress, [0,1], [30, -30]);
  const rightY  = useTransform(scrollYProgress, [0,1], [-20, 20]);

  return (
    <section
      ref={ref}
      className="bg-canvas py-16 md:py-24 overflow-hidden"
      aria-label="Indo Nordic campaign editorial spread"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">

          {/* ── Col A: tall image ─────────────────────────────── */}
          <motion.div
            style={{ y: leftY }}
            className="col-span-12 md:col-span-5 relative"
          >
            <div className="img-zoom relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=90&fm=webp&fit=crop"
                alt="Indo Nordic editorial — gold chain draped on natural skin texture, macro studio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="label text-ghost">Lumière — Study</span>
              <span className="label text-bronze-light">No. 04</span>
            </div>
          </motion.div>

          {/* ── Col B: editorial text — no excessive padding ────── */}
          <div className="col-span-12 md:col-span-3 flex flex-col justify-center px-0 md:px-4">
            <Reveal>
              <span className="label text-bronze-mid flex items-center gap-3 mb-6">
                <span className="w-4 h-px bg-bronze-warm/50" />
                SS 2025 Campaign
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="fluid-heading font-serif font-semibold text-ink leading-tight mb-5">
                The obsession<br />
                <span className="italic font-normal text-bronze-warm">
                  lives in the detail.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="body-copy mb-6">
                Every edge is considered. Every surface hand-finished.
                The studio works in light and shadow until the piece
                feels inevitable.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <a
                href="#atelier"
                className="inline-flex items-center gap-3 label text-bronze-mid
                           hover:text-ink transition-colors duration-300 group"
              >
                Inside the Atelier
                <span className="block w-5 h-px bg-bronze-warm/50
                                 group-hover:w-8 group-hover:bg-ink
                                 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            </Reveal>
          </div>

          {/* ── Col C: two images stacked ────────────────────── */}
          <motion.div
            style={{ y: rightY }}
            className="col-span-12 md:col-span-4 flex flex-col gap-4 md:mt-12"
          >
            <div className="img-zoom relative aspect-square w-full hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=88&fm=webp&fit=crop"
                alt="Indo Nordic editorial — gemstone ring with warm bokeh background"
                fill
                className="object-cover object-center"
                sizes="35vw"
              />
            </div>
            <div className="img-zoom relative aspect-[5/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=88&fm=webp&fit=crop"
                alt="Indo Nordic editorial — luxury diamond necklace on warm marble"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
            <div className="flex items-center justify-end px-1">
              <span className="label text-ghost">Paris · 2025</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
