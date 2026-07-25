"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const T = [
  {
    quote: "I have worn the Arc Solitaire every single day for three years. It does not age — it deepens. Indo Nordic has made something I will pass on.",
    name: "Sofia A.", city: "Milan", year: "2023",
  },
  {
    quote: "The atelier visit changed how I think about objects. Watching a single person carry a piece from raw casting to finished form — there is no other word for it but devotion.",
    name: "Camille L.", city: "Paris", year: "2024",
  },
  {
    quote: "I commission a new piece every year. It is the only luxury I understand completely — because it requires no explanation.",
    name: "H. Watanabe", city: "Tokyo", year: "2024",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  return (
    <section
      className="bg-canvas py-28 md:py-48 relative overflow-hidden"
      aria-label="Client voices"
    >
      {/* Decorative large open-quote — warm ink tone */}
      <div
        className="absolute -top-12 left-8 md:left-16 font-serif font-light
                   text-[32vw] leading-none text-tint/60 select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      <div className="max-w-body mx-auto px-6 md:px-10 relative z-10">
        <Reveal className="flex items-center justify-center gap-4 mb-16">
          <span className="w-6 h-px bg-bronze-warm/40" />
          <span className="label text-bronze-mid">Voices</span>
          <span className="w-6 h-px bg-bronze-warm/40" />
        </Reveal>

        {/* Quote */}
        <div className="min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.16,1,0.3,1] }}
              className="text-center max-w-[680px] mx-auto"
            >
              <p className="font-serif italic font-normal text-2xl md:text-3xl
                            text-ink/75 leading-relaxed mb-8">
                &ldquo;{T[idx].quote}&rdquo;
              </p>
              <footer>
                <span className="label text-bronze-mid block mb-1">{T[idx].name}</span>
                <span className="label text-ghost">{T[idx].city} · {T[idx].year}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Navigation — thin horizontal dashes, no circles */}
        <div
          className="flex items-center justify-center gap-3 mt-14"
          role="group" aria-label="Navigate testimonials"
        >
          {T.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              aria-current={idx === i}
              onClick={() => setIdx(i)}
              className="p-1"
            >
              <motion.span
                animate={{ width: idx === i ? 28 : 14, backgroundColor: idx === i ? "#76233C" : "#D2CECA" }}
                transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                className="block h-px rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
