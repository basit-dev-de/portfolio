
import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
}

export function Experience() {
  const [activeTab, setActiveTab] = useState<string>("sp-global");
  
  const jobs: Job[] = [
    {
      id: "sp-global",
      title: "Senior Engineer",
      company: "S&P Global",
      location: "Remote",
      type: "Full-time",
      period: "06/2023 - Present",
      description: "S&P Global provides market data, technology solutions, and financial insights to businesses and governments worldwide.",
      achievements: [
        "Develop scalable, responsive web applications using React, Next.js, TypeScript, Redux, and Storybook.",
        "Build reusable UI components and ensure cross-browser compatibility using Bootstrap, Tailwind, MUI, and CSS-in-JS.",
        "Implement state management with Redux, Context API & React Query for enhanced performance and accessibility.",
        "Lead Agile development with daily scrums, ensuring seamless collaboration across teams.",
        "Contribute to Capital IQ Pro, a premier financial intelligence platform, by developing scalable, modular frontends."
      ]
    },
    {
      id: "iplex",
      title: "Frontend Developer",
      company: "iPlex",
      location: "Islamabad",
      type: "Full-time",
      period: "01/2019 - 06/2023",
      description: "iPlex is a top-rated digital agency specializing in software development, web applications, and digital marketing for businesses in the U.S.",
      achievements: [
        "Developed and maintained React-based applications with a focus on performance, UX, and cross-platform compatibility.",
        "Created scalable, themable web applications for easy project replication.",
        "Conducted daily code reviews to ensure stability, performance, and adherence to Agile methodologies.",
        "Led frontend development for Al Habib Pharmacy E-commerce Platform using Next.js, TypeScript, and Tailwind CSS.",
        "Developed a centralized data management system for Salam Telecom DMS Portal for transactions, balance recharges, and user activity."
      ]
    }
  ];
  
  const selectedJob = jobs.find(job => job.id === activeTab);

  return (
    <section id="experience" className="section-padding px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
            data-aos="fade-up"
          >
            Work Experience
          </div>
          <h2 
            className="section-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Where I've Worked
          </h2>
          <p 
            className="max-w-2xl mx-auto text-foreground/70"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I've had the opportunity to work with some amazing companies. Here's a quick overview of my professional journey.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/4">
            <div className="sticky top-28">
              <div className="flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-none">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    className={cn(
                      "px-4 py-3 text-left rounded-lg transition-all whitespace-nowrap md:whitespace-normal",
                      activeTab === job.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-accent text-foreground/70 hover:text-foreground"
                    )}
                    onClick={() => setActiveTab(job.id)}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            {selectedJob && (
              <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div>
                  <h3 className="text-2xl font-bold">
                    {selectedJob.title} <span className="text-primary">@ {selectedJob.company}</span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{selectedJob.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80">
                  {selectedJob.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {selectedJob.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          •
                        </span>
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
