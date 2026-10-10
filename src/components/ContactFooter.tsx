"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Lock, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "ready" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
    if (submittedStatus !== "idle") {
      setSubmittedStatus("idle");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedStatus("error");
      setStatusMessage("Please fix the highlighted fields below.");
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Since there is no custom mail server or backend API endpoint configured in this static/frontend app,
    // open the user's default email client with pre-filled message body and provide clear feedback
    // so we NEVER fake a silent backend success message.
    try {
      const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Sumanth,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
      );
      const mailtoUrl = `mailto:Sumanthbekal505@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
      
      // Open default email client
      window.location.href = mailtoUrl;

      setSubmittedStatus("ready");
      setStatusMessage("Opening your email client to deliver your message directly to Sumanthbekal505@gmail.com.");
    } catch {
      setSubmittedStatus("error");
      setStatusMessage("Unable to trigger default email client. Please reach out directly to Sumanthbekal505@gmail.com or via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#111111] text-white">
      <div className="max-w-[1440px] mx-auto p-6 sm:p-10 md:p-14 lg:p-16">
        {/* Top Header metadata */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12 font-mono-tech text-xs text-[#888888] pb-3 border-b border-[#262626]">
          <span>( 06 )</span>
          <span className="uppercase tracking-widest text-white">GET IN TOUCH & LET&apos;S CONNECT</span>
        </div>

        {/* Giant CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#262626]">
          {/* Left Column: Big Headline & Direct Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                LET&apos;S BUILD<br />
                SOMETHING <span className="text-[#C7F000]">AMAZING.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#aaaaaa] leading-relaxed mb-8 max-w-md">
                Have a project in mind, an engineering role, or want to collaborate? I&apos;m always open to discussing new opportunities in AI, computer vision, Shopify architecture, and web systems.
              </p>

              {/* Verified Direct Channels: Phone & WhatsApp */}
              <div className="space-y-3 mb-8">
                <div className="font-mono-tech text-[11px] uppercase tracking-widest text-[#888888] mb-2">
                  DIRECT CONTACT CHANNELS
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <a
                    href="tel:+917338211884"
                    className="btn-premium-primary btn-premium-outline-dark px-4 py-2.5 text-xs font-normal justify-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C7F000]" />
                    <span>+91 7338211884</span>
                  </a>

                  <a
                    href="https://wa.me/917338211884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium-primary px-4 py-2.5 text-xs font-normal bg-[#1a1a1a] border border-[#333333] hover:border-[#25D366] hover:text-[#25D366] justify-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp: +91 7338211884</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons matching reference */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a
                  href="mailto:Sumanthbekal505@gmail.com"
                  className="btn-premium-primary btn-premium-lime px-6 sm:px-8 py-3.5 text-xs text-center justify-center"
                >
                  <span>DIRECT EMAIL</span>
                  <ArrowUpRight className="w-4 h-4 arrow-glide" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium-outline-dark px-6 sm:px-8 py-3.5 text-xs inline-flex items-center justify-center gap-3 border font-mono-tech font-bold uppercase tracking-wider transition-all duration-300 hover:border-[#C7F000] hover:text-[#C7F000] text-center"
                >
                  <span>VIEW RESUME</span>
                  <Lock className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Icons row */}
            <div>
              <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[#666666] block mb-3">
                FIND ME ON
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/sumanthbekal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[#333333] bg-[#1a1a1a] flex items-center justify-center hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#C7F000] transition-all duration-300 btn-premium-icon"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/sumanth-bekal-55a85421b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[#333333] bg-[#1a1a1a] flex items-center justify-center hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#C7F000] transition-all duration-300 btn-premium-icon"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-[#333333] bg-[#1a1a1a] flex items-center justify-center hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#C7F000] transition-all duration-300 btn-premium-icon"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="mailto:Sumanthbekal505@gmail.com"
                  className="w-11 h-11 border border-[#333333] bg-[#1a1a1a] flex items-center justify-center hover:bg-[#C7F000] hover:text-[#111111] hover:border-[#C7F000] transition-all duration-300 btn-premium-icon"
                  aria-label="Email Sumanth"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-6 bg-[#161616] border border-[#2a2a2a] p-6 sm:p-8 transition-all duration-300 hover:border-[#383838]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#262626]">
              <span className="font-heading font-black text-sm uppercase tracking-wider text-white">
                SEND A MESSAGE
              </span>
              <span className="font-mono-tech text-[10px] text-[#C7F000] uppercase tracking-wider">
                DIRECT TO INBOX
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block font-mono-tech text-[10px] uppercase tracking-wider text-[#aaaaaa] mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`w-full px-3.5 py-2.5 bg-[#1f1f1f] border text-white font-mono-tech text-xs placeholder-[#555555] focus:outline-none transition-colors ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-[#333333] focus:border-[#C7F000]"
                    }`}
                  />
                  {errors.name && (
                    <span className="font-mono-tech text-[10px] text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-mono-tech text-[10px] uppercase tracking-wider text-[#aaaaaa] mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`w-full px-3.5 py-2.5 bg-[#1f1f1f] border text-white font-mono-tech text-xs placeholder-[#555555] focus:outline-none transition-colors ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-[#333333] focus:border-[#C7F000]"
                    }`}
                  />
                  {errors.email && (
                    <span className="font-mono-tech text-[10px] text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block font-mono-tech text-[10px] uppercase tracking-wider text-[#aaaaaa] mb-1.5">
                  SUBJECT *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Consultation / Role Inquiry"
                  className={`w-full px-3.5 py-2.5 bg-[#1f1f1f] border text-white font-mono-tech text-xs placeholder-[#555555] focus:outline-none transition-colors ${
                    errors.subject ? "border-red-500 focus:border-red-500" : "border-[#333333] focus:border-[#C7F000]"
                  }`}
                />
                {errors.subject && (
                  <span className="font-mono-tech text-[10px] text-red-400 mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block font-mono-tech text-[10px] uppercase tracking-wider text-[#aaaaaa] mb-1.5">
                  MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or objectives..."
                  className={`w-full px-3.5 py-2.5 bg-[#1f1f1f] border text-white font-mono-tech text-xs placeholder-[#555555] focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-[#333333] focus:border-[#C7F000]"
                  }`}
                />
                {errors.message && (
                  <span className="font-mono-tech text-[10px] text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Status Banner */}
              {submittedStatus === "ready" && (
                <div className="p-3 bg-[#112411] border border-[#2e5d2e] flex items-start gap-2.5 text-xs text-[#a3e635] font-mono-tech">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submittedStatus === "error" && (
                <div className="p-3 bg-[#2a1313] border border-[#6b2121] flex items-start gap-2.5 text-xs text-red-300 font-mono-tech">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 btn-premium-primary btn-premium-lime text-xs"
              >
                <span>{isSubmitting ? "PREPARING DISPATCH..." : "SEND MESSAGE VIA MAIL"}</span>
                <Send className="w-3.5 h-3.5 arrow-glide" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Location & Availability */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between font-mono-tech text-[11px] text-[#666666] uppercase tracking-wider gap-4">
          <div className="flex items-center gap-2">
            <span>INDIA</span>
            <span className="text-[#333333]">/</span>
            <span>AVAILABLE FOR FREELANCE & FULL-TIME ROLES</span>
          </div>

          <div className="text-[10px] text-[#555555]">
            © {new Date().getFullYear()} SUMANTH BEKAL · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
