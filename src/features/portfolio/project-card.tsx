import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../shared/types";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group flex flex-col border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000]">
      <div className="aspect-video overflow-hidden border-b-[3px] border-black bg-neutral-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-black uppercase">{project.title}</h3>
        <p className="mt-2 text-sm text-neutral-700">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="border-2 border-black bg-neutral-100 px-2 py-1 text-xs font-bold uppercase"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3 pt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 border-[3px] border-black bg-[#ff5b1f] px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000]"
          >
            <ExternalLink size={16} />
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 border-[3px] border-black bg-white px-4 py-2 text-sm font-black uppercase shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000]"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};
