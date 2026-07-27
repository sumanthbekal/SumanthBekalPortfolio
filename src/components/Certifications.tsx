"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Database and SQL",
    issuer: "Infosys Springboard",
    category: "DATABASES & SQL",
    description: "Comprehensive certification covering relational database design, query optimization, joins, and SQL administration.",
  },
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Great Learning Academy",
    category: "AI & NLP",
    description: "Foundational training in NLP algorithms, text preprocessing, sentiment analysis, and language parsing.",
  },
  {
    title: "JobReady Employability Skills",
    issuer: "Wadhwani Foundation",
    category: "PROFESSIONAL SKILLS",
    description: "Professional development qualification focused on workplace communication, project management, and collaborative engineering.",
  },
  {
    title: "Explore Machine Learning using Python",
    issuer: "Infosys Springboard",
    category: "MACHINE LEARNING",
    description: "Practical ML engineering in Python using Scikit-learn, regression models, classification algorithms, and evaluation metrics.",
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide feature on mobile (changes every 3.5s unless paused/swiped)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 250 : -250,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="certifications" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>VERIFIED CREDENTIALS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Certifications & <span className="text-gradient-gold">Courses</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg"
        >
          Industry credentials validating skills across databases, natural language processing, and machine learning.
        </motion.p>
      </div>

      {/* ─── Desktop Grid View (md and up) ─── */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="p-8 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#F7E7A1] block">{cert.issuer}</span>
                    <span className="text-[11px] font-mono text-[#B8B8B8]">{cert.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F7E7A1] text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Verified</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F7E7A1] transition-colors">
                {cert.title}
              </h3>

              <p className="text-sm text-[#B8B8B8] leading-relaxed mb-4">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#B8B8B8]">ISSUER: {cert.issuer}</span>
              <span className="text-xs font-mono text-[#D4AF37]">CERTIFIED</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── Mobile Auto-Sliding Glass Carousel View (under md) ─── */}
      <div className="block md:hidden relative px-1">
        <div
          className="relative min-h-[260px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="w-full p-6 rounded-3xl glass-card relative overflow-hidden border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between"
              style={{
                background: "rgba(18, 18, 18, 0.85)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                      <Award className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#F7E7A1] block">{CERTIFICATIONS[currentIndex].issuer}</span>
                      <span className="text-[10px] font-mono text-[#B8B8B8]">{CERTIFICATIONS[currentIndex].category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F7E7A1] text-[10px] font-mono">
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {CERTIFICATIONS[currentIndex].title}
                </h3>

                <p className="text-xs text-[#B8B8B8] leading-relaxed mb-4">
                  {CERTIFICATIONS[currentIndex].description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#B8B8B8]">CREDENTIAL 0{currentIndex + 1}/0{CERTIFICATIONS.length}</span>
                <span className="text-[#D4AF37]">VERIFIED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Control Bar */}
        <div className="flex items-center justify-between mt-5 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-[#121212]/90 border border-white/15 text-white/80 hover:text-white hover:border-[#D4AF37]/60 active:scale-90 transition-all shadow-md"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-[#121212]/90 border border-white/15 text-white/80 hover:text-white hover:border-[#D4AF37]/60 active:scale-90 transition-all shadow-md"
              aria-label="Next certification"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-[#121212]/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
            {CERTIFICATIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to certification slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentIndex === idx
                    ? "w-6 bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] shadow-sm shadow-[#D4AF37]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
