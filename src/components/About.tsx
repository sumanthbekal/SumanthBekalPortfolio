"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Layers, Lightbulb, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
          <span>ABOUT ME</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          A builder at the intersection of <span className="text-gradient-gold">intelligent systems</span> & premium commerce.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          I&apos;m a Computer Science (AI & ML) graduate and currently working as a Shopify Developer at
          Klientship Technologies. Alongside Shopify development, I have built multiple AI and Computer
          Vision projects using YOLO, TensorFlow, Python, and Flask. I enjoy creating products that combine
          elegant user experiences with practical AI solutions.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Who I Am & Professional Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 p-8 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all pointer-events-none" />
          <div>
            <div className="p-3 w-fit rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 mb-6">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Who I Am</h3>
            <p className="text-[#B8B8B8] leading-relaxed text-sm sm:text-base mb-6">
              As a Shopify Developer at Klientship Technologies Pvt. Ltd, I specialize in crafting bespoke
              eCommerce storefronts, customizing Liquid themes, and optimizing customer conversion journeys.
              Concurrently, I push boundaries in computer vision and machine learning applications.
            </p>
          </div>
          <div className="flex items-center gap-6 pt-4 border-t border-white/10 font-mono text-xs text-[#F7E7A1]">
            <div>
              <span className="block text-white font-bold text-lg">Klientship Tech</span>
              <span className="text-[#B8B8B8]">Shopify Developer</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <span className="block text-white font-bold text-lg">B.E. Degree</span>
              <span className="text-[#B8B8B8]">AI & Machine Learning</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Academic Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-5 p-8 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F7E7A1]/10 rounded-full blur-3xl group-hover:bg-[#F7E7A1]/20 transition-all pointer-events-none" />
          <div>
            <div className="p-3 w-fit rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Education</h3>
            <p className="text-white font-semibold text-sm mb-1">
              Bachelor of Engineering (B.E.)
            </p>
            <p className="text-xs font-mono text-[#F7E7A1] mb-2">
              Computer Science & Engineering (AI & ML)
            </p>
            <p className="text-xs text-[#B8B8B8] mb-4">
              Sahyadri College of Engineering and Management (2021 – 2025)
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
            <span className="text-[#B8B8B8]">ACADEMIC SCORE:</span>
            <span className="text-[#F7E7A1] font-bold px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
              CGPA: 7.5
            </span>
          </div>
        </motion.div>

        {/* Card 3: What I Build */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-5 p-8 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all pointer-events-none" />
          <div>
            <div className="p-3 w-fit rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Core Expertise</h3>
            <p className="text-[#B8B8B8] leading-relaxed text-sm sm:text-base">
              Custom Shopify Liquid themes, Storefront API integrations, edge AI object sorting with YOLOv8,
              autonomous robotics, and Python/Flask full-stack web applications.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-white/80">Shopify Liquid</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-white/80">YOLOv8</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-mono text-white/80">Python Flask</span>
          </div>
        </motion.div>

        {/* Card 4: Engineering Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="md:col-span-7 p-8 rounded-3xl glass-card relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F7E7A1]/10 rounded-full blur-3xl group-hover:bg-[#F7E7A1]/20 transition-all pointer-events-none" />
          <div>
            <div className="p-3 w-fit rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">My Philosophy</h3>
            <p className="text-[#B8B8B8] leading-relaxed text-sm sm:text-base">
              Every project should combine seamless visual aesthetics with rock-solid performance.
              Whether crafting high-converting e-commerce storefronts or optimizing real-time neural network
              inference, precision and user experience drive my design choices.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#B8B8B8]">
            <span>SHOPIFY + ARTIFICIAL INTELLIGENCE</span>
            <span className="text-[#D4AF37]">100% Commitment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

