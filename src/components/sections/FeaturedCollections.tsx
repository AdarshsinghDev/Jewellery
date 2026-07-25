"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const COLLECTIONS = [
  {
    id: "lumiere",
    index: "01",
    name: "Lumière",
    year: "SS 2025",
    pieces: "17 pieces",
    material: "18k Gold · Rose-cut Diamonds",
    idea: "Light captured as geometry.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=90&fm=webp&fit=crop",
    alt: "Lumière — 18k gold ring with rose-cut diamond, natural light close-up",
  },
  {
    id: "ombre",
    index: "02",
    name: "Ombre",
    year: "SS 2025",
    pieces: "12 pieces",
    material: "18k Gold · Oxidised Silver",
    idea: "A single surface, two lives.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=90&fm=webp&fit=crop",
    alt: "Ombre — gradient silver to gold necklace in studio light",
  },
  {
    id: "silence",
    index: "03",
    name: "Silence",
    year: "FW 2024",
    pieces: "9 pieces",
    material: "22k Wire Gold",
    idea: "The void is the material.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=90&fm=webp&fit=crop",
    alt: "Silence — delicate gold earrings, negative space",
  },
];

export default function FeaturedCollections() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="collections"
      className="bg-surface py-28 md:py-44"
      aria-labelledby="coll-h"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-16">

        {/* Header row — asymmetric */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between
                        gap-8 mb-20 md:mb-28">
          <div>
            <Reveal>
              <span className="label text-bronze-mid flex items-center gap-3 mb-5">
                <span className="block w-5 h-px bg-bronze-warm/50" />
                Current Season
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 id="coll-h" className="fluid-heading font-serif font-semibold text-ink">
                The Collections
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="body-copy max-w-[300px] md:text-right">
              Three collections each season.<br />
              One obsession per collection.<br />
              One artisan per piece.
            </p>
          </Reveal>
        </div>

        {/* Collection table — editorial rows, NOT cards */}
        <div role="list">
          {COLLECTIONS.map((c, i) => (
            <CollectionRow
              key={c.id}
              data={c}
              index={i}
              isActive={active === c.id}
              onEnter={() => setActive(c.id)}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 flex justify-start">
          <Button variant="outline" size="md" href="#archive">
            Full Archive
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function CollectionRow({
  data, index, isActive, onEnter, onLeave,
}: {
  data: typeof COLLECTIONS[0];
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      role="listitem"
      aria-label={data.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16,1,0.3,1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <div className="rule" />

      <div className="grid grid-cols-12 items-center gap-4 py-7 md:py-11">

        {/* Index */}
        <div className="col-span-1 hidden md:block">
          <span className="font-sans text-[11px] font-light text-ghost">{data.index}</span>
        </div>

        {/* Name + year — mobile: 8 cols, desktop: 4 cols */}
        <div className="col-span-8 md:col-span-4">
          <div className="label text-ghost mb-2">{data.year}</div>
          <h3 className="font-serif italic font-normal text-4xl md:text-5xl text-ink
                         group-hover:text-bronze-warm transition-colors duration-500 leading-none">
            {data.name}
          </h3>
          {/* Mobile-only: idea line below name */}
          <p className="md:hidden font-sans text-xs text-muted/70 mt-2 font-light">
            {data.idea}
          </p>
        </div>

        {/* Mobile-only: static image — right side, always visible */}
        <div className="col-span-3 md:hidden">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={data.image}
              alt={data.alt}
              fill
              className="object-cover object-center"
              sizes="25vw"
            />
          </div>
        </div>

        {/* Mobile arrow */}
        <div className="col-span-1 md:hidden flex items-center justify-end">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.2"
            className="text-muted" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>

        {/* Idea + details — desktop only */}
        <div className="col-span-4 hidden md:block">
          <p className="font-serif italic text-lg text-dim/70 mb-3 leading-tight">
            {data.idea}
          </p>
          <div className="flex items-center gap-4">
            <span className="label text-ghost">{data.pieces}</span>
            <span className="label text-tint">·</span>
            <span className="label text-ghost">{data.material}</span>
          </div>
        </div>

        {/* Desktop arrow */}
        <div className="hidden md:flex col-span-3 items-center justify-end gap-4">
          <motion.span
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
            transition={{ duration: 0.3 }}
            className="label text-bronze-mid"
          >
            View
          </motion.span>
          <motion.div
            animate={{ width: isActive ? 40 : 16 }}
            transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
            className="h-px bg-bronze-warm/50"
          />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.2"
            className="text-muted group-hover:text-bronze-warm transition-colors duration-400"
            aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>

      {/* Hover image — appears, not a card, just the image floating */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
        className="absolute right-16 top-1/2 -translate-y-1/2 w-44 h-56 pointer-events-none z-20
                   overflow-hidden hidden md:block"
        aria-hidden="true"
      >
        <Image src={data.image} alt={data.alt} fill
          className="object-cover object-center" sizes="176px" />
      </motion.div>
    </motion.div>
  );
}
