"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CLIENT_SHOWCASE_DATA, ClientShowcaseItem } from "@/data/clients";

// Individual Client Card with 3D Tilt, dynamic radial spotlight, and border highlight
function InteractiveClientCard({ client }: { client: ClientShowcaseItem }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle pointer movement inside card using CSS variables (avoids react re-renders)
  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    // Only apply on fine pointer devices (desktops/laptops)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Relative -1 to 1 coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    // Subtly clamped 3D tilt: max 3.5 degrees
    const rotateX = -percentY * 3.5;
    const rotateY = percentX * 3.5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  };

  const handlePointerEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    setIsHovered(false);
    if (!card) return;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <a
      ref={cardRef}
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: isHovered
          ? "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) translateY(-4px)"
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered
          ? "transform 0.15s ease-out, box-shadow 0.3s ease"
          : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="client-card relative flex-none w-[82vw] sm:w-[48vw] md:w-[36vw] lg:w-[24vw] xl:w-[20%] p-6 sm:p-7 bg-[#111111] transition-all duration-300 flex flex-col justify-between group select-none overflow-hidden outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
    >
      {/* 1. Dynamic Cursor Spotlight (Warm Champagne / Gold Radial Glow) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.14), transparent 70%)`,
        }}
      />

      {/* 2. Dynamic Border Illumination (Metallic Highlight following pointer) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          border: "1px solid transparent",
          background: `radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(247, 231, 161, 0.35), transparent 75%) border-box`,
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10">
        {/* Brand Logo Box: Dark background for white logos (Karigar, Scentual, LASUB), clean white for colored logos */}
        <div className="mb-6">
          <div
            className={`relative w-full aspect-[2/1] rounded-lg border border-[#262626] group-hover:border-[#C7F000]/60 p-4 transition-all duration-300 flex items-center justify-center ${
              client.logoBgDark ? "bg-[#050505]" : "bg-white"
            } shadow-md group-hover:shadow-lg`}
          >
            <Image
              src={client.logo}
              alt={`${client.name} Official Logo`}
              fill
              className="object-contain p-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
          </div>
        </div>

        {/* Brand Name & Category Description */}
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="font-heading font-black text-base sm:text-lg text-white tracking-tight uppercase group-hover:text-[#C7F000] transition-colors truncate">
            {client.name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#C7F000] arrow-glide flex-shrink-0 ml-1" />
        </div>

        <p className="font-mono-tech text-[11px] text-[#888888] truncate">
          {client.category}
        </p>
      </div>

      {/* Card Footer Link with subtle gold accent reveal on hover */}
      <div className="relative z-10 pt-4 mt-6 border-t border-[#262626] flex items-center justify-between font-mono-tech text-[11px] text-[#666666] group-hover:text-[#aaaaaa] transition-colors">
        <span className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 transition-shadow duration-300"
            style={{
              boxShadow: isHovered ? "0 0 8px rgba(52, 211, 153, 0.8)" : "none",
            }}
          />
          <span className="group-hover:text-white transition-colors">VISIT STORE</span>
        </span>
        <span className="text-[#C7F000] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1 group-hover:translate-x-0">
          SHOPIFY ↗
        </span>
      </div>
    </a>
  );
}

export default function ClientWebsites() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate dynamic pagination pages based on card widths & scroll progress
  const updatePagination = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const card = el.querySelector<HTMLElement>(".client-card");
    const cardWidth = card ? card.offsetWidth : 320;
    const activeIdx = Math.round(el.scrollLeft / cardWidth);
    setCurrentIndex(Math.min(activeIdx, CLIENT_SHOWCASE_DATA.length - 1));
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updatePagination();
    el.addEventListener("scroll", updatePagination, { passive: true });
    window.addEventListener("resize", updatePagination);

    return () => {
      el.removeEventListener("scroll", updatePagination);
      window.removeEventListener("resize", updatePagination);
    };
  }, [updatePagination]);

  // Navigate left/right by card steps
  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>(".client-card");
    const step = card ? card.offsetWidth * (window.innerWidth >= 1024 ? 2 : 1) : 340;

    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Scroll to a specific card index from pagination indicator click
  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".client-card");
    const cardWidth = card ? card.offsetWidth : 320;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="relative w-full bg-[#111111] text-white border-b border-[#262626] overflow-hidden"
    >
      <div className="relative max-w-[1440px] mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-10 py-5 border-b border-[#262626] gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-white">
              CLIENT WEBSITES
            </h2>
            <span className="font-mono-tech text-xs text-[#888888]">
              ( SHOPIFY DEVELOPMENT )
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-6">
            <span className="font-mono-tech text-[11px] text-[#888888] uppercase tracking-wider hidden md:inline">
              BRANDS I&apos;VE HELPED BUILD ({CLIENT_SHOWCASE_DATA.length} CLIENTS)
            </span>

            {/* Previous & Next Navigation Buttons with btn-premium-icon */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous clients"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all btn-premium-icon ${
                  canScrollLeft
                    ? "border-[#444444] bg-[#1a1a1a] text-white hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#C7F000] cursor-pointer"
                    : "border-[#222222] bg-[#141414] text-[#444444] cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next clients"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all btn-premium-icon ${
                  canScrollRight
                    ? "border-[#444444] bg-[#1a1a1a] text-white hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#C7F000] cursor-pointer"
                    : "border-[#222222] bg-[#141414] text-[#444444] cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Carousel Row with 3D Tilt Cards */}
        <div
          ref={carouselRef}
          tabIndex={0}
          role="region"
          aria-label="Client projects carousel"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") scroll("left");
            if (e.key === "ArrowRight") scroll("right");
          }}
          className="flex overflow-x-auto divide-x divide-[#262626] no-scrollbar scroll-smooth outline-none focus-visible:ring-1 focus-visible:ring-[#C7F000]"
        >
          {CLIENT_SHOWCASE_DATA.map((client) => (
            <InteractiveClientCard key={client.id} client={client} />
          ))}
        </div>

        {/* Carousel Pagination Bar */}
        <div className="px-6 sm:px-10 py-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[#888888]">
          {/* Active Card Count Status */}
          <div className="flex items-center gap-2">
            <span>SLIDE</span>
            <span className="px-2 py-0.5 bg-[#1a1a1a] border border-[#333333] text-[#C7F000] font-bold">
              0{currentIndex + 1}
            </span>
            <span>OF 0{CLIENT_SHOWCASE_DATA.length}</span>
          </div>

          {/* Interactive Pagination Dots / Bars */}
          <div className="flex items-center gap-1.5">
            {CLIENT_SHOWCASE_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to client slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full btn-premium-icon ${
                  currentIndex === idx
                    ? "w-6 bg-[#C7F000]"
                    : "w-2 bg-[#333333] hover:bg-[#666666]"
                }`}
              />
            ))}
          </div>

          {/* Quick Category Summary */}
          <div className="text-[10px] text-[#666666] uppercase tracking-wider hidden sm:block">
            {CLIENT_SHOWCASE_DATA[currentIndex]?.name} · {CLIENT_SHOWCASE_DATA[currentIndex]?.category}
          </div>
        </div>
      </div>
    </section>
  );
}
