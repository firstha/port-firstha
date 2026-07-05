import type { SkillCategory } from "@/domain/types";

export const skills: readonly SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 4, tags: ["SPA", "Components"] },
      {
        name: "Next.js (App Router)",
        level: 4,
        tags: ["App Router", "SSR/SSG"],
      },
      { name: "TypeScript", level: 4, tags: ["Type Safety"] },
      { name: "Tailwind CSS", level: 4, tags: ["Design System"] },
      { name: "Shadcn UI", level: 3, tags: ["Radix", "Reusable UI"] },
      { name: "Framer Motion", level: 3, tags: ["Animations"] },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 4, tags: ["MVC", "REST API"] },
      { name: "PHP", level: 4, tags: ["OOP"] },
      {
        name: "Authentication & Authorization",
        level: 3,
        tags: ["Policies", "JWT/OAuth"],
      },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 4, tags: ["Relational", "Indexing"] },
      { name: "SQL Querying", level: 4, tags: ["Joins", "Transactions"] },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 4, tags: ["Version Control"] },
      { name: "VS Code", level: 5, tags: ["Productivity"] },
      { name: "Postman", level: 3, tags: ["API Testing"] },
      { name: "Figma", level: 3, tags: ["UI Reference"] },
    ],
  },
];
