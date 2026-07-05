import type { Profile } from "@/domain/types";

export const profile: Profile = {
  name: "Firstha Noven",
  role: "Full Stack Web Developer",
  about: {
    headline: "Fresh Graduate SMK yang fokus pada pengembangan aplikasi web",
    description:
      "Fresh Graduate SMK yang fokus pada pengembangan aplikasi web menggunakan Laravel, React, Next.js, TypeScript, MySQL, dan Tailwind CSS. Saya suka membangun fitur end-to-end, merapikan UI/UX, serta menulis kode yang maintainable.",
  },
  tagline: "Membangun aplikasi web yang rapi, cepat, dan scalable.",
  location: "Indonesia",
  avatar: {
    src: "/file.svg",
    alt: "Firstha Noven",
  },
  socials: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/your-username",
      icon: "github",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-username/",
      icon: "linkedin",
    },
    {
      platform: "x",
      label: "X",
      href: "https://x.com/your-username",
      icon: "x",
    },
    {
      platform: "email",
      label: "Email",
      href: "mailto:hello@firsthanoven.com",
    },
    {
      platform: "website",
      label: "Website",
      href: "https://firsthanoven.com",
    },
  ],
};
