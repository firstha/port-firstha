export type ISODateString = string;
export type CountryCode = string;

/**
 * Theme/Brand identity for profile.
 */
export type SocialPlatform =
  | "github"
  | "linkedin"
  | "x"
  | "instagram"
  | "facebook"
  | "email"
  | "website"
  | (string & {});

export type SocialLink = Readonly<{
  platform: SocialPlatform;
  label: string;
  /** URL for external profiles (github/linkedin/etc). */
  href: string;
  /** Optional icon name mapping for lucide UI later. */
  icon?: string;
}>;

/**
 * Core profile data for the portfolio.
 */
export type Profile = Readonly<{
  name: string;
  role: string;
  tagline?: string;
  location?: string;
  /** Hero avatar or marketing image. */
  avatar?: {
    src: string;
    alt: string;
  };
  socials: SocialLink[];
  /** Short bio shown in About. */
  about: {
    headline: string;
    description: string;
  };
}>;

/**
 * Skill modeling.
 */
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = Readonly<{
  name: string;
  level?: SkillLevel;
  /** Optional tags for filtering/search. */
  tags?: readonly string[];
}>;

export type SkillCategory = Readonly<{
  title: string;
  skills: Skill[];
}>;

export type Experience = Readonly<{
  title: string;
  company: string;
  /** Optional external link (company site). */
  companyHref?: string;
  location?: string;
  start: ISODateString;
  end?: ISODateString | "present";
  summary?: string;
  /** Bullet points for impact/achievement. */
  highlights?: readonly string[];
  tags?: readonly string[];
}>;

/**
 * Project modeling.
 */
export type ProjectStatus = "active" | "archived" | "planned" | (string & {});

export type Project = Readonly<{
  title: string;
  description: string;
   featured?: boolean;
  /** Optional long-form details. */
  details?: string;
  status?: ProjectStatus;

  /** Routes or external links. */
  href?: string;
  repoHref?: string;

  /** Tech stack used in project. */
  tech: readonly string[];

  /** Optional media assets. */
  cover?: {
    src: string;
    alt: string;
  };

  /** Optional dates. */
  start?: ISODateString;
  end?: ISODateString;

  /** Optional bullets for features/impact. */
  highlights?: readonly string[];
}>;

/**
 * Contact modeling.
 */
export type Contact = Readonly<{
  email: string;
  /** Optional phone if you want. */
  phone?: string;
  location?: string;
  /** Message templates for CTA sections. */
  cta?: {
    title: string;
    description?: string;
  };
}>;

/**
 * Navigation modeling for header/side menus.
 */
export type NavigationItem = Readonly<{
  label: string;
  href: string;
  /** Whether link should appear in primary nav. */
  primary?: boolean;
  /** Optional icon mapping for later. */
  icon?: string;
  /** Optional for grouping in mobile menus. */
  group?: string;
}>;

/**
 * Optional helper types for collections.
 */
export type NonEmptyArray<T> = readonly [T, ...T[]];

