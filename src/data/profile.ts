import type { Profile } from "@/domain/types";

export const profile: Profile = {
  name: "Firstha Noventia Sari",
  role: "Informatics Student | Junior Programmer",
  about: {
    headline: "Mahasiswa Informatika yang tertarik pada pengembangan aplikasi dan teknologi",
    description:
      "Saya adalah mahasiswa Informatika dengan latar belakang Rekayasa Perangkat Lunak (RPL) yang memiliki minat pada pengembangan aplikasi dan teknologi. Saya memiliki pengalaman praktik kerja lapangan sebagai Junior Programmer dan Web Developer Intern, serta pernah mengikuti LKS DIY bidang Web Technologies. Saat ini, saya terus belajar, mengembangkan keterampilan pemrograman, dan memperluas pengetahuan di bidang teknologi melalui perkuliahan maupun proyek.",
  },
  tagline: "Terus belajar, berkembang, dan membangun solusi melalui teknologi.",
  location: "Gunungkidul, Yogyakarta, Indonesia",
  avatar: {
    src: "/file.svg",
    alt: "Firstha Noventia Sari",
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
