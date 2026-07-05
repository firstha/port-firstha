"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { SectionShell } from "@/components/layout/SectionShell";
import { Mail, Phone, MapPin, X, Globe } from "lucide-react";

export function ContactSection() {
  // Ambil social links dari profile
  const socials = profile.socials;

  // Icon mapping
  const getIcon = (platform: string) => {
    switch (platform) {
      case "x":
        return <X size={20} />;
      case "email":
        return <Mail size={20} />;
      case "website":
        return <Globe size={20} />;
      default:
        return null;
    }
  };

  return (
    <SectionShell id="contact" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-2">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          {contact.cta?.title || "Let's Connect"}
        </h2>
        <p className="mt-4 text-gray-400">
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
          <h3 className="text-xl font-semibold">Get in Touch</h3>

          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 transition group"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition">
                <Mail size={20} className="text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white hover:text-gray-300 transition">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 transition group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition">
                  <Phone size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white hover:text-gray-300 transition">
                    {contact.phone}
                  </p>
                </div>
              </a>
            )}

            {/* Location */}
            {contact.location && (
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">{contact.location}</p>
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
          <h3 className="text-xl font-semibold">Connect with Me</h3>

          <div className="grid grid-cols-2 gap-3">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition group"
              >
                <span className="text-gray-400 group-hover:text-white transition">
                  {getIcon(social.platform)}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-white transition">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition w-full justify-center"
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