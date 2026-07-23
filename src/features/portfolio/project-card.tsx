import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className="group flex flex-col border-[3px] shadow-[6px_6px_0_0_var(--nb-ink)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_var(--nb-ink)]"
      style={{
        backgroundColor: "var(--nb-paper)",
        borderColor: "var(--nb-ink)",
      }}
    >
      {/* Thumbnail */}
      <div
        className="aspect-video overflow-hidden border-b-[3px]"
        style={{
          borderColor: "var(--nb-ink)",
          backgroundColor: "var(--nb-surface)",
        }}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black uppercase" style={{ color: "var(--nb-ink)" }}>
          {project.title}
        </h3>
        <p className="mt-2 text-sm" style={{ color: "#4a4a46" }}>
          {project.description}
        </p>

        {/* Tech tags: surface bg — neutral, not competing with buttons */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="border-2 px-2 py-1 text-xs font-black uppercase"
              style={{
                borderColor: "var(--nb-ink)",
                backgroundColor: "var(--nb-surface)",
                color: "var(--nb-ink)",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 pt-2">
          {/* Demo: accent — primary action on the card */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 border-[3px] px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_0_var(--nb-ink)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--nb-ink)]"
            style={{
              backgroundColor: "var(--nb-accent)",
              borderColor: "var(--nb-ink)",
              color: "var(--nb-ink)",
            }}
          >
            <ExternalLink size={16} />
            Demo
          </a>
          {/* Code: paper — secondary action */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 border-[3px] px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_0_var(--nb-ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--nb-surface)] hover:shadow-[6px_6px_0_0_var(--nb-ink)]"
            style={{
              backgroundColor: "var(--nb-paper)",
              borderColor: "var(--nb-ink)",
              color: "var(--nb-ink)",
            }}
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};
