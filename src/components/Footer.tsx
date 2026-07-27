"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-md shadow-[#D4AF37]/20 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Sumanth Bekal Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-mono text-[#B8B8B8]">
            © {new Date().getFullYear()} Sumanth Bekal. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-xs font-mono text-[#B8B8B8] hover:text-[#F7E7A1] transition-colors">
            About
          </a>
          <a href="#projects" className="text-xs font-mono text-[#B8B8B8] hover:text-[#F7E7A1] transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-xs font-mono text-[#B8B8B8] hover:text-[#D4AF37] transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

