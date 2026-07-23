import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { BrutalButton } from "@/components/brutal-button";
import { FULL_NAME } from "@/constants";
import { scrollToSection } from "@/hooks/use-active-section";
import { Typewriter } from "@/components/Typewriter";
import { useState } from "react";

export const HomeSection = () => {
  const [showName, setShowName] = useState(false);

  return (
    <section id="home" className="relative flex items-center bg-white min-h-screen">
      <div className="mx-auto px-5 py-24 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-block bg-[#ff5b1f] shadow-[4px_4px_0_0_#000] px-3 py-1 border-[3px] border-black font-black text-xs uppercase tracking-widest">
            Available for hire
          </span>

          <h1 className="mt-6 font-black text-5xl sm:text-7xl md:text-8xl uppercase leading-[0.95] tracking-tight">
            <span className="block">
              <Typewriter text="Hi, I'm" speed={80} onComplete={() => setShowName(true)} />
            </span>
            {showName && (
              <span className="block mt-2">
                <Typewriter
                  text={FULL_NAME}
                  speed={80}
                  deleteSpeed={50}
                  loop={true}
                  delayAfterType={2000}
                  className="text-black"
                />
              </span>
            )}
          </h1>

          <p className="mt-8 max-w-2xl font-bold text-black text-xl sm:text-2xl">
            Freelance Frontend Developer
          </p>
          <p className="mt-4 max-w-2xl text-neutral-700 text-base sm:text-lg">
            Membangun antarmuka modern, responsif, dan cepat dengan React, TypeScript, dan Tailwind
            CSS.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <BrutalButton variant="primary" onClick={() => scrollToSection("contact")}>
              <Briefcase size={18} />
              Hire Me
            </BrutalButton>
            <BrutalButton variant="secondary" onClick={() => scrollToSection("portfolio")}>
              View Portfolio
              <ArrowRight size={18} />
            </BrutalButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
