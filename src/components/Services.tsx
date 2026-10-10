"use client";

import { ArrowUpRight, ShoppingBag, Globe, Cpu, Radio, Check } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: typeof ShoppingBag;
  features: string[];
  ctaLabel: string;
  serviceId: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Shopify Website Development",
    category: "ECOMMERCE & LIQUID ARCHITECTURE",
    description:
      "End-to-end Shopify development built to convert visitors into loyal customers with tailored Liquid code and fast load speeds.",
    icon: ShoppingBag,
    features: [
      "Custom Shopify storefront development",
      "Theme customization and Liquid development",
      "Responsive product, collection, and landing pages",
      "Shopify store redesign and performance optimization",
      "Custom sections, integrations, and storefront features",
      "Conversion-focused UI/UX implementation",
    ],
    ctaLabel: "Discuss a Shopify Project",
    serviceId: "Shopify Website Development",
  },
  {
    number: "02",
    title: "Portfolio & Business Websites",
    category: "HIGH-PERFORMANCE WEB DEVELOPMENT",
    description:
      "Modern, animated web experiences engineered with React and Next.js that leave lasting impressions and elevate your brand presence.",
    icon: Globe,
    features: [
      "Personal portfolio websites",
      "Business and company websites",
      "Landing pages and product websites",
      "Responsive Next.js and React development",
      "Modern UI, animations, and interactive experiences",
    ],
    ctaLabel: "Build My Website",
    serviceId: "Portfolio & Business Websites",
  },
  {
    number: "03",
    title: "AI / Machine Learning Projects",
    category: "COMPUTER VISION & AUTOMATION",
    description:
      "Applied machine learning and computer vision architectures deployed for real-world automated inspection and intelligent workflow tasks.",
    icon: Cpu,
    features: [
      "Computer vision and object detection",
      "YOLO-based detection and classification",
      "AI-powered automation",
      "Image processing and intelligent applications",
      "Custom AI/ML proof-of-concept development",
    ],
    ctaLabel: "Discuss an AI Project",
    serviceId: "AI / Machine Learning Projects",
  },
  {
    number: "04",
    title: "IoT & Smart Systems",
    category: "HARDWARE-TO-CLOUD INTEGRATION",
    description:
      "Bridging physical sensors and actuators with edge microcontrollers and intuitive live telemetry monitoring dashboards.",
    icon: Radio,
    features: [
      "IoT prototype development",
      "Sensor integration and monitoring",
      "Hardware-to-software integration",
      "Real-time dashboards and data visualization",
      "Smart automation and connected systems",
    ],
    ctaLabel: "Discuss an IoT Project",
    serviceId: "IoT & Smart Systems",
  },
];

export default function Services() {
  const handleSelectService = (serviceId: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("prefill-contact-service", {
          detail: { service: serviceId },
        })
      );
    }
  };

  return (
    <section id="services" className="w-full border-b border-[#C9C7C0] bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-10 py-5 border-b border-[#C9C7C0] gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-[#111111]">
              SERVICES &amp; CAPABILITIES
            </h2>
            <span className="font-mono-tech text-xs text-[#666666]">
              ( HIRE ME )
            </span>
          </div>

          <span className="font-mono-tech text-[11px] text-[#666666] uppercase tracking-wider hidden md:inline">
            AVAILABLE FOR FREELANCE &amp; CONTRACT WORK
          </span>
        </div>

        {/* Introduction Callout */}
        <div className="p-6 sm:p-10 border-b border-[#C9C7C0] bg-white/40 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono-tech text-[10px] text-[#666666] tracking-widest uppercase block mb-2">
              HOW I CAN HELP
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-[#111111] leading-tight mb-2">
              LET&apos;S BUILD SOMETHING THAT WORKS.
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-xl">
              From eCommerce storefronts to intelligent AI systems, I help businesses and individuals turn their ideas into real, working products.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-premium-primary btn-premium-lime px-6 py-3 text-xs w-full sm:w-auto text-center flex-shrink-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 arrow-glide" />
          </a>
        </div>

        {/* 2 x 2 Services Grid (Desktop) / 1 Column (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-[#C9C7C0]">
          {SERVICES.map((srv, idx) => {
            const IconComponent = srv.icon;
            const isRightCol = idx % 2 === 1;
            const isTopRow = idx < 2;

            return (
              <div
                key={srv.number}
                className={`p-6 sm:p-8 md:p-10 bg-[#F5F3EE] hover:bg-white transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isRightCol ? "lg:border-l lg:border-[#C9C7C0]" : ""
                } ${!isTopRow ? "lg:border-t lg:border-[#C9C7C0]" : ""}`}
              >
                {/* Subtle Lime Accent Line at top on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C7F000] transition-colors duration-300" />

                <div>
                  {/* Top Meta: Number + Category */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#C9C7C0] gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-black text-2xl sm:text-3xl text-[#111111] transition-transform duration-300 group-hover:scale-105">
                        {srv.number}
                      </span>
                      <span className="px-2 py-0.5 bg-white border border-[#C9C7C0] text-[9px] sm:text-[10px] font-mono-tech uppercase text-[#666666] group-hover:border-[#111111] group-hover:text-[#111111] transition-colors">
                        {srv.category}
                      </span>
                    </div>

                    <div className="w-9 h-9 border border-[#C9C7C0] bg-white rounded-none flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#C7F000] group-hover:border-[#111111] transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-heading font-black text-lg sm:text-xl md:text-2xl text-[#111111] uppercase tracking-tight mb-2.5 group-hover:text-black transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed mb-6 font-normal">
                    {srv.description}
                  </p>

                  {/* Features Bullet Checklist */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-[#C9C7C0]/60">
                    {srv.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs text-[#444444] leading-relaxed group-hover:text-[#111111] transition-colors"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#C7F000]/50 border border-[#111111]/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#111111]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct CTA Action Button */}
                <div className="pt-4 border-t border-[#C9C7C0] flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => handleSelectService(srv.serviceId)}
                    className="btn-premium-primary btn-premium-dark px-5 sm:px-6 py-2.5 sm:py-3 text-xs w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{srv.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 arrow-glide" />
                  </a>
                  
                  <span className="font-mono-tech text-[10px] text-[#888888] uppercase hidden sm:inline">
                    PROMPT RESPONSE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
