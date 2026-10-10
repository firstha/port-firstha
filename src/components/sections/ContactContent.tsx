"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";
import { Mail, Phone, MapPin,  Globe } from "lucide-react";

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
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Get in Touch
        </h3>

        <div className="space-y-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50 transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/60 transition">
              <Mail size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Email
              </p>
              <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-400 transition">
                {contact.email}
              </p>
            </div>
          </a>

          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50 transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/60 transition">
                <Phone size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-400 transition">
                  {contact.phone}
                </p>
              </div>
            </a>
          )}

          {contact.location && (
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-slate-900 dark:text-slate-100 font-medium">
                  {contact.location}
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT_EXPO }}
        className="space-y-6"
      >
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          Connect with Me
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 hover:shadow-md hover:shadow-blue-100/50 dark:hover:shadow-blue-950/50 transition-all group"
            >
              <span className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {getIcon(social.platform)}
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition font-medium">
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