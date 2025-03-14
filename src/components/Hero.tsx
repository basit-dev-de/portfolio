
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "/lovable-uploads/3143683f-9e7c-44b5-b548-4fbff8a941c6.png";

export function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; color: string; delay: number }>>([]);
  
  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      color: ['neon-pink', 'neon-blue', 'neon-green', 'neon-purple'][Math.floor(Math.random() * 4)],
      delay: Math.random() * 5
    }));
    
    setParticles(newParticles);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current || !containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      if (imageRef.current) {
        imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 px-6 md:px-10 overflow-hidden neon-gradient-bg"
    >
      {/* Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`particle bg-${particle.color}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.3 + Math.random() * 0.4
          }}
        />
      ))}
      
      {/* Neon circles */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-neon-purple/10 filter blur-[100px] animate-float-slow"></div>
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-neon-blue/10 filter blur-[100px] animate-float-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="font-heading text-lg md:text-xl font-medium text-neon-pink neon-text opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Hi there, I'm
                </h2>
                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up relative" style={{ animationDelay: "0.4s" }}>
                  Basit Ali
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-neon-pink animate-pulse-slow"></span>
                </h1>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-neon-blue neon-blue-text opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                  Senior Frontend Engineer
                </h3>
              </div>
              
              <p className="text-lg text-foreground/70 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                I'm a Senior Frontend JavaScript developer with 6+ years of experience building reliable, scalable solutions. I thrive at the intersection of design and engineering—translating complex ideas into smooth, user-friendly interfaces.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                <a href="#contact" className="btn-primary flex items-center gap-2">
                  Get in touch
                </a>
                <a href="#experience" className="btn-secondary flex items-center gap-2">
                  View my work
                </a>
              </div>
              
              <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-neon-pink transition-colors"
                >
                  <Github size={18} className="text-neon-pink" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/basit-ali-b61425354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-neon-blue transition-colors"
                >
                  <Linkedin size={18} className="text-neon-blue" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:basit.ali@toptal.com" 
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-neon-green transition-colors"
                >
                  <Mail size={18} className="text-neon-green" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-0 animate-scale-in" style={{ animationDelay: "0.8s" }}>
              {/* Rotating circle border */}
              <div className="absolute inset-0 border-2 border-dashed border-neon-pink rounded-full animate-rotate-slow opacity-40"></div>
              <div className="absolute inset-4 border-2 border-dashed border-neon-blue rounded-full animate-rotate-slow opacity-40" style={{ animationDirection: 'reverse', animationDelay: '2s' }}></div>
              
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 blur-3xl opacity-70 animate-pulse-slow"></div>
              
              <div 
                ref={imageRef}
                className="relative w-full h-full overflow-hidden rounded-full neon-border shadow-[0_0_30px_rgba(191,0,255,0.3)] transition-transform duration-200 ease-out"
              >
                <img 
                  src={profilePic} 
                  alt="Basit Ali" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm text-foreground/50 hover:text-neon-pink transition-colors animate-bounce-subtle group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            <span className="mb-2 group-hover:text-neon-pink transition-colors">Scroll down</span>
            <ArrowDown size={20} className="text-neon-pink" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
