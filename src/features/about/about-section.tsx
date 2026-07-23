import { motion } from "framer-motion";
import { SKILLS } from "@/constants";

export const AboutSection = () => {
  return (
    <section id="about" className="bg-neutral-100 border-black border-t-[3px]">
      <div className="mx-auto px-5 py-24 max-w-6xl">
        <div className="flex justify-between items-end gap-4 mb-12">
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tight">About</h2>
          <span className="bg-white shadow-[4px_4px_0_0_#000] px-3 py-1 border-[3px] border-black font-black text-xs uppercase">
            01 / Profile
          </span>
        </div>

        <div className="gap-12 grid md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="font-medium text-neutral-800 text-lg sm:text-xl leading-relaxed">
              Saya adalah freelance frontend developer dengan pengalaman membangun modern. Fokus
              modern. Fokus pada performa, aksesibilitas, dan code quality. Saya menikmati mengubah
              desain kompleks menjadi antarmuka yang clean dan mudah digunakan.
            </p>
            <p className="mt-6 text-neutral-700 text-base">
              Saat ini saya terbuka untuk proyek freelance, kolaborasi, atau kerja remote part-time.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="bg-[#ff5b1f] shadow-[8px_8px_0_0_#000] p-6 border-[3px] border-black">
              <p className="font-black text-sm uppercase tracking-widest">Currently</p>
              <p className="mt-2 font-black text-2xl uppercase leading-tight">
                Building products for the web.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-20 font-black text-2xl sm:text-3xl uppercase tracking-tight">
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
              className="bg-white shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] p-6 border-[3px] border-black transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <p className="font-black text-xl uppercase">{skill.name}</p>
              <p className="mt-2 text-neutral-700 text-sm">{skill.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
