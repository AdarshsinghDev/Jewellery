"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-canvas overflow-hidden"
      style={{ height: "100svh", minHeight: "640px" }}
      aria-label="Indo Nordic — Fine Jewelry House"
    >
      {/* ── IMAGE — left 58% ───────────────────────────────────── */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[58%] overflow-hidden">
        <motion.div
          style={{ scale: imgScale, opacity: imgOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=93&fm=webp&fit=crop&crop=center"
            alt="Indo Nordic — editorial gold jewelry close-up on natural texture"
            fill
            priority
            quality={93}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </motion.div>

        {/* Right-edge blend into canvas */}
        <div className="absolute inset-y-0 right-0 w-32
                        bg-gradient-to-r from-transparent to-canvas
                        pointer-events-none hidden md:block" />
        {/* Top fade for nav */}
        <div className="absolute inset-x-0 top-0 h-28
                        bg-gradient-to-b from-canvas/25 to-transparent
                        pointer-events-none" />

        {/* Season badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="absolute bottom-8 left-8 z-10"
        >
          <div className="flex items-center gap-3 mb-1">
            <span className="block w-4 h-px bg-white/50" />
            <span className="label text-white/60">SS 2025</span>
          </div>
          <span className="label text-white/30">Collection I — Lumière</span>
        </motion.div>
      </div>

      {/* ── TEXT PANEL — right 42% ─────────────────────────────── */}
      <div className="hidden md:flex absolute inset-y-0 right-0 w-[42%]
                      flex-col justify-center bg-canvas
                      px-10 lg:px-14 xl:px-16">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-6 h-px bg-bronze-warm/40" />
          <span className="label text-bronze-mid">Est. 2010 · Paris</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          {[
            { text: "Worn",     cls: "font-semibold text-ink" },
            { text: "with",     cls: "italic font-light text-bronze-warm" },
            { text: "purpose.", cls: "font-semibold text-ink" },
          ].map((line, i) => (
            <div key={line.text} className="overflow-hidden leading-[1.02]">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.62 + i * 0.13, duration: 1.1, ease: [0.16,1,0.3,1] }}
                className={`fluid-display font-serif block ${line.cls}`}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="w-10 h-px bg-tint mb-7 origin-left"
        />

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease: [0.16,1,0.3,1] }}
          className="lede text-muted max-w-[280px] mb-10"
        >
          Jewelry made to outlast its maker — by a single hand, in gold.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="flex items-center gap-7"
        >
          <Button variant="ink" size="md" href="#collections">
            The Collections
          </Button>
          <a
            href="#atelier"
            className="group inline-flex items-center gap-3 label text-muted
                       hover:text-ink transition-colors duration-300"
          >
            Our Atelier
            <span className="block h-px w-5 bg-muted/50
                             group-hover:w-7 group-hover:bg-ink
                             transition-all duration-400
                             ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>
        </motion.div>
      </div>

      {/* ── MOBILE: bottom overlay ─────────────────────────────── */}
      <div className="md:hidden absolute inset-x-0 bottom-0 z-10 p-6 pb-10
                      bg-gradient-to-t from-canvas via-canvas/95 to-transparent
                      pt-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-5 h-px bg-bronze-warm/50" />
          <span className="label text-bronze-mid">Est. 2010 · Paris</span>
        </div>
        <h1 className="fluid-display font-serif font-semibold text-ink leading-none">Worn</h1>
        <h1 className="fluid-display font-serif italic font-light text-bronze-warm leading-none">with</h1>
        <h1 className="fluid-display font-serif font-semibold text-ink leading-none mb-5">purpose.</h1>
        <div className="flex items-center gap-5 mt-2">
          <Button variant="ink" size="sm" href="#collections">Collections</Button>
          <a href="#atelier" className="label text-muted">Atelier →</a>
        </div>
      </div>
    </section>
  );
}
