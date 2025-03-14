
import React from "react";
import { Code, Layout, User, Laptop } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Building scalable, responsive web applications using React, Next.js, TypeScript, and Redux."
    },
    {
      icon: <Layout size={24} />,
      title: "UI Components",
      description: "Creating reusable UI components with Bootstrap, Tailwind, MUI, and Ant CSS in JS libraries."
    },
    {
      icon: <User size={24} />,
      title: "User Experience",
      description: "Developing smooth, user-friendly interfaces that prioritize accessibility and performance."
    },
    {
      icon: <Laptop size={24} />,
      title: "Testing & Optimization",
      description: "Implementing comprehensive testing and performance optimization using Jest, Cypress, and various tools."
    }
  ];

  return (
    <section id="about" className="section-padding px-6 md:px-10 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-4">
              <div 
                className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                data-aos="fade-up"
              >
                About Me
              </div>
              <h2 
                className="section-heading"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Turning complex ideas into elegant interfaces
              </h2>
              <div 
                className="space-y-4 text-foreground/70"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>
                  I'm a Senior Frontend JavaScript developer with over 6 years of experience building reliable, scalable solutions. I thrive at the intersection of design and engineering—translating complex ideas into smooth, user-friendly interfaces using modern JavaScript, TypeScript, React, and related ecosystems.
                </p>
                <p>
                  Currently working at S&P Global since 2023, I develop scalable, responsive web applications using React, Next.js, TypeScript, Redux, and Storybook. I build reusable UI components ensuring cross-browser compatibility using Bootstrap, Tailwind, MUI, and CSS-in-JS libraries.
                </p>
                <p>
                  Previously, I worked at iPlex from 2019 to 2023 where I developed React-based applications focusing on performance, UX, and cross-platform compatibility. I created scalable, themable web applications for easy project replication.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-foreground/70 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
