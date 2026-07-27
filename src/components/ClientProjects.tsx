"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const CLIENT_PROJECTS = [
  {
    name: "Luv2Eat",
    category: "Ready-to-Cook Foods & Regional Cuisine",
    logo: "/clients/luv2eat.png",
    url: "https://luv2eat.in/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for Luv2Eat, a ready-to-cook food brand offering authentic regional Indian meal kits and premixes. Built a fast, mobile-first shopping experience with a modern UI focused on product discovery and seamless purchasing.",
  },
  {
    name: "Karigar's Knot",
    category: "Handcrafted Luxury Footwear",
    logo: "/clients/karigarsknot.png",
    url: "https://www.karigarsknot.com/",
    live: true,
    logoBg: "bg-black/80",
    description:
      "Designer handcrafted Punjabi Juttis & footwear by master Indian artisans, featuring intricate dabka & zardozi embroidery, padded soles, and custom Liquid product sections.",
  },
  {
    name: "Scentual Perfumes",
    category: "Premium Fragrances",
    logo: "/clients/scentual.png",
    url: "https://scentualperfumes.com/",
    live: true,
    logoBg: "bg-black/80",
    description:
      "Developed a premium Shopify storefront for a modern fragrance brand, creating a responsive, conversion-focused shopping experience with elegant product presentation, seamless navigation, and custom theme development.",
  },
  {
    name: "LASUB™",
    category: "Luxury Candles & Home Fragrance",
    logo: "/clients/lasub.png",
    url: "https://www.lasub.in/",
    live: true,
    logoBg: "bg-black/80",
    description:
      "Premium handcrafted luxury candles & home fragrance products, beautifully presented on an elegant dark-mode Shopify storefront built for a refined, sensory shopping experience.",
  },
  {
    name: "Bonita Edit",
    category: "Women's Fashion",
    logo: "/clients/bonitaedit.png",
    url: "https://bonitaedit.com/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for a contemporary fashion brand, delivering a responsive, conversion-focused shopping experience with custom theme development, elegant product presentation, and seamless navigation.",
  },
  {
    name: "QUIDLAB™",
    category: "Tech & Lifestyle Accessories",
    logo: "/clients/quidlab.png",
    url: "https://quidlab.in/",
    live: true,
    logoBg: "bg-white",
    description:
      "Official store for premium tech accessories, minimalist EDC gear, and lifestyle essentials engineered with high-speed mobile UX and instant search filters.",
  },
  {
    name: "Lovey Dovey Store",
    category: "Wall Art, Posters & Home Décor",
    logo: "/clients/loveydovey.png",
    url: "https://loveydoveystore.in/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for Lovey Dovey Store, showcasing aesthetic wall posters, framed artwork, and customizable décor collections with a modern shopping experience, responsive design, and intuitive product discovery.",
  },
  {
    name: "Baking Lounge Supply Store",
    category: "Bakery & Cake Decorating Supplies",
    logo: "/clients/bakinglounge.png",
    url: "https://bakingloungesupplystore.com/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a modern Shopify storefront for Baking Lounge Supply Store, enabling home bakers and businesses to shop premium baking tools, cake decorating essentials, and wholesale supplies through a clean, responsive, and conversion-focused eCommerce experience.",
  },
  {
    name: "Robotics Kits",
    category: "STEM Education & Robotics Kits",
    logo: "/clients/roboticskits.png",
    url: "https://roboticskits.in/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for Robotics Kits, delivering an intuitive eCommerce experience for STEM learning products, robotics kits, and educational electronics with responsive design and streamlined product discovery.",
  },
  {
    name: "Care Natural",
    category: "Natural Skincare & Personal Care",
    logo: "/clients/carenatural.png",
    url: "https://carenatural.co/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for Care Natural, delivering a modern eCommerce experience for natural skincare and personal care products with responsive design, intuitive navigation, and a seamless shopping journey.",
  },
  {
    name: "Aroveda Life",
    category: "Ayurvedic Wellness & Natural Healthcare",
    logo: "/clients/arovedalife.png",
    url: "https://arovedalife.com/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for Aroveda Life, an Ayurvedic wellness brand, delivering a clean, responsive, and user-friendly eCommerce experience that makes exploring natural health products simple and engaging.",
  },
  {
    name: "Mevaldi",
    category: "Premium Leather Footwear & Accessories",
    logo: "/clients/mevaldi.png",
    url: "https://www.mevaldi.in/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for Mevaldi, delivering a modern and responsive eCommerce experience that showcases premium leather footwear and accessories with intuitive navigation, optimized performance, and a conversion-focused shopping journey.",
  },
  {
    name: "Manya Threads",
    category: "Women's Ethnic Fashion & Apparel",
    logo: "/clients/manyathreads.png",
    url: "https://manyathreads.com/",
    live: true,
    logoBg: "bg-white",
    description:
      "Designed and developed a premium Shopify storefront for Manya Threads, a contemporary ethnic fashion brand, delivering a clean, responsive shopping experience with intuitive product discovery and a seamless mobile-first eCommerce journey.",
  },
  {
    name: "NDCC Agro SeedX",
    category: "Agriculture & Hybrid Seeds",
    logo: "/clients/ndccagroseedx.png",
    url: "https://www.ndccagroseedx.com/",
    live: true,
    logoBg: "bg-white",
    description:
      "Developed a premium Shopify storefront for NDCC Agro SeedX, delivering a modern and responsive eCommerce experience for high-quality agricultural seeds with intuitive navigation, streamlined product discovery, and a seamless purchasing journey.",
  },
];

export default function ClientProjects() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section id="client-projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
          <span>CLIENT PROJECTS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Live Brand Storefronts & <span className="text-gradient-gold">Client Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed"
        >
          Real businesses and brands I've designed and developed using Shopify, delivering premium eCommerce
          experiences and production-ready storefronts.
        </motion.p>
      </div>

      {/* Grid: 3 cards desktop, 2 cards mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {CLIENT_PROJECTS.map((client, idx) => {
          // On mobile (< 640px / sm), hide cards beyond index 3 unless showAllMobile is true
          const isHiddenOnMobile = !showAllMobile && idx >= 4;

          return (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className={`group p-4 sm:p-7 rounded-2xl sm:rounded-3xl glass-card relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-white/10 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/15 flex flex-col justify-between ${
                isHiddenOnMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              {/* Background Champagne Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-[#F7E7A1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header: Logo + Live Badge */}
                <div className="flex items-center justify-between mb-3 sm:mb-6">
                  {/* Logo Frame */}
                  <div
                    className={`relative w-20 sm:w-28 h-12 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border border-white/15 group-hover:border-[#D4AF37]/50 transition-all ${
                      client.logoBg || "bg-black/80"
                    } shadow-lg p-1 sm:p-1.5 flex items-center justify-center flex-shrink-0`}
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      fill
                      className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Live Badge */}
                  {client.live && (
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-[11px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="hidden xs:inline sm:inline">Live</span>
                    </div>
                  )}
                </div>

                {/* Category & Title */}
                <span className="block text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-wider mb-1 line-clamp-1">
                  {client.category}
                </span>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#F7E7A1] transition-colors leading-snug line-clamp-1">
                  {client.name}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#B8B8B8] leading-normal sm:leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                  {client.description}
                </p>
              </div>

              {/* Visit Button Footer */}
              <div className="pt-2.5 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-mono text-white/70 group-hover:text-[#F7E7A1] transition-colors flex items-center gap-1">
                  Visit Website
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="hidden sm:inline text-xs font-mono text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  SHOPIFY
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Mobile "View More / Show Less" Button */}
      {CLIENT_PROJECTS.length > 4 && (
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#121212] border border-[#D4AF37]/40 text-[#F7E7A1] font-mono text-xs font-semibold shadow-lg shadow-[#D4AF37]/10 active:scale-95 transition-all"
          >
            <span>{showAllMobile ? "Show Less" : `View All Client Stores (${CLIENT_PROJECTS.length})`}</span>
            {showAllMobile ? <ChevronUp className="w-4 h-4 text-[#D4AF37]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
          </button>
        </div>
      )}
    </section>
  );
}
