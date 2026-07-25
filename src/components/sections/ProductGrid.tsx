"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const FILTERS = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];

const PRODUCTS = [
  {
    id: 1, name: "Arc Solitaire",  collection: "Lumière", category: "Rings",
    price: "₹ 3,400", material: "18k Gold · Diamond",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=88&fm=webp&fit=crop",
    alt: "Arc Solitaire — handcrafted 18k gold ring with solitaire diamond",
    span: "tall",
  },
  {
    id: 2, name: "Void Pendant",   collection: "Silence", category: "Necklaces",
    price: "₹ 1,980", material: "22k Gold Wire",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700&q=88&fm=webp&fit=crop",
    alt: "Void Pendant — sculptural 22k gold wire pendant necklace",
    span: "square",
  },
  {
    id: 3, name: "Dew Drops",      collection: "Lumière", category: "Earrings",
    price: "₹ 2,100", material: "18k Gold · Sapphire",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&q=88&fm=webp&fit=crop",
    alt: "Dew Drops earrings — 18k gold drop earrings with blue sapphire",
    span: "tall",
  },
  {
    id: 4, name: "Ombre Collar",   collection: "Ombre",   category: "Necklaces",
    price: "₹ 4,800", material: "18k Gold · Oxidised Silver",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&q=88&fm=webp&fit=crop",
    alt: "Ombre Collar — gradient necklace from oxidised silver to 18k warm gold",
    span: "square",
  },
  {
    id: 5, name: "Meridian Cuff",  collection: "Silence", category: "Bracelets",
    price: "₹ 2,640", material: "18k Gold",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=88&fm=webp&fit=crop",
    alt: "Meridian Cuff — sculptural 18k solid gold cuff bracelet",
    span: "tall",
  },
  {
    id: 6, name: "Coeur Band",     collection: "Lumière", category: "Rings",
    price: "₹ 1,460", material: "18k Rose Gold",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&q=88&fm=webp&fit=crop",
    alt: "Coeur Band — 18k rose gold wedding band with pavé diamonds",
    span: "square",
  },
];

export default function ProductGrid() {
  const [filter, setFilter] = useState("All");

  const shown = filter === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section
      className="bg-canvas py-28 md:py-44"
      aria-labelledby="products-h"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <Reveal>
              <span className="label text-bronze-mid flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-bronze-warm/50" />
                Selected Pieces
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="products-h" className="fluid-heading font-serif italic font-normal text-ink">
                The Selection
              </h2>
            </Reveal>
          </div>

          {/* Filter — plain text, not pill buttons */}
          <Reveal delay={0.12}>
            <div className="flex flex-wrap gap-1" role="tablist" aria-label="Filter by category">
              {FILTERS.map(f => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={[
                    "relative font-sans text-[10px] font-light tracking-[0.18em] uppercase px-3 py-2",
                    "transition-colors duration-300",
                    filter === f ? "text-ink" : "text-ghost hover:text-dim",
                  ].join(" ")}
                >
                  {f}
                  {filter === f && (
                    <motion.span
                      layoutId="filter-line"
                      className="absolute bottom-0 left-0 right-0 h-px bg-ink"
                    />
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid — not a bento box, staggered mixed heights */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16,1,0.3,1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-label={`${p.name}, ${p.price}`}
    >
      {/* Image */}
      <div className={`img-zoom bg-surface relative overflow-hidden
                      ${p.span === "tall" ? "aspect-[3/4]" : "aspect-square"}`}>
        <Image
          src={p.image} alt={p.alt} fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
        />

        {/* On hover — info slides up from bottom, no card-over-card */}
        <motion.div
          animate={{ y: hovered ? 0 : "100%" }}
          transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
          className="absolute inset-x-0 bottom-0 bg-canvas/95 p-4 backdrop-blur-[1px]"
        >
          <Button variant="ink" size="sm" className="w-full justify-center text-[9px]">
            View Piece
          </Button>
        </motion.div>

        {/* Collection label — top left */}
        <div className="absolute top-3 left-3">
          <span className="label text-ink/60 bg-canvas/80 px-2.5 py-1 text-[8px]">
            {p.collection}
          </span>
        </div>
      </div>

      {/* Caption below — not inside the image */}
      <div className="pt-3.5 pb-1 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-serif italic text-xl text-ink leading-tight
                         group-hover:text-bronze-warm transition-colors duration-300">
            {p.name}
          </h3>
          <p className="label text-ghost mt-1">{p.material}</p>
        </div>
        <span className="font-sans text-sm font-light text-dim mt-0.5 flex-shrink-0">
          {p.price}
        </span>
      </div>
    </motion.article>
  );
}
