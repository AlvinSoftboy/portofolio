import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, BRAND_NAME } from "../shared/data";
import { scrollToSection, useActiveSection } from "../shared/use-active-section";
import type { SectionId } from "../shared/types";

const SECTION_IDS: SectionId[] = NAV_ITEMS.map((item) => item.id);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const handleClick = (id: SectionId) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button
          onClick={() => handleClick("home")}
          className="text-2xl font-black tracking-tight"
          aria-label="Go to home"
        >
          {BRAND_NAME}
          <span className="text-[#ff5b1f]">.</span>
        </button>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`relative border-[3px] border-black px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                      isActive
                        ? "bg-[#ff5b1f] text-black shadow-[4px_4px_0_0_#000]"
                        : "bg-white text-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="border-[3px] border-black bg-white p-2 shadow-[4px_4px_0_0_#000] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t-[3px] border-black bg-white md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-2 p-4">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`w-full border-[3px] border-black px-4 py-3 text-left text-base font-bold uppercase ${
                        isActive ? "bg-[#ff5b1f]" : "bg-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
