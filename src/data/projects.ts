import type { Project } from "@/domain/types";

export const projects: readonly Project[] = [
  {
    title: "Membership Landing Page",
    description:
      "Landing page membership yang responsif dengan komponen UI reusable dan optimasi performa.",
    status: "active",
    href: "https://educaping.id",
    repoHref: "https://github.com/firstha",
    tech: ["Vue.js", "JavaScript", "Inertia", "Laravel"],
     cover: {
      src: "/project/project1.jpeg",
      alt: "Screenshot Landing Page",
    },
  },
] as const;

