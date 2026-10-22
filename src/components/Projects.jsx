import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

const categoryColors = {
  'Software Development & AI/ML Projects': { 
    border: 'border-neon-cyan/30', 
    tag: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20', 
    hover: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:border-neon-cyan/60' 
  },
  'IoT & Smart Technology Projects': { 
    border: 'border-neon-purple/30', 
    tag: 'text-neon-purple bg-neon-purple/10 border-neon-purple/20', 
    hover: 'group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)] group-hover:border-neon-purple/60' 
  },
  'AI / ML': { border: 'border-neon-cyan/30', tag: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20', hover: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:border-neon-cyan/60' },
  'Full-Stack': { border: 'border-neon-purple/30', tag: 'text-neon-purple bg-neon-purple/10 border-neon-purple/20', hover: 'group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)] group-hover:border-neon-purple/60' },
  'UI/UX Design': { border: 'border-neon-magenta/30', tag: 'text-neon-magenta bg-neon-magenta/10 border-neon-magenta/20', hover: 'group-hover:shadow-[0_0_30px_rgba(219,39,119,0.2)] group-hover:border-neon-magenta/60' },
};

const ProjectCard = ({ project, index }) => {
  const colors = categoryColors[project.category] || categoryColors['Software Development & AI/ML Projects'];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`cyber-glass overflow-hidden group border ${colors.border} ${colors.hover} transition-all duration-500 h-full flex flex-col rounded-xl`}
    >
      {/* Futuristic Image / Grid Overlay Area */}
      <div className="relative h-48 bg-navy-900 overflow-hidden border-b border-white/5">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-900/10 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
          </>
        ) : (
          <>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20"
                 style={{
                   backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                   backgroundSize: '20px 20px',
                 }}
            />
            {/* Glowing orb behind project index */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="absolute w-32 h-32 rounded-full bg-neon-purple/20 blur-2xl group-hover:bg-neon-cyan/30 transition-colors duration-500" />
               <div className="text-5xl font-display font-black text-white/5 group-hover:text-white/10 transition-colors z-10 tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
               </div>
            </div>
          </>
        )}
        
        {/* Scanline overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:animate-scan z-20 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-black/20 to-transparent">
        {/* Category tag */}
        <span className={`inline-block w-fit px-3 py-1 rounded border text-xs font-mono font-semibold mb-4 tracking-wide ${colors.tag}`}>
          {project.category}
        </span>

        <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-gray-400 border border-white/10 shadow-[inset_0_0_5px_rgba(255,255,255,0.02)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          {project.liveUrl && project.liveUrl !== '#' && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-neon-cyan transition-colors"
            >
              <ExternalLink size={16} className="text-neon-cyan" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-neon-purple transition-colors"
            >
              <Github size={16} className="text-neon-purple" />
              Source Code
            </motion.a>
          )}
          {((!project.liveUrl || project.liveUrl === '#') && (!project.githubUrl || project.githubUrl === '#')) && (
            <span className="flex items-center gap-1.5 text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded">
              <Code2 size={14} />
              STATUS: CONCEPT / IN DEV
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Software Development & AI/ML Projects', 'IoT & Smart Technology Projects'];

  const filteredProjects = activeCategory === 'All'
    ? siteConfig.projects
    : siteConfig.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-10 text-center">
             <h2 className="section-title">
              Featured <span className="gradient-text-alt">Systems</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] font-bold'
                    : 'cyber-glass text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
