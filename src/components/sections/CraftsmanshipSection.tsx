"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  { num: "01", title: "Concept",  body: "Every piece begins as a question. We sketch with graphite, not gold, until the form earns the material." },
  { num: "02", title: "Casting",  body: "Lost-wax preserves every curve of the original model. Nothing is surrendered to the process." },
  { num: "03", title: "Setting",  body: "Stones seated by hand — only a loupe and a graver. No mechanical alignment. Only judgment." },
  { num: "04", title: "Finishing",body: "Surface work takes longer than any other stage. We stop when the light behaves as intended." },
];

export default function CraftsmanshipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });

  const imgScale = useTransform(scrollYProgress, [0, 0.7], [1.06, 1.0]);
  const lineH    = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="atelier"
      className="bg-surface py-28 md:py-52 overflow-hidden"
      aria-labelledby="craft-h"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-y-20 md:gap-8">

          {/* ── Left ─────────────────────────────────────────── */}
          <div className="md:col-span-5">
            <Reveal>
              <span className="label text-bronze-mid flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-bronze-warm/50" />
                The Making
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="craft-h" className="fluid-heading font-serif font-semibold text-ink mb-2">
                Where gold
              </h2>
              <h2 className="fluid-heading font-serif italic font-normal text-bronze-warm mb-10">
                meets silence.
              </h2>
            </Reveal>

            {/* Main atelier image */}
            <div className="relative h-[380px] md:h-[480px] img-zoom overflow-hidden">
              <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=90&fm=webp&fit=crop"
                  alt="Indo Nordic atelier — goldsmith precision hands at work with micro-tools"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </motion.div>
              {/* Warm-toned bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-1/3
                              bg-gradient-to-t from-surface/40 to-transparent pointer-events-none" />
            </div>

            {/* Stats — horizontal, spaced below image */}
            <Reveal delay={0.15} className="mt-8 grid grid-cols-3 gap-0">
              {[
                { n: "8+", l: "Weeks per piece" },
                { n: "1",  l: "Artisan per piece" },
                { n: "∞",  l: "Revisions allowed" },
              ].map(s => (
                <div key={s.l} className="border-l border-tint first:border-l-0 pl-4 first:pl-0">
                  <div className="font-serif italic text-3xl text-bronze-warm">{s.n}</div>
                  <div className="label text-ghost mt-1">{s.l}</div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* ── Right: process steps ─────────────────────────── */}
          <div className="md:col-span-7 flex gap-6 md:gap-8 md:pl-8">

            {/* Animated vertical line — timeline indicator */}
            <div className="hidden md:flex flex-col items-center flex-shrink-0 mt-1">
              <div className="relative flex-1 w-px bg-tint overflow-hidden">
                <motion.div
                  style={{ height: lineH }}
                  className="absolute top-0 w-full bg-bronze-warm"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-14 md:gap-16 pt-1">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                >
                  <div className="flex gap-5 items-start">
                    <span className="label text-bronze-light mt-1 flex-shrink-0">{s.num}</span>
                    <div>
                      <h3 className="font-serif italic text-2xl text-ink mb-2">{s.title}</h3>
                      <p className="body-copy max-w-[360px]">{s.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Second image in the flow */}
              <Reveal delay={0.1}>
                <div className="relative h-52 md:h-64 img-zoom overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=88&fm=webp&fit=crop"
                    alt="Indo Nordic Paris atelier — precision tools arranged on craftsman workbench"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="label text-white/50">Paris Atelier · 14ème</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
