import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { BrutalButton } from "../shared/brutal-button";
import { FULL_NAME } from "../shared/data";
import { scrollToSection } from "../shared/use-active-section";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-block border-[3px] border-black bg-[#ff5b1f] px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000]">
            Available for hire
          </span>

          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Hi, I&apos;m
            <br />
            <span className="bg-black px-3 text-white">{FULL_NAME}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-bold text-black sm:text-2xl">
            Freelance Frontend Developer
          </p>
          <p className="mt-4 max-w-2xl text-base text-neutral-700 sm:text-lg">
            Membangun antarmuka modern, responsif, dan cepat dengan React,
            TypeScript, dan Tailwind CSS.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <BrutalButton
              variant="primary"
              onClick={() => scrollToSection("contact")}
            >
              <Briefcase size={18} />
              Hire Me
            </BrutalButton>
            <BrutalButton
              variant="secondary"
              onClick={() => scrollToSection("portfolio")}
            >
              View Portfolio
              <ArrowRight size={18} />
            </BrutalButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
