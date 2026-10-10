"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "WORK", href: "#work" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "SKILLS", href: "#skills" },
    { name: "CERTIFICATIONS", href: "#certifications" },
    { name: "CLIENTS", href: "#clients" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#C9C7C0] h-[72px] lg:h-[76px] flex-shrink-0 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full">
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center h-full border-r border-[#C9C7C0] pr-3 sm:pr-5 md:pr-8 pl-3 sm:pl-4 md:pl-8 max-w-[calc(100%-60px)]">
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3.5 group truncate">
            <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter text-[#111111] transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              SB<span className="text-[#666666] font-light">/</span>
            </span>
            <div className="flex flex-col truncate">
              <span className="font-heading font-black text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-[#111111] leading-none transition-colors group-hover:text-black truncate">
                SUMANTH BEKAL
              </span>
              <span className="font-mono-tech text-[8px] sm:text-[9px] md:text-[10px] text-[#666666] tracking-tight uppercase mt-0.5 sm:mt-1 leading-none truncate">
                AI ENGINEER & DEVELOPER
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation Links with animated underline */}
        <nav className="hidden xl:flex items-center h-full flex-1 justify-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono-tech text-xs uppercase px-3 py-2 text-[#666666] hover:text-[#111111] nav-link-premium relative flex items-center gap-1.5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Tablet Navigation Links (compact) */}
        <nav className="hidden lg:flex xl:hidden items-center h-full flex-1 justify-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono-tech text-[11px] uppercase px-2 py-2 text-[#666666] hover:text-[#111111] nav-link-premium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Let's Talk CTA button */}
        <div className="hidden sm:flex items-center h-full border-l border-[#C9C7C0]">
          <a
            href="#contact"
            className="h-full px-5 md:px-7 bg-[#111111] text-white flex items-center gap-2 font-mono-tech text-xs tracking-wider uppercase hover:bg-[#C7F000] hover:text-[#111111] transition-all duration-300 group"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 arrow-glide transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex lg:hidden items-center px-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#C9C7C0] bg-white text-[#111111] btn-premium-icon"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 w-full max-w-full bg-[#F5F3EE] border-b border-[#C9C7C0] px-5 sm:px-6 py-4 flex flex-col gap-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono-tech text-xs sm:text-sm py-2.5 flex items-center justify-between border-b border-[#C9C7C0]/40 text-[#111111] hover:text-[#000000] transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#888888]" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-3 py-3 btn-premium-primary btn-premium-dark text-xs uppercase"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-4 h-4 arrow-glide" />
          </a>
        </div>
      )}
    </header>
  );
}
