"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FileText, Menu, X, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Home", href: "#home", emoji: "⌂" },
  { name: "About", href: "#about", emoji: "◈" },
  { name: "Skills", href: "#skills", emoji: "◆" },
  { name: "Projects", href: "#projects", emoji: "◉" },
  { name: "Clients", href: "#client-projects", emoji: "◎" },
  { name: "Experience", href: "#experience", emoji: "◇" },
  { name: "Certifications", href: "#certifications", emoji: "✦" },
  { name: "Contact", href: "#contact", emoji: "◈" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const top =
        el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto relative w-full max-w-5xl rounded-full glass-pill border border-white/10 px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-2xl shadow-black/80 bg-black/85" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 text-sm font-semibold tracking-wider text-white hover:text-[#F7E7A1] transition-colors pl-1"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-md shadow-[#D4AF37]/20 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sumanth Bekal Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="hidden sm:inline font-mono text-xs text-white/90">
                sumanth<span className="text-[#D4AF37]">.dev</span>
              </span>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
                      isActive ? "text-[#F7E7A1] font-semibold" : "text-[#B8B8B8] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 pr-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] hover:opacity-95 transition-opacity shadow-lg shadow-[#D4AF37]/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Me</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white glass-button"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Resume</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#F7E7A1] to-transparent origin-left rounded-full"
            style={{ scaleX }}
          />
        </motion.div>
      </header>

      {/* ─── Premium Mobile Drawer ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 md:hidden"
              style={{ zIndex: 9998 }}
            />

            {/* Drawer Panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 35 }}
              className="fixed top-0 right-0 h-full w-[82vw] max-w-[340px] flex flex-col md:hidden overflow-hidden"
              style={{
                zIndex: 9999,
                background: "rgba(12,12,12,0.96)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(212,175,55,0.25)",
                borderRadius: "24px 0 0 24px",
              }}
            >
              {/* Gold top accent line */}
              <div
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #D4AF37, #F7E7A1, transparent)",
                }}
              />

              {/* Header row */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5">
                {/* Logo */}
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-md shadow-[#D4AF37]/20 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Sumanth Bekal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/90 leading-none">
                      sumanth<span className="text-[#D4AF37]">.dev</span>
                    </p>
                    <p className="text-[10px] text-[#B8B8B8] leading-tight mt-0.5">Shopify · AI Engineer</p>
                  </div>
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 24px" }} />

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 px-4 py-4 flex-1 overflow-y-auto">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.045, duration: 0.3 }}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between w-full px-4 rounded-2xl font-medium transition-all duration-200 select-none"
                      style={{
                        height: "52px",
                        background: isActive
                          ? "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(247,231,161,0.12))"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(212,175,55,0.35)"
                          : "1px solid transparent",
                        color: isActive ? "#FFFFFF" : "#B8B8B8",
                        boxShadow: isActive
                          ? "0 0 18px rgba(212,175,55,0.12)"
                          : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                          (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "#B8B8B8";
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="text-sm"
                          style={{ color: isActive ? "#D4AF37" : "#555" }}
                        >
                          {item.emoji}
                        </span>
                        <span className="text-sm tracking-wide">{item.name}</span>
                      </div>
                      {isActive && (
                        <ChevronRight className="w-4 h-4" style={{ color: "#D4AF37" }} />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Bottom divider */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 24px" }} />

              {/* Bottom Actions */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl text-sm font-medium transition-all duration-200"
                  style={{
                    height: "48px",
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                  }}
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl text-sm font-semibold text-black transition-all duration-200"
                  style={{
                    height: "48px",
                    background: "linear-gradient(135deg, #D4AF37, #F7E7A1)",
                    boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Hire Me
                </a>
              </div>

              {/* Bottom gold accent line */}
              <div
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #D4AF37, #F7E7A1, transparent)",
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

