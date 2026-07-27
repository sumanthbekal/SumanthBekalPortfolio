"use client";

import Galaxy from "@/components/Galaxy";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ClientProjects from "@/components/ClientProjects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* Fixed Background Galaxy - 100% Locked & Untouched */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          starSpeed={0.2}
          density={0.7}
          hueShift={170}
          speed={1.4}
          glowIntensity={0.15}
          saturation={0}
          mouseRepulsion
          repulsionStrength={1.5}
          twinkleIntensity={0.15}
          rotationSpeed={0.05}
          transparent
        />
      </div>

      {/* Portfolio Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ClientProjects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
