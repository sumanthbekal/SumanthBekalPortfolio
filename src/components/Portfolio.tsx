"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
import ClientWebsites from "./ClientWebsites";
import Experience from "./Experience";
import AboutAndSkills from "./AboutAndSkills";
import Certifications from "./Certifications";
import ContactFooter from "./ContactFooter";
import GlobalCursorSpotlight from "./GlobalCursorSpotlight";

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#111111] flex flex-col font-sans selection:bg-[#C7F000] selection:text-black relative">
      {/* Global Interactive Cursor Spotlight & Halo Layer */}
      <GlobalCursorSpotlight />

      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Projects (01 - 05 with Video Players and Modals) */}
        <FeaturedProjects />

        {/* 4. Work & Internship Experience */}
        <Experience />

        {/* 5. Client Websites Carousel & 18 Logomarks */}
        <ClientWebsites />

        {/* 6. About Me & Skills / Education */}
        <AboutAndSkills />

        {/* 7. Certifications & Verified Credentials */}
        <Certifications />
      </main>

      {/* 8. Contact & Footer with Form and Channels */}
      <ContactFooter />

      {/* Floating Smooth Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#111111] text-[#C7F000] border border-[#333333] hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#111111] shadow-2xl transition-all duration-300 group btn-premium-icon"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </div>
  );
}
