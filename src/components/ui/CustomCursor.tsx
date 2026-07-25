"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafId   = useRef<number>(0);

  useEffect(() => {
    const dot  = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top  = `${ring.current.y}px`;
      rafId.current = requestAnimationFrame(loop);
    };
    loop();

    const onEnter = () => {
      dot.style.width   = "5px";
      dot.style.height  = "5px";
      ringEl.style.width  = "52px";
      ringEl.style.height = "52px";
      ringEl.style.borderColor = "rgba(118,35,60,0.5)";
    };
    const onLeave = () => {
      dot.style.width  = "";
      dot.style.height = "";
      ringEl.style.width  = "";
      ringEl.style.height = "";
      ringEl.style.borderColor = "";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    const targets = document.querySelectorAll("a, button");
    targets.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
