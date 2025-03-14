import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: "capital-iq-pro",
      title: "Capital IQ Pro",
      description:
        "Premier financial intelligence platform with modular frontend architecture, real-time market data, and interactive visualizations.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Redux", "TypeScript", "D3.js", "MUI"],
      link: "#",
    },
    {
      id: "al-habib-pharmacy",
      title: "Al Habib Pharmacy E-commerce",
      description:
        "Full-featured e-commerce platform for a pharmacy with product catalog, user accounts, and prescription management.",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Redux", "SEO"],
      link: "#",
    },
    {
      id: "salam-telecom",
      title: "Salam Telecom DMS Portal",
      description:
        "Centralized data management system for telecom transactions, balance recharges, and user activity tracking.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
      tags: ["React", "Context API", "Bootstrap", "Chart.js", "Redux"],
      link: "#",
    },
    {
      id: "market-data-dashboard",
      title: "Market Data Dashboard",
      description:
        "Real-time financial market data visualization dashboard with interactive charts and customizable widgets.",
      image:
        "https://images.unsplash.com/photo-1642790551116-18e150f248e5?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Recharts", "RTK Query", "TailwindCSS"],
      github: "#",
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio",
      description:
        "Responsive portfolio website with modern animations, interactions, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      github: "#",
      link: "#",
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker App",
      description:
        "Personal finance application with budgeting, expense categorization, and visualization features.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1926&auto=format&fit=crop",
      tags: ["React", "Firebase", "Context API", "Chart.js"],
      github: "#",
    },
  ];

  const [filter, setFilter] = useState<string>("all");

  const tags = ["all", ...new Set(projects.flatMap((project) => project.tags))];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="section-padding px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
            data-aos="fade-up"
          >
            Portfolio
          </div>
          <h2
            className="section-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Featured Projects
          </h2>
          <p
            className="max-w-2xl mx-auto text-foreground/70"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A selection of my recent work and personal projects showcasing my
            skills and experience.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex gap-2 flex-wrap justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap",
                  filter === tag
                    ? "bg-primary text-white"
                    : "bg-accent/50 hover:bg-accent/70 text-foreground/80"
                )}
                onClick={() => setFilter(tag)}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in-up border border-border"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 text-foreground hover:text-primary flex items-center justify-center backdrop-blur-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      title="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 text-foreground hover:text-primary flex items-center justify-center backdrop-blur-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
                      title="Visit website"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-accent/50 text-foreground/80 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
