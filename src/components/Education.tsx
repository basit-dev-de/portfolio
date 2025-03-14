
import React from "react";
import { GraduationCap, Award, Users, Clock } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-padding px-6 md:px-10 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
              data-aos="fade-up"
            >
              Education & Awards
            </div>
            <h2 
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Academic Background
            </h2>
            
            <div className="mt-8 space-y-8">
              <div className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-foreground/80">Islamia College University Peshawar</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-foreground/60">
                      <Clock size={14} />
                      <span>09/2016 - 09/2020</span>
                    </div>
                    <p className="mt-4 text-foreground/80">
                      I earned my degree with a 3.89 CGPA, and was honored as the Gold Medalist of my batch.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Gold Medal</h3>
                    <p className="text-foreground/80">Highest Academic Achievement</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-foreground/60">
                      <Clock size={14} />
                      <span>09/2016 - 09/2020</span>
                    </div>
                    <p className="mt-4 text-foreground/80">
                      Awarded the Gold Medal for achieving the highest CGPA in my graduating class at Islamia College University Peshawar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Languages</h3>
            
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <h4 className="text-lg font-semibold mb-4">English</h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">Full Professional Proficiency</p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-blue-500 w-[95%] rounded-full animate-slide-in-right" style={{ animationDelay: "0.7s" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <h4 className="text-lg font-semibold mb-4">German</h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">Elementary Proficiency</p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-blue-500 w-[30%] rounded-full animate-slide-in-right" style={{ animationDelay: "0.8s" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                <h4 className="text-lg font-semibold mb-4">Urdu</h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">Native or Bilingual Proficiency</p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-blue-500 w-[100%] rounded-full animate-slide-in-right" style={{ animationDelay: "0.9s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
