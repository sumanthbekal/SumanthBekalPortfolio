"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Brain, Code, Globe, Database, Wrench, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Shopify Development",
    icon: ShoppingBag,
    image: "/shopify.png",
    color: "#D4AF37",
    skills: [
      "Shopify",
      "Liquid",
      "Theme Development",
      "Responsive Design",
      "Store Optimization",
      "Storefront API",
      "Theme Customization",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    image: "/ai-automation.png",
    color: "#F7E7A1",
    skills: [
      "YOLOv8",
      "YOLOv7",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Computer Vision",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    image: "/programming-languages.png",
    color: "#D4AF37",
    skills: ["Python", "JavaScript", "C", "C++"],
  },
  {
    title: "Web Development",
    icon: Globe,
    image: "/fullstack-engineering.png",
    color: "#F7E7A1",
    skills: ["HTML5", "CSS3", "Bootstrap", "Flask", "Responsive Web Design"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    image: "/databases-storage.png",
    color: "#D4AF37",
    skills: ["MySQL", "Oracle", "SQL Server", "MongoDB", "Firebase"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    image: "/developer-tools.png",
    color: "#F7E7A1",
    skills: ["VS Code", "Jupyter Notebook", "Google Colab", "GitHub"],
  },
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide feature on mobile (changes every 3.5s unless paused/interacted)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SKILL_CATEGORIES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SKILL_CATEGORIES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length);
  };

  // Touch handlers for mobile swiping
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

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
          <span>TECHNICAL EXPERTISE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Skills & <span className="text-gradient-gold">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg"
        >
          Comprehensive skill breakdown across Shopify development, machine learning, programming, and databases.
        </motion.p>
      </div>

      {/* ─── Desktop Grid View (md and up) ─── */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-2xl bg-[#96bf48]/15 border border-[#96bf48]/30 group-hover:border-[#96bf48]/60 transition-colors flex items-center justify-center">
                    {category.image ? (
                      <Image src={category.image} alt={category.title} width={20} height={20} className="w-5 h-5 object-contain" />
                    ) : (
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:border-[#D4AF37] hover:text-[#F7E7A1] hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#B8B8B8]">
                <span>CATEGORY 0{idx + 1}</span>
                <span className="text-[#F7E7A1]">VERIFIED</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Mobile Auto-Sliding Carousel View (under md) ─── */}
      <div className="block md:hidden relative">
        <div
          className="overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ translateX: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {SKILL_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="w-full flex-shrink-0 px-1">
                  <div className="p-6 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 rounded-2xl bg-[#96bf48]/15 border border-[#96bf48]/30 flex items-center justify-center">
                          {category.image ? (
                            <Image src={category.image} alt={category.title} width={20} height={20} className="w-5 h-5 object-contain" />
                          ) : (
                            <Icon className="w-5 h-5 text-[#D4AF37]" />
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/90"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#B8B8B8]">
                      <span>CATEGORY 0{idx + 1}</span>
                      <span className="text-[#F7E7A1]">VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Navigation Controls & Indicators */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-[#D4AF37]/50 transition-colors"
              aria-label="Previous skill category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-[#D4AF37]/50 transition-colors"
              aria-label="Next skill category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {SKILL_CATEGORIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-[#D4AF37]"
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
