"use client";

import { useEffect, useRef } from "react";

/**
 * GlobalCursorSpotlight
 * 
 * Provides a high-performance, single coordinated cursor follower and ambient spotlight
 * across the entire portfolio (desktops/fine pointers only).
 * 
 * - Smooth lerp interpolation for the cursor halo (no jitter or lag).
 * - Ambient radial spotlight blending softly across both light (#F5F3EE) and dark (#111111) sections.
 * - Entirely pointer-events: none, preserving clicks, text selections, and form inputs.
 * - Completely disabled on touch / coarse devices (@media (pointer: coarse)) and reduced motion.
 * - Zero React re-renders on mousemove.
 */
export default function GlobalCursorSpotlight() {
  const haloRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const isVisible = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion and touch/coarse devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const halo = haloRef.current;
    const ambient = ambientRef.current;

    const handlePointerMove = (e: PointerEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        if (halo) halo.style.opacity = "1";
        if (ambient) ambient.style.opacity = "1";
      }

      // Update ambient spotlight directly via CSS variables on ambient layer
      if (ambient) {
        ambient.style.setProperty("--cursor-x", `${e.clientX}px`);
        ambient.style.setProperty("--cursor-y", `${e.clientY}px`);
      }
    };

    const handlePointerLeave = () => {
      isVisible.current = false;
      if (halo) halo.style.opacity = "0";
      if (ambient) ambient.style.opacity = "0";
    };

    const handlePointerEnter = () => {
      isVisible.current = true;
      if (halo) halo.style.opacity = "1";
      if (ambient) ambient.style.opacity = "1";
    };

    // Smooth lerp loop for the delicate halo ring
    const render = () => {
      // Lerp factor 0.18 gives responsive yet fluid trailing
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.18;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.18;

      if (halo) {
        halo.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* 1. Subtle Global Ambient Spotlight (Blends softly with dark & light backgrounds) */}
      <div
        ref={ambientRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 opacity-0 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at var(--cursor-x, -500px) var(--cursor-y, -500px), rgba(212, 175, 55, 0.04), transparent 70%)`,
        }}
      />

      {/* 2. Delicate Smooth Floating Cursor Halo Ring (Warm Champagne / Gold tint) */}
      <div
        ref={haloRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/[0.08] backdrop-blur-[0.5px] shadow-[0_0_12px_rgba(212,175,55,0.2)] transition-opacity duration-300 z-50 opacity-0 hidden md:block"
        style={{
          willChange: "transform",
        }}
      >
        {/* Subtle luminous core dot */}
        <span className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7F000]/70" />
      </div>
    </>
  );
}
