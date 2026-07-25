"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const ARCHIVE = [
  {
    season: "FW 2024", name: "Nuit", pieces: 11,
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=700&q=88&fm=webp&fit=crop",
    alt: "Nuit collection — deep oxidised gold and dark stone jewelry editorial",
    offset: false,
  },
  {
    season: "SS 2024", name: "Aurore", pieces: 14,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&q=88&fm=webp&fit=crop",
    alt: "Aurore collection — sunrise warm gold tones editorial photography",
    offset: true,   // intentionally pushed down — breaks the grid rhythm
  },
  {
    season: "FW 2023", name: "Brume", pieces: 9,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=88&fm=webp&fit=crop",
    alt: "Brume collection — silver and pearl jewelry editorial photography",
    offset: false,
  },
];

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      className="bg-wash py-28 md:py-44"
      aria-labelledby="archive-h"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <Reveal>
              <span className="label text-bronze-mid flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-bronze-warm/50" />
                Past Seasons
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="archive-h" className="fluid-heading font-serif font-semibold text-ink">
                The Archive
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Button variant="outline" size="sm" href="#archive">
              All Seasons
            </Button>
          </Reveal>
        </div>

        {/* Cards — intentionally different heights, offset rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          {ARCHIVE.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              className={`group ${item.offset ? "md:mt-16" : ""}`}
            >
              {/* Image */}
              <div className="img-zoom relative aspect-[3/4] overflow-hidden bg-surface">
                <Image
                  src={item.image} alt={item.alt} fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Warm vignette — not full black overlay */}
                <div className="absolute inset-0 bg-gradient-to-t
                                from-canvas/80 via-canvas/5 to-transparent
                                opacity-80 group-hover:opacity-90
                                transition-opacity duration-500" />
              </div>

              {/* Caption — below image, not inside */}
              <div className="pt-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif italic font-normal text-3xl text-ink
                                 group-hover:text-bronze-warm transition-colors duration-400">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="label text-ghost">{item.season}</span>
                    <span className="label text-tint">·</span>
                    <span className="label text-ghost">{item.pieces} pieces</span>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.2"
                  className="text-ghost group-hover:text-bronze-warm mt-1.5 flex-shrink-0
                             transition-colors duration-400"
                  aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
