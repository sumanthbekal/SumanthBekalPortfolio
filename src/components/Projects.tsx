"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, Play, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Image from "next/image";

type ProjectType = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  video: string | null;
  tech: string[];
  github: string;
  metrics: string;
};

const PROJECTS: ProjectType[] = [
  {
    id: "smart-robot",
    title: "SMART: Smart Monitoring & Amphibious Robotic Trash Collector",
    category: "AI ROBOTICS & COMPUTER VISION",
    description:
      "AI-powered amphibious robot that detects floating waste, monitors water quality, protects aquatic wildlife, and autonomously navigates complex aquatic environments.",
    image: "/projects/smart.png",
    video: "/Video/smart-robot.mp4",
    tech: ["YOLOv8", "TensorFlow Lite", "Firebase", "Arduino Mega", "ESP8266", "Python", "OpenCV", "GPS"],
    github: "https://github.com/sumanthbekal",
    metrics: "Autonomous Navigation",
  },
  {
    id: "arecanut-sortbot",
    title: "Arecanut Sortbot: AI Automated Grading System",
    category: "AGRICULTURAL MACHINE LEARNING",
    description:
      "Machine-learning-powered agricultural sorting system using computer vision and embedded hardware to classify produce in real-time with a live monitoring dashboard.",
    image: "/projects/sortbot.png",
    video: "/Video/arecanut-sortbot.mp4",
    tech: ["YOLOv8", "YOLOv7", "TensorFlow", "Edge Impulse", "MobileNetV3", "Python"],
    github: "https://github.com/sumanthbekal",
    metrics: "Real-Time Sorting",
  },
  {
    id: "anpr",
    title: "Automatic Number Plate Recognition (ANPR)",
    category: "COMPUTER VISION & OCR",
    description:
      "Real-time vehicle detection and tracking system capable of identifying license plates rapidly across live video streams with high recognition accuracy.",
    image: "/projects/anpr.png",
    video: "/Video/anpr.mp4",
    tech: ["Python", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    github: "https://github.com/sumanthbekal",
    metrics: "High Speed ANPR",
  },
  {
    id: "artificial-vision",
    title: "Artificial Vision Using YOLO",
    category: "ASSISTIVE AI TECHNOLOGY",
    description:
      "AI assistant designed for visually impaired users, leveraging real-time YOLOv8 object detection with instant audio and haptic feedback alerts.",
    image: "/projects/aivision.png",
    video: "/Video/artificial-vision.mp4",
    tech: ["YOLOv8", "Python", "Firebase", "VS Code"],
    github: "https://github.com/sumanthbekal",
    metrics: "Audio Haptic Feedback",
  },
  {
    id: "automation",
    title: "Enterprise Leave Management System",
    category: "FULL-STACK WEB APP",
    description:
      "Web application that automates employee leave requests, manager approvals, leave balance tracking, and role-based access management.",
    image: "/projects/automation.png",
    video: null,
    tech: ["Python", "Flask", "MySQL", "Bootstrap", "HTML5", "XAMPP"],
    github: "https://github.com/sumanthbekal",
    metrics: "Role-Based Control",
  },
];

// Lazy Loaded Video Component with IntersectionObserver & GPU acceleration
function ProjectVideo({ videoSrc, imageSrc, title }: { videoSrc: string; imageSrc: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden rounded-[18px]">
      <video
        ref={videoRef}
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out transform-gpu will-change-transform rounded-[18px]"
      />
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-slide feature on mobile (changes every 4 seconds unless paused/swiped)
  useEffect(() => {
    if (isPaused || selectedProject) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, selectedProject]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.94,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.94,
    }),
  };

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>FEATURED PROJECTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Featured <span className="text-gradient-gold">Engineering Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg"
        >
          Real-world applications combining artificial intelligence, computer vision, robotics, and full-stack engineering.
        </motion.p>
      </div>

      {/* ─── Desktop View (md and up): 2 Cards per Row Grid ─── */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => {
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden group hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Glow backdrop on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#F7E7A1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Project Visual / Video Container */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative rounded-[18px] overflow-hidden border border-white/10 group-hover:border-[#D4AF37]/40 transition-all shadow-2xl mb-6 cursor-pointer"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50 rounded-[18px]">
                      {project.video ? (
                        <ProjectVideo videoSrc={project.video} imageSrc={project.image} title={project.title} />
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out transform-gpu will-change-transform rounded-[18px]"
                        />
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-[18px]" />

                      {/* Metric pill overlay */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 text-xs font-mono text-[#F7E7A1] z-10">
                        {project.metrics}
                      </div>

                      {/* "Watch Demo" Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[18px] pointer-events-none z-10">
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] text-black font-bold text-xs tracking-wide shadow-lg shadow-[#D4AF37]/30 flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                          <Play className="w-3.5 h-3.5 fill-black" />
                          <span>Watch Demo</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <span className="inline-block text-xs font-mono text-[#D4AF37] tracking-wider mb-2">
                    {project.category}
                  </span>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#F7E7A1] transition-colors leading-tight cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-mono text-[#F7E7A1] hover:text-white transition-all"
                  >
                    <Play className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    <span>Watch Full Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Mobile View (under md): Ultra-Premium Animated Glass Carousel ─── */}
      <div className="block md:hidden relative px-1">
        <div
          className="relative min-h-[520px] overflow-hidden"
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
              className="w-full rounded-3xl glass-card relative overflow-hidden border border-[#D4AF37]/30 shadow-2xl p-5 flex flex-col justify-between group"
              style={{
                background: "rgba(18, 18, 18, 0.85)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Premium Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/20 via-[#F7E7A1]/5 to-transparent blur-3xl pointer-events-none" />

              <div>
                {/* Image / Video Container */}
                <div
                  onClick={() => setSelectedProject(PROJECTS[currentIndex])}
                  className="relative aspect-[16/9] w-full rounded-[18px] overflow-hidden mb-4 border border-white/15 shadow-xl bg-black/60 cursor-pointer"
                >
                  {PROJECTS[currentIndex].video ? (
                    <ProjectVideo
                      videoSrc={PROJECTS[currentIndex].video!}
                      imageSrc={PROJECTS[currentIndex].image}
                      title={PROJECTS[currentIndex].title}
                    />
                  ) : (
                    <Image
                      src={PROJECTS[currentIndex].image}
                      alt={PROJECTS[currentIndex].title}
                      fill
                      className="object-cover object-center rounded-[18px]"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none rounded-[18px]" />

                  {/* Category Pill top left */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/90 z-10">
                    0{currentIndex + 1} / 0{PROJECTS.length}
                  </div>

                  {/* Metric Pill top right */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono text-[#F7E7A1] z-10">
                    {PROJECTS[currentIndex].metrics}
                  </div>

                  {/* "Watch Demo" Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[18px] pointer-events-none z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] text-black font-bold text-[11px] tracking-wide shadow-lg shadow-[#D4AF37]/30 flex items-center gap-1.5">
                      <Play className="w-3 h-3 fill-black" />
                      <span>Watch Demo</span>
                    </span>
                  </div>
                </div>

                {/* Meta & Heading */}
                <span className="block text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase mb-1">
                  {PROJECTS[currentIndex].category}
                </span>

                <h3
                  onClick={() => setSelectedProject(PROJECTS[currentIndex])}
                  className="text-lg font-bold text-white mb-2.5 leading-snug cursor-pointer"
                >
                  {PROJECTS[currentIndex].title}
                </h3>

                <p className="text-[#B8B8B8] text-xs leading-relaxed mb-4 line-clamp-3">
                  {PROJECTS[currentIndex].description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {PROJECTS[currentIndex].tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                  {PROJECTS[currentIndex].tech.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[10px] font-mono text-[#F7E7A1]">
                      +{PROJECTS[currentIndex].tech.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end mt-3">
                <button
                  onClick={() => setSelectedProject(PROJECTS[currentIndex])}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#F7E7A1] active:scale-95 transition-transform"
                >
                  <Play className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  <span>Watch Full Demo</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Premium Control Bar */}
        <div className="flex items-center justify-between mt-5 px-2">
          {/* Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-[#121212]/90 border border-white/15 text-white/80 hover:text-white hover:border-[#D4AF37]/60 active:scale-90 transition-all shadow-md"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-[#121212]/90 border border-white/15 text-white/80 hover:text-white hover:border-[#D4AF37]/60 active:scale-90 transition-all shadow-md"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator with active progress line */}
          <div className="flex items-center gap-2 bg-[#121212]/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to project slide ${idx + 1}`}
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

      {/* ─── Fullscreen Project Video Modal ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs font-mono text-[#F7E7A1]">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-[#B8B8B8] hidden sm:inline">
                    {selectedProject.metrics}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden border-b border-white/10">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Details Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Close Action */}
                <div className="pt-4 flex items-center justify-end border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono text-white/90 transition-colors"
                  >
                    Close Preview ✕
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
