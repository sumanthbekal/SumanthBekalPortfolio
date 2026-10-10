"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon, PhoneIcon } from "./SocialIcons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden sm:overflow-visible">
      {/* Background Champagne Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4AF37]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Let&apos;s Build Something <span className="text-gradient-gold">Amazing Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed"
        >
          I&apos;m always open to discussing Shopify development, AI projects, computer vision applications,
          freelance opportunities, and innovative collaborations. Feel free to connect with me.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Contact Information & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 rounded-3xl glass-card flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Direct Contact</h3>
            <p className="text-sm text-[#B8B8B8] mb-8 leading-relaxed">
              Reach out directly via email, phone, or WhatsApp for project inquiries or collaboration.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B8B8B8] block">EMAIL</span>
                  <a
                    href="mailto:Sumanthbekal505@gmail.com"
                    className="text-sm font-semibold text-white hover:text-[#F7E7A1] transition-colors break-all"
                  >
                    Sumanthbekal505@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B8B8B8] block">PHONE</span>
                  <a
                    href="tel:+917338211884"
                    className="text-sm font-semibold text-white hover:text-[#F7E7A1] transition-colors"
                  >
                    +91 7338211884
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B8B8B8] block">WHATSAPP</span>
                  <a
                    href="https://wa.me/917338211884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#F7E7A1] transition-colors"
                  >
                    +91 7338211884
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-[#B8B8B8] block mb-3">SOCIAL PROFILES</span>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/sumanthbekal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-button text-xs font-mono text-white hover:text-[#F7E7A1]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/sumanthbekal</span>
              </a>
              <a
                href="https://linkedin.com/in/sumanth-bekal-55a85421b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-button text-xs font-mono text-white hover:text-[#F7E7A1]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin.com/in/sumanth-bekal</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 rounded-3xl glass-card relative"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center flex flex-col items-center justify-center"
            >
              <div className="p-4 rounded-full bg-[#D4AF37]/20 text-[#F7E7A1] mb-4 border border-[#D4AF37]/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-sm text-[#B8B8B8] max-w-sm">
                Thank you. Sumanth will receive your message and get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full glass-button text-xs font-mono text-white"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-[#B8B8B8] mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#B8B8B8] mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B8B8B8] mb-2">SUBJECT</label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Shopify Project / AI Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#B8B8B8] mb-2">MESSAGE</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, timeline, or requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F7E7A1] text-black font-semibold text-sm shadow-lg shadow-[#D4AF37]/20 hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

