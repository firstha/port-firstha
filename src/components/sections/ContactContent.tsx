// src/components/sections/ContactContent.tsx
"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

export function ContactContent() {
  const socials = profile.socials;

  const getIcon = (platform: string) => {
    switch (platform) {
      case "email":
        return <Mail size={20} />;
      default:
        return <Globe size={20} />;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-slate-900">Get in Touch</h3>

        <div className="space-y-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
              <Mail size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">
                Email
              </p>
              <p className="text-slate-900 font-medium group-hover:text-blue-700 transition">
                {contact.email}
              </p>
            </div>
          </a>

          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-slate-900 font-medium group-hover:text-blue-700 transition">
                  {contact.phone}
                </p>
              </div>
            </a>
          )}

          {contact.location && (
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white">
              <div className="p-2.5 rounded-lg bg-blue-50">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-slate-900 font-medium">{contact.location}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Social */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT_EXPO }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-slate-900">
          Connect with Me
        </h3>

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
  );
}