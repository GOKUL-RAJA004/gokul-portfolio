import { motion } from 'framer-motion';
import { ExternalLink, Code2, Cpu } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0a101f] border border-[#1e2d4d]/80 hover:border-[#38bdf8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 rounded-2xl flex flex-col h-full overflow-hidden group"
    >
      {/* Project Thumbnail Area */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#070c18] border-b border-[#1e2d4d]/50">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-navy-900/60">
            <Code2 size={40} className="text-[#38bdf8]/40" />
          </div>
        )}
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2.5 group-hover:text-[#38bdf8] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack rounded pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium text-[#7dd3fc] bg-[#0c1c38] border border-[#1e3a6a]/70 hover:border-[#38bdf8]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 mt-5 border-t border-[#1e2d4d]/50">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#38bdf8] transition-colors"
              >
                <ExternalLink size={14} className="text-[#38bdf8]" />
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-purple-400 transition-colors"
              >
                <Github size={14} className="text-purple-400" />
                Source Code
              </a>
            )}
            {((!project.liveUrl || project.liveUrl === '#') && (!project.githubUrl || project.githubUrl === '#')) && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded">
                <Code2 size={13} />
                STATUS: CONCEPT / IN DEV
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const softwareProjects = siteConfig.projects.filter(
    (p) => p.category === 'Software Development & AI/ML Projects'
  );
  const iotProjects = siteConfig.projects.filter(
    (p) => p.category === 'IoT & Smart Technology Projects'
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[1px] w-12 bg-neon-cyan" />
              <p className="text-neon-cyan font-display font-semibold text-sm tracking-[0.2em] uppercase">
                Featured Systems
              </p>
              <div className="h-[1px] w-12 bg-neon-cyan" />
            </div>
            <h2 className="section-title">
              Project <span className="gradient-text-alt">Showcase</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>
        </ScrollReveal>

        {/* 1. Software Development & AI/ML Projects */}
        <div className="mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 text-xl sm:text-2xl font-display font-bold tracking-tight mb-8">
              <Code2 className="text-[#38bdf8] w-6 h-6 shrink-0" />
              <h3 className="text-white">
                Software Development & AI/ML <span className="text-[#38bdf8]">Projects</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareProjects.map((project) => (
              <ScrollReveal key={project.title}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 2. IoT & Smart Technology Projects */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 text-xl sm:text-2xl font-display font-bold tracking-tight mb-8">
              <Cpu className="text-[#38bdf8] w-6 h-6 shrink-0" />
              <h3 className="text-white">
                IoT & Smart Technology <span className="text-[#38bdf8]">Projects</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iotProjects.map((project) => (
              <ScrollReveal key={project.title}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
