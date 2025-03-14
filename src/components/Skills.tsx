
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Frameworks & Libraries",
      skills: [
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "React", level: 5 },
        { name: "Next.js", level: 4 },
        { name: "Gatsby", level: 4 },
      ]
    },
    {
      name: "UI & Styling",
      skills: [
        { name: "Bootstrap", level: 5 },
        { name: "Tailwind", level: 5 },
        { name: "MUI", level: 4 },
        { name: "Ant", level: 4 },
        { name: "CSS-in-JS", level: 4 },
        { name: "Emotion CSS", level: 4 },
      ]
    },
    {
      name: "State Management & Data Fetching",
      skills: [
        { name: "Redux", level: 5 },
        { name: "Context API", level: 5 },
        { name: "RTK Query", level: 4 },
        { name: "React Query", level: 4 },
        { name: "Apollo Client", level: 3 },
      ]
    },
    {
      name: "Testing & Dev Tools",
      skills: [
        { name: "Jest", level: 4 },
        { name: "Cypress", level: 4 },
        { name: "React Testing Library", level: 4 },
        { name: "Storybook", level: 4 },
        { name: "Git", level: 5 },
        { name: "Linux", level: 4 },
      ]
    },
    {
      name: "Frontend Architecture",
      skills: [
        { name: "Modular Design", level: 5 },
        { name: "Component-Based Architecture", level: 5 },
        { name: "Design Patterns", level: 4 },
        { name: "Microfrontends", level: 4 },
      ]
    },
    {
      name: "Build & Performance Optimization",
      skills: [
        { name: "Webpack", level: 4 },
        { name: "Babel", level: 4 },
        { name: "Vite", level: 4 },
        { name: "Code Splitting", level: 4 },
        { name: "Lazy Loading", level: 5 },
        { name: "Web Vitals", level: 4 },
      ]
    },
  ];

  return (
    <section id="skills" className="section-padding px-6 md:px-10 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
            data-aos="fade-up"
          >
            My Expertise
          </div>
          <h2 
            className="section-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technical Skills
          </h2>
          <p 
            className="max-w-2xl mx-auto text-foreground/70"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            My technical toolkit has been refined over 6+ years of professional experience, focusing on frontend technologies and modern development practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="glass-card rounded-xl p-6 card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-foreground/60">
                        {["Beginner", "Basic", "Intermediate", "Advanced", "Expert"][skill.level - 1]}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full opacity-0 animate-slide-in-right" 
                        style={{ 
                          width: `${skill.level * 20}%`,
                          animationDelay: `${0.4 + categoryIndex * 0.1 + skillIndex * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
