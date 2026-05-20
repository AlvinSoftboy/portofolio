import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "../shared/data";
import type { SocialLink } from "../shared/types";
import { ContactForm } from "./contact-form";

const ICON_MAP: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export const ContactSection = () => {
  return (
    <section id="contact" className="border-t-[3px] border-black bg-neutral-100">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Contact
          </h2>
          <span className="border-[3px] border-black bg-white px-3 py-1 text-xs font-black uppercase shadow-[4px_4px_0_0_#000]">
            03 / Let&apos;s talk
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-2xl font-black uppercase leading-tight sm:text-3xl">
              Got a project in mind? Let&apos;s build something bold together.
            </p>
            <p className="mt-4 text-base text-neutral-700">
              Reply biasanya dalam 24 jam. Untuk obrolan cepat, langsung saja
              kirim email atau DM.
            </p>

            <ul className="mt-8 space-y-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border-[3px] border-black bg-white px-4 py-2 font-bold uppercase shadow-[4px_4px_0_0_#000] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ff5b1f] hover:shadow-[6px_6px_0_0_#000]"
                    >
                      <Icon size={18} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
