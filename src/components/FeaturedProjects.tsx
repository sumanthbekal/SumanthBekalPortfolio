"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause, X, ExternalLink, Github, Layers, Cpu, CheckCircle } from "lucide-react";

export interface ProjectItem {
  number: string;
  category: string;
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc: string;
  tags: string[];
  linkUrl: string;
  overview?: string;
  architecture?: string[];
  keyFeatures?: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    number: "01",
    category: "AI ROBOTICS & COMPUTER VISION",
    title: "SMART: Amphibious Robotic Trash Collector",
    description:
      "AI-powered robot that detects floating waste, monitors water quality and autonomously navigates aquatic environments with turtle & obstacle avoidance.",
    videoSrc: "/Video/smart-robot.mp4",
    posterSrc: "/projects/smart-ref.png",
    tags: ["YOLOv8", "OpenCV", "Arduino", "GPS"],
    linkUrl: "https://github.com/sumanthbekal",
    overview:
      "An autonomous amphibious robotic vessel designed to clear municipal waterways and lakes. It features real-time aquatic debris recognition, water quality multi-parameter telemetry, and eco-sensitive wildlife avoidance.",
    architecture: [
      "Custom YOLOv8 detection model running real-time aquatic object identification.",
      "Dual propulsion microcontroller unit interfacing with Arduino and GPS navigational waypoints.",
      "Embedded sensor array monitoring water turbidity, pH, and obstacle distances.",
    ],
    keyFeatures: [
      "Real-time floating waste identification with high confidence scores.",
      "Wildlife protection algorithms preventing disturbance to turtles and aquatic fauna.",
      "Telemetric waypoint navigation and mission recovery.",
    ],
  },
  {
    number: "02",
    category: "AGRICULTURE & AI",
    title: "Arecanut Sortbot AI-Powered Grading System",
    description:
      "Machine-learning based sorting system with embedded IoT sensors and real-time grading dashboard for automated agricultural separation.",
    videoSrc: "/Video/arecanut-sortbot.mp4",
    posterSrc: "/projects/sortbot-ref.png",
    tags: ["YOLOv8", "Python", "IoT", "OpenCV"],
    linkUrl: "https://github.com/sumanthbekal",
    overview:
      "High-throughput automated agricultural sorting apparatus utilizing computer vision inference to grade arecanut crops by ripeness, defect, and size categories.",
    architecture: [
      "Custom dataset training on YOLOv8 for defect and maturity grade classification.",
      "Conveyor synchronization with high-speed microactuators for physical ejection.",
      "Real-time analytics dashboard providing yield distribution metrics to farmers.",
    ],
    keyFeatures: [
      "Continuous optical sorting matching high processing conveyor speeds.",
      "Accurate multi-class maturity and defect segregation.",
      "IoT telemetry logging batch counts and quality distributions.",
    ],
  },
  {
    number: "03",
    category: "SMART CITIES & ANPR",
    title: "Automatic Number Plate Recognition (ANPR)",
    description:
      "Real-time vehicle detection and license plate recognition using deep learning and OpenCV with high-speed video inference and OCR.",
    videoSrc: "/Video/anpr.mp4",
    posterSrc: "/projects/anpr-ref.png",
    tags: ["YOLOv8", "OpenCV", "Python", "CV"],
    linkUrl: "https://github.com/sumanthbekal",
    overview:
      "End-to-end intelligent traffic system providing automated license plate detection, localization, and OCR character extraction from surveillance camera feeds.",
    architecture: [
      "YOLOv8 vehicle bounding box detection and localized plate region proposal.",
      "Bilinear filter preprocessing, skew correction, and morphological thresholding.",
      "OCR sequence decoding and database registration with timestamped audit trails.",
    ],
    keyFeatures: [
      "Resilient plate localization in adverse lighting and varying vehicle velocities.",
      "Low latency inference suitable for live toll and security checkpoints.",
      "Structured logging and search query interface for captured number records.",
    ],
  },
  {
    number: "04",
    category: "ASSISTIVE TECHNOLOGY",
    title: "Artificial Vision Using YOLO Assistive Vision System",
    description:
      "Real-time object detection and distance estimation for visually assisted navigation with instant acoustic and haptic alert feedback.",
    videoSrc: "/Video/artificial-vision.mp4",
    posterSrc: "/projects/aivision-ref.png",
    tags: ["YOLOv8", "Python", "OpenCV", "AI"],
    linkUrl: "https://github.com/sumanthbekal",
    overview:
      "Wearable and portable vision assistance platform aiding visually impaired individuals in recognizing ambient obstacles, indoor objects, and spatial clearances.",
    architecture: [
      "Optimized lightweight YOLO object recognition model processing live video streams.",
      "Monocular depth and geometric bounding-box proximity heuristics for distance estimation.",
      "Audio synthesis pipeline delivering rapid directional cues and urgent danger alerts.",
    ],
    keyFeatures: [
      "Real-time pedestrian, door, staircase, and obstacle recognition.",
      "Spatial proximity warnings prioritizing closest potential hazards.",
      "Lightweight model footprint suitable for battery-efficient mobile execution.",
    ],
  },
  {
    number: "05",
    category: "ENTERPRISE WEB & AUTOMATION",
    title: "Enterprise Leave Management System",
    description:
      "Web application with role-based access control (Admin, Manager, Employee), leave balance tracking, request workflows, and audit logging.",
    posterSrc: "/projects/automation.png",
    tags: ["Python", "Flask", "MySQL", "Bootstrap", "XAMPP"],
    linkUrl: "https://github.com/sumanthbekal",
    overview:
      "Production-ready administrative workflow system automating organizational employee leave requests, hierarchical approval chains, quota ledger balances, and compliance reporting.",
    architecture: [
      "Modular Flask backend providing RESTful routing and secure session authentication.",
      "Relational MySQL schema structured with relational integrity, constraints, and audit tables.",
      "Responsive Bootstrap interface featuring customized employee dashboards and approval modals.",
    ],
    keyFeatures: [
      "Granular role-based access control (Admin, Department Manager, Employee).",
      "Dynamic leave balance ledger calculation (Casual, Medical, Earned Leave).",
      "Real-time approval workflow notification states and administrative export logs.",
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
  }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F5F3EE] border border-[#111111] p-6 sm:p-10 shadow-2xl"
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 bg-white border border-[#C9C7C0] text-[#111111] hover:bg-[#111111] hover:text-[#C7F000] btn-premium-icon"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2 font-mono-tech text-xs text-[#666666]">
          <span>{project.number}</span>
          <span>·</span>
          <span className="uppercase tracking-widest">{project.category}</span>
        </div>

        <h3
          id="modal-title"
          className="font-heading font-black text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-4"
        >
          {project.title}
        </h3>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white border border-[#C9C7C0] text-xs font-mono-tech uppercase text-[#111111]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        {project.overview && (
          <div className="mb-6">
            <h4 className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#111111]" />
              <span>PROJECT OVERVIEW</span>
            </h4>
            <p className="text-sm text-[#444444] leading-relaxed">
              {project.overview}
            </p>
          </div>
        )}

        {/* Architecture & Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#C9C7C0] mb-8">
          {project.architecture && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#111111]" />
                <h4 className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#111111]">
                  SYSTEM ARCHITECTURE
                </h4>
              </div>
              <ul className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#555555] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.keyFeatures && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-[#111111]" />
                <h4 className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#111111]">
                  CORE CAPABILITIES
                </h4>
              </div>
              <ul className="space-y-2">
                {project.keyFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#555555] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7F000] border border-[#111111] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#C9C7C0] flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium-primary btn-premium-dark px-6 py-3 text-xs"
          >
            <Github className="w-4 h-4" />
            <span>EXPLORE CODE ON GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5 arrow-glide" />
          </a>

          <button
            onClick={onClose}
            className="btn-premium-outline px-6 py-3 text-xs"
          >
            CLOSE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: ProjectItem;
  onOpenModal: (p: ProjectItem) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!project.videoSrc) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [project.videoSrc]);

  // Subtle 3D Tilt on desktop fine pointer devices
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    // Subtle 2.5-3 degrees max tilt
    const rotateX = -percentY * 2.8;
    const rotateY = percentX * 2.8;

    card.style.setProperty("--p-mouse-x", `${x}px`);
    card.style.setProperty("--p-mouse-y", `${y}px`);
    card.style.setProperty("--p-rot-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--p-rot-y", `${rotateY.toFixed(2)}deg`);
  };

  const handlePointerEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    setIsHovered(false);
    if (!card) return;
    card.style.setProperty("--p-rot-x", "0deg");
    card.style.setProperty("--p-rot-y", "0deg");
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: isHovered
          ? "perspective(1000px) rotateX(var(--p-rot-x, 0deg)) rotateY(var(--p-rot-y, 0deg)) translateY(-4px)"
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered
          ? "transform 0.15s ease-out, box-shadow 0.3s ease"
          : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="relative flex flex-col border-b lg:border-b-0 lg:border-r border-[#C9C7C0] last:border-r-0 bg-[#F5F3EE] p-5 sm:p-6 transition-all duration-300 hover:bg-white group min-w-[280px] overflow-hidden"
    >
      {/* Dynamic Local Spotlight for Project Card */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at var(--p-mouse-x, 50%) var(--p-mouse-y, 50%), rgba(212, 175, 55, 0.08), transparent 70%)`,
        }}
      />

      {/* Header: Project Number + Category */}
      <div className="relative z-10 flex items-baseline justify-between mb-4 border-b border-[#C9C7C0] pb-2">
        <span className="font-heading font-black text-2xl sm:text-3xl text-[#111111]">
          {project.number}
        </span>
        <span className="font-mono-tech text-[10px] text-[#666666] tracking-wider uppercase truncate max-w-[170px]">
          {project.category}
        </span>
      </div>

      {/* Media Player / Image Card */}
      <div
        ref={containerRef}
        onClick={project.videoSrc ? togglePlay : () => onOpenModal(project)}
        className="relative z-10 w-full aspect-video border border-[#C9C7C0] bg-[#111111] overflow-hidden cursor-pointer mb-5 group/media shadow-sm"
      >
        {project.videoSrc ? (
          <>
            <video
              ref={videoRef}
              src={project.videoSrc}
              poster={project.posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-105"
            />
            {/* Play/Pause Overlay indicator */}
            <div className="absolute bottom-2.5 left-2.5 z-10 w-7 h-7 rounded-full bg-black/70 border border-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-200 group-hover/media:scale-110">
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </div>

            {!videoLoaded && (
              <div className="absolute inset-0">
                <Image
                  src={project.posterSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={project.posterSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-105"
            />
          </div>
        )}
      </div>

      {/* Project Title */}
      <h3 className="relative z-10 font-heading font-black text-base sm:text-lg text-[#111111] uppercase tracking-tight leading-snug mb-2 group-hover:text-black">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="relative z-10 text-xs text-[#666666] leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#C9C7C0]/60">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-white border border-[#C9C7C0] text-[10px] font-mono-tech uppercase text-[#111111] transition-colors hover:border-[#111111] hover:bg-[#C7F000]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Project & Detail Action Links */}
      <div className="relative z-10 pt-2 flex items-center justify-between border-t border-[#C9C7C0]/40">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-[#111111] group-hover:text-black transition-colors"
        >
          <span className="border-b-2 border-[#C7F000] pb-0.5 group-hover:border-[#111111] transition-colors">
            DETAILS & CODE
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#111111] arrow-glide" />
        </button>

        <a
          href={project.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-tech text-[10px] uppercase text-[#666666] hover:text-[#111111] flex items-center gap-1 transition-colors"
        >
          <Github className="w-3 h-3" />
          <span>REPO</span>
        </a>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="w-full border-b border-[#C9C7C0] bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-10 py-5 border-b border-[#C9C7C0] gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-[#111111]">
              FEATURED PROJECTS
            </h2>
            <span className="font-mono-tech text-xs text-[#666666]">
              (01 — 05)
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-6">
            <span className="font-mono-tech text-[11px] text-[#666666] uppercase tracking-wider hidden md:inline">
              REAL PROJECTS. REAL IMPACT.
            </span>

            {/* Carousel Arrows with btn-premium-icon */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-9 h-9 rounded-full border border-[#C9C7C0] bg-white flex items-center justify-center hover:bg-[#111111] hover:text-[#C7F000] hover:border-[#111111] transition-all btn-premium-icon"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="w-9 h-9 rounded-full border border-[#C9C7C0] bg-white flex items-center justify-center hover:bg-[#111111] hover:text-[#C7F000] hover:border-[#111111] transition-all btn-premium-icon"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Cards Row (scrollable on all breakpoints) */}
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-[minmax(280px,340px)] lg:auto-cols-[minmax(280px,1fr)] overflow-x-auto no-scrollbar scroll-smooth"
        >
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
