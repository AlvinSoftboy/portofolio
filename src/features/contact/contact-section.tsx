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
    <section id="contact" className="bg-neutral-100 border-black border-t-[3px]">
      <div className="mx-auto px-5 py-24 max-w-6xl">
        <div className="flex justify-between items-end gap-4 mb-12">
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tight">Contact</h2>
          <span className="bg-white shadow-[4px_4px_0_0_#000] px-3 py-1 border-[3px] border-black font-black text-xs uppercase">
            03 / Let&apos;s talk
          </span>
        </div>

        <div className="gap-12 grid md:grid-cols-2">
          <div>
            <p className="font-black text-2xl sm:text-3xl uppercase leading-tight">
              Got a project in mind? Let&apos;s build something bold together.
            </p>
            <p className="mt-4 text-neutral-700 text-base">
              Reply biasanya dalam 24 jam. Untuk obrolan cepat, langsung saja kirim email atau DM.
            </p>

            <ul className="space-y-3 mt-8">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white hover:bg-[#ff5b1f] shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] px-4 py-2 border-[3px] border-black font-bold uppercase transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
                    >
                      <Icon size={18} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white shadow-[8px_8px_0_0_#000] p-6 sm:p-8 border-[3px] border-black">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
