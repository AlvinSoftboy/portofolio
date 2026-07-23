import type { NavItem, Project, Skill, SocialLink } from "@/types";

export const BRAND_NAME = "ALVINCODE";
export const FULL_NAME = "Poda Damanik";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const SKILLS: Skill[] = [
  { name: "React", description: "Component-based UI development" },
  { name: "TypeScript", description: "Type-safe JavaScript at scale" },
  { name: "Tailwind", description: "Utility-first styling" },
  { name: "Node.js", description: "Backend & tooling runtime" },
  { name: "Vitest", description: "Modern unit testing" },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Dashboard Analytics",
    description: "Modern analytics dashboard dengan real-time charts dan responsive layout.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "p2",
    title: "E-Commerce Store",
    description: "Storefront cepat dengan checkout flow dan integrasi payment gateway.",
    thumbnail: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
    tech: ["React", "Node.js", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "p3",
    title: "Task Manager App",
    description: "Aplikasi manajemen tugas dengan drag-and-drop dan offline support.",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    tech: ["React", "TypeScript", "Vitest"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "p4",
    title: "Portfolio Builder",
    description: "Tool no-code untuk membuat portfolio responsive dalam hitungan menit.",
    thumbnail: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&q=80",
    tech: ["React", "Tailwind", "Node.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/podaalviendamanik/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/AlvinSoftboy", icon: "github" },
  { label: "Email", href: "mailto:alvindamanik577@gmail.com", icon: "mail" },
];
