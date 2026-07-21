import { motion } from 'framer-motion'
import { SKILLS } from '../data/constants.js'
import { SectionReveal, StaggerContainer, StaggerItem } from './AnimationWrappers.jsx'
import { FiCode } from 'react-icons/fi'

function SkillBar({ name, level }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-indigo-400 font-semibold">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(6,182,212,0.15)' }}>
              <FiCode className="text-cyan-400" size={20} />
            </div>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
              Technical Skills
            </p>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text-accent">Tech Stack</span>
          </h2>
          <p className="section-subtitle mt-3">
            A comprehensive toolkit spanning programming, web development, cloud, and design.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SKILLS.map((group) => (
            <StaggerItem key={group.category}>
              <div className="glass-card p-6 h-full">
                <h3 className="text-lg font-bold text-white mb-5"
                  style={{ fontFamily: 'var(--font-heading)' }}>
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
