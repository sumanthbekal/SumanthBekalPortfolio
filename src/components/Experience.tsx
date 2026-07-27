"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Shopify Developer",
    company: "Klientship Technologies Pvt. Ltd",
    duration: "May 2025 – Present",
    location: "Mangalore",
    description:
      "Engineered bespoke Shopify themes and high-conversion eCommerce storefronts, focusing on store performance optimization and client experience.",
    achievements: [
      "Developed and customized bespoke Shopify storefronts tailored to client specifications.",
      "Improved user experience, page responsiveness, and site performance scores.",
      "Built responsive Shopify themes from scratch and customized existing Liquid sections.",
      "Optimized customer checkout journeys to maximize conversion rates.",
      "Enhanced eCommerce functionality through Storefront API and app integrations.",
      "Collaborated closely with cross-functional development teams to deliver end-to-end storefronts.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "AIRAT SYSTEMS LLP",
    duration: "January 2025 – May 2025",
    location: "Mangalore",
    description:
      "Researched, trained, and deployed computer vision neural network models for real-time edge hardware object detection and sorting.",
    achievements: [
      "Built an AI object sorter system using computer vision techniques.",
      "Trained and evaluated YOLOv8 and MobileNetV3 architectures for rapid classification.",
      "Developed a live telemetry and monitoring dashboard for hardware edge feedback.",
      "Deployed optimized ML model packages onto embedded edge computing devices.",
    ],
  },
  {
    role: "Android Developer Intern",
    company: "Coding Key LLP",
    duration: "October 2023 – November 2023",
    location: "Remote",
    description:
      "Constructed native Android applications, optimizing client-side performance and real-time state features.",
    achievements: [
      "Built native Android applications using Java and Android SDK framework.",
      "Improved application rendering performance and minimized resource overhead.",
      "Added real-time data sync features and enhanced overall user interaction patterns.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Work & Internship <span className="text-gradient-gold">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg"
        >
          My experience in Shopify development, machine learning model deployment, and software engineering.
        </motion.p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-black border-2 border-[#D4AF37] group-hover:scale-125 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-lg shadow-[#D4AF37]/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            {/* Left Date Label for Larger Screens */}
            <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
              <span className="text-xs font-mono text-[#F7E7A1] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full inline-block">
                {exp.duration}
              </span>
            </div>

            {/* Content Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden group-hover:border-[#D4AF37]/40 transition-all">
              {/* Mobile Date pill */}
              <div className="sm:hidden mb-3 inline-block">
                <span className="text-xs font-mono text-[#F7E7A1] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F7E7A1] transition-colors flex items-center gap-2.5">
                  {(exp.role.includes("Machine Learning") || exp.role.includes("AI")) && (
                    <span className="p-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 inline-flex items-center justify-center">
                      <Image src="/ai-automation.png" alt="AI & Automation" width={20} height={20} className="w-5 h-5 object-contain rounded" />
                    </span>
                  )}
                  {exp.role}
                </h3>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#D4AF37]">
                  <Briefcase className="w-3.5 h-3.5" />
                  {exp.company}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#B8B8B8] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#F7E7A1]" />
                <span>{exp.location}</span>
              </div>

              <p className="text-sm text-[#B8B8B8] mb-4 leading-relaxed">{exp.description}</p>

              {/* Achievements Bullet List */}
              <ul className="space-y-2.5 pt-4 border-t border-white/10">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

