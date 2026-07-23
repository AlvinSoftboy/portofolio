import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "./project-card";

export const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="border-t-[3px]"
      style={{
        backgroundColor: "var(--nb-paper)",
        borderColor: "var(--nb-ink)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2
            className="text-4xl font-black uppercase tracking-tight sm:text-6xl"
            style={{ color: "var(--nb-ink)" }}
          >
            Portfolio
          </h2>
          {/* Badge: highlight (yellow) — decorative label */}
          <span
            className="px-3 py-1 border-[3px] text-xs font-black uppercase shadow-[4px_4px_0_0_var(--nb-ink)]"
            style={{
              backgroundColor: "var(--nb-highlight)",
              borderColor: "var(--nb-ink)",
              color: "var(--nb-ink)",
            }}
          >
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
