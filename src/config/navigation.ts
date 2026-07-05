import type { NavigationItem } from "@/domain/types";

// Main navigation for the portfolio site.
export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/", primary: true, group: "main" },
  { label: "About", href: "/about", primary: true, group: "main" },
  { label: "Skills", href: "/", primary: true, group: "main", icon: "sparkles" },
  { label: "Projects", href: "/projects", primary: true, group: "main" },
  { label: "Contact", href: "/contact", primary: true, group: "main" },
] as const;
