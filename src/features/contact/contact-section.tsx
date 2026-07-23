import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";
import type { SocialLink } from "@/types";
import { ContactForm } from "./contact-form";

const ICON_MAP: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export const ContactSection = () => {
  return (
    <section
      id="contact"
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
            Contact
          </h2>
          {/* Badge: paper bg on surface section */}
          <span
            className="px-3 py-1 border-[3px] font-black text-xs uppercase shadow-[4px_4px_0_0_var(--nb-ink)]"
            style={{
              backgroundColor: "var(--nb-paper)",
              borderColor: "var(--nb-ink)",
              color: "var(--nb-ink)",
            }}
          >
            03 / Let&apos;s talk
          </span>
        </div>

        <div className="gap-12 grid md:grid-cols-2">
          <div>
            <p
              className="font-black text-2xl sm:text-3xl uppercase leading-tight"
              style={{ color: "var(--nb-ink)" }}
            >
              Got a project in mind? Let&apos;s build something bold together.
            </p>
            <p className="mt-4 text-base" style={{ color: "#4a4a46" }}>
              Reply biasanya dalam 24 jam. Untuk obrolan cepat, langsung saja kirim email atau DM.
            </p>

            <ul className="space-y-3 mt-8">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <li key={link.label}>
                    {/* Hover: highlight fill — distinct from accent, safe on surface bg */}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border-[3px] px-4 py-2 font-black uppercase shadow-[4px_4px_0_0_var(--nb-ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--nb-ink)]"
                      style={
                        {
                          backgroundColor: "var(--nb-paper)",
                          borderColor: "var(--nb-ink)",
                          color: "var(--nb-ink)",
                          "--hover-bg": "var(--nb-highlight)",
                        } as React.CSSProperties
                      }
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--nb-highlight)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "var(--nb-paper)")
                      }
                    >
                      <Icon size={18} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact form card: paper bg on surface section — stands out cleanly */}
          <div
            className="p-6 sm:p-8 border-[3px] shadow-[8px_8px_0_0_var(--nb-ink)]"
            style={{
              backgroundColor: "var(--nb-paper)",
              borderColor: "var(--nb-ink)",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
