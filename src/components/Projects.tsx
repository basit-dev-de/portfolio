import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      id: 'capital-iq-pro',
      title: 'Capital IQ Pro',
      description:
        'Premier financial intelligence platform with modular frontend architecture, real-time market data, and interactive visualizations.',
      image: '/images/capital-iq-pro.png',
      tags: [
        'React',
        'Redux',
        'JavaScript',
        'TypeScript',
        'CSS-in-JS',
        'Bootstrap',
        'React Query',
        'Apollo Client',
        'Microfrontends',
        'Jest',
        'Cypress',
        'Storybook',
        'Docker',
      ],
      link: 'https://www.spglobal.com/market-intelligence/en/solutions/products/sp-capital-iq-pro',
    },
    {
      id: 'al-habib-pharmacy',
      title: 'Al Habib Pharmacy E-commerce',
      description:
        'Full-featured e-commerce platform for a pharmacy with product catalog, user accounts, and prescription management.',
      image: '/images/epharmacy.png',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'SEO'],
      link: 'https://alhabibpharmacy.com/',
    },
    {
      id: 'salam-telecom-dms',
      title: 'Salam Telecom DMS Portal',
      description:
        'Centralized data management system for telecom transactions, balance recharges, and user activity tracking.',
      image: '/images/salam-dms-portal.jpeg',
      tags: ['React', 'Context API', 'Bootstrap', 'Chart.js', 'Redux'],
      link: 'https://salammobile.sa/en/',
    },
    {
      id: 'market-data-dashboard',
      title: 'Market Data Dashboard',
      description:
        'Real-time financial market data visualization dashboard with interactive charts and customizable widgets.',
      image: '/images/market-data.png',
      tags: ['React', 'TypeScript', 'Recharts', 'RTK Query', 'TailwindCSS'],
      github: 'https://github.com/basit-dev-de/market-dashboard',
      link: 'https://basit-dev-de.github.io/market-dashboard/',
    },
    {
      id: 'personal-website',
      title: 'Personal Portfolio',
      description:
        'Responsive portfolio website with modern animations, interactions, and optimized performance.',
      image: '/images/portfolio-1.png',
      tags: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/basit-dev-de/portfolio',
      link: 'https://basit-dev.com',
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker App',
      description:
        'Personal finance application with budgeting, expense categorization, and visualization features.',
      image: '/images/expense-tracker.png',
      tags: ['React', 'Firebase', 'Context API', 'Chart.js'],
      github: 'https://github.com/basit-dev-de/expense-tracker',
      link: 'https://basit-dev-de.github.io/expense-tracker/',
    },
    {
      id: 'salam-telecom-dashboard',
      title: 'SALAM Telecom Dashboard',
      description:
        'A real-time dashboard displaying SIM activation data through dynamic tables and interactive map plotting.',
      image: '/images/salam-dashboard.jpeg',
      tags: [
        'React',
        'Redux',
        'Context API',
        'Chart.js',
        'Material UI',
        'RTK Query',
      ],
      link: 'https://salam.sa/en/personal',
    },
    {
      id: 'personal-website-2',
      title: 'Personal Portfolio 2',
      description:
        'Responsive portfolio website with modern animations, interactions, and optimized performance.',
      image: '/images/portfolio-2.png',
      tags: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/basit-dev-de/portfolio-2',
      link: 'https://basit-dev-de.github.io/portfolio-2/',
    },
    {
      id: 'job-copilot',
      title: 'Job Copilot',
      description:
        "The Job Copilot is an intelligent job application assistant that helps you track, manage, and automate your job search. Whether you're applying to multiple positions or following up on leads, this tool keeps everything organized in one place.",
      image: '/images/job-copilot.png',
      tags: ['React', 'Vite', 'TailwindCSS', 'Typescript', 'SWR', 'RSS Feed'],
      github: 'https://github.com/basit-dev-de/job-copilot',
      link: 'https://basit-dev-de.github.io/job-copilot/',
    },
    {
      id: 'quantum',
      title: 'Quantum Trading Platform',
      description:
        'A fintech trading platform featuring real-time data visualization, WebSockets, and machine learning integrations.',
      image: '/images/quantum.png',
      tags: [
        'React',
        'Vite',
        'TailwindCSS',
        'Typescript',
        'React Query',
        'Chart.js',
        'REST APIs',
        'Apollo Client',
        'GitHub Actions',
      ],
      github: 'https://github.com/basit-dev-de/quantum-trading-platform',
      link: 'https://basit-dev-de.github.io/quantum-trading-platform/',
    },
    {
      id: 'smart-home',
      title: 'Smart Home Automation',
      description:
        'The Smart Home Automation platform enables users to control and monitor their smart home devices effortlessly. With real-time updates, scheduling automation, and voice assistant integration, it provides a seamless and intelligent home management experience.',
      image: '/images/smart-home.png',
      tags: [
        'React',
        'Vite',
        'TailwindCSS',
        'Typescript',
        'React Query',
        'Alexa',
        'Jest',
        'Chart.js',
        'WebSockets',
        'GitHub Actions',
      ],
      github: 'https://github.com/basit-dev-de/smart-home-automation',
      link: 'https://basit-dev-de.github.io/smart-home-automation/',
    },
    {
      id: 'talent-matrix',
      title: 'Talent Matrix',
      description:
        "Talent Matrix is a modern HR job posting and application tracking system designed to simplify recruitment workflows. Whether you're an HR professional, hiring manager, or recruiter, Talent Matrix streamlines job postings, tracks applications, and enhances hiring efficiency with a user-friendly interface.",
      image: '/images/talent-matrix.png',
      tags: [
        'React',
        'Vite',
        'TailwindCSS',
        'Typescript',
        'React Query',
        'Lucide Icons',
        'Jest',
        'React Hook Form',
        'GitHub Actions',
      ],
      github: 'https://github.com/basit-dev-de/talent-matrix',
      link: 'https://basit-dev-de.github.io/talent-matrix/',
    },
    {
      id: 'impact-cv',
      title: 'Impact CV',
      description:
        "ImpactCV is a modern, intuitive, and user-friendly web application designed to empower you to create professional and impactful resumes (CVs) with ease. Whether you're just starting your career or looking to make a change, ImpactCV provides the tools and flexibility you need to showcase your skills and experience effectively.",
      image: '/images/impact-cv.png',
      tags: [
        'React',
        'Vite',
        'TailwindCSS',
        'Typescript',
        'Lucide Icons',
        'Jest',
        'Radix UI',
        'GitHub Actions',
        'OpenAI API',
      ],
      github: 'https://github.com/basit-dev-de/impact-cv',
      link: 'https://asfand-dev.github.io/impact-cv/',
    },
  ];

  const [filter, setFilter] = useState<string>('all');

  const tags = ['all', ...new Set(projects.flatMap((project) => project.tags))];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id='projects' className='section-padding px-6 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <div
            className='inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium'
            data-aos='fade-up'
          >
            {t('projects.title')}
          </div>
          <h2
            className='section-heading'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            {t('projects.subtitle')}
          </h2>
          <p
            className='max-w-2xl mx-auto text-foreground/70'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {t('projects.description')}
          </p>
        </div>

        <div className='flex justify-center mb-10 overflow-x-auto pb-4 scrollbar-none'>
          <div className='flex gap-2 flex-wrap justify-center'>
            {tags.map((tag) => (
              <button
                key={tag}
                className={cn(
                  'px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap',
                  filter === tag
                    ? 'bg-primary text-white'
                    : 'bg-accent/50 hover:bg-accent/70 text-foreground/80'
                )}
                onClick={() => setFilter(tag)}
              >
                {tag === 'all'
                  ? t('common.all')
                  : tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className='group bg-white/5 rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in-up border border-border'
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className='h-56 overflow-hidden relative'>
                <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10'></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute top-4 right-4 flex gap-2 z-20'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 rounded-full bg-white/90 text-foreground hover:text-primary flex items-center justify-center backdrop-blur-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'
                      title='View on GitHub'
                    >
                      <Github color='black' size={16} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 rounded-full bg-white/90 text-foreground hover:text-primary flex items-center justify-center backdrop-blur-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75'
                      title='Visit website'
                    >
                      <ExternalLink color='black' size={16} />
                    </a>
                  )}
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>
                  {t(`projects.${project.id}.title`)}
                </h3>
                <p className='text-foreground/70 text-sm mb-4'>
                  {t(`projects.${project.id}.description`)}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2.5 py-1 bg-accent/50 text-foreground/80 rounded-full text-xs font-medium'
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
