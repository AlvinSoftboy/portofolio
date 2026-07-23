export type SectionId = "home" | "about" | "portfolio" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type Skill = {
  name: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
};
