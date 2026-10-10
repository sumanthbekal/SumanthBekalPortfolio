"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowDown, Globe } from "lucide-react";

export default function Hero() {
  const technicalLabels = ["AI", "SHOPIFY", "AUTOMATION", "COMPUTER VISION"];
  const services = [
    "SHOPIFY DEVELOPMENT",
    "AI SOLUTIONS",
    "COMPUTER VISION",
    "AUTOMATION",
    "WEB DEVELOPMENT",
  ];

  return (
    <section
      id="home"
      className="w-full border-b border-[#C9C7C0] bg-[#F5F3EE] overflow-hidden lg:min-h-[calc(100svh-76px)] lg:max-h-[calc(100svh-76px)] flex flex-col justify-stretch"
    >
      {/* 3-Column Balanced Editorial Grid: Left 5 cols, Middle 4.5 cols (Portrait), Right 2.5 cols (Sidebar) */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 flex-1 items-stretch">
        
        {/* Left Column (5 Cols on desktop): Typography, Headline, Bio, and natural CTA buttons */}
        <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-8 lg:p-7 xl:p-9 border-b lg:border-b-0 lg:border-r border-[#C9C7C0]">
          {/* Small Category Meta Label */}
          <div className="flex flex-wrap items-center gap-2 mb-3 lg:mb-3.5 font-mono-tech text-[10px] sm:text-[11px] text-[#666666] tracking-widest uppercase">
            {technicalLabels.map((label, idx) => (
              <span key={label} className="flex items-center gap-2">
                <span>{label}</span>
                {idx < technicalLabels.length - 1 && (
                  <span className="text-[#111111] font-black">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Solid SUMANTH + Outlined BEKAL */}
          <div className="mb-3.5 lg:mb-4 select-none">
            <h1 className="text-[clamp(3.2rem,5.6vw,6.4rem)] font-black tracking-tighter uppercase text-[#111111] leading-[0.88] block">
              SUMANTH
            </h1>
            <h1 className="hero-bekal-outline text-[clamp(3.7rem,6.6vw,7.6rem)] leading-[0.88] block mt-1">
              BEKAL
            </h1>
          </div>

          {/* Introduction Headline */}
          <h2 className="font-heading font-black text-sm sm:text-base md:text-lg xl:text-xl text-[#111111] tracking-tight uppercase leading-snug max-w-lg mb-2.5">
            I BUILD AI SYSTEMS, AUTOMATE COMMERCE, AND SHIP DIGITAL PRODUCTS.
          </h2>

          {/* Supporting Bio Description */}
          <p className="text-xs sm:text-[13px] text-[#666666] max-w-md leading-relaxed mb-5 font-normal">
            A developer and problem solver working at the intersection of AI, computer vision and e-commerce. I build real-world solutions that create impact.
          </p>

          {/* CTA Buttons in natural proximity directly below description */}
          <div className="flex flex-wrap items-center gap-3 pt-3.5 border-t border-[#C9C7C0]">
            <a
              href="#work"
              className="btn-premium-primary btn-premium-lime px-5 sm:px-6 py-2.5 sm:py-3 text-xs"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="w-3.5 h-3.5 arrow-glide" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-outline px-5 sm:px-6 py-2.5 sm:py-3 text-xs"
            >
              <span>DOWNLOAD RESUME</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Middle Column (5 Cols on desktop): Prominent Enlarged Portrait + Annotation */}
        <div className="lg:col-span-5 flex flex-col items-center justify-end relative pt-4 px-3 sm:px-6 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#C9C7C0] bg-[#F5F3EE] h-full">
          {/* Handwritten Annotation Note */}
          <div className="absolute top-4 sm:top-5 left-4 sm:left-6 z-10 select-none">
            <span className="font-mono-tech text-[11px] sm:text-xs italic tracking-tighter text-[#111111] block leading-tight font-bold">
              TURNING<br />IDEAS<br />INTO REAL<br />SOLUTIONS.
            </span>
            <svg
              className="w-5 h-5 mt-0.5 text-[#111111]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 4v14m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>

          {/* Sumanth Black-and-White Portrait: Enlarged 30%+, Anchored to bottom edge with subtle hover depth */}
          <div className="relative w-full max-w-[490px] h-[380px] sm:h-[460px] md:h-[520px] lg:h-full lg:max-h-[calc(100svh-76px)] flex items-end justify-center select-none group">
            <Image
              src="/images/sumanth-hero.png"
              alt="Sumanth Bekal — black-and-white profile portrait"
              width={1278}
              height={1230}
              priority
              className="object-contain object-bottom w-full max-h-full drop-shadow-sm filter contrast-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Column (2 Cols on desktop): Availability, Services, Setup, Signature */}
        <div className="lg:col-span-2 flex flex-col justify-between p-4 sm:p-5 lg:p-4 bg-[#F5F3EE] h-full">
          <div>
            {/* Availability Status Indicator */}
            <div className="flex items-start justify-between mb-3.5 pb-2.5 border-b border-[#C9C7C0]">
              <div>
                <span className="font-mono-tech text-[10px] font-bold tracking-widest uppercase text-[#111111] block">
                  AVAILABLE
                </span>
                <span className="font-mono-tech text-[9px] text-[#666666] tracking-wider uppercase block">
                  FOR FREELANCE
                </span>
                <span className="font-mono-tech text-[9px] text-[#666666] tracking-wider uppercase block">
                  PROJECTS
                </span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7F000] border border-[#111111] animate-pulse flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(199,240,0,0.8)]" />
            </div>

            {/* Service Capabilities List */}
            <div className="flex flex-col gap-1.5 mb-3.5">
              {services.map((service) => (
                <span
                  key={service}
                  className="font-mono-tech text-[9px] tracking-wider text-[#666666] hover:text-[#111111] uppercase transition-colors cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Workspace Setup Thumbnail */}
            <div className="mb-2.5 border border-[#C9C7C0] bg-white p-1 max-w-[115px] transition-transform duration-300 hover:scale-105 hover:border-[#111111] shadow-sm">
              <div className="relative w-full aspect-square overflow-hidden grayscale contrast-110">
                <Image
                  src="/workspace-setup.png"
                  alt="Developer Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sumanth Signature */}
            <div className="relative w-full h-9 select-none opacity-90 my-1 transition-opacity duration-300 hover:opacity-100">
              <Image
                src="/sumanth-signature.png"
                alt="Sumanth Signature"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Based in India Footer */}
          <div className="pt-2.5 border-t border-[#C9C7C0] flex items-center justify-between font-mono-tech text-[9px] uppercase text-[#111111]">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#666666]" />
              <span className="tracking-widest">BASED IN INDIA</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </div>
        </div>

      </div>
    </section>
  );
}
