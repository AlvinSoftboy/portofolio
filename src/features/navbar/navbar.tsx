import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, BRAND_NAME } from "@/constants";
import { scrollToSection, useActiveSection } from "@/hooks/use-active-section";
import type { SectionId } from "@/types";

const SECTION_IDS: SectionId[] = NAV_ITEMS.map((item) => item.id);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  const handleClick = (id: SectionId) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="top-0 z-50 sticky bg-[var(--nb-paper)] border-[var(--nb-ink)] border-b-[3px]">
      <div className="flex justify-between items-center mx-auto px-5 py-4 max-w-6xl">
        {/* Brand — ink text, accent dot */}
        <button
          onClick={() => handleClick("home")}
          className="font-black text-2xl tracking-tight text-[var(--nb-ink)]"
          aria-label="Go to home"
        >
          {BRAND_NAME}
          <span className="text-[var(--nb-accent)]">.</span>
        </button>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`relative border-[3px] border-[var(--nb-ink)] px-4 py-2 text-sm font-black uppercase tracking-wide transition-all ${
                      isActive
                        ? /* accent fill for the single active item */
                          "bg-[var(--nb-accent)] text-[var(--nb-ink)] shadow-[4px_4px_0_0_var(--nb-ink)]"
                        : /* highlight fill on hover — distinct from accent */
                          "bg-[var(--nb-paper)] text-[var(--nb-ink)] hover:bg-[var(--nb-highlight)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--nb-ink)]"
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden bg-[var(--nb-paper)] shadow-[4px_4px_0_0_var(--nb-ink)] p-2 border-[3px] border-[var(--nb-ink)]"
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
            className="md:hidden bg-[var(--nb-paper)] border-[var(--nb-ink)] border-t-[3px] overflow-hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-2 p-4">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`w-full border-[3px] border-[var(--nb-ink)] px-4 py-3 text-left text-base font-black uppercase ${
                        isActive
                          ? "bg-[var(--nb-accent)] text-[var(--nb-ink)]"
                          : "bg-[var(--nb-paper)] text-[var(--nb-ink)]"
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
