import { motion } from "framer-motion";
import { PROJECTS } from "../shared/data";
import { ProjectCard } from "./project-card";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-t-[3px] border-black bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Portfolio
          </h2>
          <span className="border-[3px] border-black bg-[#ff5b1f] px-3 py-1 text-xs font-black uppercase shadow-[4px_4px_0_0_#000]">
            02 / Selected work
          </span>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
