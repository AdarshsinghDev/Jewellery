"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Atelier",     href: "#atelier"     },
  { label: "Archive",     href: "#archive"      },
  { label: "Bespoke",     href: "#bespoke"      },
];

export default function Navigation() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Nav background: barely-there on top, warm solid when scrolled
  const bg      = useTransform(scrollY, [0, 80], ["rgba(245,240,232,0)", "rgba(245,240,232,0.97)"]);
  const shadow  = useTransform(scrollY, [0, 80], ["0 0 0 rgba(28,24,20,0)", "0 1px 0 rgba(221,212,194,1)"]);

  useEffect(() => {
    const u = scrollY.on("change", v => setScrolled(v > 60));
    return u;
  }, [scrollY]);

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, boxShadow: shadow }}
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-[2px]"
      >
        <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 h-[76px] flex items-center justify-between">

          {/* Left nav */}
          <nav aria-label="Primary left" className="hidden md:flex items-center gap-10">
            {LINKS.slice(0, 2).map(l => <NavLink key={l.label} {...l} />)}
          </nav>

          {/* Wordmark — centred logo image */}
          <Link
            href="/"
            aria-label="Indo Nordic homepage"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/IndoNordiclogoL.webp"
              alt="Indo Nordic — Fine Jewelry House"
              width={90}
              height={28}
              className="h-5 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right nav */}
          <nav aria-label="Primary right" className="hidden md:flex items-center gap-10">
            {LINKS.slice(2).map(l => <NavLink key={l.label} {...l} />)}
            <button
              aria-label="Shopping bag"
              className="label text-ghost hover:text-ink transition-colors duration-300 flex items-center gap-2"
            >
              <BagIcon />
              Bag
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto flex flex-col gap-[6px] p-1"
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                className={[
                  "block h-px bg-ink transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  i === 0 ? `w-6 ${open ? "translate-y-[8px] rotate-45" : ""}` : "",
                  i === 1 ? `w-4 ${open ? "opacity-0 scale-x-0" : ""}` : "",
                  i === 2 ? `w-6 ${open ? "-translate-y-[8px] -rotate-45" : ""}` : "",
                ].join(" ")}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-canvas flex flex-col items-center justify-center gap-2"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16,1,0.3,1] }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-serif font-normal italic text-5xl text-ink/70 hover:text-ink transition-colors duration-300 py-3"
                >
                  {l.label}
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.16,1,0.3,1] }}
              className="rule-bronze w-16 mt-8"
            />
            <Image
              src="/IndoNordiclogoL.webp"
              alt="Indo Nordic"
              width={120}
              height={40}
              className="h-8 w-auto object-contain mt-6 opacity-40"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="relative label text-ghost hover:text-ink transition-colors duration-300 group"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze-warm group-hover:w-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </a>
  );
}

function BagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}
