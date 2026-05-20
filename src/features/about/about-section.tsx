import { motion } from "framer-motion";
import { SKILLS } from "../shared/data";

export const AboutSection = () => {
  return (
    <section id="about" className="border-t-[3px] border-black bg-neutral-100">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            About
          </h2>
          <span className="border-[3px] border-black bg-white px-3 py-1 text-xs font-black uppercase shadow-[4px_4px_0_0_#000]">
            01 / Profile
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
              Saya adalah freelance frontend developer dengan pengalaman membangun
              aplikasi web modern. Fokus pada performa, aksesibilitas, dan code
              quality. Saya menikmati mengubah desain kompleks menjadi
              antarmuka yang clean dan mudah digunakan.
            </p>
            <p className="mt-6 text-base text-neutral-700">
              Saat ini saya terbuka untuk proyek freelance, kolaborasi, atau
              kerja remote part-time.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="border-[3px] border-black bg-[#ff5b1f] p-6 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-black uppercase tracking-widest">
                Currently
              </p>
              <p className="mt-2 text-2xl font-black uppercase leading-tight">
                Building products for the web.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-20 text-2xl font-black uppercase tracking-tight sm:text-3xl">
          Tech Stack
        </h3>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, idx) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000]"
            >
              <p className="text-xl font-black uppercase">{skill.name}</p>
              <p className="mt-2 text-sm text-neutral-700">
                {skill.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
