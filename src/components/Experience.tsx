"use client";

import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface RoleItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  points: string[];
}

const EXPERIENCES: RoleItem[] = [
  {
    title: "Shopify Developer",
    company: "Klientship Technologies Pvt. Ltd",
    period: "May 2025 – Present",
    location: "Mangalore, India",
    type: "Full-Time",
    summary:
      "Engineered bespoke Shopify themes and high-conversion eCommerce storefronts, focusing on store performance optimization and client experience.",
    points: [
      "Developed and customized bespoke Shopify storefronts tailored to client specifications.",
      "Improved user experience, page responsiveness, and site performance scores.",
      "Built responsive Shopify themes from scratch and customized existing Liquid sections.",
      "Optimized customer checkout journeys to maximize conversion rates.",
      "Enhanced eCommerce functionality through Storefront API and app integrations.",
      "Collaborated closely with cross-functional development teams to deliver end-to-end storefronts.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "AIRAT SYSTEMS LLP",
    period: "January 2025 – May 2025",
    location: "Mangalore, India",
    type: "Internship",
    summary:
      "Researched, trained, and deployed computer vision neural network models for real-time edge hardware object detection and sorting.",
    points: [
      "Built an AI object sorter system using computer vision techniques.",
      "Trained and evaluated YOLOv8 and MobileNetV3 architectures for rapid classification.",
      "Developed a live telemetry and monitoring dashboard for hardware edge feedback.",
      "Deployed optimized ML model packages onto embedded edge computing devices.",
    ],
  },
  {
    title: "Android Developer Intern",
    company: "Coding Key LLP",
    period: "October 2023 – November 2023",
    location: "Remote",
    type: "Internship",
    summary:
      "Constructed native Android applications, optimizing client-side performance and real-time state features.",
    points: [
      "Built native Android applications using Java and Android SDK framework.",
      "Improved application rendering performance and minimized resource overhead.",
      "Added real-time data sync features and enhanced overall user interaction patterns.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full border-b border-[#C9C7C0] bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-10 py-5 border-b border-[#C9C7C0] gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-[#111111]">
              WORK & INTERNSHIP EXPERIENCE
            </h2>
            <span className="font-mono-tech text-xs text-[#666666]">
              ( CAREER TIMELINE )
            </span>
          </div>

          <span className="font-mono-tech text-[11px] text-[#666666] uppercase tracking-wider hidden md:inline">
            PROVEN TRACK RECORD IN PRODUCTION
          </span>
        </div>

        {/* Timeline List matching Editorial Brutalist styling */}
        <div className="divide-y divide-[#C9C7C0]">
          {EXPERIENCES.map((role, idx) => (
            <div
              key={role.company}
              className="p-6 sm:p-10 md:p-12 hover:bg-white transition-all duration-300 group hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Left Meta Rail: Index, Period, Location, Type */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] transition-transform duration-300 group-hover:scale-105">
                        0{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#C7F000] border border-[#111111] text-[#111111] font-mono-tech text-[10px] font-bold uppercase transition-shadow duration-300 group-hover:shadow-[0_0_10px_rgba(199,240,0,0.5)]">
                        {role.type}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-xl sm:text-2xl text-[#111111] uppercase tracking-tight group-hover:text-black transition-colors">
                      {role.title}
                    </h3>

                    <h4 className="font-mono-tech text-sm font-semibold text-[#111111] mt-1 mb-4 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#666666]" />
                      <span>{role.company}</span>
                    </h4>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-[#C9C7C0]/60 font-mono-tech text-xs text-[#666666]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#111111]" />
                      <span>{role.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Content: Summary & Bullet Points */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-sm sm:text-base text-[#111111] leading-relaxed mb-6 font-medium">
                    {role.summary}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#C9C7C0]/60">
                    {role.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#444444] leading-relaxed transition-colors duration-200 group-hover:text-[#222222]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 flex-shrink-0 group-hover:bg-[#C7F000] group-hover:scale-125 transition-all duration-300" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
