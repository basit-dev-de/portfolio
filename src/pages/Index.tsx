import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');

      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Create particles in the background
    const createParticles = () => {
      const particleContainer = document.createElement("div");
      particleContainer.className = "fixed inset-0 pointer-events-none z-0";
      document.body.appendChild(particleContainer);

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        const size = Math.random() * 6 + 1;
        const colors = [
          "neon-pink",
          "neon-blue",
          "neon-green",
          "neon-purple",
          "neon-yellow",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.className = `particle bg-${color}`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${0.2 + Math.random() * 0.3}`;
        particle.style.animationDelay = `${Math.random() * 10}s`;

        particleContainer.appendChild(particle);
      }
    };

    createParticles();

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
