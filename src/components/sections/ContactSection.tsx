// src/components/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function ContactSection() {
  const socials = profile.socials;

  const getIcon = (platform: string) => {
    switch (platform) {
      case "email":
        return <Mail size={20} />;
      case "website":
        return <Globe size={20} />;
      default:
        return <Globe size={20} />;
    }
  };

  return (
    <SectionShell id="contact" className="relative overflow-hidden bg-slate-50/50">
      {/* Background Glow Biru */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-xs tracking-[0.3em] text-blue-600 uppercase mb-3 font-semibold">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          {contact.cta?.title || "Let's Connect"}
        </h2>
        <p className="mt-4 text-slate-500">
          {contact.cta?.description || "Saya siap membantu proyek Anda"}
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-slate-900">Get in Touch</h3>

          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                <p className="text-slate-900 font-medium group-hover:text-blue-700 transition">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
                  <p className="text-slate-900 font-medium group-hover:text-blue-700 transition">
                    {contact.phone}
                  </p>
                </div>
              </a>
            )}

            {/* Location */}
            {contact.location && (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                <div className="p-2.5 rounded-lg bg-blue-50">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-slate-900 font-medium">{contact.location}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-slate-900">Connect with Me</h3>

          <div className="grid grid-cols-2 gap-3">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-100/50 transition-all group"
              >
                <span className="text-slate-400 group-hover:text-blue-600 transition">
                  {getIcon(social.platform)}
                </span>
                <span className="text-sm text-slate-600 group-hover:text-blue-700 transition font-medium">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all w-full justify-center"
            >
              <Mail size={18} />
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}