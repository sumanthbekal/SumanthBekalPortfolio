"use client";

import Image from "next/image";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function AboutAndSkills() {
  const skillTags = [
    "Shopify",
    "Liquid",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "YOLOv8",
    "OpenCV",
    "TensorFlow",
    "Arduino",
    "ESP8266",
    "Firebase",
    "IoT",
    "GPS",
    "Blender",
    "Git",
    "REST APIs",
    "MySQL",
    "Linux",
  ];

  const stats = [
    { value: "3+", label: "YEARS OF EXPERIENCE" },
    { value: "10+", label: "CLIENT PROJECTS" },
    { value: "5", label: "ENGINEERING PROJECTS" },
    { value: "100%", label: "COMMITMENT TO QUALITY" },
  ];

  return (
    <section id="about" className="w-full border-b border-[#C9C7C0] bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#C9C7C0]">
        {/* Left Column: ABOUT ME & EDUCATION */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
          <div>
            {/* Header label */}
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#C9C7C0]">
              <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-widest text-[#111111]">
                ABOUT ME
              </span>
              <span className="font-mono-tech text-xs text-[#666666]">
                ( PROFILE & EDUCATION )
              </span>
            </div>

            {/* Heading matching reference */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111111] leading-tight mb-6">
              ENGINEER.<br />
              DEVELOPER.<br />
              PROBLEM SOLVER.
            </h2>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-8 max-w-xl">
              I&apos;m Sumanth Bekal, a developer and engineer passionate about building innovative solutions using AI, computer vision, and scalable web architectures. I combine hardware, machine learning, and clean software engineering to build robust production systems.
            </p>

            {/* Education Block incorporating Sahyadri details with subtle hover feedback */}
            <div className="mb-8 p-5 sm:p-6 bg-white border border-[#C9C7C0] transition-all duration-300 hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] group">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C9C7C0]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#111111] transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#111111]">
                    ACADEMIC BACKGROUND
                  </span>
                </div>
                <span className="font-mono-tech text-[10px] text-[#666666] uppercase">
                  2021 — 2025
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-heading font-black text-base sm:text-lg text-[#111111] uppercase tracking-tight">
                  BACHELOR OF ENGINEERING (B.E.)
                </h3>
                <div className="font-mono-tech text-xs text-[#111111] font-semibold">
                  Computer Science and Engineering (Artificial Intelligence and Machine Learning)
                </div>
                <div className="font-mono-tech text-xs text-[#666666] pt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>Sahyadri College of Engineering & Management, Mangaluru</span>
                  <span className="text-[#999999]">|</span>
                  <span className="px-2 py-0.5 bg-[#C7F000] border border-[#111111] text-[#111111] font-bold text-[10px]">
                    CGPA: 7.5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait & Stats Grid matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-6 border-t border-[#C9C7C0] items-center">
            {/* Small Portrait with subtle hover lift */}
            <div className="sm:col-span-5 relative w-full aspect-[3/4] max-w-[220px] border border-[#C9C7C0] bg-white p-1 transition-all duration-300 hover:border-[#111111] hover:shadow-md group">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/sumanth-about.jpg"
                  alt="Sumanth Bekal"
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
            </div>

            {/* 4 Stats Grid + Handwritten Callout */}
            <div className="sm:col-span-7 flex flex-col justify-between h-full">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="group cursor-default">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#111111] block leading-none mb-1 transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#666666] tracking-wider uppercase block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Handwritten style message matching reference */}
              <div className="pt-6 mt-4 border-t border-[#C9C7C0]/60 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12h16m0 0l-4-4m4 4l-4 4" />
                </svg>
                <span className="font-mono-tech italic font-bold text-xs uppercase tracking-tight text-[#111111]">
                  LET&apos;S BUILD SOMETHING GREAT TOGETHER.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: SKILLS & TOOLS */}
        <div id="skills" className="lg:col-span-5 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
          <div>
            {/* Header label */}
            <div className="flex items-center justify-between mb-8 pb-2 border-b border-[#C9C7C0]">
              <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-widest text-[#111111]">
                SKILLS & TOOLS
              </span>
              <span className="font-mono-tech text-xs text-[#666666]">
                ( TECH STACK )
              </span>
            </div>

            {/* Skills tag grid matching reference layout with subtle lift and gold accent */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-2.5">
              {skillTags.map((skill) => (
                <div
                  key={skill}
                  className="px-3.5 py-2.5 bg-white border border-[#C9C7C0] text-center font-mono-tech text-xs text-[#111111] hover:border-[#111111] hover:bg-[#C7F000] hover:-translate-y-1 hover:shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-default select-none shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Skill Category Summary */}
          <div className="pt-8 mt-8 border-t border-[#C9C7C0] flex flex-col gap-3">
            <span className="font-mono-tech text-[10px] text-[#888888] uppercase tracking-widest">
              CORE SPECIALIZATION
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-[#111111] text-[#C7F000] font-mono-tech text-[11px] font-bold uppercase transition-transform duration-300 hover:scale-105 cursor-default">
                SHOPIFY LIQUID EXPERT
              </span>
              <span className="px-2.5 py-1 bg-[#111111] text-white font-mono-tech text-[11px] uppercase transition-transform duration-300 hover:scale-105 cursor-default">
                COMPUTER VISION & YOLOV8
              </span>
              <span className="px-2.5 py-1 bg-[#111111] text-white font-mono-tech text-[11px] uppercase transition-transform duration-300 hover:scale-105 cursor-default">
                FULL-STACK & DATABASE ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
