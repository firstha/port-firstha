import type { Profile } from "@/domain/types";

export const profile: Profile = {
  name: "Firstha Noventia",
  role: "Junior Programmer",
  about: {
    headline: "Fresh Graduate SMK yang fokus pada pengembangan aplikasi web",
    description:
      "Fresh Graduate SMK yang fokus pada pengembangan aplikasi web menggunakan Laravel, React, Next.js, TypeScript, MySQL, dan Tailwind CSS. Saya suka membangun fitur end-to-end, merapikan UI/UX, serta menulis kode yang maintainable.",
  },
  tagline: "Membangun aplikasi web yang rapi, cepat, dan scalable.",
  location: "Indonesia",
  avatar: {
    src: "/file.svg",
    alt: "Firstha Noventia",
  },
  socials: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/firstha",
      icon: "github",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/firstha-noventia/",
      icon: "linkedin",
    },
    {
      platform: "email",
      label: "Email",
      href: "mailto:fristhanoven@gmail.com",
    },
    {
      platform: "website",
      label: "Website",
      href: "https://firsthanoven.vercel.app",
    },
  ],
};
