import type { Profile, SkillCategory, Project, Contact } from "@/domain/types";

import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { contact } from "@/data/contact";

export const portfolio = {
  profile: profile as Profile,
  skills: skills as readonly SkillCategory[],
  projects: projects as readonly Project[],
  contact: contact as Contact,
} as const;

export { profile };
export { skills };
export { projects };
export { contact };
