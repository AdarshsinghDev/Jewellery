"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type Variant = "ink" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?:  Variant;
  size?:     Size;
  href?:     string;
  target?:   string;
  onClick?:  () => void;
  type?:     "button" | "submit";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

/**
 * Indo Nordic Button
 * ── No gradients. No rounded pill shape. No glow.
 * ── ink: dark fill → parchment text, expands border on hover
 * ── outline: 1px border, fill slides in from left
 * ── ghost: no border, underline grows
 */
export default function Button({
  children,
  variant  = "outline",
  size     = "md",
  href,
  target,
  onClick,
  type     = "button",
  disabled,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base = clsx(
    "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap",
    "font-sans font-light tracking-[0.18em] uppercase",
    "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline focus-visible:outline-1 focus-visible:outline-bronze-warm",
    "disabled:opacity-40 disabled:pointer-events-none",
    {
      // sizes
      "text-[10px] px-5 py-2.5":      size === "sm",
      "text-[10px] px-8 py-3.5":      size === "md",
      "text-[10.5px] px-10 py-4":     size === "lg",

      // variants
      "bg-ink text-canvas border border-ink hover:bg-dim":
        variant === "ink",
      "bg-transparent text-ink border border-tint hover:border-ink":
        variant === "outline",
      "bg-transparent text-muted hover:text-ink":
        variant === "ghost",
    },
    className
  );

  // Slide-fill for outline variant
  const FillSlide = () =>
    variant === "outline" ? (
      <motion.span
        className="absolute inset-0 bg-ink origin-left z-0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
    ) : null;

  const inner = (
    <>
      <FillSlide />
      <span
        className={clsx("relative z-10 flex items-center gap-2", {
          "group-hover:text-canvas": variant === "outline",
        })}
      >
        {children}
      </span>
    </>
  );

  const shared = {
    className: clsx(base, variant === "outline" && "group"),
    "aria-label": ariaLabel,
    whileHover: variant === "outline" ? undefined : { opacity: 0.8 },
  } as const;

  if (href) {
    return (
      <motion.a href={href} target={target} {...shared}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} {...shared}>
      {inner}
    </motion.button>
  );
}
