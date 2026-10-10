import type { Profile } from "@/domain/types";

// Global site configuration for metadata/SEO and layout.
export const site = {
  name: "Firstha Noventia",
  description:
    "Portfolio pribadi Full Stack Web Developer. Membangun aplikasi web menggunakan Laravel, React, Next.js, TypeScript, MySQL, dan Tailwind CSS.",

  url: "https://firsthanoven.com",

  author: {
    name: "Firstha Noventia",
    role: "Junior Programmer",
  },

  keywords: [
    "Firstha Noventia",
    "portfolio",
    "full stack developer",
    "laravel",
    "react",
    "next.js",
    "typescript",
    "mysql",
    "tailwind css",
  ],

  ogImage: {
    // Use existing public asset by default; replace when you add a real OG image.
    src: "/window.svg",
    width: 1200,
    height: 630,
    alt: "Firstha Noven - Portfolio",
  },

  defaultMetadata: {
    titleTemplate: `%s | ${"Firstha Noventia"}`,
  },
} as const satisfies {
  name: string;
  description: string;
  url: string;
  author: { name: string; role: string };
  keywords: readonly string[];
  ogImage: { src: string; width: number; height: number; alt: string };
  defaultMetadata: { titleTemplate: string };
};

// Optional helper if later you want to derive author from profile data.
export type SiteConfig = (typeof site) & Profile;
