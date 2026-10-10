// src/components/layout/Footer.tsx
import { profile } from "@/data/profile";
import {  Mail, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const getIcon = (platform: string) => {
    switch (platform) {
      case "email":
        return <Mail size={16} />;
      case "website":
        return <Globe size={16} />;
      default:
        return <Globe size={16} />;
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600">
              © {year} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-2">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition"
                aria-label={social.label}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
