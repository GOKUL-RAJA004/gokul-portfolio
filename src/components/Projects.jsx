import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { PROJECTS } from '../data/constants.js'
import { SectionReveal, StaggerContainer, StaggerItem } from './AnimationWrappers.jsx'
import { FiLayers } from 'react-icons/fi'

function ProjectCard({ title, description, tech, highlights, type, github, live }) {
  return (
    <motion.div
      className="glass-card overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient top accent */}
      <div className="h-1 w-full"
        style={{ background: 'var(--gradient-primary)' }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Badge + Title */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">
              {type}
            </span>
            <h3 className="text-xl font-bold text-white mt-1"
              style={{ fontFamily: 'var(--font-heading)' }}>
              {title}
            </h3>
          </div>
          <div className="flex gap-2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                aria-label={`View ${title} on GitHub`}>
                <FiGithub size={16} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                aria-label={`View live demo of ${title}`}>
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-5 flex-1">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-indigo-400 mt-1 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.15)' }}>
              <FiLayers className="text-violet-400" size={20} />
            </div>
            <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
              Projects
            </p>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mt-3">
            Real-world applications I've designed and developed — from AI navigation to smart agriculture platforms.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
