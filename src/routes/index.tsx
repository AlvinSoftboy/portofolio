import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../features/navbar/navbar";
import { HomeSection } from "../features/home/home-section";
import { AboutSection } from "../features/about/about-section";
import { PortfolioSection } from "../features/portfolio/portfolio-section";
import { ContactSection } from "../features/contact/contact-section";
import { Footer } from "../features/footer/footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Pratama — Freelance Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio Alex Pratama, freelance frontend developer spesialis React, TypeScript, dan Tailwind CSS.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
