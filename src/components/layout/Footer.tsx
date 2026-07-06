import { profile } from "@/data/profile";
import {  X as XIcon, Mail, Globe } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const getIcon = (platform: string) => {
    switch (platform) {
      case "x":
        return <XIcon size={16} />;
      case "email":
        return <Mail size={16} />;
      case "website":
        return <Globe size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © {year} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition"
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
