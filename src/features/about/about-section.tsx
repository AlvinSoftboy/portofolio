import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="border-t-[3px]"
      style={{
        backgroundColor: "var(--nb-surface)",
        borderColor: "var(--nb-ink)",
      }}
    >
      <div className="mx-auto px-5 py-24 max-w-6xl">
        <div className="flex justify-between items-end gap-4 mb-12">
          <h2
            className="font-black text-4xl sm:text-6xl uppercase tracking-tight"
            style={{ color: "var(--nb-ink)" }}
          >
            About
          </h2>
          {/* Badge: surface bg (distinct from section bg) + ink border */}
          <span
            className="px-3 py-1 border-[3px] font-black text-xs uppercase shadow-[4px_4px_0_0_var(--nb-ink)]"
            style={{
              backgroundColor: "var(--nb-paper)",
              borderColor: "var(--nb-ink)",
              color: "var(--nb-ink)",
            }}
          >
            01 / Profile
          </span>
        </div>

        <div className="gap-12 grid md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="font-medium text-lg sm:text-xl leading-relaxed" style={{ color: "#2a2a28" }}>
              Saya adalah freelance frontend developer dengan pengalaman membangun modern. Fokus
              modern. Fokus pada performa, aksesibilitas, dan code quality. Saya menikmati mengubah
              desain kompleks menjadi antarmuka yang clean dan mudah digunakan.
            </p>
            <p className="mt-6 text-base" style={{ color: "#4a4a46" }}>
              Saat ini saya terbuka untuk proyek freelance, kolaborasi, atau kerja remote part-time.
            </p>
          </div>

          <div className="md:col-span-2">
            {/* "Currently" box: accent fill — the one place accent is used as decoration here */}
            <div
              className="p-6 border-[3px] shadow-[8px_8px_0_0_var(--nb-ink)]"
              style={{
                backgroundColor: "var(--nb-accent)",
                borderColor: "var(--nb-ink)",
              }}
            >
              <p
                className="font-black text-sm uppercase tracking-widest"
                style={{ color: "var(--nb-ink)" }}
              >
                Currently
              </p>
              <p
                className="mt-2 font-black text-2xl uppercase leading-tight"
                style={{ color: "var(--nb-ink)" }}
              >
                Building products for the web.
              </p>
            </div>
          </div>
        </div>

        <h3
          className="mt-20 font-black text-2xl sm:text-3xl uppercase tracking-tight"
          style={{ color: "var(--nb-ink)" }}
        >
          Tech Stack
        </h3>

        <ul className="gap-5 grid sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {SKILLS.map((skill, idx) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 border-[3px] shadow-[6px_6px_0_0_var(--nb-ink)] hover:shadow-[10px_10px_0_0_var(--nb-ink)] transition-all hover:-translate-x-1 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--nb-paper)",
                borderColor: "var(--nb-ink)",
              }}
            >
              <p className="font-black text-xl uppercase" style={{ color: "var(--nb-ink)" }}>
                {skill.name}
              </p>
              <p className="mt-2 text-sm" style={{ color: "#4a4a46" }}>
                {skill.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
