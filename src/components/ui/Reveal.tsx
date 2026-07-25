"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  y = 22,
  once = true,
}: RevealProps) {
  const ref      = useRef<HTMLDivElement>(null);
  const inView   = useInView(ref, { once, margin: "-8% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView)        controls.start("visible");
    else if (!once)    controls.start("hidden");
  }, [inView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden:  { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
