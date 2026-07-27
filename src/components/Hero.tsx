"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  ShoppingBag,
  Cpu,
  ArrowRight,
  Mail,
  Zap,
  CheckCircle2,
  Activity,
  FileText,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden sm:overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column - Bio & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left w-full"
        >
          {/* Custom Emblem Logo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-xl shadow-[#D4AF37]/25 group hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Sumanth Bekal Emblem Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F7E7A1] text-[11px] sm:text-xs font-mono badge-glow max-w-full">
              <Zap className="w-3.5 h-3.5 animate-pulse text-[#D4AF37] flex-shrink-0" />
              <span className="truncate sm:whitespace-normal">AI Automation • Computer Vision • Shopify</span>
            </div>
          </motion.div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
            Hello, I'm <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Sumanth Bekal</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-[#F7E7A1] mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]/60 inline-block"></span>
            Shopify Developer | AI Engineer
          </h2>

          <p className="text-base sm:text-lg text-[#B8B8B8] max-w-xl mb-8 leading-relaxed font-normal">
            I build premium Shopify storefronts, AI-powered automation systems, and computer vision
            applications that solve real-world problems. My work combines modern eCommerce
            development with machine learning to create scalable, high-performance digital
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] text-black font-semibold text-sm shadow-xl shadow-[#D4AF37]/20 hover:opacity-95 transition-all hover:scale-105"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-button text-white font-medium text-sm hover:scale-105"
            >
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-button text-white font-medium text-sm hover:scale-105"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full max-w-md">
            <span className="text-xs font-mono text-[#B8B8B8]">CONNECT:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sumanthbekal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-card text-white hover:text-[#D4AF37] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sumanth-bekal-55a85421b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-card text-white hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:Sumanthbekal505@gmail.com"
                className="p-2.5 rounded-full glass-card text-white hover:text-[#D4AF37] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917338211884"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-card text-white hover:text-[#D4AF37] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - 3 Ultra-Premium Modern SaaS Feature Cards */}
        <div className="lg:col-span-5 relative flex flex-col gap-6 items-center lg:items-end justify-center py-6 w-full">
          {/* Card 1: AI & Automation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.0, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{
              y: -8,
              scale: 1.02,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            style={{ perspective: 1000 }}
            className="w-full max-w-md p-6 rounded-[24px] relative overflow-hidden group border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-350 shadow-2xl hover:shadow-[#D4AF37]/20"
          >
            {/* Top highlight & subtle radial glow backdrop */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#D4AF37]/20 via-[#F7E7A1]/5 to-transparent blur-3xl pointer-events-none group-hover:from-[#D4AF37]/35 transition-all duration-500" />
            <div className="absolute inset-0 bg-[#0C0C0C]/85 backdrop-blur-[24px] -z-10" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-2xl bg-indigo-500/15 border border-indigo-500/35 group-hover:scale-110 group-hover:border-indigo-400/60 transition-transform duration-300 shadow-md flex items-center justify-center overflow-hidden">
                  <Image src="/ai-automation.png" alt="AI & Automation" width={32} height={32} className="w-8 h-8 object-contain rounded-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#F7E7A1] transition-colors">
                    AI & Automation
                  </h3>
                  <p className="text-xs text-[#B8B8B8] font-medium mt-0.5">
                    Computer Vision • Machine Learning
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F7E7A1] text-[11px] font-mono shadow-sm">
                <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />
                <span>AI Powered</span>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["YOLOv8", "TensorFlow", "OpenCV", "PyTorch"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] text-xs font-mono text-white/90 border border-white/10 hover:border-[#D4AF37] hover:text-[#F7E7A1] hover:shadow-md hover:shadow-[#D4AF37]/10 transition-all cursor-pointer select-none"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Shopify Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{
              y: -8,
              scale: 1.02,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            style={{ perspective: 1000 }}
            className="w-full max-w-md p-6 rounded-[24px] relative overflow-hidden group border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-350 shadow-2xl hover:shadow-[#D4AF37]/20 lg:-translate-x-4"
          >
            {/* Top highlight & subtle radial glow backdrop */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#F7E7A1]/20 via-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none group-hover:from-[#F7E7A1]/35 transition-all duration-500" />
            <div className="absolute inset-0 bg-[#0C0C0C]/85 backdrop-blur-[24px] -z-10" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-2xl bg-[#96bf48]/15 border border-[#96bf48]/35 group-hover:scale-110 group-hover:border-[#96bf48]/70 transition-transform duration-300 shadow-md flex items-center justify-center overflow-hidden">
                  <Image src="/shopify.png" alt="Shopify Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#F7E7A1] transition-colors">
                    Shopify Solutions
                  </h3>
                  <p className="text-xs text-[#B8B8B8] font-medium mt-0.5">
                    Custom Themes & eCommerce
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F7E7A1] text-[11px] font-mono shadow-sm">
                <Zap className="w-3 h-3 text-[#D4AF37]" />
                <span>Production Ready</span>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Liquid", "Theme Dev", "Storefront API", "Optimization"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] text-xs font-mono text-white/90 border border-white/10 hover:border-[#D4AF37] hover:text-[#F7E7A1] hover:shadow-md hover:shadow-[#D4AF37]/10 transition-all cursor-pointer select-none"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Full-Stack Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.30, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{
              y: -8,
              scale: 1.02,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            style={{ perspective: 1000 }}
            className="w-full max-w-md p-6 rounded-[24px] relative overflow-hidden group border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-350 shadow-2xl hover:shadow-[#D4AF37]/20"
          >
            {/* Top highlight & subtle radial glow backdrop */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#D4AF37]/20 via-[#F7E7A1]/5 to-transparent blur-3xl pointer-events-none group-hover:from-[#D4AF37]/35 transition-all duration-500" />
            <div className="absolute inset-0 bg-[#0C0C0C]/85 backdrop-blur-[24px] -z-10" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2 rounded-2xl bg-purple-500/15 border border-purple-500/35 group-hover:scale-110 group-hover:border-purple-400/60 transition-transform duration-300 shadow-md flex items-center justify-center overflow-hidden">
                  <Image src="/fullstack-engineering.png" alt="Full-Stack Engineering" width={32} height={32} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#F7E7A1] transition-colors">
                    Full-Stack Engineering
                  </h3>
                  <p className="text-xs text-[#B8B8B8] font-medium mt-0.5">
                    Backend APIs & Databases
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F7E7A1] text-[11px] font-mono shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Full Stack</span>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {["Python", "Flask", "Firebase", "MySQL"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] text-xs font-mono text-white/90 border border-white/10 hover:border-[#D4AF37] hover:text-[#F7E7A1] hover:shadow-md hover:shadow-[#D4AF37]/10 transition-all cursor-pointer select-none"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
