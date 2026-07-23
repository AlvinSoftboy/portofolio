import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/features/navbar/navbar";
import { HomeSection } from "@/features/home/home-section";
import { AboutSection } from "@/features/about/about-section";
import { PortfolioSection } from "@/features/portfolio/portfolio-section";
import { ContactSection } from "@/features/contact/contact-section";
import { Footer } from "@/features/footer/footer";
import { SplashScreen } from "@/components/SplashScreen";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Poda Damanik — Freelance Full-stack Developer" },
      {
        name: "description",
        content:
          "Portfolio Poda Damanik, freelance Full-Stack Developer spesialis React, TypeScript, dan Tailwind CSS.",
      },
    ],
  }),
});

function Index() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!showSplash && (
        <div className="bg-white min-h-screen font-sans text-black antialiased">
          <Navbar />
          <main>
            <HomeSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
