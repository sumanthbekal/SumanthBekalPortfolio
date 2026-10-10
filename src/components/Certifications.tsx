"use client";

import { useRef, useState } from "react";
import { Award, ShieldCheck } from "lucide-react";

interface CredentialItem {
  number: string;
  title: string;
  issuer: string;
  track: string;
  description: string;
  verified: boolean;
}

const CERTIFICATIONS: CredentialItem[] = [
  {
    number: "01",
    title: "Database and SQL",
    issuer: "Infosys Springboard",
    track: "DATABASES & SQL",
    description:
      "Comprehensive certification covering relational database design, query optimization, joins, indexing, and SQL administration.",
    verified: true,
  },
  {
    number: "02",
    title: "Introduction to Natural Language Processing",
    issuer: "Great Learning Academy",
    track: "AI & NLP",
    description:
      "Foundational training in NLP algorithms, text preprocessing, tokenization, sentiment analysis, and language parsing models.",
    verified: true,
  },
  {
    number: "03",
    title: "JobReady Employability Skills",
    issuer: "Wadhwani Foundation",
    track: "PROFESSIONAL SKILLS",
    description:
      "Professional development qualification focused on workplace communication, project lifecycle management, and collaborative software engineering.",
    verified: true,
  },
  {
    number: "04",
    title: "Explore Machine Learning using Python",
    issuer: "Infosys Springboard",
    track: "MACHINE LEARNING",
    description:
      "Practical ML engineering in Python using Scikit-learn, regression models, classification pipelines, data scaling, and performance metrics.",
    verified: true,
  },
];

function InteractiveCertCard({ cert }: { cert: CredentialItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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

    const rotateX = -percentY * 2.5;
    const rotateY = percentX * 2.5;

    card.style.setProperty("--c-mouse-x", `${x}px`);
    card.style.setProperty("--c-mouse-y", `${y}px`);
    card.style.setProperty("--c-rot-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--c-rot-y", `${rotateY.toFixed(2)}deg`);
  };

  const handlePointerEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    setIsHovered(false);
    if (!card) return;
    card.style.setProperty("--c-rot-x", "0deg");
    card.style.setProperty("--c-rot-y", "0deg");
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: isHovered
          ? "perspective(1000px) rotateX(var(--c-rot-x, 0deg)) rotateY(var(--c-rot-y, 0deg)) translateY(-3px)"
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered
          ? "transform 0.15s ease-out, box-shadow 0.3s ease"
          : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="relative p-6 sm:p-10 bg-[#F5F3EE] hover:bg-white transition-all duration-300 flex flex-col justify-between group overflow-hidden"
    >
      {/* Dynamic Local Spotlight for Certification Card */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(360px circle at var(--c-mouse-x, 50%) var(--c-mouse-y, 50%), rgba(212, 175, 55, 0.08), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C9C7C0]/60">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#111111] transition-transform duration-300 group-hover:scale-110" />
            <span className="font-mono-tech text-xs text-[#666666] uppercase">
              {cert.track}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#111111] text-[#C7F000] font-mono-tech text-[10px] font-bold uppercase transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(199,240,0,0.6)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED</span>
          </div>
        </div>

        <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight mb-2 group-hover:text-black transition-colors">
          {cert.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
          {cert.description}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-[#C9C7C0]/60 flex items-center justify-between font-mono-tech text-xs">
        <span className="text-[#666666]">ISSUER: {cert.issuer}</span>
        <span className="text-[#111111] font-bold transition-transform duration-300 group-hover:translate-x-1">
          CERTIFIED ↗
        </span>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="w-full border-b border-[#C9C7C0] bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-10 py-5 border-b border-[#C9C7C0] gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-[#111111]">
              CERTIFICATIONS & COURSES
            </h2>
            <span className="font-mono-tech text-xs text-[#666666]">
              ( VERIFIED CREDENTIALS )
            </span>
          </div>

          <span className="font-mono-tech text-[11px] text-[#666666] uppercase tracking-wider hidden md:inline">
            INDUSTRY-RECOGNIZED SKILL ACQUISITION
          </span>
        </div>

        {/* 4 Cards Grid in 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#C9C7C0] border-b border-[#C9C7C0]">
          {CERTIFICATIONS.slice(0, 2).map((cert) => (
            <InteractiveCertCard key={cert.title} cert={cert} />
          ))}
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#C9C7C0]">
          {CERTIFICATIONS.slice(2, 4).map((cert) => (
            <InteractiveCertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
