// src/config/navigation.ts
import type { NavigationItem } from "@/domain/types";

export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/", primary: true, group: "main" },
  { label: "About", href: "/about", primary: true, group: "main" },
  { label: "Projects", href: "/projects", primary: true, group: "main" },
  { label: "Certificates", href: "/certificates", primary: true, group: "main" },
  { label: "Contact", href: "/contact", primary: true, group: "main" },
] as const;
